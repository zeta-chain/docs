---
sidebar_position: 2
---

import ForeignCoinsTable from "@site/src/components/ForeignCoins/ForeignCoins";

# ZRC-20 on ZetaChain

ZRC-20 is a token standard integrated into ZetaChain's omnichain smart contract
platform. With ZRC-20, developers can build dApps that orchestrate native assets
on any connected chain. This makes building Omnichain DeFi protocols and dApps
such as Omnichain DEXs, Omnichain Lending, Omnichain Portfolio Management, and
anything else that involves fungible tokens on multiple chains from a single
place extremely simple — as if they were all on a single chain.

![zeta-evm](/img/graphs/zrc-20-header.svg)

## Summary

Native gas tokens of connected blockchains and whitelisted ERC-20 tokens can be
deposited to ZetaChain as ZRC-20 tokens. During the deposit process, the
native/ERC-20 tokens are transferred to and locked in the TSS address/ERC-20
custody contract and ZRC-20 tokens are minted on ZetaChain and deposited to the
recipient address.

ZRC-20 tokens can be withdrawn from ZetaChain to connected blockchains. During
the withdrawal process, ZRC-20 tokens are burnt on ZetaChain and native/ERC-20
tokens are transferred to the recipient address on the connected chain from a
TSS address/ERC-20 custody contract.

ZRC-20 tokens can only be minted by the ZetaChain protocol. An ERC-20 token
deployed on ZetaChain does not have the properties of ZRC-20 and can't be
withdrawn from ZetaChain to a connected chain.

The "same" ERC-20 token from two connected blockchains is represented as two
different ZRC-20 tokens on ZetaChain. For example, USDT from Ethereum is
represented as ZRC-20 USDT from Ethereum, and USDT from BSC is represented as
ZRC-20 USDT from BSC. They are not considered the same asset by ZetaChain, but
they can be swapped. That's how the transfer of the "same" ERC-20 asset can be
implemented on ZetaChain: by depositing an ERC-20 (chain A), swapping this
ZRC-20 (chain A) to an ZRC-20 (chain B), and withdrawing the ZRC-20 (chain B) to
chain B as ERC-20.

## Supported Assets

A list of currently supported assets:

<ForeignCoinsTable />

New assets can be added or removed by broadcasting a transaction with a
corresponding message of the
[`fungible` module](/architecture/modules/fungible/messages/) on ZetaChain.

## Introduction

At a high-level, ZRC-20 tokens are an extension of the standard
[ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
tokens found in the Ethereum ecosystem, ZRC-20 tokens have the added ability to
manage assets on all ZetaChain-connected chains. Any fungible token, including
Bitcoin, ETH, other gas assets and ERC-20-equivalents on other chains, may be
represented on ZetaChain as a ZRC-20 and orchestrated as if it were any other
fungible token (like an ERC-20).

## Interface

ZRC-20 is based on ERC-20, with three additional functions and some associated
events for integration with Cross-Chain Transactions (CCTXs) in ZetaChain (see
the
[`IZRC20` interface](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/interfaces/IZRC20.sol)).

Comparing ZRC-20 to ERC-20, there are additional external functions to deposit
and withdraw, and additional events for each of them. This makes ZRC-20
completely compatible with any applications built for ERC-20s, but with an
extremely simple interface to also function in an omnichain way.

## Depositing Native Gas Tokens as ZRC-20

To deposit a native gas token (like gETH, tMATIC, tBNB, or tBTC) to ZetaChain,
send it to the [TSS address](/reference/contracts) on a connected chain.

If the input data field of the transaction is empty, the token will be deposited
to the sender's address on ZetaChain.

If the input data field is not empty, the protocol looks up the first 20 bytes
of the input data field. If the first 20 bytes correspond to an EOA address on
ZetaChain, the token will be deposited to that address. If the first 20 bytes
correspond to a contract address on ZetaChain, the token will be deposited to
that contract and the `onCrossChainCall` function of that contract will be
called with the remaining input data as the `message`.

## Depositing Supported ERC-20 Tokens as ZRC-20

To deposit a supported ERC-20 token to ZetaChain, use the `deposit` method of
the [ERC-20 custody contract](/reference/contracts) on a connected chain.

The `deposit` method accepts the following parameters:

- `recipient`: the address on ZetaChain to deposit the tokens to. If the
  recipient is an EOA, the tokens will be deposited to the recipient's address.
  If the recipient is a contract, the tokens will be deposited to the contract
  and the `onCrossChainCall` function of that contract will be called with the
  `message` as an argument.
- `asset`: the address of the ERC-20 token to deposit.
- `amount`: the amount of tokens to deposit.
- `message`: an arbitrary message to be passed to the `onCrossChainCall`
  function of the recipient contract. If the recipient is an EOA, the message
  should be empty.

## Withdrawing ZRC-20 Tokens from ZetaChain

ZRC-20 tokens, which include those representing native gas tokens as well as
ERC-20 tokens, can be withdrawn from ZetaChain by calling the `withdraw` method
on the ZRC-20 contract.

This method burns the tokens and emits a `Withdrawal` event. This event will
trigger a CCTX from ZetaChain to the connected chain from which the token was
deposited. After the CCTX is processed the token amount will be transferred to
the recipient address on the connected chain either from a TSS address (for
native gas tokens) or from the ERC-20 custody contract (for ERC-20 tokens).

Check out the [Swap tutorial](/developers/omnichain/tutorials/swap) to learn how
to build omnichain contracts that accept token deposits form connected chains,
swap between ZRC-20 tokens using the internal liquidity pools on ZetaChain, and
withdraw them to connected chains.

## Liquidity Cap

Each ZRC-20 has a total cap on the number of deposited tokens that the protocol
can accept. Any assets beyond this deposited to ZetaChain from external chains
will be returned to the sender. You can view the caps on the explorer
[here](https://explorer.zetachain.com/liquidity).
