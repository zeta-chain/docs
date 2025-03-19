[@zetachain/toolkit](toolkit/index.md) / sendZeta

# Function: sendZeta()

> **sendZeta**(`this`, `options`): `Promise`\<`ContractTransaction`\>

Initiates a cross-chain transfer of ZETA tokens from the source chain to the
destination chain.

## Parameters

• **this**: [`ZetaChainClient`](toolkit/Class.ZetaChainClient.md)

ZetaChainClient instance.

• **options**

Send ZETA options.

• **options.amount**: `string`

Amount of ZETA tokens to be sent in human readable form.

• **options.chain**: `string`

Source chain label.

• **options.destination**: `string`

Destination chain label.

• **options.gasLimit?**: `number` = `500000`

Optional gas limit on the destination chain.

• **options.recipient**: `string`

Optional recipient address for the token transfer. If not
provided, the token transfer is made to the signer's address.

## Returns

`Promise`\<`ContractTransaction`\>

A promise that resolves with the transaction details upon success.

## Defined in

[sendZeta.ts:28](https://github.com/zeta-chain/toolkit/blob/542ef856894da0ed38ef2a757d2c0d70c2bb020d/packages/client/src/sendZeta.ts#L28)
