---
sidebar_position: 2
---

# Staking

In this tutorial you will create an omnichain contract that will be capable of
receiving tokens from connected chains and staking them on ZetaChain. Native
tokens deposited to ZetaChain as ZRC-20s will be locked in the contract until
withdrawn by the staker. Rewards will be accrued at a fixed rate proportionally
to amount of tokens staked.

The staker is the one depositing tokens to the contract. The staker is required
to provide a beneficiary address to which the rewards will be sent (a staker is
allowed to be its own beneficiary). Only the staker can withdraw the staked
tokens from the contract and withdraw to the chain from which they originate.

Only the beneficiary can withdraw the rewards from the contract.

For simplicity this contract will be compatible with one of the chain of your
choosing. The chain ID of the compatible connected chain is defined by the
deployer of the contract.

This tutorial demonstrates:

- how to create an omnichain contract that executes logic with tokens from a
  connected chain
- how to use the parameters of the `onCrossChainCall` function to:
  - get the staker address from the `context` parameter
  - get the beneficiary address from the `message` parameter both for EVM-based
    chains and for Bitcoin
- how to withdraw tokens correctly both to EVM-based chains and to Bitcoin

## Prerequisites

- [Node.js](https://nodejs.org/en/) v12 or later
- [Yarn](https://yarnpkg.com/) v1 or later
- [Git](https://git-scm.com/)

## Set Up Your Environment

Clone the Hardhat contract template:

```
git clone https://github.com/zeta-chain/template
```

Install dependencies:

```
cd template
yarn
```

## Create the Contract

To create a new omnichain contract you will use the `omnichain` Hardhat task and
pass a contract name (`Staking`) and one argument (`beneficiary`) to the task:

```
npx hardhat omnichain Staking beneficiary:address
```

The `beneficiary` of type `address` argument will be provided by users calling
the omnichain contract from one of the connected chains. The `beneficiary`
argument will be passed to the `onCrossChainCall` function in the `message`
parameter.

## Omnichain Contract

Let's review the contents of the `MyContract` contract:

```solidity title="contracts/Staking.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";
// highlight-start
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@zetachain/toolkit/contracts/BytesHelperLib.sol";
// highlight-end

contract Staking is ERC20, zContract {
    error SenderNotSystemContract();
    // highlight-next-line
    error WrongChain();

    SystemContract public immutable systemContract;
    // highlight-next-line
    uint256 public immutable chainID;

    constructor(
        // highlight-start
        string memory name_,
        string memory symbol_,
        uint256 chainID_,
        // highlight-end
        address systemContractAddress
    // highlight-next-line
    ) ERC20(name_, symbol_) {
        systemContract = SystemContract(systemContractAddress);
        // highlight-next-line
        chainID = chainID_;
    }

    function onCrossChainCall(
        zContext calldata context,
        address zrc20,
        uint256 amount,
        bytes calldata message
    // highlight-next-line
    ) external override {
        if (msg.sender != address(systemContract)) {
            revert SenderNotSystemContract();
        }

        // highlight-start
        address acceptedZRC20 = systemContract.gasCoinZRC20ByChainId(chainID);
        if (zrc20 != acceptedZRC20) revert WrongChain();

        address staker = BytesHelperLib.bytesToAddress(context.origin, 0);
        address beneficiary;

        if (context.chainID == 18832) {
            beneficiary = BytesHelperLib.bytesToAddress(message, 0);
        } else {
            beneficiary = abi.decode(message, (address));
        }

        stakeZRC(staker, beneficiary, amount);
        // highlight-end
    }

}
```
