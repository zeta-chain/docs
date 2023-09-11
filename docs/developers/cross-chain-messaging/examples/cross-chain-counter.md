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
npx hardhat messaging CrossChainCounter messageFrom:address
```

- `messageFrom`: address of the sender

```solidity title="contracts/CrossChainCounter.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@zetachain/protocol-contracts/contracts/evm/tools/ZetaInteractor.sol";
import "@zetachain/protocol-contracts/contracts/evm/interfaces/ZetaInterfaces.sol";

interface CrossChainCounterErrors {
    error InvalidMessageType();

    // highlight-next-line
    error DecrementOverflow();
}

contract CrossChainCounter is
    ZetaInteractor,
    ZetaReceiver,
    CrossChainCounterErrors
{
    // highlight-start
    bytes32 public constant CROSS_CHAIN_INCREMENT_MESSAGE =
        keccak256("CROSS_CHAIN_INCREMENT");

    mapping(address => uint256) public counter;

    event CrossChainCounterEvent(address);
    event CrossChainCounterRevertedEvent(address);
    // highlight-end

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

    //remove-start
    function sendMessage(uint256 destinationChainId, address sender) external payable {
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
                message: abi.encode(CROSS_CHAIN_COUNTER_MESSAGE_TYPE, sender),
                zetaValueAndGas: zetaValueAndGas,
                zetaParams: abi.encode("")
            })
        );
    }
    //remove-end

    // highlight-start
    function crossChainCount(uint256 destinationChainId) external payable {
        if (!_isValidChainId(destinationChainId))
            revert InvalidDestinationChainId();

        uint256 crossChainGas = 2 * (10 ** 18);
        uint256 zetaValueAndGas = _zetaConsumer.getZetaFromEth{
            value: msg.value
        }(address(this), crossChainGas);
        _zetaToken.approve(address(connector), zetaValueAndGas);

        counter[msg.sender]++;
        connector.send(
            ZetaInterfaces.SendInput({
                destinationChainId: destinationChainId,
                destinationAddress: interactorsByChainId[destinationChainId],
                destinationGasLimit: 300000,
                //highlight-next-line
                message: abi.encode(CROSS_CHAIN_INCREMENT_MESSAGE, msg.sender),
                zetaValueAndGas: zetaValueAndGas,
                zetaParams: abi.encode("")
            })
        );
    }
    // highlight-end

    function onZetaMessage(
        ZetaInterfaces.ZetaMessage calldata zetaMessage
    ) external override isValidMessageCall(zetaMessage) {
        (bytes32 messageType, address messageFrom) = abi.decode(
            zetaMessage.message,
            (bytes32, address)
        );

        if (messageType != CROSS_CHAIN_INCREMENT_MESSAGE)
            revert InvalidMessageType();

        // highlight-start
        counter[messageFrom]++;
        emit CrossChainCounterEvent(messageFrom);
        // highlight-end

    }

    function onZetaRevert(
        ZetaInterfaces.ZetaRevert calldata zetaRevert
    ) external override isValidRevertCall(zetaRevert) {
        (bytes32 messageType, address messageFrom) = abi.decode(
            zetaRevert.message,
            (bytes32, address)
        );

        if (messageType != CROSS_CHAIN_INCREMENT_MESSAGE)
            revert InvalidMessageType();
        //highlight-start
        if (counter[messageFrom] <= 0) revert DecrementOverflow();
        counter[messageFrom]--;
        //highlight-end

    }
}
```

## Create a deployment task

```solidity title="tasks/deploy.ts" reference
https://github.com/zeta-chain/example-contracts/blob/3e79d006239bb9cbe0120e36aecc471cea4a2ad7/messaging/counter/tasks/deploy.ts
```

```ts title="hardhat.config.ts"
import "./tasks/deploy.ts";
```

## Create a task to get the counter value

```solidity title="tasks/counter_show.ts" reference
https://github.com/zeta-chain/example-contracts/blob/3e79d006239bb9cbe0120e36aecc471cea4a2ad7/messaging/counter/tasks/counter_show.ts
```

```ts title="hardhat.config.ts"
import "./tasks/counter_show.ts";
```

## Create a task to increment the counter value

```solidity title="tasks/counter_increment.ts" reference
https://github.com/zeta-chain/example-contracts/blob/3e79d006239bb9cbe0120e36aecc471cea4a2ad7/messaging/counter/tasks/counter_increment.ts
```

```ts title="hardhat.config.ts"
import "./tasks/counter_increment.ts";
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
