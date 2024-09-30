[@zetachain/toolkit](toolkit/index.md) / getQuote

# Function: getQuote()

> **getQuote**(`this`, `inputAmount`, `inputToken`, `outputToken`): `Promise`\<`object`\>

Retrieves a quote for swapping input ZRC20 token to output ZRC20 token.

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **inputAmount**: `string`

The amount of input ZRC20 token.

• **inputToken**: `string`

• **outputToken**: `string`

## Returns

`Promise`\<`object`\>

- An object containing the output amount and its decimals.

### amount

> **amount**: `any`

### decimals

> **decimals**: `any` = `outputDecimals`

## Defined in

[getQuote.ts:144](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/getQuote.ts#L144)
