---
sidebar_position: 2
sidebar_label: Value Transfer
hide_title: true
id: multichain-value-transfer
title: Multichain Value Transfer
---

# Multichain Value Transfer

This is an example contract that shows how you can send value across chains via
the ZetaChain API.

From this rudimentary example, you could easily extend it to support arbitrary
asset exchanges via a swap to/from ZETA on source and destination.

# Multichain Value Transfer

In this tutorial we will create a contract that allows sending value from one
chain to another using the
[Connector API](/developers/cross-chain-messaging/connector/).

## Set up your environment

```
git clone https://github.com/zeta-chain/template
```

Install the dependencies:

```
yarn add --dev @openzeppelin/contracts
```

## Create a new contract

```solidity title="contracts/MultiChainValue.sol" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/messaging/value/contracts/MultiChainValue.sol
```

The contract's main functionality is implemented in the `sendValue` function.

The `send` function first checks if the destination chain ID is valid and if the
Zeta value and gas are not zero.

Next, it attempts to approve and transfer the specified amount of Zeta tokens
from the sender's address to the contract's address.

Finally, the function calls the "send" function of a connector contract,
providing the necessary inputs such as the destination chain ID, destination
address, gas limit, and other parameters. The function encodes these inputs into
a message and sends it to the connector contract for further processing.

The contract also uses a notion of "available chains". Before calling the send
function and transferring value between chains you need to call the
`addAvailableChainId` function on the source chain and add the destination chain
ID to the list of available chains. In this example this logic is implemented in
the deploy task.

## Create a deployment task

The deploy task is fairly standard. It deploys the contract to two or more
chains and sets the interactors on each chain. Additionally, for this example,
the script also calls the `addAvailableChainId` function on each chain to add
the other chain to the list of available chains.

```ts title="tasks/deploy.ts" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/messaging/value/tasks/deploy.ts
```

Run the following command to deploy the contract to two networks:

```
npx hardhat deploy --networks polygon-mumbai,bsc-testnet
```

## Send a message

Create a new task to send tokens from one chain to another. The task accepts the
following parameters: contract address, recipient address, amount, destination
chain ID, and the source network name.

Send a message from Polygon Mumbai testnet to BSC testnet (chain ID: 97) using
the contract address (see the output of the `deploy` task). Make sure to submit
enough native tokens with `--amount` to pay for the transaction fees.

```
npx hardhat send --contract 0x042AF09ae20f924Ce18Dc3daBFa1866B114aFa89 --address 0xF5a522092F8E4041F038a6d30131192945478Af0 --amount 20 --destination 97 --network polygon-mumbai

🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

✅ The transaction has been broadcasted to polygon-mumbai
📝 Transaction hash: 0x2748882492a565627e4726658744f443fb993943f25ba73f93dba42ae314e689

Please, refer to ZetaChain's explorer for updates on the progress of the cross-chain transaction.

🌍 Explorer: https://explorer.zetachain.com/address/0x042AF09ae20f924Ce18Dc3daBFa1866B114aFa89
```

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/messaging/value
