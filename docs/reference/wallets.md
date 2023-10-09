---
sidebar_position: 4
---

import { AddressConverter } from
"@site/src/components/AddressConverter/AddressConverter";

# Wallets

ZetaChain is an EVM-compatible Cosmos SDK-based blockchain that features
interoperability with Bitcoin. This means that many EVM and Cosmos wallets can
be used to sign transactions and interact with ZetaChain.

To interact with ZetaChain from connected chains, and to interact with Zetachain
directly, we recommend using an EVM wallet.

## EVM Wallets

We suggest the following wallets (although there are plenty of alternatives!):

- [Metamask](https://metamask.io)
- [Coinbase Wallet](https://www.coinbase.com/wallet)

### Adding ZetaChain to Metamask

To add ZetaChain to the Metamask extension wallet follow these steps:

- Learn about
  [how to add a custom network RPC](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)
- Use the following values:
  - Network Name: `ZetaChain Testnet` (or choose another name)
  - New RPC URL: `https://zetachain-athens-evm.blockpi.network/v1/rpc/public`
    (or choose another one from
    [the list](https://www.zetachain.com/docs/reference/api/))
  - Chain ID: `7001`
  - Currency Symbol: `tZETA`
  - Block explorer URL: `https://athens3.explorer.zetachain.com/`

## Bitcoin Wallets

In order to interact with ZetaChain from Bitcoin, you'll need a wallet that
meets certain criteria. You can learn more about it in the
[Bitcoin section](/developers/omnichain/bitcoin/) of the docs.

[XDEFI Wallet](https://xdefi.io) is a popular wallet that will meet those
criteria and you will be able to use it to interact with ZetaChain.

To test ZetaChain's interoperability with Bitcoin, you can use the
`npx hardhat send-btc` available in the smart contract template. Learn more
about it in the [Staking](/developers/omnichain/tutorials/staking).

## Cosmos Wallets

Cosmos wallets can be used to transfer native tokens on ZetaChain. They can also
be used to sign ZetaChain's EVM transactions if the dapp is configured to use a
Cosmos wallet. We recommend using a Cosmos wallet if you're interacting with the
Cosmos side of ZetaChain: native token transfers, governance, groups, staking
tokens, authz.

### Keplr

[Keplr](https://keplr.app/) is a popular extension and mobile wallet for
Cosmos-based chains. It can be used to interact with ZetaChain.

Add ZetaChain to the Keplr browser extension: https://chains.keplr.app/

### Leap

[Leap](https://www.leapwallet.io/) is an extension and mobile wallet for
Cosmos-based chains. Leap lets users view balances, transaction history, send
tokens between accounts, view and vote on governance proposals, view
delegations, and delegate to validators.

Add ZetaChain to the Leap browser extension:
https://developers.leapwallet.io/chain-store

## Address converter

ZetaChain is both a Cosmos chain and an EVM chain, so it's useful to be able to
convert between a bech32 address (`zeta***`, used by Cosmos) and a hex address
(`0x***`, used by EVM). You can use the address converter below to convert
between the two formats.

<AddressConverter />
