---
sidebar_position: 4
---

# Swap

## Overview

In this tutorial you will write a cross-chain swap contract that allows users to
transfer native tokens from one of the connected chains to ZetaChain, swap them
for a ZRC-20 representation of a token on another chain, and withdraw the tokens
to the recipient address on the target chain.

## Set Up Your Environment

Clone the Hardhat contract template:

```
git clone https://github.com/zeta-chain/template
```

Install dependencies:

```
cd template
yarn
```

## Create the contract

Run the following command to create a new omnichain contract called `Swap`.

```
npx hardhat omnichain Swap
```

## Omnichain Contract

```solidity title="contracts/Swap.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";
// highlight-start
import "@zetachain/toolkit/contracts/SwapHelperLib.sol";
import "@zetachain/toolkit/contracts/BytesHelperLib.sol";
// highlight-end

contract Swap is zContract {
    SystemContract public immutable systemContract;
    // highlight-start
    uint256 constant BITCOIN = 18332;
    error WrongGasContract();
    error NotEnoughToPayGasFee();
    // highlight-end

    constructor(address systemContractAddress) {
        systemContract = SystemContract(systemContractAddress);
    }

    modifier onlySystem() {
        require(
            msg.sender == address(systemContract),
            "Only system contract can call this function"
        );
        _;
    }

    function onCrossChainCall(
        zContext calldata context,
        address zrc20,
        uint256 amount,
        bytes calldata message
    ) external virtual override onlySystem {
        // highlight-start
        uint32 targetChainID;
        address recipient;
        uint256 minAmountOut;

        if (context.chainID == BITCOIN) {
            targetChainID = BytesHelperLib.bytesToUint32(message, 0);
            recipient = BytesHelperLib.bytesToAddress(message, 4);
        } else {
            (
                uint32 targetChainID_,
                address recipient_,
                uint256 minAmountOut_
            ) = abi.decode(message, (uint32, address, uint256));
            targetChainID = targetChainID_;
            recipient = recipient_;
            minAmountOut = minAmountOut_;
        }

        address targetZRC20 = systemContract.gasCoinZRC20ByChainId(
            targetChainID
        );

        uint256 outputAmount = SwapHelperLib._doSwap(
            systemContract.wZetaContractAddress(),
            systemContract.uniswapv2FactoryAddress(),
            systemContract.uniswapv2Router02Address(),
            zrc20,
            amount,
            targetZRC20,
            minAmountOut
        );

        (address gasZRC20, uint256 gasFee) = IZRC20(targetZRC20)
            .withdrawGasFee();

        if (gasZRC20 != targetZRC20) revert WrongGasContract();
        if (gasFee >= outputAmount) revert NotEnoughToPayGasFee();

        IZRC20(targetZRC20).approve(targetZRC20, gasFee);
        IZRC20(targetZRC20).withdraw(
            abi.encodePacked(recipient),
            outputAmount - gasFee
        );
        // highlight-end
    }
}
```

The contract expects to receive three values in the `message`:

- `targetChainID`: the ID of the destination chain
- `recipient`: the recipient address on the destination chain
- `minAmountOut`: and the minimum amount of tokens to receive on the destination
  chain. For the purposes of this tutorial, we will set this value to 0.

When the contract is called from an EVM chain, the `message` is encoded as a
`bytes` array using the ABI encoding.

When the contract is called from Bitcoin it's up to us to encode and then decode
the message.

Use `context.chainID` to determine the connected chain from which the contract
is called.

If it's Bitcoin, the first 4 bytes of the `message` are the `targetChainID`
encoded as a `uint32`. Use `bytesToUint32` helper method to get the target chain
ID. To get the recipient address, use `bytesToAddress` helper method with an
offset of 4 bytes.

If it's an EVM chain, use `abi.decode` to decode the `message` into the
`targetChainID`, `recipient` and `minAmountOut` variables.

Use the `systemContract` to get the address of the ZRC-20 representation of the
gas coin on the destination chain.

Next, swap the incoming token for the gas coin on the destination chain. .
ZetaChain has liquidity pools with the ZRC-20 representation of the gas coin on
all connected chains. The `SwapHelperLib._doSwap` helper method to swap the
tokens.

Finally, withdraw the tokens to the recipient address on the destination chain.

## Modify the Interact Task

Modify the interact task to convert chain label (for example, `goerli_testnet`)
to chain ID (for example, `5`). Update the `prepareData` method with the values
which will be used to encode the `message`.

```ts title="tasks/interact.ts"
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseEther } from "@ethersproject/units";
import { getAddress } from "@zetachain/protocol-contracts";
import { prepareData } from "@zetachain/toolkit/helpers";
// highlight-next-line
import { BigNumber } from "@ethersproject/bignumber";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();

  // highlight-start
  const targetChainID = hre.config.networks[args.destination]?.chainId;
  if (targetChainID === undefined) {
    throw new Error("Invalid destination network");
  }
  const minAmountOut = BigNumber.from("0");
  // highlight-end

  const data = prepareData(
    args.contract,
    // highlight-start
    ["uint32", "address", "uint256"],
    [targetChainID, args.recipient, minAmountOut]
    // highlight-end
  );
  const to = getAddress("tss", hre.network.name);
  const value = parseEther(args.amount);

  const tx = await signer.sendTransaction({ data, to, value });

  if (args.json) {
    console.log(JSON.stringify(tx, null, 2));
  } else {
    console.log(`🔑 Using account: ${signer.address}\n`);

    console.log(`🚀 Successfully broadcasted a token transfer transaction on ${hre.network.name} network.
📝 Transaction hash: ${tx.hash}
`);
  }
};

task("interact", "Interact with the contract", main)
  .addParam("contract", "The address of the withdraw contract on ZetaChain")
  .addParam("amount", "Amount of tokens to send")
  .addFlag("json", "Output in JSON")
  // highlight-start
  .addParam("recipient")
  .addParam("destination");
// highlight-end
```

## Create an Account and Request Tokens from the Faucet

Before proceeding with the next steps, make sure you have
[created an account and requested ZETA tokens](/developers/omnichain/tutorials/hello#create-an-account)
from the faucet.

## Deploy the Contract

```
npx hardhat deploy --network zeta_testnet
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully deployed contract on ZetaChain.
📜 Contract address: 0x458bCAF5d95025cdd00f946f1C5F09623E856579
🌍 Explorer: https://athens3.explorer.zetachain.com/address/0x458bCAF5d95025cdd00f946f1C5F09623E856579
```

## Swap from an EVM Chain

Use the `interact` task to perform a cross-chain swap:

```
px hardhat interact --contract 0x458bCAF5d95025cdd00f946f1C5F09623E856579 --amount 0.05 --network goerli_testnet --recipient 0x2cD3D070aE1BD365909dD859d29F387AA96911e1 --destination mumbai_testnet
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully broadcasted a token transfer transaction on goerli_testnet network.
📝 Transaction hash: 0x47262aade728b9c8897bf4c8932c26774caf3b9ebd085cbc048dd9f6522ccf00
```

Track your cross-chain transaction:

```
npx hardhat cctx 0x47262aade728b9c8897bf4c8932c26774caf3b9ebd085cbc048dd9f6522ccf00
```

```
✓ CCTXs on ZetaChain found.

✓ 0xee7ae0367ee5fa52e17ae0c01d8c929b009d0601a5078ddcb319910ddda493e0: 5 → 7001: OutboundMined (Remote omnichain contract call completed)
✓ 0xaa120bee04c86b1c5d16b1d47d69fd9a3c49fbed91ee15f4f59ef9eeef48ca88: 7001 → 80001: OutboundMined
```

## Swap from Bitcoin

Use the `send-btc` task to send Bitcoin to the TSS address with a memo. The memo
should contain the following:

- Omnichain contract address on ZetaChain:
  `458bCAF5d95025cdd00f946f1C5F09623E856579`
- Target chain ID: `00000005`
- Recipient address: `2cD3D070aE1BD365909dD859d29F387AA96911e1`

```
npx hardhat send-btc --amount 0.001 --memo 458bCAF5d95025cdd00f946f1C5F09623E856579000000052cD3D070aE1BD365909dD859d29F387AA96911e1 --recipient tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur
```

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/tree/main/omnichain/swap
