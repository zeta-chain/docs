[@zetachain/toolkit](toolkit/index.md) / evmDepositAndCall

# Function: evmDepositAndCall()

> **evmDepositAndCall**(`this`, `args`): `Promise`\<`ContractTransaction`\>

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

The instance of the ZetaChain client that contains the signer information.

• **args**

The function arguments.

• **args.amount**: `string`

The amount of ERC20 tokens or native currency to deposit.

• **args.erc20?**: `string`

The address of the ERC20 token contract. If depositing native currency (e.g., ETH), this can be left empty or undefined.

• **args.gatewayEvm?**: `string`

The address of the ZetaChain gateway contract on the EVM-compatible blockchain.

• **args.receiver**: `string`

The address of the receiver contract or account where the function call will be executed.

• **args.revertOptions**: `RevertOptions`

Options to handle call reversion, including revert address, message, and gas limit for the revert scenario.

• **args.txOptions**: `TxOptions`

Transaction options, including gasLimit, gasPrice, etc.

• **args.types**: `string`[]

JSON string representing the types of the function parameters (e.g., ["uint256", "address"]).

• **args.values**: `ParseAbiValuesReturnType`

The values to be passed to the function (should match the types).

## Returns

`Promise`\<`ContractTransaction`\>

- Returns the transaction object.

## Function

evmDepositAndCall

## Description

Deposits a specified amount of ERC-20 or native gas tokens and calls a universal app contract on ZetaChain.

## Defined in

[evmDepositAndCall.ts:33](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/evmDepositAndCall.ts#L33)
