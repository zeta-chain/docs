---
sidebar_position: 6
---

# Single Input Multiple Output

## Overview

If you already read the previous tutorials you already know how to use zEVM. A
very common use case on zEVM is a smart contract with a single input from one
chain, perform some logic, and then execute the output to another or multiple
chains.

The example in this tutorial does exactly that: the contract reads an address
from the message, and then send some tokens to that address in several chains.

This capability may be useful for applications like multichain asset managers or
DeFi applications that need to distribute or manage assets on many chains from
one place.

This tutorial also demonstrates how a single inbound cross-chain transactions
can result in more than one outbound cross-chain transactions.

## Set up your environment

```
git clone https://github.com/zeta-chain/template
```

## Create the contract

Run the following command to create a new omnichain contract called
`MultiOutput` with one parameter in the message:

```
npx hardhat omnichain Multioutput recipient btcRecipient targetToken
```

## OnCrossChainCall

Implement the `onCrossChainCall` function:

```solidity title="contracts/Multioutput.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";
import "@zetachain/toolkit/contracts/BytesHelperLib.sol";
import "@zetachain/toolkit/contracts/SwapHelperLib.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MultiOutput is zContract, Ownable {
    error NoAvailableTransfers();
    error InvalidRecipient();
    error FetchingBTCZRC20Failed();

    event Withdrawal(address, uint256, bytes);

    SystemContract public immutable systemContract;

    uint256 constant BITCOIN = 18332;

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
        address btcToken = systemContract.gasCoinZRC20ByChainId(BITCOIN);
        if (btcToken == address(0)) revert FetchingBTCZRC20Failed();

        (
            address evmRecipient,
            bytes memory btcRecipient,
            address[] memory destinationTokens
        ) = parseMessage(context.chainID, message);

        uint256 totalTransfers = destinationTokens.length;
        if (totalTransfers == 0) revert NoAvailableTransfers();

        uint256 amountToTransfer = amount / totalTransfers;
        uint256 leftOver = amount - amountToTransfer * totalTransfers;

        uint256 lastTransferIndex = destinationTokens[
            destinationTokens.length - 1
        ] == zrc20
            ? destinationTokens.length - 2
            : destinationTokens.length - 1;

        for (uint256 i; i < destinationTokens.length; i++) {
            address targetZRC20 = destinationTokens[i];
            if (targetZRC20 == zrc20) continue;

            if (lastTransferIndex == i) {
                amountToTransfer += leftOver;
            }

            bytes memory recipient = abi.encodePacked(
                BytesHelperLib.addressToBytes(evmRecipient)
            );

            if (targetZRC20 == btcToken) {
                if (btcRecipient.length == 0) revert InvalidRecipient();
                recipient = abi.encodePacked(btcRecipient);
            }

            _doSwapAndWithdraw(zrc20, amountToTransfer, targetZRC20, recipient);
        }
    }
}
```

On a high level the `onCrossChainCall` function does the following:

1. Parse the message to get the recipient address and the destination tokens.
2. Calculate the amount to transfer to each destination token.
3. Loop through the destination tokens and call the `_doSwapAndWithdraw`
   function to perform the transfer.

When looping through the destination tokens, the contract checks that the
destination token is not the same as the source token, and if it is, it skips
the transfer.

The contract also checks if the destination token is BTC, and if it is, it uses
the BTC recipient address from the message.

## Parse the message

Next, implement the `parseMessage` function:

```solidity title="contracts/Multioutput.sol"
    function parseMessage(
        uint256 chainID,
        bytes calldata message
    ) public pure returns (address, bytes memory, address[] memory) {
        address evmRecipient;
        bytes memory btcRecipient;
        address[] memory destinationTokens;
        if (chainID == BITCOIN) {
            evmRecipient = BytesHelperLib.bytesToAddress(message, 0);
            uint256 numTokens = message.length / 20 - 1;
            destinationTokens = new address[](numTokens);
            for (uint256 i = 0; i < numTokens; i++) {
                destinationTokens[i] = BytesHelperLib.bytesToAddress(
                    message,
                    20 + i * 20
                );
            }
        } else {
            (
                address evmAddress,
                bytes memory btcAddress,
                bytes memory targetToken
            ) = abi.decode(message, (address, bytes, bytes));

            btcRecipient = btcAddress;
            evmRecipient = evmAddress;

            uint256 numTokens = targetToken.length / 32;
            destinationTokens = new address[](numTokens);
            for (uint256 i = 0; i < numTokens; i++) {
                destinationTokens[i] = BytesHelperLib.bytesMemoryToAddress(
                    targetToken,
                    i * 32
                );
            }
        }

        return (evmRecipient, btcRecipient, destinationTokens);
    }
```

`parseMessage` is a helper function that decodes the message to get the
recipient address and the destination tokens.

If the source chain is Bitcoin, the function assumes that the destination
address is an EVM address and uses the helper function to manually decode the
first 20 bytes as the recipient address. The rest of the message is a list of
destination tokens. The function loops through the message and decodes each 20
bytes as an address.

If the source chain is not Bitcoin, the function expects both an EVM address and
a BTC address in the message. The function decodes the message using the
`abi.decode` function and returns the recipient address, the BTC recipient
address, and the destination tokens. The function loops through the message and
decodes token addresses.

## Swap and Withdraw

Finally, implement the `_doSwapAndWithdraw` function:

```solidity title="contracts/Multioutput.sol"
    function _doSwapAndWithdraw(
        address zrc20,
        uint256 amountToTransfer,
        address targetZRC20,
        bytes memory recipient
    ) internal {
        (address gasZRC20, uint256 gasFee) = IZRC20(targetZRC20)
            .withdrawGasFee();

        uint256 inputForGas = SwapHelperLib.swapTokensForExactTokens(
            systemContract.wZetaContractAddress(),
            systemContract.uniswapv2FactoryAddress(),
            systemContract.uniswapv2Router02Address(),
            zrc20,
            gasFee,
            gasZRC20,
            amountToTransfer
        );

        uint256 outputAmount = SwapHelperLib._doSwap(
            systemContract.wZetaContractAddress(),
            systemContract.uniswapv2FactoryAddress(),
            systemContract.uniswapv2Router02Address(),
            zrc20,
            amountToTransfer - inputForGas,
            targetZRC20,
            0
        );

        IZRC20(gasZRC20).approve(targetZRC20, gasFee);
        IZRC20(targetZRC20).withdraw(recipient, outputAmount);
    }
```

`_doSwapAndWithdraw` mirrors the functionality of the omnichain swap example
contract.

It first calls the `withdrawGasFee` function to get the gas token and the gas
fee.

If `targetZRC20` is an ERC-20 token, `gasZRC20` will not be the same as
`targetZRC20` and it's important to have two swaps: the first swap is to swap
the source token for the gas token, and the second swap is to swap the rest of
the source token amount for the target token.

If `targetZRC20` is a gas token, `gasZRC20` will be the same as `targetZRC20`.
We could skip the first swap and just swap the source token for the target
token, but for the sake of simplicity, we use the same logic for both cases.

## Modify the Interact Task

Modify the interact task to correctly handle BTC destination address and a list
of destination token addresses. If BTC address is provided, it gets converted
into bytes. Destination tokens are split into an array and encoded as addresses.

```ts title="tasks/interact.ts"
const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();

  // highlight-start
  const destinationTokens = args.targetToken.split(",");

  let bitcoinAddress = "";
  let data;
  if (args.btcRecipient) {
    bitcoinAddress = args.btcRecipient;
  }

  const bitcoinAddressBytes = utils.solidityPack(
    ["bytes"],
    [utils.toUtf8Bytes(bitcoinAddress)]
  );

  const tokensBytes = ethers.utils.concat(
    destinationTokens.map((address) =>
      utils.defaultAbiCoder.encode(["address"], [address])
    )
  );

  data = prepareData(
    args.contract,
    ["address", "bytes", "bytes"],
    [args.recipient, bitcoinAddressBytes, tokensBytes]
  );
  // highlight-end
  //...
};

task("interact", "Interact with the contract", main)
  // highlight-next-line
  .addOptionalParam("btcRecipient", "The bitcoin address to send to");
```

## Create an Account and Request Tokens from the Faucet

Before proceeding with the next steps, make sure you have
[created an account and requested ZETA tokens](/developers/omnichain/tutorials/hello#create-an-account)
from the faucet.

## Deploy the Contract

Clear the cache and artifacts, then compile the contract:

```
npx hardhat compile --force
```

```
npx hardhat deploy --network zeta_testnet
```

```
🔑 Using account: 0x4955a3F38ff86ae92A914445099caa8eA2B9bA32

🚀 Successfully deployed contract on ZetaChain.
📜 Contract address: 0xa573Df1F0729FE6F1BD69b0a5dbFE393e6e09f47
🌍 Explorer: https://athens3.explorer.zetachain.com/address/0xa573Df1F0729FE6F1BD69b0a5dbFE393e6e09f47
```

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/tree/main/omnichain/multioutput
