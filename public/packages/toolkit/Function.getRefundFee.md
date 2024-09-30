[@zetachain/toolkit](toolkit/index.md) / getRefundFee

# Function: getRefundFee()

> **getRefundFee**(`this`, `inputZRC20`): `Promise`\<`object`\>

Calculates the refund fee in the input ZRC20 token.

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **inputZRC20**: `string`

The input ZRC20 token address.

## Returns

`Promise`\<`object`\>

- An object containing the refund fee amount and its decimals.

### amount

> **amount**: `any` = `withdrawFee`

### decimals

> **decimals**: `any` = `inputDecimals`

## Defined in

[getQuote.ts:62](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/getQuote.ts#L62)
