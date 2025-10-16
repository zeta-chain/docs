---
title: Toolkit
---

# ZetaChain Toolkit

ZetaChain Toolkit is a TypeScript SDK for building universal apps that transfer
tokens, invoke contracts, and track transactions across any chain connected to
ZetaChain.

## ✨ Features

- Cross-chain asset transfers: deposit gas and fungible tokens from any
  supported chain to ZetaChain and withdraw them back.
- Cross-chain contract execution: make incoming calls to universal contracts on
  ZetaChain or trigger outgoing calls to contracts on connected chains.
- Real-time transaction tracking: monitor the full lifecycle of cross-chain
  transactions as they propagate across networks.
- Built-in multi-chain support: works out of the box with EVM chains, Solana,
  Sui, Bitcoin, and TON.

## 📦 Installation

```bash
npm i @zetachain/toolkit
```

## 🚀 Quick start

```ts
import { evmDeposit, zetachainCall } from "@zetachain/toolkit";

// Deposit USDC from Ethereum to ZetaChain
await evmDeposit(
  {
    amount: "1.0",
    receiver: "0xReceiverOnZetaChain", // EOA or contract on ZetaChain
    token: "0xUSDC", // ERC-20 on the origin chain
  },
  { signer: ethersSigner }
);

// Ping a contract on Ethereum from ZetaChain
await zetachainCall(
  {
    receiver: "0xRecevierContract", // contract on a connected chain
    function: "hello(string)",
    types: ["string"],
    values: ["alice"],
    zrc20: "0xZRC20",
  },
  { signer: ethersSigner }
);
```

All Toolkit capabilities are also exposed through [`zetachain`
CLI](https://github.com/zeta-chain/cli).

## Functions

### evmCall()

> **evmCall**(`params`, `options`): `Promise`\<`ContractTransactionResponse`\>

Makes a cross-chain call from an EVM chain to a universal contract on ZetaChain.

This function allows you to call a contract function on a destination EVM chain
without transferring any tokens. It's useful for executing contract logic
across different chains.

#### Parameters

##### params

The call parameters including receiver address, function types/values, and revert options

###### receiver

`string` = `...`

###### revertOptions

\{ `abortAddress?`: `string`; `callOnRevert`: `boolean`; `onRevertGasLimit?`: `string` \| `number` \| `bigint`; `revertAddress?`: `string`; `revertMessage`: `string`; \} = `revertOptionsSchema`

###### revertOptions.abortAddress?

`string` = `...`

###### revertOptions.callOnRevert

`boolean` = `...`

###### revertOptions.onRevertGasLimit?

`string` \| `number` \| `bigint` = `...`

###### revertOptions.revertAddress?

`string` = `...`

###### revertOptions.revertMessage

`string` = `...`

###### types

`string`[] = `...`

###### values

(`string` \| `bigint` \| `boolean`)[] = `...`

##### options

Configuration options including signer and optional gateway address

###### gateway?

`string` = `...`

###### signer

`AbstractSigner`\<`null` \| `Provider`\> = `...`

###### txOptions?

\{ `gasLimit?`: `string` \| `number` \| `bigint`; `gasPrice?`: `string` \| `number` \| `bigint`; `value?`: `string` \| `number` \| `bigint`; \} = `...`

###### txOptions.gasLimit?

`string` \| `number` \| `bigint` = `...`

###### txOptions.gasPrice?

`string` \| `number` \| `bigint` = `...`

###### txOptions.value?

`string` \| `number` \| `bigint` = `...`

#### Returns

`Promise`\<`ContractTransactionResponse`\>

Promise that resolves to the transaction receipt

***

### evmDeposit()

> **evmDeposit**(`params`, `options`): `Promise`\<`ContractTransactionResponse`\>

Deposits tokens from an EVM chain to ZetaChain.

This function allows you to transfer tokens from an EVM chain to ZetaChain.
It supports both native tokens (ETH, BNB, AVAX, etc.) and ERC20 tokens.
For ERC20 tokens, it automatically handles token approval before deposit.

#### Parameters

##### params

The deposit parameters including amount, receiver, token address, and revert options

###### amount

`string` = `...`

###### receiver

`string` = `...`

###### revertOptions

\{ `abortAddress?`: `string`; `callOnRevert`: `boolean`; `onRevertGasLimit?`: `string` \| `number` \| `bigint`; `revertAddress?`: `string`; `revertMessage`: `string`; \} = `revertOptionsSchema`

###### revertOptions.abortAddress?

`string` = `...`

###### revertOptions.callOnRevert

`boolean` = `...`

###### revertOptions.onRevertGasLimit?

`string` \| `number` \| `bigint` = `...`

###### revertOptions.revertAddress?

`string` = `...`

###### revertOptions.revertMessage

`string` = `...`

###### token?

`string` = `...`

##### options

Configuration options including signer and optional gateway address

###### gateway?

`string` = `...`

###### signer

`AbstractSigner`\<`null` \| `Provider`\> = `...`

###### txOptions?

\{ `gasLimit?`: `string` \| `number` \| `bigint`; `gasPrice?`: `string` \| `number` \| `bigint`; `value?`: `string` \| `number` \| `bigint`; \} = `...`

###### txOptions.gasLimit?

`string` \| `number` \| `bigint` = `...`

###### txOptions.gasPrice?

`string` \| `number` \| `bigint` = `...`

###### txOptions.value?

`string` \| `number` \| `bigint` = `...`

#### Returns

`Promise`\<`ContractTransactionResponse`\>

Promise that resolves to the transaction receipt

***

### evmDepositAndCall()

> **evmDepositAndCall**(`params`, `options`): `Promise`\<`ContractTransactionResponse`\>

Deposits tokens and makes a cross-chain call from an EVM chain to a universal contract on ZetaChain.

This function combines token deposit with a contract call in a single transaction.
It allows you to transfer tokens from an EVM chain to ZetaChain and immediately
execute a function call on the universal contract. Supports both native tokens
and ERC20 tokens.

#### Parameters

##### params

The deposit and call parameters including amount, receiver, token address, function types/values, and revert options

###### amount

`string` = `...`

###### receiver

`string` = `...`

###### revertOptions

\{ `abortAddress?`: `string`; `callOnRevert`: `boolean`; `onRevertGasLimit?`: `string` \| `number` \| `bigint`; `revertAddress?`: `string`; `revertMessage`: `string`; \} = `revertOptionsSchema`

###### revertOptions.abortAddress?

`string` = `...`

###### revertOptions.callOnRevert

`boolean` = `...`

###### revertOptions.onRevertGasLimit?

`string` \| `number` \| `bigint` = `...`

###### revertOptions.revertAddress?

`string` = `...`

###### revertOptions.revertMessage

`string` = `...`

###### token?

`string` = `...`

###### types

`string`[] = `...`

###### values

(`string` \| `bigint` \| `boolean`)[] = `...`

##### options

Configuration options including signer and optional gateway address

###### gateway?

`string` = `...`

###### signer

`AbstractSigner`\<`null` \| `Provider`\> = `...`

###### txOptions?

\{ `gasLimit?`: `string` \| `number` \| `bigint`; `gasPrice?`: `string` \| `number` \| `bigint`; `value?`: `string` \| `number` \| `bigint`; \} = `...`

###### txOptions.gasLimit?

`string` \| `number` \| `bigint` = `...`

###### txOptions.gasPrice?

`string` \| `number` \| `bigint` = `...`

###### txOptions.value?

`string` \| `number` \| `bigint` = `...`

#### Returns

`Promise`\<`ContractTransactionResponse`\>

Promise that resolves to the transaction receipt

***

### solanaCall()

> **solanaCall**(`params`, `options`): `Promise`\<`string`\>

Makes a cross-chain call from Solana to a universal contract on ZetaChain.

This function allows you to call a contract function on a universal contract
from Solana without transferring any tokens. It's useful for executing
contract logic across different chains.

#### Parameters

##### params

The call parameters including receiver address, function types/values, and revert options

###### receiver

`string` = `...`

###### revertOptions

\{ `abortAddress?`: `string`; `callOnRevert`: `boolean`; `onRevertGasLimit?`: `string` \| `number` \| `bigint`; `revertAddress?`: `string`; `revertMessage`: `string`; \} = `revertOptionsSchema`

###### revertOptions.abortAddress?

`string` = `...`

###### revertOptions.callOnRevert

`boolean` = `...`

###### revertOptions.onRevertGasLimit?

`string` \| `number` \| `bigint` = `...`

###### revertOptions.revertAddress?

`string` = `...`

###### revertOptions.revertMessage

`string` = `...`

###### types

`string`[] = `...`

###### values

(`string` \| `bigint` \| `boolean`)[] = `...`

##### options

Configuration options including chain ID and signer keypair

###### chainId

`string` = `...`

###### signer

`WalletAdapter` \| `Keypair` = `solanaSignerSchema`

#### Returns

`Promise`\<`string`\>

Promise that resolves to the transaction signature

***

### solanaDeposit()

> **solanaDeposit**(`params`, `options`): `Promise`\<`string`\>

Deposits tokens from Solana to ZetaChain.

This function allows you to transfer tokens from Solana to ZetaChain.
It supports both native SOL and SPL tokens. For SPL tokens, it automatically
handles token account creation and token transfer.

#### Parameters

##### params

The deposit parameters including amount, receiver, token mint address, and revert options

###### amount

`string` = `...`

###### receiver

`string` = `...`

###### revertOptions

\{ `abortAddress?`: `string`; `callOnRevert`: `boolean`; `onRevertGasLimit?`: `string` \| `number` \| `bigint`; `revertAddress?`: `string`; `revertMessage`: `string`; \} = `revertOptionsSchema`

###### revertOptions.abortAddress?

`string` = `...`

###### revertOptions.callOnRevert

`boolean` = `...`

###### revertOptions.onRevertGasLimit?

`string` \| `number` \| `bigint` = `...`

###### revertOptions.revertAddress?

`string` = `...`

###### revertOptions.revertMessage

`string` = `...`

###### token?

`string` = `...`

##### options

Configuration options including chain ID and signer keypair

###### chainId

`string` = `...`

###### signer

`WalletAdapter` \| `Keypair` = `solanaSignerSchema`

#### Returns

`Promise`\<`string`\>

Promise that resolves to the transaction signature

***

### solanaDepositAndCall()

> **solanaDepositAndCall**(`params`, `options`): `Promise`\<`string`\>

Deposits tokens and makes a cross-chain call from Solana to a universal contract on ZetaChain.

This function combines token deposit with a contract call in a single transaction.
It allows you to transfer tokens from Solana to ZetaChain and immediately
execute a function call on the universal contract. Supports both native SOL
and SPL tokens.

#### Parameters

##### params

The deposit and call parameters including amount, receiver, token mint address, function types/values, and revert options

###### amount

`string` = `...`

###### receiver

`string` = `...`

###### revertOptions

\{ `abortAddress?`: `string`; `callOnRevert`: `boolean`; `onRevertGasLimit?`: `string` \| `number` \| `bigint`; `revertAddress?`: `string`; `revertMessage`: `string`; \} = `revertOptionsSchema`

###### revertOptions.abortAddress?

`string` = `...`

###### revertOptions.callOnRevert

`boolean` = `...`

###### revertOptions.onRevertGasLimit?

`string` \| `number` \| `bigint` = `...`

###### revertOptions.revertAddress?

`string` = `...`

###### revertOptions.revertMessage

`string` = `...`

###### token?

`string` = `...`

###### types

`string`[] = `...`

###### values

(`string` \| `bigint` \| `boolean`)[] = `...`

##### options

Configuration options including chain ID and signer keypair

###### chainId

`string` = `...`

###### signer

`WalletAdapter` \| `Keypair` = `solanaSignerSchema`

#### Returns

`Promise`\<`string`\>

Promise that resolves to the transaction signature

***

### suiDeposit()

> **suiDeposit**(`params`, `options`): `Promise`\<`void`\>

Deposits tokens from Sui to ZetaChain.

This function allows you to transfer tokens from Sui to ZetaChain.
It supports both native SUI and other coin types. The function automatically
handles coin splitting and transaction construction.

#### Parameters

##### params

The deposit parameters including amount, receiver, and optional coin type

###### amount

`string` = `...`

###### receiver

`string` = `...`

###### token?

`string` = `...`

##### options

Configuration options including chain ID, gas limit, gateway settings, and signer

###### chainId

`"103"` \| `"105"` \| `"104"` = `...`

###### gasLimit?

`string` = `...`

###### gatewayObject?

`string` = `...`

###### gatewayPackage?

`string` = `...`

###### signer

`Ed25519Keypair` = `...`

#### Returns

`Promise`\<`void`\>

Promise that resolves when the transaction is executed

***

### suiDepositAndCall()

> **suiDepositAndCall**(`params`, `options`): `Promise`\<`void`\>

Deposits tokens and makes a cross-chain call from Sui to a universal contract on ZetaChain.

This function combines token deposit with a contract call in a single transaction.
It allows you to transfer tokens from Sui to ZetaChain and immediately
execute a function call on the universal contract. Supports both native SUI
and other coin types.

#### Parameters

##### params

The deposit and call parameters including amount, receiver, coin type, function types/values

###### amount

`string` = `...`

###### receiver

`string` = `...`

###### token?

`string` = `...`

###### types

`string`[] = `...`

###### values

(`string` \| `bigint` \| `boolean`)[] = `...`

##### options

Configuration options including chain ID, gas limit, gateway settings, and signer

###### chainId

`"103"` \| `"105"` \| `"104"` = `...`

###### gasLimit?

`string` = `...`

###### gatewayObject?

`string` = `...`

###### gatewayPackage?

`string` = `...`

###### signer

`Ed25519Keypair` = `...`

#### Returns

`Promise`\<`void`\>

Promise that resolves when the transaction is executed

***

### tonDeposit()

> **tonDeposit**(`params`, `options`): `Promise`\<`void`\>

Deposits tokens from TON to ZetaChain.

This function allows you to transfer TON tokens from TON blockchain to ZetaChain.
It automatically handles wallet connection and transaction signing.

#### Parameters

##### params

The deposit parameters including amount and receiver address

###### amount

`string` = `...`

###### receiver

`string` = `...`

##### options

Configuration options including chain ID, RPC endpoint, wallet, and API key

###### apiKey?

`string` = `...`

###### chainId

`string` = `...`

###### gateway?

`string` = `...`

###### keyPair?

`KeyPair` = `...`

###### rpc

`string` = `...`

###### signer?

`string` = `...`

###### wallet?

`WalletContractV4` = `...`

#### Returns

`Promise`\<`void`\>

Promise that resolves when the transaction is sent

***

### tonDepositAndCall()

> **tonDepositAndCall**(`params`, `options`): `Promise`\<`void`\>

Deposits tokens and makes a cross-chain call from TON to a universal contract on ZetaChain.

This function combines token deposit with a contract call in a single transaction.
It allows you to transfer TON tokens from TON blockchain to ZetaChain and immediately
execute a function call on the universal contract.

You can provide either:
- `data`: Raw data string for non-EVM chains
- `types` and `values`: For EVM chains, to encode function parameters

#### Parameters

##### params

The deposit and call parameters including amount, receiver, and call data

###### amount

`string` = `...`

###### data?

`string` = `...`

###### receiver

`string` = `...`

###### types?

`string`[] = `...`

###### values?

(`string` \| `bigint` \| `boolean`)[] = `...`

##### options

Configuration options including chain ID, RPC endpoint, wallet, and API key

###### apiKey?

`string` = `...`

###### chainId

`string` = `...`

###### gateway?

`string` = `...`

###### keyPair?

`KeyPair` = `...`

###### rpc

`string` = `...`

###### signer?

`string` = `...`

###### wallet?

`WalletContractV4` = `...`

#### Returns

`Promise`\<`void`\>

Promise that resolves when the transaction is sent

***

### zetachainCall()

> **zetachainCall**(`params`, `options`): `Promise`\<\{ `gasFee`: `bigint`; `gasZRC20`: `string`; `tx`: `ContractTransactionResponse`; \}\>

Makes a cross-chain call from ZetaChain to another chain

This function allows you to call a contract on a destination chain
from a universal contract on ZetaChain without transferring any tokens.
It automatically handles gas fee calculation and approval using the specified ZRC20 token.

#### Parameters

##### params

The call parameters including receiver address, call data, gas options, and ZRC20 token

###### callOptions

\{ `gasLimit`: `string` \| `number` \| `bigint`; `isArbitraryCall`: `boolean`; \} = `callOptionsSchema`

###### callOptions.gasLimit

`string` \| `number` \| `bigint` = `bigNumberishSchema`

###### callOptions.isArbitraryCall

`boolean` = `...`

###### data?

`string` = `...`

###### function?

`string` = `...`

###### receiver

`string` = `...`

###### revertOptions

\{ `abortAddress?`: `string`; `callOnRevert`: `boolean`; `onRevertGasLimit?`: `string` \| `number` \| `bigint`; `revertAddress?`: `string`; `revertMessage`: `string`; \} = `revertOptionsSchema`

###### revertOptions.abortAddress?

`string` = `...`

###### revertOptions.callOnRevert

`boolean` = `...`

###### revertOptions.onRevertGasLimit?

`string` \| `number` \| `bigint` = `...`

###### revertOptions.revertAddress?

`string` = `...`

###### revertOptions.revertMessage

`string` = `...`

###### types?

`string`[] = `...`

###### values?

(`string` \| `bigint` \| `boolean`)[] = `...`

###### zrc20

`string` = `evmAddressSchema`

##### options

Configuration options including signer and optional gateway address

###### gateway?

`string` = `...`

###### signer

`Wallet` = `...`

###### txOptions?

\{ `gasLimit?`: `string` \| `number` \| `bigint`; `gasPrice?`: `string` \| `number` \| `bigint`; `value?`: `string` \| `number` \| `bigint`; \} = `...`

###### txOptions.gasLimit?

`string` \| `number` \| `bigint` = `...`

###### txOptions.gasPrice?

`string` \| `number` \| `bigint` = `...`

###### txOptions.value?

`string` \| `number` \| `bigint` = `...`

#### Returns

`Promise`\<\{ `gasFee`: `bigint`; `gasZRC20`: `string`; `tx`: `ContractTransactionResponse`; \}\>

Promise that resolves to an object containing gas fee, gas ZRC20 address, and transaction receipt

***

### zetachainWithdraw()

> **zetachainWithdraw**(`params`, `options`): `Promise`\<\{ `gasFee`: `bigint`; `gasZRC20`: `string`; `tx`: `ContractTransactionResponse`; \}\>

Withdraws tokens from ZetaChain to a destination chain

This function allows you to transfer ZRC20 tokens from ZetaChain to a destination chain.
It automatically handles gas fee calculation and approval. If the withdrawal token
is the same as the gas token, it combines the approvals into a single transaction.

#### Parameters

##### params

The withdrawal parameters including amount, receiver address, ZRC20 token, and revert options

###### amount

`string` = `...`

###### receiver

`string` = `...`

###### revertOptions

\{ `abortAddress?`: `string`; `callOnRevert`: `boolean`; `onRevertGasLimit?`: `string` \| `number` \| `bigint`; `revertAddress?`: `string`; `revertMessage`: `string`; \} = `revertOptionsSchema`

###### revertOptions.abortAddress?

`string` = `...`

###### revertOptions.callOnRevert

`boolean` = `...`

###### revertOptions.onRevertGasLimit?

`string` \| `number` \| `bigint` = `...`

###### revertOptions.revertAddress?

`string` = `...`

###### revertOptions.revertMessage

`string` = `...`

###### zrc20

`string` = `evmAddressSchema`

##### options

Configuration options including signer and optional gateway address

###### gateway?

`string` = `...`

###### signer

`Wallet` = `...`

###### txOptions?

\{ `gasLimit?`: `string` \| `number` \| `bigint`; `gasPrice?`: `string` \| `number` \| `bigint`; `value?`: `string` \| `number` \| `bigint`; \} = `...`

###### txOptions.gasLimit?

`string` \| `number` \| `bigint` = `...`

###### txOptions.gasPrice?

`string` \| `number` \| `bigint` = `...`

###### txOptions.value?

`string` \| `number` \| `bigint` = `...`

#### Returns

`Promise`\<\{ `gasFee`: `bigint`; `gasZRC20`: `string`; `tx`: `ContractTransactionResponse`; \}\>

Promise that resolves to an object containing gas fee, gas ZRC20 address, and transaction receipt

***

### zetachainWithdrawAndCall()

> **zetachainWithdrawAndCall**(`params`, `options`): `Promise`\<\{ `gasFee`: `bigint`; `gasZRC20`: `string`; `tx`: `ContractTransactionResponse`; \}\>

Withdraws tokens and makes a cross-chain call from ZetaChain to a destination chain

This function combines token withdrawal with a contract call in a single transaction.
It allows you to transfer ZRC20 tokens from ZetaChain to a destination chain and
immediately execute a function call on that chain. It automatically handles gas
fee calculation and approval.

#### Parameters

##### params

The withdrawal and call parameters including amount, receiver address, call data, gas options, and ZRC20 token

###### amount

`string` = `...`

###### callOptions

\{ `gasLimit`: `string` \| `number` \| `bigint`; `isArbitraryCall`: `boolean`; \} = `callOptionsSchema`

###### callOptions.gasLimit

`string` \| `number` \| `bigint` = `bigNumberishSchema`

###### callOptions.isArbitraryCall

`boolean` = `...`

###### data?

`string` = `...`

###### function?

`string` = `...`

###### receiver

`string` = `...`

###### revertOptions

\{ `abortAddress?`: `string`; `callOnRevert`: `boolean`; `onRevertGasLimit?`: `string` \| `number` \| `bigint`; `revertAddress?`: `string`; `revertMessage`: `string`; \} = `revertOptionsSchema`

###### revertOptions.abortAddress?

`string` = `...`

###### revertOptions.callOnRevert

`boolean` = `...`

###### revertOptions.onRevertGasLimit?

`string` \| `number` \| `bigint` = `...`

###### revertOptions.revertAddress?

`string` = `...`

###### revertOptions.revertMessage

`string` = `...`

###### types?

`string`[] = `...`

###### values?

(`string` \| `bigint` \| `boolean`)[] = `...`

###### zrc20

`string` = `evmAddressSchema`

##### options

Configuration options including signer and optional gateway address

###### gateway?

`string` = `...`

###### signer

`Wallet` = `...`

###### txOptions?

\{ `gasLimit?`: `string` \| `number` \| `bigint`; `gasPrice?`: `string` \| `number` \| `bigint`; `value?`: `string` \| `number` \| `bigint`; \} = `...`

###### txOptions.gasLimit?

`string` \| `number` \| `bigint` = `...`

###### txOptions.gasPrice?

`string` \| `number` \| `bigint` = `...`

###### txOptions.value?

`string` \| `number` \| `bigint` = `...`

#### Returns

`Promise`\<\{ `gasFee`: `bigint`; `gasZRC20`: `string`; `tx`: `ContractTransactionResponse`; \}\>

Promise that resolves to an object containing gas fee, gas ZRC20 address, and transaction receipt
