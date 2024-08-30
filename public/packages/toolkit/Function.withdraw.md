[@zetachain/toolkit](toolkit/index.md) / withdraw

# Function: withdraw()

> **withdraw**(`this`, `options`): `Promise`\<`any`\>

Initiates a withdraw transaction of a ZRC-20 token from ZetaChain to a
connected chain as a native gas or ERC-20 token.

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

ZetaChainClient instance.

• **options**

Withdrawal options.

• **options.amount**: `string`

Amount to be withdrawn in human readable form.

• **options.recipient**: `string`

Recipient address for the withdrawal. If not provided,
the withdrawal is made to the signer's address.

• **options.zrc20**: `string`

ZRC-20 token contract address.

## Returns

`Promise`\<`any`\>

A promise that resolves with the transaction details upon success.

## Defined in

[withdraw.ts:19](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/withdraw.ts#L19)
