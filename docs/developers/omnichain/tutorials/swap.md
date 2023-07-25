---
sidebar_position: 4
---

# Zeta Swap

## Overview

In this tutorial you will write a contract that allows users to swap native
tokens from one connected chain to another through ZetaChain.

High-level overview:

1. A `ZetaSwapV2.sol` contract is created and deployed to ZetaChain.
2. A user wants to swap tMATIC from Polygon Mumbai to gETH on Goerli.
3. A user transfers a native gas token (in this example, gETH) to a specific
   address (called TSS) on Goerli. The `data` value of the token transfer
   transaction contains the following information:
   1. address of the ZetaSwapV2 contract on Zetachain
   2. recipients address (defaults to the sender's address)
   3. destination token address
   4. minimal output amount (not covered in this tutorial, set to 0)
4. ZetaChain detects the token transfer transaction and triggers the
   `onCrossChainCall()` function of the ZetaSwapV2 contract.
5. `onCrossChainCall()` does the following:
   1. calls the UniswapV2 router contract (Uniswap contracts have already been
      deployed to ZetaChain), specifically `swapExactTokensForTokens` to swap
      tMATIC represented on ZetaChain as a ZRC20 for gETH also represented as a
      ZRC20.
   2. calls ZetaChain's `withdraw` to withdraw native gas token (tMATIC) on the
      destination chain (Polygon Mumbai).

## Set up your environment

```
git clone https://github.com/zeta-chain/template
```

Install the dependencies:

```
yarn add --dev @uniswap/v2-periphery @uniswap/v2-core
```

## Create the contract

```solidity title="contracts/ZetaSwapV2.sol" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/swap/contracts/ZetaSwapV2.sol
```

## Write a test for the contract

```ts title="test/swap.ts" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/swap/test/swap.ts
```

### Import contracts

The test depends on types from external contracts. Import these contracts to
enable Hardhat to compile their types.

```solidity title="contracts/TestContracts.sol" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/swap/contracts/TestContracts.sol
```

```solidity title="contracts/TestUniswap.sol" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/swap/contracts/TestUniswap.sol
```

### Configure the Hardhat environment

Take note that the Uniswap contracts require a specific version of Solidity,
which differs from the version used for the remaining contracts. Update the
Hardhat configuration to include both versions of Solidity.

```ts title="hardhat.config.ts"
const config: HardhatUserConfig = {
  // highlight-start
  solidity: {
    compilers: [
      { version: "0.6.6" /** For uniswap v2 */ },
      { version: "0.8.7" },
    ],
  },
  // highlight-end
};
```

### Run the test

```
npx hardhat test
```

```
  ZetaSwap tests
    zetaSwapV2
Getting uniswapV2Router02 address from mainnet: eth-mainnet.
Getting uniswapV2Factory address from mainnet: eth-mainnet.
Getting weth9 address from mainnet: eth-mainnet.
      ✔ Should do swap (60ms)


  1 passing (9s)
```

## Create a deployment task

```ts title="tasks/deploy.ts" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/swap/tasks/deploy.ts
```

### Deploy the contract to the ZetaChain testnet

```
npx hardhat deploy --network zeta_testnet
```

## Execute a swap

```ts title="tasks/swap.ts" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/swap/tasks/swap.ts
```

```ts title="hardhat.config.ts"
import "./tasks/swap";
```

```
npx hardhat swap --contract 0x74f8e77E9E8AC20B25a2bd358C618494107207De --amount 0.001 --network polygon-mumbai --destination goerli
```

```
🔑 Using account: 0x16CeE2D01957e24e6AdE918ce76D5e74a1817EE5

Getting tss address from athens: polygon-mumbai.

🚀 Successfully broadcasted a token transfer transaction on polygon-mumbai network.
📝 Transaction hash: 0xfd723f66d19652b8badd9f6029b2289c744990e6c9986474030e0bf343c8eea5
💰 Amount: 0.001 native polygon-mumbai gas tokens

This transaction has been submitted to polygon-mumbai, but it may take some time
for it to be processed on ZetaChain. Please refer to ZetaChain's explorer
for updates on the progress of the cross-chain transaction.

🌍 Explorer: https://explorer.zetachain.com/address/0x74f8e77E9E8AC20B25a2bd358C618494107207De?tab=ccTxs
```

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/swap
