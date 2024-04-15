---
sidebar_position: 3
sidebar_label: Cross-Chain Counter
hide_title: true
id: cross-chain-counter
title: Build a Cross-Chain Counter
---

# Build a cross-chain counter

This is an example app of cross-chain counter using
[Zeta Connector](/developers/cross-chain-messaging/connector).

![Cross-chain counter](/img/graphs/cross-chain-counter.svg)

## Set up your environment

```
git clone https://github.com/zeta-chain/template
cd template
yarn
```

## Create a new contract

```
npx hardhat messaging Counter from:address
```

- `from`: address of the sender

```solidity title="contracts/Counter.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@zetachain/protocol-contracts/contracts/evm/tools/ZetaInteractor.sol";
import "@zetachain/protocol-contracts/contracts/evm/interfaces/ZetaInterfaces.sol";

contract Counter is ZetaInteractor, ZetaReceiver {
    error InvalidMessageType();
    // highlight-next-line
    error DecrementOverflow();

    event CounterEvent(address);
    event CounterRevertedEvent(address);
    // highlight-next-line
    mapping(address => uint256) public counter;

    bytes32 public constant COUNTER_MESSAGE_TYPE =
        keccak256("CROSS_CHAIN_COUNTER");
    ZetaTokenConsumer private immutable _zetaConsumer;
    IERC20 internal immutable _zetaToken;

    constructor(
        address connectorAddress,
        address zetaTokenAddress,
        address zetaConsumerAddress
    ) ZetaInteractor(connectorAddress) {
        _zetaToken = IERC20(zetaTokenAddress);
        _zetaConsumer = ZetaTokenConsumer(zetaConsumerAddress);
    }

    // highlight-next-line
    function sendMessage(uint256 destinationChainId) external payable {
        if (!_isValidChainId(destinationChainId))
            revert InvalidDestinationChainId();

        uint256 crossChainGas = 2 * (10 ** 18);
        uint256 zetaValueAndGas = _zetaConsumer.getZetaFromEth{
            value: msg.value
        }(address(this), crossChainGas);
        _zetaToken.approve(address(connector), zetaValueAndGas);

        connector.send(
            ZetaInterfaces.SendInput({
                destinationChainId: destinationChainId,
                destinationAddress: interactorsByChainId[destinationChainId],
                destinationGasLimit: 300000,
                // highlight-next-line
                message: abi.encode(COUNTER_MESSAGE_TYPE, msg.sender),
                zetaValueAndGas: zetaValueAndGas,
                zetaParams: abi.encode("")
            })
        );
    }

    function onZetaMessage(
        ZetaInterfaces.ZetaMessage calldata zetaMessage
    ) external override isValidMessageCall(zetaMessage) {
        (bytes32 messageType, address from) = abi.decode(
            zetaMessage.message,
            (bytes32, address)
        );

        if (messageType != COUNTER_MESSAGE_TYPE) revert InvalidMessageType();

        // highlight-next-line
        counter[from]++;
        emit CounterEvent(from);
    }

    function onZetaRevert(
        ZetaInterfaces.ZetaRevert calldata zetaRevert
    ) external override isValidRevertCall(zetaRevert) {
        (bytes32 messageType, address from) = abi.decode(
            zetaRevert.message,
            (bytes32, address)
        );

        if (messageType != COUNTER_MESSAGE_TYPE) revert InvalidMessageType();

        // highlight-start
        if (counter[from] <= 0) revert DecrementOverflow();
        counter[from]--;
        // highlight-end
        emit CounterRevertedEvent(from);
    }
}
```

## Create a task to get the counter value

```ts title="tasks/counter_show.ts"
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const contractName = "CrossChainCounter";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();
  console.log(`🔑 Using account: ${signer.address}\n`);

  const factory = await hre.ethers.getContractFactory(contractName);
  const contract = factory.attach(args.contract);

  const counter = await contract.counter(signer.address);

  console.log(`🔢 The counter for ${signer.address} is: ${counter.toString()}
`);
};

task(
  "counter:show",
  "Sends a message from one chain to another.",
  main
).addParam("contract", "Contract address");
```

```ts title="hardhat.config.ts"
import "./tasks/counter_show.ts";
```

## Create a task to increment the counter value

```ts title="tasks/interact.ts"
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseEther } from "@ethersproject/units";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();

  const factory = await hre.ethers.getContractFactory("Counter");
  const contract = factory.attach(args.contract);

  const destination = hre.config.networks[args.destination]?.chainId;
  if (destination === undefined) {
    throw new Error(`${args.destination} is not a valid destination chain`);
  }

  // remove-next-line
  const paramFrom = hre.ethers.utils.getAddress(args.from);

  const value = parseEther(args.amount);

  const tx = await contract
    .connect(signer)
    // highlight-next-line
    .sendMessage(destination, { value });

  const receipt = await tx.wait();
  if (args.json) {
    console.log(JSON.stringify(tx, null, 2));
  } else {
    console.log(`🔑 Using account: ${signer.address}\n`);
    console.log(`✅ The transaction has been broadcasted to ${hre.network.name}
📝 Transaction hash: ${receipt.transactionHash}
`);
  }
};

task("interact", "Sends a message from one chain to another.", main)
  .addFlag("json", "Output JSON")
  .addParam("contract", "Contract address")
  .addParam("amount", "Token amount to send")
  .addParam("destination", "Destination chain")
  // remove-next-line
  .addParam("from", "address");
```

## Deploy the contract

Clear the cache and artifacts, then compile the contract:

```
npx hardhat compile --force
```

```
npx hardhat deploy --networks sepolia_testnet,mumbai_testnet

🚀 Successfully deployed contract on mumbai_testnet.
📜 Contract address: 0xbe58130dcD7db27f7b79AE27F91d2D74324c5999

🚀 Successfully deployed contract on sepolia_testnet.
📜 Contract address: 0x0e10dF07DCA39Ae5e09bC37897E846b281A68A6C

🔗 Setting interactors for a contract on mumbai_testnet
✅ Interactor address for 5 (sepolia_testnet) is set to 0x0e10df07dca39ae5e09bc37897e846b281a68a6c

🔗 Setting interactors for a contract on sepolia_testnet
✅ Interactor address for 80001 (mumbai_testnet) is set to 0xbe58130dcd7db27f7b79ae27f91d2d74324c5999
```

## Increment the counter value

### Show initial counter value on both chains

```
npx hardhat counter:show --network sepolia_testnet --contract 0x0e10dF07DCA39Ae5e09bC37897E846b281A68A6C

🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🔢 The counter for 0x2cD3D070aE1BD365909dD859d29F387AA96911e1 is: 0
```

```
npx hardhat counter:show --network mumbai_testnet --contract 0xbe58130dcD7db27f7b79AE27F91d2D74324c5999

🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🔢 The counter for 0x2cD3D070aE1BD365909dD859d29F387AA96911e1 is: 0
```

### Increment the counter value

```
npx hardhat interact --network sepolia_testnet --contract 0x0e10dF07DCA39Ae5e09bC37897E846b281A68A6C
--amount 0.3 --destination mumbai_testnet

🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

✅ The transaction has been broadcasted to sepolia_testnet
📝 Transaction hash: 0xd0e5adadda20236fd1f50c2e3290e823744015e3227242fb22c78f27b46a63db
```

### Show the counter value after increment

```
npx hardhat counter:show --network mumbai_testnet --contract 0xbe58130dcD7db27f7b79AE27F91d2D74324c5999

🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🔢 The counter for 0x2cD3D070aE1BD365909dD859d29F387AA96911e1 is: 1
```

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/tree/main/messaging/counter
