[@zetachain/toolkit](toolkit/index.md) / deposit

# Function: deposit()

> **deposit**(`this`, `options`): `Promise`\<`any`\>

Initiates a deposit transaction of native gas or ERC-20 assets as ZRC-20 from
a connected chain to ZetaChain.

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

ZetaChainClient instance.

• **options**

Deposit options.

• **options.amount**: `string`

Amount to be deposited in human readable form. For
example, 1.5 ETH is "1.5".

• **options.chain**: `string`

Label of the connected chain from which the deposit is
made.

• **options.erc20?**: `string`

If an ERC-20 token is being deposited, the address of
the ERC-20 token contract. If not provided, the deposit is assumed to be in
native gas token.

• **options.message?**: [`string`[], `string`[]]

If a message is specified, ZetaChain will deposit
tokens into the `recipient` contract and call with with the message as an argument.

• **options.recipient**: `string`

Recipient address for the deposit. If not provided,
the deposit is made to the signer's address.

## Returns

`Promise`\<`any`\>

A promise that resolves with the transaction details upon success.

## Defined in

[deposit.ts:29](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/deposit.ts#L29)
