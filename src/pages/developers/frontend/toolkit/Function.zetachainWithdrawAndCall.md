[@zetachain/toolkit](toolkit/index.md) / zetachainWithdrawAndCall

# Function: zetachainWithdrawAndCall()

> **zetachainWithdrawAndCall**(`this`, `args`): `Promise`\<`object`\>

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

The instance of the ZetaChain client that contains the signer information.

• **args**

The function arguments.

• **args.amount**: `string`

The amount of ZRC20 tokens to withdraw.

• **args.callOptions**: `CallOptions`

Call options.

• **args.function?**: `string`

The name of the function to be called on the target contract.

• **args.gatewayZetaChain?**: `string`

The address of the ZetaChain gateway contract.

• **args.receiver**: `string`

The address that will receive the withdrawn ZRC20 tokens or the contract to interact with.

• **args.revertOptions**: `RevertOptions`

Options to handle call reversion, including revert address and message.

• **args.txOptions**: `TxOptions`

Transaction options such as gasPrice, nonce, etc.

• **args.types**: `string`[]

JSON string representing the types of the function parameters (e.g., ["uint256", "address"]).

• **args.values**: `ParseAbiValuesReturnType`

The values to be passed to the function (should match the types).

• **args.zrc20**: `string`

The address of the ZRC20 token contract used for the withdrawal and fee payment.

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

zetachainWithdrawAndCall

## Description

Withdraws a specified amount of ZRC20 tokens and makes a function call on the target contract on a connected chain.

## Defined in

[zetachainWithdrawAndCall.ts:39](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/zetachainWithdrawAndCall.ts#L39)
