[@zetachain/toolkit](toolkit/index.md) / evmDeposit

# Function: evmDeposit()

> **evmDeposit**(`this`, `args`): `Promise`\<`ContractTransaction`\>

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

The address of the receiver or target contract for the deposit.

• **args.revertOptions**: `RevertOptions`

Options to handle call reversion, including revert address, message, and gas limit for the revert scenario.

• **args.txOptions**: `TxOptions`

Transaction options, including gasLimit, gasPrice, etc.

## Returns

`Promise`\<`ContractTransaction`\>

- Returns the transaction object.

## Function

evmDeposit

## Description

Deposits a specified amount of ERC-20 or native gas tokens to a receiver on ZetaChain.

## Defined in

[evmDeposit.ts:30](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/evmDeposit.ts#L30)
