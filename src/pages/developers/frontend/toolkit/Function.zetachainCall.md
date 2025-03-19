[@zetachain/toolkit](toolkit/index.md) / zetachainCall

# Function: zetachainCall()

> **zetachainCall**(`this`, `args`): `Promise`\<`object`\>

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

The instance of the ZetaChain client that contains the signer information.

• **args**

The function arguments.

• **args.callOptions**: `CallOptions`

Call options.

• **args.function**: `string`

The name of the function to be executed on the target contract.

• **args.gatewayZetaChain?**: `string`

The address of the ZetaChain gateway contract.

• **args.receiver**: `string`

The address of the contract or account that will receive the call.

• **args.revertOptions**: `RevertOptions`

Options to handle call reversion, including revert address and message.

• **args.txOptions**: `TxOptions`

Transaction options such as gasPrice, nonce, etc.

• **args.types**: `string`[]

JSON string representing the types of the function parameters (e.g., ["uint256", "address"]).

• **args.values**: `ParseAbiValuesReturnType`

The values to be passed to the function (should match the types).

• **args.zrc20**: `string`

The address of the ZRC20 token contract used for paying gas fees.

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

zetachainCall

## Description

Calls a contract on a connected chain.

## Defined in

[zetachainCall.ts:38](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/zetachainCall.ts#L38)
