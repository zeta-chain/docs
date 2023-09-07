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

### Handle the Omnichain Contract Call

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

First, import the `ERC20` contract from OpenZeppelin to manage our ERC20 staking
reward token. Import `BytesHelperLib` from ZetaChain's toolkit for utility
functions to convert bytes into addresses and vice versa.

Add the `chainID` variable to store the ID of the connected chain. This variable
will be set in the constructor and will be used to check that the contract is
called from the correct chain.

Modify the constructor to accept three additional arguments: `name`, `symbol`,
and `chainID`. The `name` and `symbol` arguments will be used to initialize the
`ERC20` contract. The `chainID` argument will be used to set the `chainID`
variable.

`onCrossChainCall` is the function that will be called by the system contract
when a user deposits tokens to the omnichain contract. First, check that the
function is called by the system contract.

First, check that deposited token matches the token associated with the chain
identified by the `chainID` variable.

`context.origin` contains information about the address from which the
transaction that triggered the omnichain contract was broadcasted. Use
`BytesHelperLib.bytesToAddress` to decode the staker's address from the
`context.origin` bytes.

Next, decode the `message` parameter to get the beneficiary address. The
beneficiary address is passed to the `onCrossChainCall` function by the user
calling the omnichain contract from the connected chain. The `message` parameter
is a bytes array that contains the beneficiary address encoded as bytes.
ZetaChain uses `18832` to represent Bitcoin's chain ID, so use this value to
check if the connected chain is Bitcoin. Use the `BytesHelperLib.bytesToAddress`
function to decode the beneficiary address from the `message` parameter if the
connected chain is Bitcoin. If the connected chain is an EVM-based chain, use
the `abi.decode` function.

Finally, call the `stakeZRC` function to stake the deposited tokens. The
`stakeZRC` function is defined in the next section.

### Stake ZRC-20 Tokens

```solidity title="contracts/Staking.sol"
    mapping(address => uint256) public stakes;
    mapping(address => address) public beneficiaries;
    mapping(address => uint256) public lastStakeTime;
    uint256 public rewardRate = 1;

    function stakeZRC(
        address staker,
        address beneficiary,
        uint256 amount
    ) internal {
        stakes[staker] += amount;
        if (beneficiaries[staker] == address(0)) {
            beneficiaries[staker] = beneficiary;
        }
        lastStakeTime[staker] = block.timestamp;

        updateRewards(staker);
    }

    function updateRewards(address staker) internal {
        uint256 timeDifference = block.timestamp - lastStakeTime[staker];
        uint256 rewardAmount = timeDifference * stakes[staker] * rewardRate;

        _mint(beneficiaries[staker], rewardAmount);
        lastStakeTime[staker] = block.timestamp;
    }
```

### Claim Rewards

```solidity title="contracts/Staking.sol"
    error NotAuthorizedToClaim();

    function claimRewards(address staker) external {
        if (beneficiaries[staker] != msg.sender) {
            revert NotAuthorizedToClaim();
        }

        updateRewards(staker);
    }
```

### Unstake ZRC-20 Tokens

```solidity title="contracts/Staking.sol"
    function unstakeZRC(uint256 amount) external {
        updateRewards(msg.sender);

        require(stakes[msg.sender] >= amount, "Insufficient staked balance");

        address zrc20 = systemContract.gasCoinZRC20ByChainId(chainID);

        (address gasZRC20, uint256 gasFee) = IZRC20(zrc20).withdrawGasFee();

        IZRC20(zrc20).approve(zrc20, gasFee);

        bytes memory recipient;

        if (chainID == 18332) {
            recipient = abi.encodePacked(
                BytesHelperLib.addressToBytes(msg.sender)
            );
        } else {
            recipient = abi.encodePacked(msg.sender);
        }

        IZRC20(zrc20).withdraw(recipient, amount - gasFee);

        stakes[msg.sender] -= amount;
        lastStakeTime[msg.sender] = block.timestamp;
    }
```

### Query Rewards

```solidity title="contracts/Staking.sol"
    function queryRewards(address account) public view returns (uint256) {
        uint256 timeDifference = block.timestamp - lastStakeTime[account];
        uint256 rewardAmount = timeDifference * stakes[account] * rewardRate;
        return rewardAmount;
    }
```
