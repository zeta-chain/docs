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
3. A user transfers a native gas token (in this example, tMATIC) to a specific
   address (called TSS) on Mumbai. The `data` value of the token transfer
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
   2. calls ZetaChain's `withdraw` to withdraw native gas token (gETH) on the
      destination chain (Goerli).

## Set up your environment

```
git clone https://github.com/zeta-chain/template
```

Install dependencies:

```
cd template
yarn add --dev @uniswap/v2-periphery @uniswap/v2-core
```

## Create the contract

Run the following command to create a new omnichain contract called `Swap`.

```
npx hardhat omnichain Swap targetZRC20:address recipient minAmountOut:uint256
```

Modify the `onCrossChainCall` function to perform a swap:

```solidity title="contracts/Swap.sol"
// highlight-next-line
import "@zetachain/toolkit/contracts/SwapHelperLib.sol";

contract Swap is zContract {
    //...
    function onCrossChainCall(
        address zrc20,
        uint256 amount,
        bytes calldata message
    ) external virtual override {
        (address targetZRC20, bytes32 recipient, uint256 minAmountOut) = abi
            .decode(message, (address, bytes32, uint256));
        // highlight-start
        uint256 outputAmount = SwapHelperLib._doSwap(
            systemContract.wZetaContractAddress(),
            systemContract.uniswapv2FactoryAddress(),
            systemContract.uniswapv2Router02Address(),
            zrc20,
            amount,
            targetZRC20,
            minAmountOut
        );
        SwapHelperLib._doWithdrawal(targetZRC20, outputAmount, recipient);
        // highlight-end
    }
}
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

## Deploying the contract

Clear the cache and artifacts, then compile the contract:

```
npx hardhat compile --force
```

Use the standard deploy task to deploy the contract to ZetaChain:

```
npx hardhat deploy --network zeta_testnet
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully deployed contract on ZetaChain.
📜 Contract address: 0xd6FB957c64f5197C2e630Cb5D995C0845505957C
🌍 Explorer: https://athens3.explorer.zetachain.com/address/0xd6FB957c64f5197C2e630Cb5D995C0845505957C
```

## Execute a swap

```ts title="tasks/interact.ts"
// highlight-next-line
import { BigNumber } from "@ethersproject/bignumber";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  //...
  // highlight-start
  const targetZRC20 = getAddress("zrc20" as any, args.destination as any);
  const minAmountOut = BigNumber.from("0");
  // highlight-end

  const data = prepareData(
    args.contract,
    ["address", "bytes32", "uint256"],
    // highlight-next-line
    [targetZRC20, args.recipient, minAmountOut]
  );
  //...
};

task("interact", "Interact with the contract", main)
  .addParam("contract", "The address of the withdraw contract on ZetaChain")
  .addParam("amount", "Amount of tokens to send")
  .addParam("recipient")
  // remove-start
  .addParam("minAmountOut")
  .addParam("targetZRC20")
  // remove-end
  // highlight-next-line
  .addParam("destination");
```

The code generation command automatically created all three parameters for the
`interact` task. Instead of asking the user to provide the `targetZRC20` and the
`minAmountOut` parameters, you can define them in the task itself. Use the
`getAddress` to fetch the right ZRC-20 address for the destination chain and add
a `"destination"` parameter. Use a hard-coded value of 0 for the `minAmountOut`
parameter.

```
npx hardhat interact --contract 0xd6FB957c64f5197C2e630Cb5D995C0845505957C --amount 30 --network mumbai_testnet --destination goerli_testnet --recipient 0x2cD3D070aE1BD365909dD859d29F387AA96911e1
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully broadcasted a token transfer transaction on mumbai_testnet network.
📝 Transaction hash: 0x808a9524c5ab6012b24cbf1c8417a6b7c36c407e9d7d22273f2797f81b892afe
```

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/tree/main/omnichain/swap
