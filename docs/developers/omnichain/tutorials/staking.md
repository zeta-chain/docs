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

For simplicity this contract will be compatible with one of the connected chains
at a time. The chain ID of the connected chain will be passed to the contract
constructor and will be used to check that the contract is called from a
compatible chain.

This tutorial shows how to:

- create an omnichain contract that can receive tokens from connected chains
- use the parameters of the `onCrossChainCall` function to:
  - decode the staker address from the `context.origin` parameter
  - decode the contents of the `message` parameter
  - determine the chain ID from `context.chainID`
- dispatch different logic using an action code
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
pass a contract name (`Staking`) to the task:

```
npx hardhat omnichain Staking
```

## Omnichain Contract

### Design the Omnichain Contract

To implement the functionality described in the introduction, you will need to
handle the following actions.

Called from a connected chain by the staker:

- Staking tokens by depositing them into the staking omnichain contract on
  ZetaChain
- Unstaking tokens by withdrawing them to the chain from which they originate
- Setting the beneficiary address
- Setting the withdraw address

Called on ZetaChain:

- Claiming rewards by the beneficiary
- Querying the pending rewards

Since the omnichain contract has only one function that gets called when the
contract is triggerred from a connected chain (`onCrossChainCall`), and you need
to be able to execute different logic depending on the action, you will need to
encode the action code into the `message` parameter of the `onCrossChainCall`.

Even though the `message` value will be encoded differently in EVM-based chains
and Bitcoin, the first bytes of the `message` will always be the action code
encoded as `uint8`.

### Handle the Omnichain Contract Call

```solidity title="contracts/Staking.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";
//highlight-start
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@zetachain/toolkit/contracts/BytesHelperLib.sol";
//highlight-end

// highlight-start
contract Staking is ERC20, zContract {
    SystemContract public immutable systemContract;
    uint256 public immutable chainID;
    uint256 constant BITCOIN = 18332;

    uint256 public rewardRate = 1;

    error SenderNotSystemContract();
    error WrongChain(uint256 chainID);
    error UnknownAction(uint8 action);
    error Overflow();
    error Underflow();
    error WrongAmount();
    error NotAuthorized();
    error NoRewardsToClaim();

    mapping(address => uint256) public stake;
    mapping(address => bytes) public withdraw;
    mapping(address => address) public beneficiary;
    mapping(address => uint256) public lastStakeTime;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 chainID_,
        address systemContractAddress
    ) ERC20(name_, symbol_) {
        systemContract = SystemContract(systemContractAddress);
        chainID = chainID_;
    }
    // highlight-end

    modifier onlySystem() {
        require(
            msg.sender == address(systemContract),
            "Only system contract can call this function"
        );
        _;
    }

    function onCrossChainCall(
        zContext calldata context,
        address zrc20,
        uint256 amount,
        bytes calldata message
    ) external virtual override onlySystem {
        // highlight-start
        if (chainID != context.chainID) {
            revert WrongChain(context.chainID);
        }

        address staker = BytesHelperLib.bytesToAddress(context.origin, 0);

        uint8 action = chainID == BITCOIN
            ? uint8(message[0])
            : abi.decode(message, (uint8));

        if (action == 1) {
            stakeZRC(staker, amount);
        } else if (action == 2) {
            unstakeZRC(staker);
        } else if (action == 3) {
            setBeneficiary(staker, message);
        } else if (action == 4) {
            setWithdraw(staker, message, context.origin);
        } else {
            revert UnknownAction(action);
        }
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

Add the `BITCOIN` constant to store the chain ID of Bitcoin. ZetaChain uses
`18332` to represent Bitcoin's chain ID.

The contract needs to be able to store the staker's staked balance, withdraw
address and beneficiary address. To do this, add the following mappings:

- `stake` - stores the staker's staked balance
- `withdraw` - stores the staker's withdraw address
- `beneficiary` - stores the staker's beneficiary address

Modify the constructor to accept three additional arguments: `name_`, `symbol_`,
and `chainID_`. The `name_` and `symbol_` arguments will be used to initialize
the `ERC20` contract. The `chainID_` argument will be used to set the `chainID`
variable.

`onCrossChainCall` is the function that will be called by the system contract
when a user triggers the omnichain contract from a connected chain.

First, check that the omnichain contract is called from the same connected chain
as the one specified in the constructor. You can use `context.chainID` to get
the chain ID of the connected chain from which the omnichain contract was
called.

`context.origin` contains information about the address from which the
transaction that triggered the omnichain contract was broadcasted.

For EVM-based chains, `context.origin` is the actual address of the account
which broadcasted the transaction. For example:

```
0x2cD3D070aE1BD365909dD859d29F387AA96911e1
```

For Bitcoin, `context.origin` is the first 20 bytes of the hexidecimal
representation of the Bitcoin address. For example, if the Bitcoin address is:

```
tb1q2dr85d57450xwde6560qyhj7zvzw9895hq25tx
```

The hexidecimal representation of the address is:

```
0x74623171326472383564353734353078776465363536307179686a377a767a7739383935687132357478
```

The first 20 bytes (or 40 characters, excluding the `0x` prefix) and the
`context.origin` is:

```
0x7462317132647238356435373435307877646536
```

For Bitcoin, `context.origin` does not contain all the information about the
address from which the transaction was broadcasted, but it can be used to
identify the account that broadcasted the transaction.

Use `BytesHelperLib.bytesToAddress` to decode the staker's identifier from the
`context.origin` bytes. We will be using `staker` as a key in the `stakes`,
`withdraw` and `beneficiary` mappings to store the staker's staked balance,
withdraw address and the beneficiary address.

The `message` parameter contains the data that was passed to the omnichain
contract when it was called from the connected chain. In our design the first
value in the message is the `action` code. For Bitcoin take the first byte of
the message and convert it to an unsigned 8-bit integer (`uint8`). For EVM-based
chains, use `abi.decode` to decode the first value of the message as a `uint8`.

Finally, based on the `action` code, call the corresponding function:

`1` - stake ZRC-20 tokens

`2` - unstake ZRC-20 tokens

`3` - set beneficiary address

`4` - set withdraw address

### Stake ZRC-20 Tokens

`stakeZRC` is a function that will be called by `onCrossChainCall` to stake the
deposited tokens.

```solidity title="contracts/Staking.sol"
    function stakeZRC(address staker, uint256 amount) internal {
        stake[staker] += amount;
        if (stake[staker] < amount) revert Overflow();

        lastStakeTime[staker] = block.timestamp;
        updateRewards(staker);
    }

    function updateRewards(address staker) internal {
        uint256 rewardAmount = queryRewards(staker);

        _mint(beneficiary[staker], rewardAmount);
        lastStakeTime[staker] = block.timestamp;
    }

    function queryRewards(address staker) public view returns (uint256) {
        uint256 timeDifference = block.timestamp - lastStakeTime[staker];
        uint256 rewardAmount = timeDifference * stake[staker] * rewardRate;
        return rewardAmount;
    }
```

`stakeZRC` increases the staker's balance in the contract. The function also
updates the timestamp of when the staking happened last, and calls the
`updateRewards` function to update the rewards for the staker.

`updateRewards` calculates the rewards for the staker and mints them to the
beneficiary address. The function also updates the timestamp of when the staking
happened last.

### Unstake ZRC-20 Tokens

The `unstakeZRC` function begins by updating any outstanding rewards due to the
user. It then checks that the user has a sufficient staked balance.
Subsequently, it identifies the ZRC20 token associated with the contract's
`chainID` and determines the gas fee for the unstaking operation. This fee is
then approved. The user's tokens, minus the gas fee, are withdrawn to the
encoded recipient address. Finally, the contract updates the user's staking
balance and the timestamp of their last stake action.

```solidity title="contracts/Staking.sol"
    function unstakeZRC(address staker) internal {
        uint256 amount = stake[staker];

        updateRewards(staker);

        address zrc20 = systemContract.gasCoinZRC20ByChainId(chainID);
        (, uint256 gasFee) = IZRC20(zrc20).withdrawGasFee();

        if (amount < gasFee) revert WrongAmount();

        bytes memory recipient = withdraw[staker];

        stake[staker] = 0;

        IZRC20(zrc20).approve(zrc20, gasFee);
        IZRC20(zrc20).withdraw(recipient, amount - gasFee);

        if (stake[staker] > amount) revert Underflow();

        lastStakeTime[staker] = block.timestamp;
    }
```

### Set Beneficiary

`setBeneficiary` is a function that will be called by the staker to set the
beneficiary address.

The `message` is encoded differently in EVM-based chains and Bitcoin. For
Bitcoin, the beneficiary address follows the `uint8` action code (1 byte long)
and is 20 bytes long. Use `bytesToAddress` with an offset of `1` (byte) to
decode the beneficiary address.

For EVM-based chains, use `abi.decode` to get the beneficiary address from the
`message`.

```solidity title="contracts/Staking.sol"
    function setBeneficiary(address staker, bytes calldata message) internal {
        address beneficiaryAddress;
        if (chainID == BITCOIN) {
            beneficiaryAddress = BytesHelperLib.bytesToAddress(message, 1);
        } else {
            (, beneficiaryAddress) = abi.decode(message, (uint8, address));
        }
        beneficiary[staker] = beneficiaryAddress;
    }
```

### Set Withdraw Address

`setWithdraw` is a function that will be called by the staker to set the
withdraw address.

For Bitcoin the withdraw address is a hexidecimal representation of a bech32
Bitcoin address. In the `message` the withdraw address follows the `uint8`
action code (1 byte long) and is 42 bytes long (longer than a regular EVM
address).

Add a new helper function `bytesToBech32Bytes` to return the first 42 bytes of
the `message`. Use `bytesToBech32Bytes` with an offset of `1` (byte) to decode
the withdraw address.

For EVM-based chains, use the bytes from the `context.origin` parameter as the
withdraw address. `context.origin` matches the actual sender address on the
connected chain.

```solidity title="contracts/Staking.sol"
    function setWithdraw(
        address staker,
        bytes calldata message,
        bytes memory origin
    ) internal {
        bytes memory withdrawAddress;
        if (chainID == BITCOIN) {
            withdrawAddress = bytesToBech32Bytes(message, 1);
        } else {
            withdrawAddress = origin;
        }
        withdraw[staker] = withdrawAddress;
    }

    function bytesToBech32Bytes(
        bytes calldata data,
        uint256 offset
    ) internal pure returns (bytes memory) {
        bytes memory bech32Bytes = new bytes(42);
        for (uint i = 0; i < 42; i++) {
            bech32Bytes[i] = data[i + offset];
        }

        return bech32Bytes;
    }
```

### Claim Rewards

`claimRewards` is a function that will be called by the beneficiary to claim the
rewards. The function checks that the caller is the beneficiary and calls the
`updateRewards` function to send rewards to the beneficiary.

```solidity title="contracts/Staking.sol"
    function claimRewards(address staker) external {
        if (beneficiary[staker] != msg.sender) revert NotAuthorized();
        uint256 rewardAmount = queryRewards(staker);
        if (rewardAmount <= 0) revert NoRewardsToClaim();
        updateRewards(staker);
    }
```

## Modify the Task to Deploy the Contract

Modify the deploy task to accept an additional `--chain` flag that will specify
the connected chain. The `--chain` flag is used to determine the chain ID of the
connected chain and pass it as an argument to the constructor.

It is also used to get the symbol of the ZRC-20 token on the connected chain.

```ts title="tasks/deploy.ts"
// highlight-next-line
import ZRC20 from "@zetachain/protocol-contracts/abi/zevm/ZRC20.sol/ZRC20.json";

// ...

const factory = await hre.ethers.getContractFactory("Staking");

// highlight-start
let symbol, chainID;
if (args.chain === "btc_testnet") {
  symbol = "BTC";
  chainID = 18332;
} else {
  const zrc20 = getAddress("zrc20", args.chain);
  const contract = new hre.ethers.Contract(zrc20, ZRC20.abi, signer);
  symbol = await contract.symbol();
  chainID = hre.config.networks[args.chain]?.chainId;
  if (chainID === undefined) {
    throw new Error(`🚨 Chain ${args.chain} not found in hardhat config.`);
  }
}

const contract = await factory.deploy(
  `Staking rewards for ${symbol}`,
  `R${symbol.toUpperCase()}`,
  chainID,
  systemContract
);
// highlight-end

await contract.deployed();

// ...

// highlight-start
task("deploy", "Deploy the contract", main).addParam(
  "chain",
  "Chain ID (use btc_testnet for Bitcoin Testnet)"
);
// highlight-end
```

## Tasks to Interact with the Contract

To make it easier to interact with the contract, create a few tasks that will:

- stake tokens
- unstake tokens
- set beneficiary address
- set withdraw address

You can find the source code for the tasks in the `tasks` directory of the
project:

https://github.com/zeta-chain/example-contracts/tree/main/omnichain/staking/tasks

When copying these files make sure to also copy the helper function `convertToHexAddress.ts` in the `lib` directory.

To perform the actions above, the tasks simply send transactions to the TSS
address on the connected chain with the encoded data in the `data` field of the
transactions.

According to the design, the first byte of the `message` parameter is the action
code. The rest of the `message` is the data that is required for the action.

For example, to stake tokens, the `data` is just the `uint8` action code:

```ts
const data = prepareData(args.contract, ["uint8"], ["1"]);
```

To set the beneficiary address, the `data` is the `uint8` action code followed
by the beneficiary address:

```ts
const data = prepareData(
  args.contract,
  ["uint8", "address"],
  ["3", args.beneficiary]
);
```

Under the hood `prepareData` will also add the omnichain contract address to the
beginning of the `data` to make sure the transaction is sent to the right
contract on ZetaChain.

The `stake` task requires you to send tokens specified by the `amount` argument.
These tokens will be transferred to and locked in the TSS address, and your
staking contract will receive the same amount of tokens as ZRC-20s.

Other actions do not require you to send tokens, so the `amount` argument can be
`"0"`.

For Bitcoin, create an `addresses` task that will help you convert between
bech32 address and a hexidecimal representation of the address.

```ts title="tasks/addresses.ts"
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { utils } from "ethers";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const dataTypes = ["bytes"];
  const values = [utils.toUtf8Bytes(args.address)];

  const encodedData = utils.solidityPack(dataTypes, values);
  console.log(`Encoded: ${encodedData}`);
  console.log(`context.origin: ${encodedData.slice(0, 42)}`);
};

task(
  "address",
  "Encode a Bitcoin bech32 address to hex",
  main
).addPositionalParam("address");
```

Before proceeding make sure to import all newly created tasks in
`hardhat.config.ts`.

## Create an Account and Request Tokens from the Faucet

Before proceeding with the next steps, make sure you have
[created an account and requested ZETA tokens](/developers/omnichain/tutorials/hello#create-an-account)
from the faucet.

## Interact with the Contract from an EVM-based Chain

### Deploying the Contract

Clear the cache and artifacts, then compile the contract:

```
npx hardhat compile --force
```

Use the `deploy` task to deploy the contract to ZetaChain with `--chain` flag
specifying Goerli testnet:

```
npx hardhat deploy --network zeta_testnet --chain goerli_testnet
```

### Set Beneficiary Address

The beneficiary address has to be set before staking tokens.

```
npx hardhat set-beneficiary ADDRESS --contract ADDRESS --network goerli_testnet
```

### Set Withdraw Address

```
npx hardhat set-withdraw --contract ADDRESS --network goerli_testnet
```

### Stake Tokens

```
npx hardhat stake --amount 0.1 --contract ADDRESS --network goerli_testnet
```

### Unstake Tokens

```
npx hardhat unstake --contract ADDRESS --network goerli_testnet
```

## Interact with the Contract from Bitcoin

### Deploying the Contract

Clear the cache and artifacts, then compile the contract:

```
npx hardhat compile --force
```

Use the `deploy` task to deploy the contract to ZetaChain with `--chain` flag
specifying the Bitcoin testnet:

```
npx hardhat deploy --network zeta_testnet --chain btc_testnet

🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully deployed contract on ZetaChain.
📜 Contract address: 0x57cafCe6802c45F682201b93529B09EfB9A492C3
🌍 Explorer: https://athens3.explorer.zetachain.com/address/0x57cafCe6802c45F682201b93529B09EfB9A492C3
```

### Convert Bech32 Address to Hex

Your Bitcoin testnet address should start with `tb1`. You can see your Bitcoin
testnet address by querying for balances with `npx hardhat balances`.

Convert your Bitcoin address to hex:

```
npx hardhat address tb1q2dr85d57450xwde6560qyhj7zvzw9895hq25tx

Encoded: 0x74623171326472383564353734353078776465363536307179686a377a767a7739383935687132357478
context.origin: 0x7462317132647238356435373435307877646536
```

### Set Beneficiary Address

The beneficiary address has to be set before staking tokens. Pass your contract
address (without the `0x` prefix) and the action code for setting the
beneficiary address (`03`) to the memo flag. Pass the Bitcoin TSS address as the
recipient address.

```
npx hardhat send-btc --memo 57cafCe6802c45F682201b93529B09EfB9A492C303 --amount 0.0 --recipient tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur
```

Ensure that the transaction was confirmed on Bitcoin testnet and processed by
ZetaChain successfully before proceeding.

### Set Withdraw Address

Pass your contract address (without the `0x` prefix), the action code for
setting the withdraw address (`04`), and the hexidecimal representation of your
Bitcoin address (without the `0x` prefix) to the memo flag.

```
npx hardhat send-btc --memo 57cafCe6802c45F682201b93529B09EfB9A492C30474623171326472383564353734353078776465363536307179686a377a767a7739383935687132357478 --amount 0.0 --recipient tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur
```

### Stake Tokens

Pass your contract address (without the `0x` prefix) and the action code for
staking tokens (`01`) to the memo flag. Specify the `--amount` of tBTC you want
to transfer to your omnichain contract.

```
npx hardhat send-btc --memo 57cafCe6802c45F682201b93529B09EfB9A492C301 --amount 0.01 --recipient tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur
```

### Unstake Tokens

Pass your contract address (without the `0x` prefix) and the action code for
unstaking tokens (`02`) to the memo flag.

```
npx hardhat send-btc --memo 57cafCe6802c45F682201b93529B09EfB9A492C302 --amount 0.0 --recipient tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur
```

## Summary

Congratulations! 🎉 You have created an omnichain staking contract and learned:

- how to make your contract compatible both with EVM-based chains and Bitcoin
- how use the `context.chainID` to get chain ID and the `context.origin` to get
  an identifier for the sender
- that the `context.origin` represents the actual sender address on EVM-based
  chains and the first 20 bytes of the hexidecimal representation of the Bitcoin
  address on Bitcoin
- the pattern for encoding the action code into the `message` parameter of the
  `onCrossChainCall` function to execute different logic from the same function
- how to use the `BytesHelperLib` from ZetaChain's toolkit to convert bytes into
  an address.
- how to implement and use `bytesToBech32Bytes` to take the bytes corresponding
  to the hexidecimal representation of the Bitcoin address from the `message`.

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/tree/main/omnichain/staking
