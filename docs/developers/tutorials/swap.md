---
sidebar_position: 4
---

# Zeta Swap

## Overview

High-level overview: In this tutorial you will write a contract that allows
users to swap native tokens from one connected chain to another through
ZetaChain.

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
   1. calls the UniswapV2 router contract (Uniswap acontracts already have been
      deployed to ZetaChain), specifically `swapExactTokensForTokens` to swap
      tMATIC represented on ZetaChain as a ZRC20 for gETH also represented as a
      ZRC20.
   2. calls ZetaChain's `withdraw` to withdraw native gas token (tMATIC) on the
      destination chain (Polygon Mumbai).

## Set up your environment

:::note This tutorial assumes that you have already completed the
[setup tutorial](/developers/tutorials/setup) or cloned
[the template Hardhat project](https://github.com/zeta-chain/template). :::

Install the dependencies:

```
yarn add --dev @zetachain/protocol-contracts @zetachain/zevm-example-contracts @uniswap/v2-periphery @uniswap/v2-core
```

Create a new wallet and request tokens from the testnet faucet if you haven't
done so already:

```
npx hardhat account --save

npx hardhat faucet
```

## Create the contract

```solidity reference
https://github.com/zeta-chain/example-contracts/blob/main/omnichain/swap/contracts/ZetaSwapV2.sol
```

### Configure the Hardhat environment

The ZetaSwap contract expects a specific version of the Solidity compiler.
Modify the Hardhat config to ensure that the correct version is used.

```ts title="hardhat.config.ts"
const config: HardhatUserConfig = {
  // highlight-next-line
  solidity: "0.8.7",
  // ...
};
```

```
npx hardhat compile
```

## Write a test for the contract

```ts reference
https://github.com/zeta-chain/example-contracts/blob/main/omnichain/swap/test/Swap.spec.ts
```

### Implement helper functions

The test uses a helper function to encode the parameters for the
`onCrossChainCall` function. The helper function is defined in the `helpers.ts`
file.

```ts reference
https://github.com/zeta-chain/example-contracts/blob/main/omnichain/swap/test/helpers.ts
```

The test also uses a helper function to set up the environment for the test. The
helper function is defined in the `test.helpers.ts` file.

```ts reference
https://github.com/zeta-chain/example-contracts/blob/main/omnichain/swap/test/test.helpers.ts
```

### Import contracts

The test depends on types from external contracts. Import these contracts to
enable Hardhat to compile their types.

```solidity reference
https://github.com/zeta-chain/example-contracts/blob/main/omnichain/swap/contracts/TestContracts.sol
```

```solidity reference
https://github.com/zeta-chain/example-contracts/blob/main/omnichain/swap/contracts/TestUniswap.sol
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

```ts reference
https://github.com/zeta-chain/example-contracts/blob/main/omnichain/swap/tasks/deploy.ts
```

### Deploy the contract to the ZetaChain testnet

```
npx hardhat deploy --network athens
```

## Execute a swap

```ts title="tasks/swap.ts"
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseEther } from "@ethersproject/units";
import { getAddress } from "@zetachain/addresses";
import { BigNumber } from "@ethersproject/bignumber";

const ZRC20Addresses = {
  goerli: "0x91d18e54DAf4F677cB28167158d6dd21F6aB3921",
  "bsc-testnet": "0x13A0c5930C028511Dc02665E7285134B6d11A5f4",
  "bitcoin-testnet": "0x48f80608B672DC30DC7e3dbBd0343c5F02C738Eb",
  "polygon-mumbai": "0xd97B1de3619ed2c6BEb3860147E30cA8A7dC9891",
};

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();
  console.log(`🔑 Using account: ${signer.address}\n`);

  const prepareData = (
    zetaSwapContract: string,
    recipient: string,
    destinationToken: string,
    minOutput: BigNumber
  ) => {
    const paddedRecipient = hre.ethers.utils.hexlify(
      hre.ethers.utils.zeroPad(recipient, 32)
    );
    const abiCoder = hre.ethers.utils.defaultAbiCoder;
    const params = abiCoder.encode(
      ["address", "bytes32", "uint256"],
      [destinationToken, paddedRecipient, minOutput]
    );
    return `${zetaSwapContract}${params.slice(2)}`;
  };

  const destinationToken =
    ZRC20Addresses[args.destination as keyof typeof ZRC20Addresses];

  const network = hre.network.name;
  const data = prepareData(
    args.contract,
    signer.address,
    destinationToken,
    BigNumber.from("0")
  );
  const to = getAddress({
    address: "tss",
    networkName: network,
    zetaNetwork: "athens",
  });
  const value = parseEther(args.amount);
  const tx = await signer.sendTransaction({ data, to, value });

  console.log(`
🚀 Successfully broadcasted a token transfer transaction on ${network} network.
📝 Transaction hash: ${tx.hash}
💰 Amount: ${args.amount} native ${network} gas tokens

This transaction has been submitted to ${network}, but it may take some time
for it to be processed on ZetaChain. Please refer to ZetaChain's explorer
for updates on the progress of the cross-chain transaction.

🌍 Explorer: https://explorer.zetachain.com/address/${args.contract}?tab=ccTxs
`);
};

task("swap", "Swap tokens")
  .addParam("contract", "The address of the swap contract on ZetaChain")
  .addParam("amount", "Amount to send to the recipient")
  .addParam("destination", "Destination network, like 'goerli'")
  .setAction(main);
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
