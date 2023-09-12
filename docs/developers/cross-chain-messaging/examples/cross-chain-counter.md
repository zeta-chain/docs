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
```

Install the dependencies:

```
yarn add --dev @openzeppelin/contracts
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

interface CounterErrors {
    error InvalidMessageType();
    // highlight-next-line
    error DecrementOverflow();
}

contract Counter is ZetaInteractor, ZetaReceiver, CounterErrors {
    bytes32 public constant COUNTER_MESSAGE_TYPE =
        keccak256("CROSS_CHAIN_COUNTER");

    event CounterEvent(address);
    event CounterRevertedEvent(address);
    mapping(address => uint256) public counter;

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

```solidity title="tasks/counter_show.ts" reference
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
  // remove-next-line
  const paramFrom = hre.ethers.utils.getAddress(args.from);

  const tx = await contract
    .connect(signer)
    // highlight-next-line
    .sendMessage(destination, { value: parseEther(args.amount) });

  const receipt = await tx.wait();
  console.log(`✅ The transaction has been broadcasted to ${hre.network.name}
📝 Transaction hash: ${receipt.transactionHash}
`);
  await trackCCTX(tx.hash);
};

task("interact", "Sends a message from one chain to another.", main)
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
npx hardhat deploy --networks mumbai_testnet,bsc_testnet

🚀 Successfully deployed contract on mumbai_testnet.
📜 Contract address: 0xb10bD8b51B433079e960ec91BEADCDc4434e3E69

🚀 Successfully deployed contract on bsc_testnet.
📜 Contract address: 0x2A5831b69EbBD6941e68A17bAD34184B7c4a7628

🔗 Setting interactors for a contract on mumbai_testnet
✅ Interactor address for 97 (bsc_testnet) is set to 0x2a5831b69ebbd6941e68a17bad34184b7c4a7628

🔗 Setting interactors for a contract on bsc_testnet
✅ Interactor address for 80001 (mumbai_testnet) is set to 0xb10bd8b51b433079e960ec91beadcdc4434e3e69
```

## Increment the counter value

### Show initial counter value on both chains

```
npx hardhat counter:show --contract 0xb10bD8b51B433079e960ec91BEADCDc4434e3E69 --network mumbai_testnet

🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🔢 The counter for 0x2cD3D070aE1BD365909dD859d29F387AA96911e1 is: 0
```

```
npx hardhat counter:show --contract 0x2A5831b69EbBD6941e68A17bAD34184B7c4a7628 --network bsc_testnet

🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🔢 The counter for 0x2cD3D070aE1BD365909dD859d29F387AA96911e1 is: 1
```

### Increment the counter value

```
npx hardhat counter:increment --contract 0xb10bD8b51B433079e960ec91BEADCDc4434e3E69 --amount 100 --destination 97 --network mumbai_testnet

🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

✅ "crossChainCount" transaction has been broadcasted to mumbai_testnet
📝 Transaction hash: 0xf569119f06ddac13093ba97c2dea9932036ee7ad51ac8d3ac9379dd22c48dd94
```

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/messaging/counter
