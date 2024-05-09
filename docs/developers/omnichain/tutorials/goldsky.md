# Subgraph: Goldsky

In this tutorial you will learn how to query for omnichain contract event data
using a subgraph indexer. For the purposes of this tutorial we will be using the
[Goldsky](https://docs.goldsky.com/) subgraph.

This tutorial assumes you have already completed the
[Swap tutorial](/developers/omnichain/tutorials/swap/). If you want to get the
source code for the completed contract, you can find it in the
[`example-contracts` repo](https://github.com/zeta-chain/example-contracts/tree/main/omnichain/swap).

## Add Events to the Swap Contract

Add a `SwapCompleted` event that will be emitted after a successful cross-chain
swap:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";
import "@zetachain/toolkit/contracts/SwapHelperLib.sol";
import "@zetachain/toolkit/contracts/BytesHelperLib.sol";

contract Swap is zContract {
    SystemContract public immutable systemContract;
    uint256 constant BITCOIN = 18332;

    // highlight-start
    event SwapCompleted(
        address indexed zrc20,
        address indexed targetToken,
        uint256 amount,
        bytes recipient
    );
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

        (address gasZRC20, uint256 gasFee) = IZRC20(targetTokenAddress)
            .withdrawGasFee();

        uint256 inputForGas = SwapHelperLib.swapTokensForExactTokens(
            systemContract.wZetaContractAddress(),
            systemContract.uniswapv2FactoryAddress(),
            systemContract.uniswapv2Router02Address(),
            zrc20,
            gasFee,
            gasZRC20,
            amount
        );

        uint256 outputAmount = SwapHelperLib._doSwap(
            systemContract.wZetaContractAddress(),
            systemContract.uniswapv2FactoryAddress(),
            systemContract.uniswapv2Router02Address(),
            zrc20,
            amount - inputForGas,
            targetTokenAddress,
            0
        );

        IZRC20(gasZRC20).approve(targetTokenAddress, gasFee);
        IZRC20(targetTokenAddress).withdraw(recipientAddress, outputAmount);

        // highlight-start
        emit SwapCompleted(
            zrc20,
            targetTokenAddress,
            outputAmount,
            recipientAddress
        );
        // highlight-end
    }
}
```

## Compile and Deploy the Contract

```
yarn

npx hardhat compile --force

npx hardhat deploy --network zeta_testnet
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully deployed contract on ZetaChain.
📜 Contract address: 0x9846BBdE15B857d88DDad4e00CD76962245E1b6f
🌍 Explorer: https://athens3.explorer.zetachain.com/address/0x9846BBdE15B857d88DDad4e00CD76962245E1b6f
```

## Setup Goldsky

Install the [Goldsky CLI](https://docs.goldsky.com/introduction):

```
curl https://goldsky.com | sh
```

Next, [create an account](https://docs.goldsky.com/get-started/subgraphs) on
https://app.goldsky.com, create an API key on the settings page, and login to
the CLI:

```
goldsky login
```

Paste your API key when prompted.

Create a Goldsky config file in the root of your project:

```json title="goldsky.json"
{
  "version": "1",
  "name": "swap",
  "abis": {
    "swap": {
      "path": "artifacts/contracts/Swap.sol/Swap.json"
    }
  },
  "chains": ["zetachain-testnet"],
  "instances": [
    {
      "abi": "swap",
      "address": "0x9846BBdE15B857d88DDad4e00CD76962245E1b6f",
      "chain": "zetachain-testnet",
      "startBlock": 3065396
    }
  ]
}
```

Make sure to update the `address` field with the address of your deployed
contract and the `startBlock` field.

Create a new subgraph:

```
goldsky subgraph deploy swap/v1 --from-abi goldsky.json
```

```
◇  Subgraph generated, deploying to your goldsky project
│
◇  Deployed subgraph API: https://api.goldsky.com/api/public/project_clnujea22c0if34x5965c8c0j/subgraphs/swap-zetachain-testnet/v1/gn
```

## Interact with the Contract

Now that the subgraph is deployed, you can interact with the contract by
performing a cross-chain swap. For this example we will swap 5 tMATIC for BTC.

```
npx hardhat interact --contract 0x9846BBdE15B857d88DDad4e00CD76962245E1b6f --amount 5 --network mumbai_testnet --target-token 0x65a45c57636f9BcCeD4fe193A602008578BcA90b --recipient tb1q2dr85d57450xwde6560qyhj7zvzw9895hq25tx
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully broadcasted a token transfer transaction on mumbai_testnet network.
📝 Transaction hash: 0xb4318f04329d6ddd398b11ccba40d0404e1872494a054fb382267e2f1de160e9
```

You can now track this transaction:

```
npx hardhat cctx 0xb4318f04329d6ddd398b11ccba40d0404e1872494a054fb382267e2f1de160e9
```

```
CCCTXs on ZetaChain found.

✓ 0xf5fbf1ba190e074c64adaba044e2c4f6724aeebe70ca01b0998919d0b1059338: 80001 → 7001: OutboundMined (Remote omnichain cont
ract call completed)
⠏ 0xa0cfd783f991bd060239193082594dd3fe5ae239e97b8baaa0a303ee6ba6ba79: 7001 → 18332: PendingOutbound
```

Once you see an outbound cross-chain transaction in the `PendingOutbound` state
(in the example above from ZetaChain to Bitcoin, `7001 → 18332`), this means
that the swap has performed successfully and the `SwapCompleted` event should be
emitted.

## Query the Subgraph for Events

Visit the subgraph API URL that was printed when you deployed the subgraph (your
URL will be different):

```
https://api.goldsky.com/api/public/project_clnujea22c0if34x5965c8c0j/subgraphs/swap-zetachain-testnet/v1/gn
```

You should see a GraphQL playground. You can use it to query for events:

```graphql
query {
  swapCompleteds(first: 5) {
    id
  }
}
```

You should see a list of `SwapCompleted` events with IDs:

```json
{
  "data": {
    "swapCompleteds": [
      {
        "id": "0xbfcc4e8ea59625da42aa3eec6e5aba66bcd120f8e83dea8dc855ebd1d834e1e6-25"
      }
    ]
  }
}
```

You can query for more information about a specific event:

```graphql
query {
  swapCompleteds(
    where: {
      id: "0xbfcc4e8ea59625da42aa3eec6e5aba66bcd120f8e83dea8dc855ebd1d834e1e6-25"
    }
  ) {
    id
    block_number
    timestamp_
    transactionHash_
    contractId_
    zrc20
    targetToken
    amount
    recipient
  }
}
```

You will see the event details with all the data we emitted from the contract:

```json
{
  "data": {
    "swapCompleteds": [
      {
        "id": "0xbfcc4e8ea59625da42aa3eec6e5aba66bcd120f8e83dea8dc855ebd1d834e1e6-25",
        "block_number": "3065437",
        "timestamp_": "1704357233",
        "transactionHash_": "0xbfcc4e8ea59625da42aa3eec6e5aba66bcd120f8e83dea8dc855ebd1d834e1e6",
        "contractId_": "0x9846bbde15b857d88ddad4e00cd76962245e1b6f",
        "zrc20": "0x48f80608b672dc30dc7e3dbbd0343c5f02c738eb",
        "targetToken": "0x65a45c57636f9bcced4fe193a602008578bca90b",
        "amount": "369767",
        "recipient": "0x74623171326472383564353734353078776465363536307179686a377a767a7739383935687132357478"
      }
    ]
  }
}
```

Well done! You have successfully queried for omnichain contract events using the
Goldsky subgraph indexer. To learn more about using Goldsky, check out the
[Goldsky docs](https://docs.goldsky.com/).

## Common Issues

### Events Are Not Being Indexed

Please, wait for an email from Goldsky that your subgraph has been indexed.
