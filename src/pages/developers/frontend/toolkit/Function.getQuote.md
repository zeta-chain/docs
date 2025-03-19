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

> **amount**: `BigNumber`

### decimals

> **decimals**: `number` = `outputDecimals`

## Defined in

[getQuote.ts:202](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/getQuote.ts#L202)
