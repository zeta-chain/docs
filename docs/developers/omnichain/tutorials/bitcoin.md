# Call a Contract From Bitcoin

In this tutorial you will create an omnichain contract for minting ERC-20 tokens
on ZetaChain. Omnichain contracts can be called from any connected blockchain,
but in this tutorial you will call the contract from Bitcoin.

Overview:

- A user sends tBTC to a TSS address on Bitcoin with a memo containing an
  omnichain contract address and the recipient's address.
- ZetaChain detects the transaction and calls the `onCrossChainCall` function of
  the omnichain contract.
- The `onCrossChainCall`
  - checks if the cross-chain call was made from Bitcoin. If not, it reverts.
  - mints ERC-20 tokens (the same amount as tBTC sent in the first step) on
    ZetaChain and sends them to the recipient.

## Create the contract

```solidity title="contracts/Minter.sol" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/minter/contracts/Minter.sol
```

Contract's constructor accepts a name of the token, a symbol, a chain ID of the
chain from which the contract is allowed to be called (in our example, we will
provide Bitcoin Testnet's chain ID) and a system contract address.

When `onCrossChainCall` is called, the contract checks if the call was made from
the allowed chain. If not, it reverts. If the call was made from the allowed
chain, the contract converts the `message` from bytes into the `recipient`
address and mints new ERC-20 tokens to that address.

## Create a deployment task

```ts title="tasks/deploy.ts" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/minter/tasks/deploy.ts
```

The deployment task deploys the contract to ZetaChain and returns the contract
address.

We're using the `getAddress` helper to get the system contract address and we
pass it to the contract's deploy function. We also pass 18332 as the chain ID of
the Bitcoin Testnet.

```ts title="hardhat.config.ts"
import "./tasks/deploy";
```

Deploy the contract to ZetaChain.

```
npx hardhat deploy --network zeta_testnet
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully deployed contract on ZetaChain.
📜 Contract address: 0x629eEe97B95Bd6e04B0885De58eF016177a709Ae

🌍 Explorer: https://athens3.explorer.zetachain.com/address/0x629eEe97B95Bd6e04B0885De58eF016177a709Ae
```

## Calling the contract from Bitcoin Testnet

Ensure that you have an account and tBTC on the Bitcoin Testnet. You can get
some from a faucet.

Use the `send-btc` command to send tBTC to the [TSS address](/reference/testnet)
on Bitcoin Testnet set as the `--recipient`:

```
npx hardhat send-btc --amount 0.001 --memo 629eEe97B95Bd6e04B0885De58eF016177a709Ae2cD3D070aE1BD365909dD859d29F387AA96911e1 --recipient tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur
```

The memo contains the following:

- the address of the omnichain contract on ZetaChain that will be called once
  the cross-chain transaction is processed without the `0x` prefix:
  `629eEe97B95Bd6e04B0885De58eF016177a709Ae`.
- a list of arguments that will be passed to the contracts as the `message`
  bytes. In our case, it's a single value, the recipient's address without the
  `0x` prefix: `2cD3D070aE1BD365909dD859d29F387AA96911e1`.

You can learn more about how to construct the memo in the
[Bitcoin section](/developers/omnichain/bitcoin).

The `send-btc` command will return the transaction hash. You can use the `cctx`
commmand to track the status of the cross-chain transaction:

```
npx hardhat cctx --tx TX_HASH
```

Add the token contract addres `0x629eEe97B95Bd6e04B0885De58eF016177a709Ae` to
Metamask (or any other wallet) to be able to check the balance of the ERC-20
token minted by the contract.

Once the transaction is processed, you will be able to see the udpated balance
of the WTBTC token in Metamask.
