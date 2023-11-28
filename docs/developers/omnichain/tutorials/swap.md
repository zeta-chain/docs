---
sidebar_position: 4
---

# Swap

## Overview

In this tutorial you will write a cross-chain swap contract that allows users to
transfer native tokens from one of the connected chains to ZetaChain, swap them
for a ZRC-20 representation of a token on another chain, and withdraw the tokens
to the recipient address on the target chain.

<div style={{width: "100%", height: "auto", "aspect-ratio": "16 / 10"}}>
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/t59EtsBequI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

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
npx hardhat omnichain Swap targetToken:address recipient
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
        address targetTokenAddress;
        bytes memory recipientAddress;

        if (context.chainID == BITCOIN) {
            targetTokenAddress = BytesHelperLib.bytesToAddress(message, 0);
            recipientAddress = abi.encodePacked(
                BytesHelperLib.bytesToAddress(message, 20)
            );
        } else {
            (address targetToken, bytes memory recipient) = abi.decode(
                message,
                (address, bytes)
            );
            targetTokenAddress = targetToken;
            recipientAddress = recipient;
        }

        uint256 outputAmount = SwapHelperLib._doSwap(
            systemContract.wZetaContractAddress(),
            systemContract.uniswapv2FactoryAddress(),
            systemContract.uniswapv2Router02Address(),
            zrc20,
            amount,
            targetTokenAddress,
            0
        );

        (address gasZRC20, uint256 gasFee) = IZRC20(targetTokenAddress)
            .withdrawGasFee();

        if (gasZRC20 != targetTokenAddress) revert WrongGasContract();
        if (gasFee >= outputAmount) revert NotEnoughToPayGasFee();

        IZRC20(targetTokenAddress).approve(targetTokenAddress, gasFee);
        IZRC20(targetTokenAddress).withdraw(
            recipientAddress,
            outputAmount - gasFee
        );
        // highlight-end
    }
}
```

The contract expects to receive two values in the `message`:

- `address targetTokenAddress`: the address of the ZRC-20 version of the
  destination token.
- `bytes memory recipientAddress`: the recipient address on the destination
  chain. We're using `bytes`, because the recipient address can be either on an
  EVM chain or Bitcoin.

When the contract is called from an EVM chain, the `message` is encoded as a
`bytes` array using the ABI encoding.

When the contract is called from Bitcoin it's up to us to encode and then decode
the message.

Use `context.chainID` to determine the connected chain from which the contract
is called.

If it's Bitcoin, the first 20 bytes of the `message` are the
`targetTokenAddress` encoded as an `address`. Use `bytesToAddress` helper method
to get the target token address. To get the recipient address, use the same
helper method with an offset of 20 bytes and then use `abi.encodePacked` to
convert the address to `bytes`.

If it's an EVM chain, use `abi.decode` to decode the `message` into the
`targetToken` and `recipient` variables.

Next, swap the incoming token for the gas coin on the destination chain.
ZetaChain has liquidity pools with the ZRC-20 representation of the gas coin on
all connected chains. The `SwapHelperLib._doSwap` helper method to swap the
tokens.

Finally, withdraw the tokens to the recipient address on the destination chain.

## Update the Interact Task

In the `interact` task generated for us by the contract template the recipient
is encoded as string. Our contract, however, expects the recipient to be encoded
as `bytes` to ensure that both EVM and Bitcoin addresses are supported.

To support both EVM and Bitcoin addresses, we need to check if the recipient is
a valid Bitcoin address. If it is, we need to encode it as `bytes` using
`utils.solidityPack`.

If it's not a valid bech32 address, then we assume it's an EVM address and use
`args.recipient` as the value for the recipient.

Finally, update the `prepareData` function call to use the `bytes` type for the
recipient.

```ts title="tasks/interact.ts"
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseEther } from "@ethersproject/units";
import { getAddress } from "@zetachain/protocol-contracts";
import { prepareData } from "@zetachain/toolkit/helpers";
// highlight-start
import bech32 from "bech32";
import { utils } from "ethers";
// highlight-end

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();

  // highlight-start
  let recipient;
  try {
    if (bech32.decode(args.recipient)) {
      recipient = utils.solidityPack(
        ["bytes"],
        [utils.toUtf8Bytes(args.recipient)]
      );
    }
  } catch (e) {
    recipient = args.recipient;
  }
  // highlight-end

  const data = prepareData(
    args.contract,
    // highlight-start
    ["address", "bytes"],
    [args.targetToken, recipient]
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
  .addParam("targetToken")
  .addParam("recipient");
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

Use the `interact` task to perform a cross-chain swap. In this example, we're
swapping native gETH for for a ZRC-20 representation of tMATIC. The contract
will perform a swap and then withdraw tMATIC to Polygon Mumbai. To get the value
of the `--target-token` find the ZRC-20 contract address of the destination
token in the [docs](https://www.zetachain.com/docs/reference/testnet/).

```
npx hardhat interact --contract 0xcC02751bAA435E9A5cF3bd22F96a21d7C002E150 --amount 0.1 --target-token 0x48f80608B672DC30DC7e3dbBd0343c5F02C738Eb --recipient 0x2cD3D070aE1BD365909dD859d29F387AA96911e1 --network goerli_testnet
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully broadcasted a token transfer transaction on goerli_testnet network.
📝 Transaction hash: 0x7ebd2bff64cbc530c145a60e4830ba2ddc536bc62cf8c5566c900143b0e08baf
```

Track your cross-chain transaction:

```
 npx hardhat cctx 0x7ebd2bff64cbc530c145a60e4830ba2ddc536bc62cf8c5566c900143b0e08baf
```

```
✓ CCTXs on ZetaChain found.

✓ 0x5082897440218490193a724a22b7ed3f8744760956d857199e76bf2453f901b2: 5 → 7001: OutboundMined (Remote omnichain contract call completed)
✓ 0x3aebbba04cd284d2e87b9c8414f6946bdf933efad45076aba7c691e5a32895ba: 7001 → 80001: PendingOutbound  → OutboundMined
```

## Swap from Bitcoin

Use the `send-btc` task to send Bitcoin to the TSS address with a memo. The memo
should contain the following:

- Omnichain contract address on ZetaChain:
  `cC02751bAA435E9A5cF3bd22F96a21d7C002E150`
- Target token address: `48f80608B672DC30DC7e3dbBd0343c5F02C738Eb`
- Recipient address: `2cD3D070aE1BD365909dD859d29F387AA96911e1`

```
npx hardhat send-btc --amount 0.001 --memo cC02751bAA435E9A5cF3bd22F96a21d7C002E15048f80608B672DC30DC7e3dbBd0343c5F02C738Eb2cD3D070aE1BD365909dD859d29F387AA96911e1 --recipient tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur
```

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/tree/main/omnichain/swap
