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

[client.ts:87](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L87)

## Properties

### chains

> **chains**: `object`

#### Index Signature

 \[`key`: `string`\]: `any`

#### Defined in

[client.ts:37](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L37)

***

### deposit()

> **deposit**: (`this`, `options`) => `Promise`\<`any`\>

Initiates a deposit transaction of native gas or ERC-20 assets as ZRC-20 from
a connected chain to ZetaChain.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

ZetaChainClient instance.

• **options**

Deposit options.

• **options.amount**: `string`

Amount to be deposited in human readable form. For
example, 1.5 ETH is "1.5".

• **options.chain**: `string`

Label of the connected chain from which the deposit is
made.

• **options.erc20?**: `string`

If an ERC-20 token is being deposited, the address of
the ERC-20 token contract. If not provided, the deposit is assumed to be in
native gas token.

• **options.message?**: [`string`[], `string`[]]

If a message is specified, ZetaChain will deposit
tokens into the `recipient` contract and call with with the message as an argument.

• **options.recipient**: `string`

Recipient address for the deposit. If not provided,
the deposit is made to the signer's address.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the transaction details upon success.

#### Defined in

[client.ts:120](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L120)

***

### getBalances()

> **getBalances**: (`this`, `__namedParameters`) => `Promise`\<[`TokenBalance`](toolkit/Interface.TokenBalance.md)[]\>

Get token balances of all tokens on all chains connected to ZetaChain.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

ZetaChainClient instance.

• **\_\_namedParameters**

• **\_\_namedParameters.btcAddress?**: `string`

• **\_\_namedParameters.evmAddress**: `string`

#### Returns

`Promise`\<[`TokenBalance`](toolkit/Interface.TokenBalance.md)[]\>

#### Defined in

[client.ts:114](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L114)

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

[client.ts:123](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L123)

***

### getEndpoint()

> **getEndpoint**: (`this`, `type`, `network`) => `any`

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **type**: `any`

• **network**: `any`

#### Returns

`any`

#### Defined in

[client.ts:113](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L113)

***

### getFees()

> **getFees**: (`this`, `gas`) => `Promise`\<`Fees`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **gas**: `Number`

#### Returns

`Promise`\<`Fees`\>

#### Defined in

[client.ts:117](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L117)

***

### getForeignCoins()

> **getForeignCoins**: (`this`) => `Promise`\<`any`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

#### Returns

`Promise`\<`any`\>

#### Defined in

[client.ts:115](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L115)

***

### getPools()

> **getPools**: (`this`) => `Promise`\<`any`[]\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[client.ts:118](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L118)

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

> **amount**: `any`

##### decimals

> **decimals**: `any` = `outputDecimals`

#### Defined in

[client.ts:124](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L124)

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

> **amount**: `any` = `withdrawFee`

##### decimals

> **decimals**: `any` = `inputDecimals`

#### Defined in

[client.ts:126](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L126)

***

### getSupportedChains()

> **getSupportedChains**: (`this`) => `Promise`\<`any`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

#### Returns

`Promise`\<`any`\>

#### Defined in

[client.ts:116](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L116)

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

> **amount**: `any`

##### decimals

> **decimals**: `any` = `inputDecimals`

#### Defined in

[client.ts:125](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L125)

***

### getZRC20FromERC20()

> **getZRC20FromERC20**: (`this`, `erc20`) => `Promise`\<`any`\>

Retrieves the ZRC20 contract address for a given ERC20 token.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **erc20**: `string`

The ERC20 token address.

#### Returns

`Promise`\<`any`\>

- The ZRC20 contract address.

#### Throws

Will throw an error if the ERC-20 token is not supported.

#### Defined in

[client.ts:127](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L127)

***

### getZRC20GasToken()

> **getZRC20GasToken**: (`this`, `network`) => `Promise`\<`any`\>

Retrieves the ZRC20 contract address for the gas token of a given network.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **network**: `string`

The network name.

#### Returns

`Promise`\<`any`\>

- The ZRC20 contract address for the gas token.

#### Defined in

[client.ts:128](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L128)

***

### network

> **network**: `string`

#### Defined in

[client.ts:38](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L38)

***

### sendZeta()

> **sendZeta**: (`this`, `options`) => `Promise`\<`any`\>

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

• **options.gasLimit?**: `Number` = `500000`

Optional gas limit on the destination chain.

• **options.recipient**: `string`

Optional recipient address for the token transfer. If not
provided, the token transfer is made to the signer's address.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the transaction details upon success.

#### Defined in

[client.ts:122](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L122)

***

### signer

> **signer**: `any`

#### Defined in

[client.ts:40](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L40)

***

### trackCCTX()

> **trackCCTX**: (`this`, `__namedParameters`) => `Promise`\<`void`\>

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **\_\_namedParameters**

• **\_\_namedParameters.emitter**: `any` = `null`

• **\_\_namedParameters.hash**: `string`

• **\_\_namedParameters.json**: `Boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Defined in

[client.ts:119](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L119)

***

### wallet

> **wallet**: `undefined` \| `Wallet`

#### Defined in

[client.ts:39](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L39)

***

### withdraw()

> **withdraw**: (`this`, `options`) => `Promise`\<`any`\>

Initiates a withdraw transaction of a ZRC-20 token from ZetaChain to a
connected chain as a native gas or ERC-20 token.

#### Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

ZetaChainClient instance.

• **options**

Withdrawal options.

• **options.amount**: `string`

Amount to be withdrawn in human readable form.

• **options.recipient**: `string`

Recipient address for the withdrawal. If not provided,
the withdrawal is made to the signer's address.

• **options.zrc20**: `string`

ZRC-20 token contract address.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the transaction details upon success.

#### Defined in

[client.ts:121](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L121)

## Methods

### getChains()

> **getChains**(): `object`

#### Returns

`object`

#### Defined in

[client.ts:109](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/client.ts#L109)
