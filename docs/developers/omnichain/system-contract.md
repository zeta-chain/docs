---
sidebar_position: 6
title: System contract
sidebar_label: System contract
id: system-contract
---

# System contract

To make your life easier we already deployed a system contract with some
information you may need in your protocol. You can import this code into your
project and instance with the deployed address. You can find the up-to-date
address of the system contract using the ZetaChain's API:

https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/zetacore/fungible/system_contract

In this contract you will find:

- wZetaContractAddress: ZRC20 version of Zeta Native Token
- uniswapv2FactoryAddress and uniswapv2Router02Address: Uniswap v2 already
  deployed on zEVM
- gasZetaPoolByChainId and gasCoinZRC20ByChainId: helpers with ZRC20 data
  indexed by chain ID
- gasPriceByChainId: helper to estimate gas for an external transaction

```solidity title="SystemContract.sol"
contract SystemContract is SystemContractErrors {
    mapping(uint256 => uint256) public gasPriceByChainId;
    mapping(uint256 => address) public gasCoinZRC20ByChainId;
    mapping(uint256 => address) public gasZetaPoolByChainId;

    address public constant FUNGIBLE_MODULE_ADDRESS = 0x735b14BB79463307AAcBED86DAf3322B1e6226aB;
    address public immutable uniswapv2FactoryAddress;
    address public immutable uniswapv2Router02Address;
    address public wZetaContractAddress;
    address public zetaConnectorZEVMAddress;
    //...
}
```

Source:
[`SystemContract.sol`](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/SystemContract.sol)

Let's look at an example of how to use the system contract in your smart
contract.

Install the protocol contracts package:

```
yarn add --dev @zetachain/protocol-contracts
```

Import the system contract and create a reference to the system contract in the
constructor:

```solidity title="Contract.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";

contract SystemContractSample {
    SystemContract public immutable systemContract;

    constructor(address systemContractAddress) {
        systemContract = SystemContract(systemContractAddress);
    }

    function getZRC20AddressByChainId(uint32 targetZRC20ChainId) public returns(address) {
        return systemContract.gasCoinZRC20ByChainId(targetZRC20ChainId);
    }
}
```

In your deploy script, you can get the system contract address by using the
`getAddress` helper function.

```ts
import { getAddress } from "@zetachain/protocol-contracts";

const SYSTEM_CONTRACT = getAddress("systemContract", "zeta_testnet");
```

For an example of how the system contract can be used, please, refer to the
[Swap example project](https://github.com/zeta-chain/example-contracts/tree/main/omnichain/swap).
