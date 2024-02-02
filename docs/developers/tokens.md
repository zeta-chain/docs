---
sidebar_position: 3
---

# Sending and Depositing Tokens

This document describes different kinds of tokens that exist in the ZetaChain
Athens 3 testnet ecosystem.

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

## Wrapped ZETA on ZetaChain

ZETA can exists on ZetaChain in a wrapped form (WZETA) as a
[WETH9 token](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/WZETA.sol).
WZETA is primarily used in internal liquidity pools on ZetaChain paired with
native gas tokens of connected blockchains (for example, gETH/WZETA pair).

To wrap native ZETA and turn it into WZETA, send it to or use the `deposit`
method of the `zetaToken` [contract on ZetaChain](/reference/contracts).

## ZETA Tokens on Connected Blockchains

ZETA tokens on EVM-compatible connected blockchains (like Ethereum, Polygon and
BSC) are implemented as
[ERC-20](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/Zeta.eth.sol)
tokens. You can find the contract addresses of the `zetaToken` on a connected
blockchain on the [contracts page](/reference/contracts).

### Acquiring ZETA on ZetaChain

One way to accquire ZETA on ZetaChain is to swap native gas tokens (like gETH)
on a connected chain's (like Goerli) Uniswap for ZETA. Use the `zetaToken`
[contract address](/reference/contracts) on the connected chain of choice to add
it to [Uniswap's UI](https://app.uniswap.org/#/swap), swap gETH for ZETA, then
send ZETA to ZetaChain.

## Foreign Gas and ERC-20 Tokens on ZetaChain

Native gas tokens (like gETH, tMATIC, tBNB, and tBTC) and whitelisted ERC-20
tokens of connected blockchains are represented on ZetaChain as
[ZRC-20](/developers/omnichain/zrc-20). ZRC-20 is an extension of ERC-20 that
allows depositing tokens to and withdrawing tokens from ZetaChain.

To deposit native gas tokens to ZetaChain, send them to the
[TSS address](/reference/contracts) on a connected chain.

To desposit ERC-20 tokens to ZetaChain, use the `deposit` method of the
[ERC-20 custody contract](/reference/contracts) on a connected chain.

:::warning

Sending native tokens to an ERC-20 custody address will result in loss of funds.

Sending ERC-20 tokens to the TSS address will result in loss of funds.

:::

To withdraw native gas tokens from ZetaChain, call the `withdraw` method of the
ZRC-20 contract.

tBTC is represented on ZetaChain as ZRC-20 as well. To deposit tBTC to ZetaChain
you need to send it to the [TSS address](/reference/contracts) on the Bitcoin
testnet with the recipient's address encoded in the memo. Learn more about this
in the [Bitcoin section](/developers/omnichain/bitcoin).
