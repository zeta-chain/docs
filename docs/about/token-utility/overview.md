---
sidebar_position: 1
---

# Token Utility

## Overview

This section goes over the function of ZETA and how it is used across components
of the ZetaChain ecosystem.

ZetaChain’s mission is to serve as a platform for universal access, simplicity,
and utility across any blockchains. ZetaChain is a Proof-of-Stake blockchain
designed for interoperability, supporting the creation of omnichain dApps that
can span any chain, including the Bitcoin blockchain, where all transaction,
incentives, data security, and cross-chain interaction requires ZETA tokens to
function.

Token utility of a blockchain ecosystem involves a vast range of topics and
concepts. ZETA token utility is based on extensive research, past work, and
prior technologies. The ecosystem is designed and aimed to scale with the
increase of both utility and usage of ZetaChain. The protocol itself has an
in-built governance protocol that allows the network to modify and upgrade
itself based on needs of ecosystem and network participants in order to support
the public good and functionality of the ZetaChain Network.

## Core Network Functionality

ZetaChain’s network can read from or write to any connected chain through its
node architecture. ZetaChain thus allows smart contracts on ZetaChain to manage
assets on connected chains from a single place, using a new ERC-20 compatible
token standard called ZRC-20. Liquidity in the Threshold Signature Scheme (TSS)
addresses are managed by a distributed network of validators in a decentralized
manner. Assets are deposited into TSS addresses and ERC-20 custody contracts on
connected chains, and those assets are thereby usable at a native level by logic
in a ZetaChain smart contract. Users on external chains may send messages to
either simply transfer value and data to other connected chains (”cross-chain
messaging”), or to call contracts on ZetaChain’s EVM that can orchestrate
liquidity on any connected chain. They may also connect directly to ZetaChain’s
EVM using a wallet like MetaMask and interact with EVM contracts directly.
Together, ZetaChain’s network functionality provides a complete platform for
developers to create future-proof, chain-agnostic apps and more with a single
deployment on ZetaChain. These single contract deployments are referred to as
omnichain smart contracts.

In-turn, ZetaChain unlocks use cases and utility such as Bitcoin Smart Contracts
and programmability together with all other chains it connects to, apps
accessible from any chain, fewer steps and simpler cross-chain transactions, and
more.

## Primary Participants

There are 3 primary participants

- ZetaChain Core Validators: who secure and maintain the network.
- ZetaChain Observer-Signers: who secure and maintain observation of external
  chains and the TSS addresses and thereby the cross-chain functionality of the
  network. These two roles are batched into a single set of validators, but may
  be decoupled later.
- Transacting users: who pay fees to transact on ZetaChain zEVM and for
  cross-chain tractions.
- ZETA token holders/delegators: who can participate in governance and security
  of the network.

## ZETA Utility

The ZetaChain ecosystems as it relates to ZETA functions primarily through these
core pillars:

- The protocol provides fixed block rewards/incentives emissions of ZETA to
  validators that will transition to variable inflation after the initial fixed
  pool. These incentives (and slashing) underlie the proof-of-stake blockchain
  that aligns and secures the protocol.
- Transaction (gas) fees paid in ZETA are distributed to validators, delegators,
  and other network participants in the Proof of Stake and protect the network
  from spam and DDOS attacks.
- For cross-chain messaging, ZETA is burned on the source and minted on the
  destination, not only used for bundling gas but as the **medium** of value
  transfer between connected chains to facilitate value transfer without the
  creation of new wrapped assets.
- Core Liquidity Pools comprised of ZETA and other external chain assets let
  users transact on ZetaChain and between connected chains (for gas on outbound
  transactions) through ZetaChain. The liquidity providers (LPs) receive trading
  fees and other liquidity incentives to provide liquidity for this in the form
  of native tokens, like native gas tokens.

## Dive Deeper

To learn more about all of the above, check out the following documents on
different components and concepts of the ZETA Utility and Ecosystem.
