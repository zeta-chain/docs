[@zetachain/toolkit](toolkit/index.md) / getZRC20FromERC20

# Function: getZRC20FromERC20()

> **getZRC20FromERC20**(`this`, `erc20`): `Promise`\<`any`\>

Retrieves the ZRC20 contract address for a given ERC20 token.

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **erc20**: `string`

The ERC20 token address.

## Returns

`Promise`\<`any`\>

- The ZRC20 contract address.

## Throws

Will throw an error if the ERC-20 token is not supported.

## Defined in

[getQuote.ts:15](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/getQuote.ts#L15)
