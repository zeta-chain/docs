---
sidebar_label: ZRC-20 Tokens
hide_title: true
title: ZRC-20 Tokens
sidebar_position: 3
---

# ZRC-20

ZRC-20 is a token standard integrated into ZetaChain's omnichain smart contract
platform. With ZRC-20, developers can build dApps that orchestrate native assets
on any connected chain. This makes building Omnichain DeFi protocols and dApps
such as Omnichain DEXs, Omnichain Lending, Omnichain Portfolio Management, and
anything else that involves fungible tokens on multiple chains from a single
place extremely simple — as if they were all on a single chain.

![zeta-evm](/img/graphs/zrc-20-header.svg)

## Introduction

At a high-level, ZRC-20 tokens are an extension of the standard
[ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
tokens found in the Ethereum ecosystem, ZRC-20 tokens have the added ability to
manage assets on all ZetaChain-connected chains. Any fungible token, including
Bitcoin, Dogecoin, ERC-20-equivalents on other chains, gas assets on other
chains, and so on, may be represented on ZetaChain as a ZRC-20 and orchestrated
as if it were any other fungible token (like an ERC-20).

## Interface

ZRC-20 is based on ERC-20, with three additional functions and some associated
events for integration with Cross-Chain Transactions (CCTXs) in ZetaChain.

```solidity reference title="IZRC20.sol"
https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/interfaces/IZRC20.sol
```

Comparing ZRC-20 to ERC-20, there are additional external functions to deposit
and withdraw, and additional events for each of them. This makes ZRC-20
completely compatible with any applications built for ERC-20s, but with an
extremely simple interface to also function in an omnichain way.

### `deposit`

When a user sends/deposits assets to the ZetaChain TSS address
([Testnet](/reference/testnet), [Mainnet](/reference/mainnet)) on a connected
chain, `deposit` is called by `zetacore` and made available to the address that
deposited. If there is data on the TX `message`, the system contract
`DepositAndCall` is called, forwarding that data in a call to `onCrossChainCall`
on the target zEVM contract. The `deposit` and `DepositAndCall` functions are
only callable by the CCTX module (`zetacore` module) address.

This is a snippet of what the system contract looks like, where `DepositAndCall`
may be called by `zetacore` after receiving a deposit into a TSS address
([Testnet](/reference/testnet), [Mainnet](/reference/mainnet)) managed by the
ZetaChain network.

```solidity
contract SystemContract is SystemContractErrors {
    address public constant FUNGIBLE_MODULE_ADDRESS = 0x735b14BB79463307AAcBED86DAf3322B1e6226aB;
    // ...
    function depositAndCall(Context calldata context, address zrc20, uint256 amount, address target, bytes calldata message) external {
        if (msg.sender != FUNGIBLE_MODULE_ADDRESS) revert CallerIsNotFungibleModule();
        if (target == FUNGIBLE_MODULE_ADDRESS || target == address(this)) revert InvalidTarget();
        IZRC20(zrc20).deposit(target, amount);
        zContract(target).onCrossChainCall(context, zrc20, amount, message);
    }
```

A contract that implements this interface may be called by a ZRC-20 deposit
call.

```solidity reference title="zContract.sol"
https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/interfaces/zContract.sol
```

### How to deposit and call zEVM contracts from a smart contract chain

This is an example calling from an Ethereum chain to send a transaction to the
ZetaChain's testnet TSS address in order to `deposit`.

```ts
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseEther } from "@ethersproject/units";
import { getAddress } from "@zetachain/protocol-contracts";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();

  const to = getAddress("tss", hre.network.name as any);
  const value = parseEther(args.amount);

  const tx = await signer.sendTransaction({ to, value });

  console.log(`Transaction hash: ${tx.hash}`);
};

task("send", "Send tokens to a TSS address", main).addParam(
  "amount",
  "Amount to send to the recipient"
);
```

If you instead wanted to do a `DepositAndCall`, you can do a similar pattern but
include data in the deposit call. This example demonstrates calling a `swap`
contract that exists on the zEVM.

```jsx title="TestDepositAndCall.js"
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseEther } from "@ethersproject/units";
import { getAddress } from "@zetachain/protocol-contracts";
import { BigNumber } from "@ethersproject/bignumber";
import { prepareData } from "@zetachain/toolkit/helpers";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();
  console.log(`🔑 Using account: ${signer.address}\n`);

  const destinationToken = getAddress("zrc20", args.destination);
  const data = prepareData(
    args.contract,
    ["address", "bytes32", "uint256"],
    [destinationToken, args.recipient || signer.address, BigNumber.from("0")]
  );
  const to = getAddress("tss", hre.network.name as any);
  const value = parseEther(args.amount);
  const tx = await signer.sendTransaction({ data, to, value });
  console.log(`Transaction hash: ${tx.hash}`);
};

task("swap", "Swap tokens", main)
  .addOptionalParam("recipient", "Address of the recipient, defaults to signer")
  .addParam("contract", "Address of the swap contract on ZetaChain")
  .addParam("amount", "Amount to send to the recipient")
  .addParam("destination", "Destination network, like 'goerli_testnet'");
```

Source:
https://github.com/zeta-chain/example-contracts/blob/main/omnichain/swap/tasks/swap.ts

Supported assets include ZETA, native gas tokens on all connected chains
including Bitcoin as well as ERC20 tokens. ERC20 tokens must be whitelisted by
the ZetaChain network in order to allow zEVM to interact with them.

### `withdraw`

The `withdraw` function can be called by any Externally Owned Account (EOA) or
smart contract. This function is like transfer(), except that the amount is
burned, and leaves a Withdrawal() event. This event will trigger a CCTX in
`zetacore` module, which the `zetaclient` will pick up and process the outbound
tx. In this example, it uses an existing Uniswap deployment with a pool for 2
given tokens. When `onCrossChainCall` is called, it performs a swap to a target
ZRC-20 token and withdraws it to an address on a native chain.

```solidity title="TestSwap.sol"
contract ZEVMSwapApp is zContract {
    error InvalidSender();
    error LowAmount();

    uint256 private constant _DEADLINE = 1 << 64;
    address public immutable router02;
    address public immutable systemContract;

    constructor(address router02_, address systemContract_) {
        router02 = router02_;
        systemContract = systemContract_;
    }

    function encodeMemo(
        address targetZRC20,
        bytes calldata recipient
    ) external pure returns (bytes memory) {
        return abi.encodePacked(targetZRC20, recipient);
    }

    // data
    function decodeMemo(
        bytes calldata data
    ) public pure returns (address, bytes memory) {
        bytes memory decodedBytes;
        uint256 size;
        size = data.length;
        address addr;
        addr = address(uint160(bytes20(data[0:20])));
        decodedBytes = data[20:];

        return (addr, decodedBytes);
    }

    // Call this function to perform a cross-chain swap
    function onCrossChainCall(
        Context calldata,
        address zrc20,
        uint256 amount,
        bytes calldata message
    ) external override {
        if (msg.sender != systemContract) {
            revert InvalidSender();
        }
        address targetZRC20;
        bytes memory recipient;
        (targetZRC20, recipient) = decodeMemo(message);
        address[] memory path;
        path = new address[](2);
        path[0] = zrc20;
        path[1] = targetZRC20;
        // Approve the usage of this token by router02
        IZRC20(zrc20).approve(address(router02), amount);
        // Swap for your target token
        uint256[] memory amounts = IUniswapV2Router02(router02)
            .swapExactTokensForTokens(
                amount,
                0,
                path,
                address(this),
                _DEADLINE
            );

        // this contract subsides withdraw gas fee
        (address gasZRC20Addr, uint256 gasFee) = IZRC20(targetZRC20)
            .withdrawGasFee();
        IZRC20(gasZRC20Addr).approve(address(targetZRC20), gasFee);
        IZRC20(targetZRC20).approve(address(targetZRC20), amounts[1]); // this does not seem to be necessary
        IZRC20(targetZRC20).withdraw(recipient, amounts[1] - gasFee);
    }
}
```

Note how simple this example is. With ~20 lines of code — much of which is
generic code — one is able to create a cross-chain swap dApp where users can
trade native assets for other native assets. `withdraw` may be used in any
situation where a user needs to get assets back onto one's native wallet, while
`deposit` from above allows you to deposit and orchestrate any assets via zEVM
smart contract calls. Together, these simple functions unlock powerful yet
simple solutions for omnichain application building.

## Building on ZRC-20

With ZRC-20, developers have the power to build seamless, omnichain applications
while also leveraging the entire EVM ecosystem to-date and plethora of
contracts/protocols to build on top of. To start building with ZRC-20, check out
some examples in the
[tutorials section](/developers/omnichain/tutorials/withdraw).
