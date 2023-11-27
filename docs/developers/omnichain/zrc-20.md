---
sidebar_label: ZRC-20 Tokens
hide_title: true
title: ZRC-20 Tokens
sidebar_position: 3
---

import ForeignCoinsTable from "@site/src/components/ForeignCoins/ForeignCoins";

# ZRC-20

ZRC-20 is a token standard integrated into ZetaChain's omnichain smart contract
platform. With ZRC-20, developers can build dApps that orchestrate native assets
on any connected chain. This makes building Omnichain DeFi protocols and dApps
such as Omnichain DEXs, Omnichain Lending, Omnichain Portfolio Management, and
anything else that involves fungible tokens on multiple chains from a single
place extremely simple — as if they were all on a single chain.

![zeta-evm](/img/graphs/zrc-20-header.svg)

## Supported Assets

I list of currently supported assets is stored on-chain:

<ForeignCoinsTable />

New assets can be added or removed by broadcasting a transaction with a
corresponding message of the
[`fungible` module](http://localhost:3001/architecture/modules/fungible/messages/)
on ZetaChain.

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

The `withdraw` function can be called by any Externally Owned Account (EOA) or a
smart contract. This function is like `transfer()`, except that the amount is
burned, and leaves a `Withdrawal()` event. This event will trigger a CCTX in
`zetacore` module, which the `zetaclient` will pick up and process the outbound
tx. In this example, it uses an existing Uniswap deployment with a pool for 2
given tokens. When `onCrossChainCall` is called, it performs a swap to a target
ZRC-20 token and withdraws it to an address on a native chain.

Check out the [Swap tutorial](/developers/omnichain/tutorials/swap) to see how
to deposit tokens (like tMATIC), swap them to another token (like gETH) using
the internal liquidity pools on ZetaChain, and withdraw them to their native
chain (like Goerli).

## Building on ZRC-20

With ZRC-20, developers have the power to build seamless, omnichain applications
while also leveraging the entire EVM ecosystem to-date and plethora of
contracts/protocols to build on top of. To start building with ZRC-20, check out
some examples in the [tutorials section](/developers/omnichain/tutorials/hello).
