---
sidebar_position: 2
sidebar_label: Value Transfer
hide_title: true
id: multichain-value-transfer
title: Multichain Value Transfer
---

# Multichain Value Transfer

In this tutorial you will learn how to send ZETA tokens between connected
blockchains using ZetaChain.

In this example you will only be sending ZETA tokens without any associated
message.

## Set up your environment

```
git clone https://github.com/zeta-chain/template

cd template

yarn
```

## Create the Contract

To create a new cross-chain messaging contract you will use the `messaging`
Hardhat task available by default in the template.

```
npx hardhat messaging Value --fees zetaRevert
```

Use the `--fees` flag to specify that you want your contract to accept ZETA
tokens as fees. Since the purpose of this contract is to send ZETA tokens, it
makes sense to also use ZETA tokens as fees.

## Modify the Contract

```solidity title="contracts/Value.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@zetachain/protocol-contracts/contracts/evm/tools/ZetaInteractor.sol";
import "@zetachain/protocol-contracts/contracts/evm/interfaces/ZetaInterfaces.sol";
import "@zetachain/protocol-contracts/contracts/evm/Zeta.eth.sol";

// highlight-next-line
contract Value is ZetaInteractor {
    error ErrorTransferringZeta();
    // remove-start
    error InvalidMessageType();

    event ValueEvent();
    event ValueRevertedEvent();

    bytes32 public constant VALUE_MESSAGE_TYPE = keccak256("CROSS_CHAIN_VALUE");
    // remove-end
    IERC20 internal immutable _zetaToken;

    constructor(
        address connectorAddress,
        address zetaTokenAddress
    ) ZetaInteractor(connectorAddress) {
        _zetaToken = IERC20(zetaTokenAddress);
    }

    function sendMessage(
        uint256 destinationChainId,
        uint256 zetaValueAndGas
    ) external payable {
        if (!_isValidChainId(destinationChainId))
            revert InvalidDestinationChainId();

        bool success1 = _zetaToken.approve(address(connector), zetaValueAndGas);
        bool success2 = _zetaToken.transferFrom(
            msg.sender,
            address(this),
            zetaValueAndGas
        );
        if (!(success1 && success2)) revert ErrorTransferringZeta();

        connector.send(
            ZetaInterfaces.SendInput({
                destinationChainId: destinationChainId,
                destinationAddress: interactorsByChainId[destinationChainId],
                destinationGasLimit: 300000,
                // highlight-next-line
                message: abi.encode(),
                zetaValueAndGas: zetaValueAndGas,
                zetaParams: abi.encode("")
            })
        );
    }

    // remove-start
    function onZetaMessage(
        ZetaInterfaces.ZetaMessage calldata zetaMessage
    ) external override isValidMessageCall(zetaMessage) {
        bytes32 messageType = abi.decode(zetaMessage.message, (bytes32));

        if (messageType != VALUE_MESSAGE_TYPE) revert InvalidMessageType();

        emit ValueEvent();
    }

    function onZetaRevert(
        ZetaInterfaces.ZetaRevert calldata zetaRevert
    ) external override isValidRevertCall(zetaRevert) {
        bytes32 messageType = abi.decode(zetaRevert.message, (bytes32));

        if (messageType != VALUE_MESSAGE_TYPE) revert InvalidMessageType();

        emit ValueRevertedEvent();
    }
    // remove-end
}
```

Modify the contract so that it only inherits from `ZetaInteractor`. Since the
purpose of the contract is to only send ZETA tokens (and not messages), it
doesn't need to inherit from `ZetaMessageReceiver` and implement the
`onZetaMessage` and `onZetaRevert` functions.

You can also remove the message type from the `connector.send` call.

## Deploy the Contract

Clear the cache and artifacts, then compile the contract:

```
npx hardhat compile --force
```

Run the following command to deploy the contract to two networks:

```
npx hardhat deploy --networks goerli_testnet,mumbai_testnet
```

## Send a message

Run the following command to send ZETA tokens from Goerli to Mumbai. Please,
note that since the contract expect ZETA tokens as fees, the value of the
`--amount` param is denomited in ZETA tokens. A fraction of the amount will be
deducted as a cross-chain fee, the rest will be sent to the recipient on the
destination chain.

```
npx hardhat interact --contract 0xe6DE62328677C80084b07eF25637EC83A53d69E1 --network goerli_testnet  --destination mumbai_testnet --amount 3

🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

✅ The transaction has been broadcasted to goerli_testnet
📝 Transaction hash: 0x4996283c199fafe4c15f33a8ef6d4a41d00545b0736bac0e5a74d72fb342b4c7
```

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/tree/main/messaging/value
