# Types of Transactions

## Depositing to EOA

### ✅ Native gas token to TSS with empty input data

To deposit native gas tokens from a connected chain to ZetaChain make a token
transfer to the TSS address on the connected chain.

When depositing from an EVM chain you don't have to specify the recipient in the
input data. If the input data is empty, the sender address will be used as the
recipient address.

When depositing from Bitcoin you must specify the recipient address in the memo.

```
npx hardhat deposit --amount 0.1 --network mumbai_testnet
```

https://mumbai.polygonscan.com/tx/0x4b49a681cb04b87839f537462dae3e6a0d05d324970fe051a8bc56a752a02a3e

### ✅ Native gas token to TSS with recipient in input data

When depositing from an EVM chain you can optionally specify a recipient address
in the input data (first 20 bytes).

```
npx hardhat deposit --amount 0.1 --network mumbai_testnet --recipient 0x4955a3F38ff86ae92A914445099caa8eA2B9bA32
```

https://mumbai.polygonscan.com/tx/0x9fe3754d2981754d675b63f8659711dc44a4d89be03448b22d746b10db7e5faf

### ❌ Native gas token to TSS with no recipient and a message

When the input data is not empty and the first 20 bytes cannot be decoded as a
hex address, the deposit will be reverted.

```
npx hardhat deposit --amount 0.1 --network mumbai_testnet --message '[["string"], ["hello"]]'
```

https://mumbai.polygonscan.com/tx/0x2ce67a5ae1bc6545ff245a12860d6d70de020c4ff10d719fae0df7e1aea319a8

### ✅ USDC to ERC-20 custody contract with no input data

Supported ERC-20 can be deposited to ZetaChain by calling the `deposit` method
of the ERC-20 custody contract on a connected chain.

```
npx hardhat deposit --amount 2 --network mumbai_testnet --erc20 0x9999f7fea5938fd3b1e26a12c3f2fb024e194f97
```

https://mumbai.polygonscan.com/tx/0x06f99cd96623fbab566f37e5865dbe72bc4b39909a014b7d2ed7ed80c3a4d64e

### ❌ USDC to ERC-20 сustody сontract with a message

Depositing ERC-20 to an EOA with a message will result in a transaction revert.

```
npx hardhat deposit --amount 2 --network mumbai_testnet --erc20 0x9999f7fea5938fd3b1e26a12c3f2fb024e194f97 --message '[["string"], ["hello"]]' --recipient 0x4955a3F38ff86ae92A914445099caa8eA2B9bA32
```

https://mumbai.polygonscan.com/tx/0x775fe9b1664813f9e54286a4ec889cfd7e0b7344cffd25338882c93b5d97cefe

## Depositing to Omnichain Contract

### ✅ Native gas token to TSS with recipient and valid message

To deposit native gas tokens from a connected chain and call an omnichain
contract on ZetaChain make a token transfer to the TSS address on the connected
chain and specify omnichain contract address as the first 20 bytes of the input
data and provide a valid message.

This is an example deposit and call of
[the example omnichain swap contract](/developers/omnichain/tutorials/swap/).

```
npx hardhat deposit --amount 10 --network mumbai_testnet --recipient 0x20C4770A73DF5e2ab4B38c08d1055c2173034257 --message '[["address", "bytes"], ["0x13A0c5930C028511Dc02665E7285134B6d11A5f4", "0x4955a3F38ff86ae92A914445099caa8eA2B9bA32"]]'
```

https://mumbai.polygonscan.com/tx/0x747eca013dcbf66c044739e9d839a0c6960d132e124e6ff349c33bff8db0c4a8

### ✅ Native gas token to TSS with multiple outputs

A single deposit and call transaction can result in multiple outbound
transactions triggering outputs on multiple connected chains.

This is an example deposit and call of
[the example omnichain multioutput contract](/omnichain/tutorials/single-input-multiple-output/).

```
npx hardhat deposit --amount 50 --network mumbai_testnet --recipient 0xa573Df1F0729FE6F1BD69b0a5dbFE393e6e09f47 --message '[["address", "bytes", "bytes"], ["0x4955a3F38ff86ae92A914445099caa8eA2B9bA32", "0x746231713873687a663761666333726877386e367736656333327338683665326d727730373764306767", "0x000000000000000000000000d97b1de3619ed2c6beb3860147e30ca8a7dc989100000000000000000000000065a45c57636f9bcced4fe193a602008578bca90b"]]'
```

https://mumbai.polygonscan.com/tx/0x9b4ee1e6a63e20a290f8cf1660dae7954202c2554f891e06c2305e9a6e46d0ad

### ❌ USDC with recipient and valid message

:::warning

This should succeed, but it fails:
https://github.com/zeta-chain/node/issues/1906

:::

```
npx hardhat deposit --amount 10 --network mumbai_testnet --recipient 0x20C4770A73DF5e2ab4B38c08d1055c2173034257 --message '[["address", "bytes"], ["0x13A0c5930C028511Dc02665E7285134B6d11A5f4", "0x4955a3F38ff86ae92A914445099caa8eA2B9bA32"]]' --e
rc20 0x9999f7fea5938fd3b1e26a12c3f2fb024e194f97
```

https://mumbai.polygonscan.com/tx/0x350c8b57126ccfafbd4de0ab309e89a7a367ba1a1d14f483c2afc85f13986f67

### ❌ Native gas token to TSS with recipient and invalid message

If an omnichain contract expects a specific message, an invalid message will
trigger a contract revert, resulting in a reverted deposit.

```
npx hardhat deposit --amount 0.1 --network mumbai_testnet --recipient 0x20C4770A73DF5e2ab4B38c08d1055c2173034257
```

https://mumbai.polygonscan.com/tx/0x2443b7b0ecb6e3d40f02b7e353675aa7853e99a54a86249d97cd44998250c79f

## Withdrawing

### ✅ Withdrawing native gas token ZRC-20 from ZetaChain

To withdraw native gas tokens ZRC-20 from ZetaChain to a connected chain, call
the `withdraw` method of the ZRC-20 token contract on ZetaChain.

The withdraw amount must be higher than
[the withdraw fee](/developers/omnichain/gas-fees/). Each ZRC-20 token has its
own withdraw fee.

```
npx hardhat withdraw --amount 10 --zrc20 0x48f80608B672DC30DC7e3dbBd0343c5F02C738Eb --network zeta_testnet
```

https://athens.explorer.zetachain.com/cc/tx/0x118bcfbf3b7f54eca1c138fe3832e843fff523a89f4d506d35be6981a8b944f1

### ✅ Withdrawing ERC-20 (USDC) ZRC-20 from ZetaChain

To withdraw ERC-20 ZRC-20 from ZetaChain to a connected chain, call the
`withdraw` method of the ZRC-20 token contract on ZetaChain.

Withdraw fee for ERC-20 ZRC-20 is denominated in the connected chain's native
gas token. For example, for ZRC-20 USDC from Ethereum the withdraw fee is
denominated in ETH.

```
npx hardhat withdraw --amount 2 --zrc20 0x91d4F0D54090Df2D81e834c3c8CE71C6c865e79F --network zeta_testnet
```

https://athens.explorer.zetachain.com/cc/tx/0x4721f2da8b9dcbb803a7116871aba156a5fc23452dcf7c53e4e858e6006f27e3
