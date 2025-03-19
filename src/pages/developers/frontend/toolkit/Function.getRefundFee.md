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

> **amount**: `BigNumber` = `withdrawFee`

### decimals

> **decimals**: `number` = `inputDecimals`

## Defined in

[getQuote.ts:106](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/getQuote.ts#L106)
