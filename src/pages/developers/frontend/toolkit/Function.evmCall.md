[@zetachain/toolkit](toolkit/index.md) / evmCall

# Function: evmCall()

> **evmCall**(`this`, `args`): `Promise`\<`ContractTransaction`\>

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

The instance of the ZetaChain client that contains the signer information.

• **args**

The function arguments.

• **args.gatewayEvm?**: `string`

The address of the EVM gateway contract.

• **args.receiver**: `string`

The address of the target contract or account to call on the EVM chain.

• **args.revertOptions**: `RevertOptions`

Options to handle call reversion, including revert address, message, and gas limit for the revert scenario.

• **args.txOptions**: `TxOptions`

Transaction options such as gasLimit, gasPrice, etc.

• **args.types**: `string`[]

JSON string representing the types of the function parameters (e.g., ["uint256", "address"]).

• **args.values**: `ParseAbiValuesReturnType`

The values to be passed to the function (should match the types).

## Returns

`Promise`\<`ContractTransaction`\>

- Returns the transaction object.

## Function

evmCall

## Description

Calls a universal app contract on ZetaChain.

## Defined in

[evmCall.ts:29](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/evmCall.ts#L29)
