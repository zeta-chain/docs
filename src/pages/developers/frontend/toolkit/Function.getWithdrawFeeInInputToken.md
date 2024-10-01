[@zetachain/toolkit](toolkit/index.md) / getWithdrawFeeInInputToken

# Function: getWithdrawFeeInInputToken()

> **getWithdrawFeeInInputToken**(`this`, `inputZRC20`, `outputZRC20`): `Promise`\<`object`\>

Calculates the withdraw fee in the input ZRC20 token for a given output ZRC20 token.

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

• **inputZRC20**: `string`

The input ZRC20 token address.

• **outputZRC20**: `string`

The output ZRC20 token address.

## Returns

`Promise`\<`object`\>

- An object containing the withdraw fee amount and its decimals.

### amount

> **amount**: `any`

### decimals

> **decimals**: `any` = `inputDecimals`

## Defined in

[getQuote.ts:103](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/getQuote.ts#L103)
