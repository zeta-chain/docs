[@zetachain/toolkit](toolkit/index.md) / getZRC20FromERC20

# Function: getZRC20FromERC20()

> **getZRC20FromERC20**(`this`, `erc20`): `Promise`\<`string`\>

Retrieves the ZRC20 contract address for a given ERC20 token.

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **erc20**: `string`

The ERC20 token address.

## Returns

`Promise`\<`string`\>

- The ZRC20 contract address.

## Throws

Will throw an error if the ERC-20 token is not supported.

## Defined in

[getQuote.ts:56](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/getQuote.ts#L56)
