# Intro to Zetachain


## Introduction

<details>
<summary>What is ZetaChain?</summary>
<br>
ZetaChain is the foundational, chain-agnostic backbone of the decentralized internet. It acts as a convergence point for various blockchains, including Ethereum and Bitcoin. ZetaChain enables omnichain functionality, supporting generic smart contracts and seamless messaging between different blockchains. By addressing the challenges of cross-chain interactions, it opens up the crypto and global financial ecosystem to a broader audience. ZetaChain envisions a fluid, multi-chain crypto ecosystem where users and developers can easily navigate and leverage the unique advantages of different blockchains for payments, DeFi, gaming, art, and more.
At its core, ZetaChain is a public omnichain blockchain that supports real, native cross-blockchain transactions with a complete toolkit for cross-chain messaging and general Omnichain Smart Contracts.
</details>

<details>
<summary>Why build dApps on Zeta ?</summary>
<br>

1. Decentralized and public
ZetaChain is a decentralized and public blockchain network. It is built on the Cosmos SDK and Tendermint Consensus. Unlike many cross-chain solutions that rely on centralized trust models prone to exploits and hacks, ZetaChain operates as a Proof-of-Stake blockchain. This means that all transactions and activities on the platform, including cross-chain transactions, are fully transparent, verifiable, and operate in a trust-minimized manner.

2. Hyper-connected nodes
ZetaChain's nodes have observers that monitor transactions on every connected chain. Through ZetaChain's TSS architecture, the network can sign and verify transactions on each connected chain, similar to how a wallet operates. These hyper-connected nodes provide a seamless omnichain environment, allowing developers to build novel and powerful cross-chain applications.

3. Omnichain smart contracts
ZetaChain supports the native deployment of smart contracts that can read from and write to connected chains. It is the only public blockchain that offers this capability, opening up new possibilities for app development.

4. Cross-chain message passing
Developers can easily pass messages (data and value) between chains and layers using simple function calls. By leveraging message passing, dApp developers can create robust cross-chain applications by implementing a few functions within their existing smart contracts.

5. Managed external assets
ZetaChain's network and dApps built on top of it can manage assets and vaults of externally connected chains. This allows for the management of assets on any chain, similar to how a smart contract on a single chain manages assets. As a result, a dApp on ZetaChain can orchestrate and bring smart contract logic to any connected chain, including non-smart-contract chains like Bitcoin.
</details>


<details>
<summary>What is ZETA token?</summary>
<br>
ZetaChain's coin, ZETA, serves multiple purposes within the ZetaChain ecosystem.
  
- ZETA is used as gas for ZetaChain’s omnichain smart contracts layer and internal transactions. With transactions like EIP 1559, some ZETA is burned over time.

- ZETA is used in core pools that the protocol uses to exchange for external ZRC-20 gas assets to pay for and write outbound transactions to external chains. ZRC-20 is a token standard integrated into ZetaChain's omnichain smart contract platform. At a high-level, ZRC-20 tokens are an extension of the standard ERC-20 tokens found in the Ethereum ecosystem, ZRC-20 tokens have the added ability to manage assets on all ZetaChain-connected chains. 

- ZETA is used as a cross-chain intermediary asset through messaging. When a cross-chain message is sent, a dApp/user attaches ZETA in his message to represent value and to pay for all gas and transaction fees in a single bundle. ZETA is also exchanged on the core pools to pay for outbound gas.
  
- Users can conveniently pay for ZetaChain's cross-chain service and gas fees on the destination chain using ZETA in a single step or bundle.
</details>

## Build with ZetaChain (things common to both CCM and omnichain)
<details>
<summary> Start building dapps </summary>


ZetaChain is a Proof of Stake (PoS) blockchain developed using the Cosmos SDK and Tendermint Core consensus engine. This design choice allows ZetaChain to benefit from fast block times and instant finality.

ZetaChain includes an Ethereum Virtual Machine (EVM) compatible execution layer called zEVM. In addition to supporting all EVM features and standard interactions (such as contract creation, contract interaction, and contract composition), zEVM offers two unique capabilities:

- Contracts on zEVM can be called from external chains.
- Contracts on zEVM can generate outbound transactions on external chains.

These two features make zEVM a versatile programmable platform, enabling cross-chain transactions that can modify states across different chains in a single step.

When developing on ZetaChain, you create zEVM contracts. While these contracts can be standard Solidity contracts, to fully utilize ZetaChain's capabilities, they should adhere to specific interfaces. These interfaces, unique to ZetaChain, facilitate interaction with externally connected blockchains.

ZetaChain provides two methods for developing dApps: omnichain contracts and cross-chain message passing.

</details>

<details>
<summary> Smart contract template </summary>
To get started with Zetachain quickly, you can clone this repository which uses Hardhat environment to compile, test and deploy contracts on-chain:
git clone https://github.com/zeta-chain/template

</details>

- Sending and depositing tokens


## Omnichain contracts
- Overview
- Create a simple omnichain contract
  
## Cross-chain messaging
- Overview
- Create a simple cross-chain messaging contract

## Developer resources




