---
sidebar_position: 5
---

# Single Input Multiple Output

## Overview

If you already read the previous tutorials you already know how to use zEVM. A
very common use case on zEVM is a smart contract with a single input from one
chain, perform some logic, and then execute the output to another or multiple
chains.

The example in this tutorial does exactly that: the contract reads an address
from the message, and then send some tokens to that address in several chains.

This capability may be useful for applications like multichain asset managers or
DeFi applications that need to distribute or manage assets on many chains from
one place.

## Set up your environment

```
git clone https://github.com/zeta-chain/template
```

Install the dependencies:

```
yarn add --dev @openzeppelin/contracts
```

## Create the contract

```solidity title="contracts/MultiOutput.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";
// highlight-start
import "@zetachain/toolkit/contracts/BytesHelperLib.sol";
import "@zetachain/toolkit/contracts/SwapHelperLib.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// highlight-end

// highlight-start
contract MultiOutput is zContract, Ownable {
    error NoAvailableTransfers();

    event DestinationRegistered(address);
    event Withdrawal(address, uint256, address);

    address[] public destinationTokens;
    // highlight-end
    SystemContract public immutable systemContract;

    constructor(address systemContractAddress) {
        systemContract = SystemContract(systemContractAddress);
    }

    // highlight-start
    function registerDestinationToken(
        address destinationToken
    ) external onlyOwner {
        destinationTokens.push(destinationToken);
        emit DestinationRegistered(destinationToken);
    }

    function _getTotalTransfers(address zrc20) internal view returns (uint256) {
        uint256 total = 0;
        for (uint256 i; i < destinationTokens.length; i++) {
            if (destinationTokens[i] == zrc20) continue;
            total++;
        }

        return total;
    }
    // highlight-end

    function onCrossChainCall(
        address zrc20,
        uint256 amount,
        bytes calldata message
    ) external virtual override {
        address recipient = abi.decode(message, (address));
        // highlight-start
        if (_getTotalTransfers(zrc20) == 0) revert NoAvailableTransfers();

        uint256 amountToTransfer = amount / _getTotalTransfers(zrc20);
        uint256 leftOver = amount -
            amountToTransfer *
            _getTotalTransfers(zrc20);

        uint256 lastTransferIndex = destinationTokens[
            destinationTokens.length - 1
        ] == zrc20
            ? destinationTokens.length - 2
            : destinationTokens.length - 1;

        for (uint256 i; i < destinationTokens.length; i++) {
            address targetZRC20 = destinationTokens[i];
            if (targetZRC20 == zrc20) continue;

            if (lastTransferIndex == i) {
                amountToTransfer += leftOver;
            }

            uint256 outputAmount = SwapHelperLib._doSwap(
                systemContract.wZetaContractAddress(),
                systemContract.uniswapv2FactoryAddress(),
                systemContract.uniswapv2Router02Address(),
                zrc20,
                amountToTransfer,
                targetZRC20,
                0
            );
            SwapHelperLib._doWithdrawal(
                targetZRC20,
                outputAmount,
                BytesHelperLib.addressToBytes(recipient)
            );
            emit Withdrawal(targetZRC20, outputAmount, recipient);
        }
        // highlight-end
    }
}
```

## Deploy the Contract

```
npx hardhat deploy --network zeta_testnet
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully deployed contract on ZetaChain.
📜 Contract address: 0x040FDDE34d07e1FBA155DCCe829a250317985d83
🌍 Explorer: https://athens3.explorer.zetachain.com/address/0x040FDDE34d07e1FBA155DCCe829a250317985d83
```

## Create a task to set destination chain

```ts title="tasks/destination.ts"
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { getAddress } from "@zetachain/protocol-contracts";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();
  console.log(`🔑 Using account: ${signer.address}\n`);

  const destinationToken = getAddress("zrc20" as any, args.destination as any);
  const ZetaMultiOutput = await hre.ethers.getContractAt(
    "MultiOutput",
    args.contract
  );

  const tx = await ZetaMultiOutput.registerDestinationToken(destinationToken);

  await tx.wait();

  console.log(
    `Registered token ${destinationToken} as a destination in the contract ${args.contract}`
  );
};

task("destination", "", main).addParam("contract").addParam("destination");
```

```ts title="hardhat.config.ts"
import "./tasks/destination";
```

## Interact with the Contract

Set the destination chain to Mumbai:

```
npx hardhat destination --contract 0x040FDDE34d07e1FBA155DCCe829a250317985d83 --destination mumbai_testnet --network zeta_testnet
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

Registered token 0x48f80608B672DC30DC7e3dbBd0343c5F02C738Eb as a destination in the contract 0x040FDDE34d07e1FBA155DCCe829a250317985d83
```

Set the destination chain to BSC testnet:

```
npx hardhat destination --contract 0x040FDDE34d07e1FBA155DCCe829a250317985d83 --destination bsc_testnet --network zeta_testnet
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

Registered token 0xd97B1de3619ed2c6BEb3860147E30cA8A7dC9891 as a destination in the contract 0x040FDDE34d07e1FBA155DCCe829a250317985d83
```

Interact with the contract by sending gETH to recieve tMATIC on Mumbai and tBNB
on BSC testnet:

```
npx hardhat interact --contract 0x040FDDE34d07e1FBA155DCCe829a250317985d83 --network goerli_testnet --amount 3 --recipient 0x2cD3D070aE1BD365909dD859d29F387AA96911e1
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1


🚀 Successfully broadcasted a token transfer transaction on goerli_testnet network.
📝 Transaction hash: 0x5926a58bbb98dc34850c1933a46ba591d47476dd741df3b70da9c9cedcd0f649
```

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/tree/main/omnichain/multioutput
