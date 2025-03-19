[@zetachain/toolkit](toolkit/index.md) / ZetaChainClient

# Class: ZetaChainClient

## Constructors

### new ZetaChainClient()

> **new ZetaChainClient**(`params`): [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

Initializes ZetaChainClient instance.

```ts
new ZetaChainClient({
  network: "testnet"
})
```

With an Ethers.js wallet:

```ts
const client = new ZetaChainClient({
  network: "testnet",
  wallet: ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string),
});
```

With a signer:

```ts
const client = new ZetaChainClient({
  network: "testnet",
  signer: await ethers.getSigners(),
});
```

Use a custom RPC endpoint for ZetaChain or any connected chain:

```ts
const client = new ZetaChainClient({
  network: "testnet",
  chains: {
    zeta_testnet: {
      api: {
        url: "https://zetachain-testnet-archive.allthatnode.com:8545/${process.env.KEY}",
        type: "evm",
      },
    },
  },
});
```

#### Parameters

• **params**: [`ZetaChainClientParams`](toolkit/TypeAlias.ZetaChainClientParams.md)

#### Returns

[`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

#### Defined in

[client.ts:145](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L145)

## Properties

### chains

> **chains**: `Chains`

#### Defined in

[client.ts:92](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L92)

***

### evmCall()

> **evmCall**: (`this`, `args`) => `Promise`\<`ContractTransaction`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

The instance of the ZetaChain client that contains the signer information.

• **args**

The function arguments.

• **args.gatewayEvm?**: `string`

The address of the EVM gateway contract.

• **args.receiver**: `string`

The address of the target contract or account to call on the EVM chain.

• **args.revertOptions**: `RevertOptions`

Options to handle call reversion, including revert address, message, and gas limit for the revert scenario.

• **args.txOptions**: `TxOptions`

Transaction options such as gasLimit, gasPrice, etc.

• **args.types**: `string`[]

JSON string representing the types of the function parameters (e.g., ["uint256", "address"]).

• **args.values**: `ParseAbiValuesReturnType`

The values to be passed to the function (should match the types).

#### Returns

`Promise`\<`ContractTransaction`\>

- Returns the transaction object.

#### Function

evmCall

#### Description

Calls a universal app contract on ZetaChain.

#### Defined in

[client.ts:262](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L262)

***

### evmDeposit()

> **evmDeposit**: (`this`, `args`) => `Promise`\<`ContractTransaction`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

The instance of the ZetaChain client that contains the signer information.

• **args**

The function arguments.

• **args.amount**: `string`

The amount of ERC20 tokens or native currency to deposit.

• **args.erc20?**: `string`

The address of the ERC20 token contract. If depositing native currency (e.g., ETH), this can be left empty or undefined.

• **args.gatewayEvm?**: `string`

The address of the ZetaChain gateway contract on the EVM-compatible blockchain.

• **args.receiver**: `string`

The address of the receiver or target contract for the deposit.

• **args.revertOptions**: `RevertOptions`

Options to handle call reversion, including revert address, message, and gas limit for the revert scenario.

• **args.txOptions**: `TxOptions`

Transaction options, including gasLimit, gasPrice, etc.

#### Returns

`Promise`\<`ContractTransaction`\>

- Returns the transaction object.

#### Function

evmDeposit

#### Description

Deposits a specified amount of ERC-20 or native gas tokens to a receiver on ZetaChain.

#### Defined in

[client.ts:263](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L263)

***

### evmDepositAndCall()

> **evmDepositAndCall**: (`this`, `args`) => `Promise`\<`ContractTransaction`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

The instance of the ZetaChain client that contains the signer information.

• **args**

The function arguments.

• **args.amount**: `string`

The amount of ERC20 tokens or native currency to deposit.

• **args.erc20?**: `string`

The address of the ERC20 token contract. If depositing native currency (e.g., ETH), this can be left empty or undefined.

• **args.gatewayEvm?**: `string`

The address of the ZetaChain gateway contract on the EVM-compatible blockchain.

• **args.receiver**: `string`

The address of the receiver contract or account where the function call will be executed.

• **args.revertOptions**: `RevertOptions`

Options to handle call reversion, including revert address, message, and gas limit for the revert scenario.

• **args.txOptions**: `TxOptions`

Transaction options, including gasLimit, gasPrice, etc.

• **args.types**: `string`[]

JSON string representing the types of the function parameters (e.g., ["uint256", "address"]).

• **args.values**: `ParseAbiValuesReturnType`

The values to be passed to the function (should match the types).

#### Returns

`Promise`\<`ContractTransaction`\>

- Returns the transaction object.

#### Function

evmDepositAndCall

#### Description

Deposits a specified amount of ERC-20 or native gas tokens and calls a universal app contract on ZetaChain.

#### Defined in

[client.ts:261](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L261)

***

### getBalances()

> **getBalances**: (`this`, `__namedParameters`) => `Promise`\<`TokenBalance`[]\>

Get token balances of all tokens on all chains connected to ZetaChain.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

ZetaChainClient instance.

• **\_\_namedParameters**

• **\_\_namedParameters.btcAddress?**: `string`

• **\_\_namedParameters.evmAddress?**: `string`

• **\_\_namedParameters.solanaAddress?**: `string`

#### Returns

`Promise`\<`TokenBalance`[]\>

#### Defined in

[client.ts:243](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L243)

***

### getChainId()

> **getChainId**: (`this`, `chainNameOrAlias`) => `null` \| `number`

Get chain ID from a chain label.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

ZetaChainClient instance.

• **chainNameOrAlias**: `string`

Chain label like goerli_testnet

#### Returns

`null` \| `number`

#### Defined in

[client.ts:250](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L250)

***

### getEndpoint()

> **getEndpoint**: (`this`, `type`, `network`) => `string`

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **type**: `string`

• **network**: `string`

#### Returns

`string`

#### Defined in

[client.ts:242](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L242)

***

### getFees()

> **getFees**: (`this`, `gas`) => `Promise`\<`Fees`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **gas**: `number`

#### Returns

`Promise`\<`Fees`\>

#### Defined in

[client.ts:246](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L246)

***

### getForeignCoins()

> **getForeignCoins**: (`this`) => `Promise`\<`ForeignCoin`[]\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

#### Returns

`Promise`\<`ForeignCoin`[]\>

#### Defined in

[client.ts:244](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L244)

***

### getPools()

> **getPools**: (`this`) => `Promise`\<`object`[]\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

#### Returns

`Promise`\<`object`[]\>

#### Defined in

[client.ts:247](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L247)

***

### getQuote()

> **getQuote**: (`this`, `inputAmount`, `inputToken`, `outputToken`) => `Promise`\<`object`\>

Retrieves a quote for swapping input ZRC20 token to output ZRC20 token.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **inputAmount**: `string`

The amount of input ZRC20 token.

• **inputToken**: `string`

• **outputToken**: `string`

#### Returns

`Promise`\<`object`\>

- An object containing the output amount and its decimals.

##### amount

> **amount**: `BigNumber`

##### decimals

> **decimals**: `number` = `outputDecimals`

#### Defined in

[client.ts:251](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L251)

***

### getRefundFee()

> **getRefundFee**: (`this`, `inputZRC20`) => `Promise`\<`object`\>

Calculates the refund fee in the input ZRC20 token.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **inputZRC20**: `string`

The input ZRC20 token address.

#### Returns

`Promise`\<`object`\>

- An object containing the refund fee amount and its decimals.

##### amount

> **amount**: `BigNumber` = `withdrawFee`

##### decimals

> **decimals**: `number` = `inputDecimals`

#### Defined in

[client.ts:253](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L253)

***

### getSupportedChains()

> **getSupportedChains**: (`this`) => `Promise`\<`ObserverSupportedChain`[]\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

#### Returns

`Promise`\<`ObserverSupportedChain`[]\>

#### Defined in

[client.ts:245](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L245)

***

### getWithdrawFeeInInputToken()

> **getWithdrawFeeInInputToken**: (`this`, `inputZRC20`, `outputZRC20`) => `Promise`\<`object`\>

Calculates the withdraw fee in the input ZRC20 token for a given output ZRC20 token.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **inputZRC20**: `string`

The input ZRC20 token address.

• **outputZRC20**: `string`

The output ZRC20 token address.

#### Returns

`Promise`\<`object`\>

- An object containing the withdraw fee amount and its decimals.

##### amount

> **amount**: `BigNumber`

##### decimals

> **decimals**: `number` = `inputDecimals`

#### Defined in

[client.ts:252](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L252)

***

### getZRC20FromERC20()

> **getZRC20FromERC20**: (`this`, `erc20`) => `Promise`\<`string`\>

Retrieves the ZRC20 contract address for a given ERC20 token.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **erc20**: `string`

The ERC20 token address.

#### Returns

`Promise`\<`string`\>

- The ZRC20 contract address.

#### Throws

Will throw an error if the ERC-20 token is not supported.

#### Defined in

[client.ts:254](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L254)

***

### getZRC20GasToken()

> **getZRC20GasToken**: (`this`, `network`) => `Promise`\<`undefined` \| `string`\>

Retrieves the ZRC20 contract address for the gas token of a given network.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **network**: `string`

The network name.

#### Returns

`Promise`\<`undefined` \| `string`\>

- The ZRC20 contract address for the gas token.

#### Defined in

[client.ts:255](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L255)

***

### network

> **network**: `string`

#### Defined in

[client.ts:93](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L93)

***

### sendZeta()

> **sendZeta**: (`this`, `options`) => `Promise`\<`ContractTransaction`\>

Initiates a cross-chain transfer of ZETA tokens from the source chain to the
destination chain.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

ZetaChainClient instance.

• **options**

Send ZETA options.

• **options.amount**: `string`

Amount of ZETA tokens to be sent in human readable form.

• **options.chain**: `string`

Source chain label.

• **options.destination**: `string`

Destination chain label.

• **options.gasLimit?**: `number` = `500000`

Optional gas limit on the destination chain.

• **options.recipient**: `string`

Optional recipient address for the token transfer. If not
provided, the token transfer is made to the signer's address.

#### Returns

`Promise`\<`ContractTransaction`\>

A promise that resolves with the transaction details upon success.

#### Defined in

[client.ts:249](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L249)

***

### signer

> **signer**: `undefined` \| `Signer`

#### Defined in

[client.ts:95](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L95)

***

### solanaAdapter

> **solanaAdapter**: `undefined` \| `WalletContextState`

#### Defined in

[client.ts:97](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L97)

***

### solanaDeposit()

> **solanaDeposit**: (`this`, `args`) => `Promise`\<`string`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **args**

• **args.amount**: `number`

• **args.recipient**: `string`

#### Returns

`Promise`\<`string`\>

#### Defined in

[client.ts:256](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L256)

***

### solanaDepositAndCall()

> **solanaDepositAndCall**: (`this`, `args`) => `Promise`\<`string`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **args**

• **args.amount**: `number`

• **args.recipient**: `string`

• **args.types**: `string`[]

• **args.values**: `ParseAbiValuesReturnType`

#### Returns

`Promise`\<`string`\>

#### Defined in

[client.ts:257](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L257)

***

### solanaWallet

> **solanaWallet**: `undefined` \| `Wallet`

#### Defined in

[client.ts:96](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L96)

***

### trackCCTX()

> **trackCCTX**: (`this`, `__namedParameters`) => `Promise`\<`CCTXs`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **\_\_namedParameters**

• **\_\_namedParameters.emitter**: `null` \| `Emitter` = `null`

• **\_\_namedParameters.hash**: `string`

• **\_\_namedParameters.json**: `boolean` = `false`

#### Returns

`Promise`\<`CCTXs`\>

#### Defined in

[client.ts:248](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L248)

***

### wallet

> **wallet**: `undefined` \| `Wallet`

#### Defined in

[client.ts:94](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L94)

***

### zetachainCall()

> **zetachainCall**: (`this`, `args`) => `Promise`\<`object`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

The instance of the ZetaChain client that contains the signer information.

• **args**

The function arguments.

• **args.callOptions**: `CallOptions`

Call options.

• **args.function**: `string`

The name of the function to be executed on the target contract.

• **args.gatewayZetaChain?**: `string`

The address of the ZetaChain gateway contract.

• **args.receiver**: `string`

The address of the contract or account that will receive the call.

• **args.revertOptions**: `RevertOptions`

Options to handle call reversion, including revert address and message.

• **args.txOptions**: `TxOptions`

Transaction options such as gasPrice, nonce, etc.

• **args.types**: `string`[]

JSON string representing the types of the function parameters (e.g., ["uint256", "address"]).

• **args.values**: `ParseAbiValuesReturnType`

The values to be passed to the function (should match the types).

• **args.zrc20**: `string`

The address of the ZRC20 token contract used for paying gas fees.

#### Returns

`Promise`\<`object`\>

- Returns an object containing the transaction, gas token, and gas fee.

##### gasFee

> **gasFee**: `BigNumber`

##### gasZRC20

> **gasZRC20**: `string`

##### tx

> **tx**: `ContractTransaction`

#### Function

zetachainCall

#### Description

Calls a contract on a connected chain.

#### Defined in

[client.ts:260](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L260)

***

### zetachainWithdraw()

> **zetachainWithdraw**: (`this`, `args`) => `Promise`\<`object`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

The instance of the ZetaChain client that contains the signer information.

• **args**

The function arguments.

• **args.amount**: `string`

The amount of ZRC20 tokens to withdraw.

• **args.gatewayZetaChain?**: `string`

The address of the ZetaChain gateway contract.

• **args.receiver**: `string`

The address that will receive the withdrawn ZRC20 tokens.

• **args.revertOptions**: `RevertOptions`

Options to handle call reversion, including revert address and message.

• **args.txOptions**: `TxOptions`

Transaction options such as gasPrice, nonce, etc.

• **args.zrc20**: `string`

The address of the ZRC20 token contract from which the withdrawal will be made.

#### Returns

`Promise`\<`object`\>

- Returns an object containing the transaction, gas token, and gas fee.

##### gasFee

> **gasFee**: `BigNumber`

##### gasZRC20

> **gasZRC20**: `string`

##### tx

> **tx**: `ContractTransaction`

#### Function

zetachainWithdraw

#### Description

Withdraws a specified amount of ZRC20 tokens from ZetaChain to a connected chain.

#### Defined in

[client.ts:259](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L259)

***

### zetachainWithdrawAndCall()

> **zetachainWithdrawAndCall**: (`this`, `args`) => `Promise`\<`object`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

The instance of the ZetaChain client that contains the signer information.

• **args**

The function arguments.

• **args.amount**: `string`

The amount of ZRC20 tokens to withdraw.

• **args.callOptions**: `CallOptions`

Call options.

• **args.function?**: `string`

The name of the function to be called on the target contract.

• **args.gatewayZetaChain?**: `string`

The address of the ZetaChain gateway contract.

• **args.receiver**: `string`

The address that will receive the withdrawn ZRC20 tokens or the contract to interact with.

• **args.revertOptions**: `RevertOptions`

Options to handle call reversion, including revert address and message.

• **args.txOptions**: `TxOptions`

Transaction options such as gasPrice, nonce, etc.

• **args.types**: `string`[]

JSON string representing the types of the function parameters (e.g., ["uint256", "address"]).

• **args.values**: `ParseAbiValuesReturnType`

The values to be passed to the function (should match the types).

• **args.zrc20**: `string`

The address of the ZRC20 token contract used for the withdrawal and fee payment.

#### Returns

`Promise`\<`object`\>

- Returns an object containing the transaction, gas token, and gas fee.

##### gasFee

> **gasFee**: `BigNumber`

##### gasZRC20

> **gasZRC20**: `string`

##### tx

> **tx**: `ContractTransaction`

#### Function

zetachainWithdrawAndCall

#### Description

Withdraws a specified amount of ZRC20 tokens and makes a function call on the target contract on a connected chain.

#### Defined in

[client.ts:258](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L258)

## Methods

### getChains()

> **getChains**(): `Chains`

#### Returns

`Chains`

#### Defined in

[client.ts:228](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L228)

***

### getGatewayAddress()

> **getGatewayAddress**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[client.ts:179](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L179)

***

### getSolanaPublicKey()

> **getSolanaPublicKey**(): `null` \| `PublicKey`

#### Returns

`null` \| `PublicKey`

#### Defined in

[client.ts:236](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L236)

***

### isSolanaWalletConnected()

> **isSolanaWalletConnected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client.ts:232](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/client.ts#L232)
