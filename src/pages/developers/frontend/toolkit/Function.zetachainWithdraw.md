[@zetachain/toolkit](toolkit/index.md) / zetachainWithdraw

# Function: zetachainWithdraw()

> **zetachainWithdraw**(`this`, `args`): `Promise`\<`object`\>

## Parameters

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

## Returns

`Promise`\<`object`\>

- Returns an object containing the transaction, gas token, and gas fee.

### gasFee

> **gasFee**: `BigNumber`

### gasZRC20

> **gasZRC20**: `string`

### tx

> **tx**: `ContractTransaction`

## Function

zetachainWithdraw

## Description

Withdraws a specified amount of ZRC20 tokens from ZetaChain to a connected chain.

## Defined in

[zetachainWithdraw.ts:33](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/zetachainWithdraw.ts#L33)
