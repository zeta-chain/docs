---
sidebar_position: 3
---

# Sending and Depositing Tokens

This document describes different kinds of tokens that exist in the ZetaChain
Athens 3 testnet ecosystem.

Code blocks with `hardhat` commands show helpful utilities for sending tokens
available with the
[smart contract template](https://github.com/zeta-chain/template).

## Native ZETA Token on ZetaChain

The native token of the ZetaChain is called ZETA. It is a staking token, and is
used to pay for transaction fees. ZetaChain node is built with Cosmos SDK
framework and the ZETA token is implemented as a `sdk.Coin`. ZETA is the
user-friendly symbol for the token, and the on-chain denom is `azeta`.

1 ZETA = 10¹⁸ azeta.

To query for account balance you can use the Cosmos HTTP API
[`balances` endpoint](https://zetachain-athens.blockpi.network/lcd/v1/public/cosmos/bank/v1beta1/balances/zeta19nfaqu9wr0fktyyampva98ec025kjy0phww5um):

```json
{
  "balances": [
    {
      "denom": "azeta",
      "amount": "10000000000000000000"
    }
  ]
}
```

To convert the value amount from `azeta` to ZETA, divide it by 10¹⁸. In the
example above the balance is 10 ZETA.

Sending ZETA from ZetaChain to Goerli:

```
npx hardhat send-zeta --amount 1 --network zeta_testnet --destination goerli_testnet
```

`send-zeta` sends native ZETA to the wrapped ZETA contract on ZetaChain,
approves the wrapped ZETA to be spent by the
[connector](/developers/cross-chain-messaging/connector) contract, then finally
calls the connector's `send` method to send the wrapped ZETA to the connected
chain.

## Wrapped ZETA on ZetaChain

ZETA can exists on ZetaChain in a wrapped form (WZETA) as a
[WETH9 token](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/WZETA.sol).
WZETA is primarily used in internal liquidity pools on ZetaChain paired with
native gas tokens of connected blockchains (for example, gETH/WZETA pair).

To wrap native ZETA and turn it into WZETA, send it to the `zetaToken`
[contract on Zetachain](/reference/testnet).

## ZETA Tokens on Connected Blockchains

ZETA tokens on EVM-compatible connected blockchains (like Ethereum, Polygon and
BSC) are implemented as
[ERC-20](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/Zeta.eth.sol)
tokens. You can find the contract addresses of the `zetaToken` on a connected
blockchain on the [testnet page](/reference/testnet).

Sending ZETA from Goerli to ZetaChain:

```
npx hardhat send-zeta --amount 1 --network goerli_testnet --destination zeta_testnet
```

Note that as a result of the `send-zeta` command above you will receive native
ZETA on ZetaChain already unwrapped.

Sending ZETA from Goerli to BSC testnet:

```
npx hardhat send-zeta --amount 1 --network goerli_testnet --destination bsc_testnet
```

### Acquiring ZETA on ZetaChain

One way to accquire ZETA on ZetaChain is to swap native gas tokens (like gETH)
on a connected chain's (like Goerli) Uniswap for ZETA. Use the `zetaToken`
[contract address](/reference/testnet) on the connected chain of choice to add
it to [Uniswap's UI](https://app.uniswap.org/#/swap), swap gETH for ZETA, then
send ZETA to ZetaChain using the `send-zeta` command described above.

## Foreign Tokens on ZetaChain

Native gas tokens of connected blockchains (like gETH, tMATIC, tBNB, and tBTC)
are represented on ZetaChain as [ZRC-20](/developers/omnichain/zrc-20). ZRC-20
is an extension of ERC-20 that allows depositing tokens to and withdrawing
tokens from ZetaChain.

To deposit tokens to ZetaChain, send them to the
[`tss` address](/reference/testnet) on a connected chain. To withdraw native gas
tokens from ZetaChain, call the `withdraw` method of the ZRC-20 contract.

Depositing gETH to ZetaChain as ZRC-20:

```
npx hardhat send-zrc20 --amount 1 --network goerli_testnet --destination zeta_testnet
```

Withdrawing ZRC-20 from ZetaChain go Goerli as gETH:

```
npx hardhat send-zrc20 --amount 1 --network zeta_testnet --destination goerli_testnet
```

tBTC is represented on ZetaChain as ZRC-20 as well. To deposit tBTC to ZetaChain
you need to send it to the [`tss` address](/reference/testnet) on the Bitcoin
testnet with the recipient's address encoded in the memo. Learn more about this
in the [Bitcoin section](/developers/omnichain/bitcoin).

Depositing tBTC from the Bitcoin testnet to ZetaChain:

```
npx hardhat send-btc --amount 1 --recipient <TSS_ADDRESS> --memo <RECIPIENT_ADDRESS>
```
