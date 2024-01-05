# Intro to Zetachain


## Introduction

<details>
<summary>What is ZetaChain?</summary>
<br>
ZetaChain is the foundational, public blockchain that enables omnichain, generic smart contracts and messaging between any blockchain. It solves the problems of “cross-chain” and “multi-chain” and aims to open the crypto and global financial ecosystem to anyone. ZetaChain envisions and supports a truly fluid, multi-chain crypto ecosystem, where users and developers can move between and appreciate the benefits of any blockchain: payments, DeFi, liquidity, games, art, social graphs, performance, security, privacy, and so on.
</details>

<details>
<summary>Why build dApps on Zeta ?</summary>
<br>

1. Decentralized and public
ZetaChain is a decentralized and public blockchain network. It is built on Cosmos SDK and Tendermint Consensus. While many cross-chain solutions like bridges have to vary, often centralized trust models that have a track record for being susceptible to exploits and hacks, ZetaChain is a Proof-of-Stake blockchain, where all transactions and activity on the platform -- even cross-chain transactions -- are fully transparent, verifiable, and function in a trust-minimized manner.

2. Hyper-connected nodes
ZetaChain's nodes have observers that monitor transactions on every connected chain. Through ZetaChain's TSS architecture, the network can sign and verify transactions on every connected chain as a wallet can. By being able to read and write to connected chains in a secure, decentralized manner, these hyper-connected nodes provide a seamless omnichain environment for developers to build novel and powerful cross-chain applications on top of.

3. Omnichain smart contracts
Smart contracts can be deployed natively on ZetaChain that can read/write to connected chains. ZetaChain is the only public blockchain to support smart contracts with this capability, enabling a new paradigm of app development.

4. Cross-chain message passing
A developer can pass messages (data and value) between chains and layers with simple function calls. Through message passing, a dApp developer can build powerful cross-chain applications by simply implementing a few functions within their existing smart contracts.

5. Managed external assets
ZetaChain's network and dApps built on top of ZetaChain can manage assets and vaults of externally connected chains. This allows assets on any chain to be managed just as a smart contract on a single chain can manage assets on its respective chain. A dApp on ZetaChain can thus orchestrate and bring smart contract logic to any connected chain. This property applies to all chains, including non-smart-contract chains, like Bitcoin and Dogecoin.
</details>


<details>
<summary>What is ZETA token?</summary>
<br>
  
ZetaChain's coin ZETA is used to pay the gas fees for ZetaChain smart contracts and is additionally used to secure the PoS ZetaChain blockchain by bonding/staking/slashing. ZETA is also at the core of ZetaChain's cross-chain transfer, swaps, message delivery, and security. ZETA is one of the first multi-chain coins that is natively issued across multiple chains and layers.

Users can directly move the ZETA coin from any chain A to chain B. The mechanism is a one way peg (i.e. burning X amount on chain A and then minting X amount on chain B).

We use our own coin ZETA to represent value cross-chain because:

- Unlike the more common two-way pegging, there is no wrapping and therefore no multiple representations of the same underlying asset.
- The only (native) value that can go cross-chain is via the ZETA coin, which reduces attack surface substantially, resulting in an easier to understand audit and therefore higher security. For example, we can check the total supply at the contract mint site.
- Users can pay ZETA for the cross-chain service that ZetaChain provides, and for gas on the destination chain, in a single step/bundle.
</details>

## Build with ZetaChain (things common to both CCM and omnichain)
- Start building dapps
- Sending and depositing tokens
- Smart contract template
  
## Omnichain contracts
- Overview
- Create a simple omnichain contract
  
## Cross-chain messaging
- Overview
- Create a simple cross-chain messaging contract

## Developer resources




