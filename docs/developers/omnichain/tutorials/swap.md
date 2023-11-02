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
npx hardhat omnichain Swap targetToken:address recipient:address
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
        address recipientAddress;

        if (context.chainID == BITCOIN) {
            targetTokenAddress = BytesHelperLib.bytesToAddress(message, 0);
            recipientAddress = BytesHelperLib.bytesToAddress(message, 20);
        } else {
            (address targetToken, address recipient) = abi.decode(
                message,
                (address, address)
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
            abi.encodePacked(recipientAddress),
            outputAmount - gasFee
        );
        // highlight-end
    }
}
```

The contract expects to receive two values in the `message`:

- `targetChainID`: the ID of the destination chain
- `recipient`: the recipient address on the destination chain

When the contract is called from an EVM chain, the `message` is encoded as a
`bytes` array using the ABI encoding.

When the contract is called from Bitcoin it's up to us to encode and then decode
the message.

Use `context.chainID` to determine the connected chain from which the contract
is called.

If it's Bitcoin, the first 20 bytes of the `message` are the
`targetTokenAddress` encoded as an `address`. Use `bytesToAddress` helper method
to get the target token address. To get the recipient address, use the same
helper method with an offset of 20 bytes.

If it's an EVM chain, use `abi.decode` to decode the `message` into the
`targetToken` and `recipient` variables.

Next, swap the incoming token for the gas coin on the destination chain.
ZetaChain has liquidity pools with the ZRC-20 representation of the gas coin on
all connected chains. The `SwapHelperLib._doSwap` helper method to swap the
tokens.

Finally, withdraw the tokens to the recipient address on the destination chain.

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
npx hardhat interact --contract 0x65eD17bdD941E12f5aDe26DC8cc244B3d70Ee3C9 --amount 0.05 --network goerli_testnet --target-token 0x48f80608B672DC30DC7e3dbBd0343c5F02C738Eb --recipient 0x2cD3D070aE1BD365909dD859d29F387AA96911e1
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully broadcasted a token transfer transaction on goerli_testnet network.
📝 Transaction hash: 0x2c0245e7c717469a90f640813ef677fa880e085c0c4d30f66a318e5cbc07d9d2
```

Track your cross-chain transaction:

```
 npx hardhat cctx 0x2c0245e7c717469a90f640813ef677fa880e085c0c4d30f66a318e5cbc07d9d2
```

```
✓ CCTXs on ZetaChain found.

✓ 0xc30aaa72b7d944f591cbdb2ac55292503618554d193a0eecc11f75e027ad0c72: 5 → 7001: OutboundMined (Remote omnichain contract call completed)
✓ 0xc33cc2f5417c2dd278b872e2359cf751f87ce4adb16f23a3d1045e8c090c20ee: 7001 → 80001: PendingOutbound  → OutboundMined
```

## Swap from Bitcoin

Use the `send-btc` task to send Bitcoin to the TSS address with a memo. The memo
should contain the following:

- Omnichain contract address on ZetaChain:
  `458bCAF5d95025cdd00f946f1C5F09623E856579`
- Target token address: `48f80608B672DC30DC7e3dbBd0343c5F02C738Eb`
- Recipient address: `2cD3D070aE1BD365909dD859d29F387AA96911e1`

```
npx hardhat send-btc --amount 0.001 --memo 458bCAF5d95025cdd00f946f1C5F09623E85657948f80608B672DC30DC7e3dbBd0343c5F02C738Eb2cD3D070aE1BD365909dD859d29F387AA96911e1 --recipient tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur
```

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/tree/main/omnichain/swap
