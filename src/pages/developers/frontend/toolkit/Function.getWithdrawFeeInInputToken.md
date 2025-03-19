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

> **amount**: `BigNumber`

### decimals

> **decimals**: `number` = `inputDecimals`

## Defined in

[getQuote.ts:153](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/getQuote.ts#L153)
