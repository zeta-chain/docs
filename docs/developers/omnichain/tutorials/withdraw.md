---
sidebar_position: 3
---

# Withdraw

In this tutorial you will write your first ZetaChain contract with cross-chain
functionality. The purpose of the contract is to demonstrate how an omnichain
contract on ZetaChain can be triggered from any connected network like Goerli or
Polygon Mumbai.

High-level overview:

1. A `Withdraw.sol` contract is created and deployed to ZetaChain.
2. A user transfers tokens to a specific address (called TSS) on the target
   network (Goerli, in this example). The `data` value of the token transfer
   transaction contains the address of the Withdraw contract on Zetachain and
   the recipient address back on the target network.
3. ZetaChain detects the token transfer transaction and triggers the
   `onCrossChainCall()` function of the Withdraw contract.
4. `onCrossChainCall()` uses ZRC20's `withdraw()` to initiate the process of
   transferring the tokens to the recipient address on the target network.

![High-level overview of a cross-chain transaction](./img/withdraw.png)

Note that the TSS address is a special address that is used to trigger
cross-chain transactions. The ZetaChain network has a TSS address on each
connected chain (like Goerli or Polygon Mumbai), and token transfers to this TSS
address can call any ZetaChain contract (which contract is called is determined
by the payload of the data field of the transaction).

## Set up your environment

```
git clone https://github.com/zeta-chain/template
```

## Creating the contract

First, create a new Solidity contract called `Withdraw.sol`:

```solidity title="contracts/Withdraw.sol" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/withdraw/contracts/Withdraw.sol
```

Start by importing the necessary interfaces from the
`@zetachain/zevm-protocol-contracts` package. You will need the `IZRC20`
interface to interact with ZRC20 tokens and the `zContract` interface to
implement the cross-chain functionality provided by the ZetaChain protocol.

Create a new contract called Withdraw that inherits from the `zContract`
interface. By inheriting from the `zContract` interface, the Withdraw contract
will be able to implement the cross-chain functionality.

Define two custom errors: `WrongGasContract` and `NotEnoughToPayGasFee`. These
errors will be used later in the `doWithdrawal()` function. `WrongGasContract`
will be used when the gas contract is incorrect, and `NotEnoughToPayGasFee` will
be used when the token amount is insufficient to cover the gas fee.

Create a private function called `doWithdrawal()` that takes the ZRC20 token
address, the amount of tokens to be withdrawn, and the recipient address as
input parameters. This function is responsible for checking and paying the
required gas fee and performing the token withdrawal. Within the function, you
will:

1. Retrieve the gas ZRC20 token address and the gas fee.
1. Check if the gas ZRC20 token address matches the target ZRC20 token address.
   If not, revert with the `WrongGasContract` error.
1. Check if the gas fee is greater than or equal to the amount to be withdrawn.
   If so, revert with the `NotEnoughToPayGasFee` error.
1. Approve the gas fee and call the `withdraw` function of the ZRC20 token with
   the recipient address and the amount minus the gas fee.

Next, create an external function called `onCrossChainCall()` that is called by
the `zContract`. This function should take the ZRC20 token address, the amount
to be withdrawn, and an encoded message containing the recipient address as
input parameters. Within the function, you will:

1. Check if the ZRC20 token address is valid (i.e., not a zero address).
1. Check if the amount is greater than zero.
1. Decode the message to obtain the recipient address.
1. Call the `doWithdrawal()` function with the ZRC20 token address, the amount,
   and the recipient address.

## Deploying the contract

Next, create a deployment task script called `deploy.ts`. This script will
deploy the Withdraw contract to ZetaChain.

```ts title="tasks/deploy.ts" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/withdraw/tasks/deploy.ts
```

Don't forget to import the deployment task in your `hardhat.config.ts` file.

```ts title="hardhat.config.ts"
import "./tasks/deploy";
```

You can now run the `deploy` task to deploy the Withdraw contract to ZetaChain's
"athens" testnet.

```
npx hardhat deploy --network zeta_testnet
```

```
🔑 Using account: 0x1e89d05e9917e18c198b30d6728399FD63E236bB

🚀 Successfully deployed contract on ZetaChain.
📜 Contract address: 0x5E3229522BeFD3D9CD422Fd91f4273ed4EB2639a
🌍 Explorer: https://explorer.zetachain.com/address/0x5E3229522BeFD3D9CD422Fd91f4273ed4EB2639a
```

## Interacting with the contract

```ts title="tasks/withdraw.ts" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/withdraw/tasks/withdraw.ts
```

Don't forget to import the withdraw task in your `hardhat.config.ts` file.

```ts title="hardhat.config.ts"
import "./tasks/withdraw";
```

First, obtain the signer's address from the available signers in the Hardhat
Runtime Environment (HRE). The signer's address is the account that will be used
to send the transaction.

Create a function called `prepareData()` that takes the contract address and the
recipient address as input parameters. This function is responsible for
preparing the data needed for the transaction. To do this, you will:

1. Pad the recipient address with zeros, ensuring it is 32 bytes long.
1. Convert the padded recipient address to a hexadecimal string.
1. Concatenate the contract address and the padded recipient address (excluding
   the 0x prefix).

Finally, create and send a token transfer transaction from the signer's address
to ZetaChain's TSS the target network. The `data` field of the transaction will
contain two pieces of information:

- The contract address of the Withdraw contract on ZetaChain.
- The recipient address on the target network.

## Executing the cross-chain transaction

Run the following command in your terminal:

```
npx hardhat withdraw --network goerli --contract CONTRACT --recipient RECIPIENT --amount 0.01
```

Where `CONTRACT` is the contract address from the output of the `deploy` task
and `RECIPIENT` is any random address on the target network. You're using the
`goerli` network in this example, but you can use any other supported testnet
like `polygon-mumbai`.

Follow the link to ZetaChain's explorer in the output of the `withdraw` task to
see the status of the cross-chain transaction. Due to the number of transactions
it might take a while for the transaction to be processed. Once it does, you
will see recipient's balance increase on the target network by the amount of
tokens you sent.

Here's an example of what an input and output of the `withdraw` task could look
like:

```
npx hardhat withdraw --network goerli --amount 0.01 --contract 0x5E3229522BeFD3D9CD422Fd91f4273ed4EB2639a --recipient 0x2c2d7aF555156eFB8Bfc3eBB0C41fE57D4D1C7c4
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

Getting tss address from athens: goerli.

🚀 Successfully broadcasted a token transfer transaction on goerli network.
📝 Transaction hash: 0xc6b72c5cc7b7ec68e0853827eab8cead9664b951bfe66340bd2711e2abdf0013
💰 Amount: 0.01 native goerli gas tokens
💁 Sender: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1 (your address on goerli)
💁 Recipient: 0x2c2d7aF555156eFB8Bfc3eBB0C41fE57D4D1C7c4 (ZetaChain's TSS address on goerli)

This transaction has been submitted to goerli, but it may take some time
for it to be processed on ZetaChain. Please refer to ZetaChain's explorer
for updates on the progress of the cross-chain transaction.

🌍 Explorer: https://explorer.zetachain.com/address/0x5E3229522BeFD3D9CD422Fd91f4273ed4EB2639a?tab=ccTxs
```

Congratulations! You have successfully created and deployed your first omnichain
contract to ZetaChain, and executed a cross-chain transaction by sending tokens
to a TSS address on Goerli, which triggered a Withdraw contract call on
ZetaChain and withdrew the tokens to the recipient address on Goerli.

# Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/withdraw
