# Connector

ZetaChain connector lets you send cross-chain messages (data and value) between
any connected chains. To find up-to-date Connector and ZETA addresses to develop
with, go [here](/reference/contracts).

## Introduction

To create cross-chain smart contracts using Zeta Connector, your contracts
should:

- Call `connector.send` to send messages.
- Handle `onZetaMessage` to receive messages.
- Handle `onZetaRevert` to revert messages.

```solidity

pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/evm/tools/ZetaInteractor.sol";
import "@zetachain/protocol-contracts/contracts/evm/interfaces/ZetaInterfaces.sol";

contract YourContract is ZetaInteractor, ZetaReceiver {
    constructor(address connectorAddress)
        ZetaInteractor(connectorAddress)
    {}

    function sendMessage(uint256 destinationChainId) external payable {
        connector.send(
            ZetaInterfaces.SendInput({
                destinationChainId: destinationChainId,
                destinationAddress: interactorsByChainId[destinationChainId],
                destinationGasLimit: 300000,
                message: abi.encode("Hello, Cross-Chain World!"),
                zetaValueAndGas: msg.value,
                zetaParams: abi.encode("")
            })
        );
    }

    function onZetaMessage(ZetaInterfaces.ZetaMessage calldata zetaMessage) external override isValidMessageCall(zetaMessage) {
        // Handle the message
    }

    function onZetaRevert(ZetaInterfaces.ZetaRevert calldata zetaRevert) external override isValidRevertCall(zetaRevert) {
        // Handle the revert
    }
}
```

## Sending data and value across chains

Call `connector.send` from your contracts to interact with other chains:

```solidity
interface ZetaInterfaces {
  /**
  * @dev Use SendInput to interact with the Connector: connector.send(SendInput)
  */
  struct SendInput {
      /// @dev Chain id of the destination chain. More about chain ids https://docs.zetachain.com/learn/glossary#chain-id
      uint256 destinationChainId;
      /// @dev Address receiving the message on the destination chain (expressed in bytes since it can be non-EVM)
      bytes destinationAddress;
      /// @dev Gas limit for the destination chain's transaction
      uint256 destinationGasLimit;
      /// @dev An encoded, arbitrary message to be parsed by the destination contract
      bytes message;
      /// @dev ZETA to be sent cross-chain + ZetaChain gas fees + destination chain gas fees (expressed in ZETA)
      uint256 zetaValueAndGas;
      /// @dev Optional parameters for the ZetaChain protocol
      bytes zetaParams;
  }
}

interface ZetaConnector {
    function send(ZetaInterfaces.SendInput calldata input) external;
}
```

## onZetaMessage

After the source contract calls `connector.send`, the ZetaChain system will
forward the message to the destination chain and call `onZetaMessage` at
contract address `destinationAddress`. Optionally, the sending contract can
provide some ZETA token (`zetaAmount`, approved to be spent by the ZetaConnector
contract) to move value cross-chain, and cover gas fee for the destination chain
interaction. The ZetaChain system will move the ZETA token to the destination
chain, and transfer it to the receiving smart contract `destinationAddress`. The
destination chain must deploy a smart contract that implements this interface:

```solidity
interface ZetaInterfaces {
  struct ZetaMessage {
      bytes zetaTxSenderAddress;
      uint256 sourceChainId;
      address destinationAddress;
      /// @dev Remaining ZETA from zetaValueAndGas after subtracting ZetaChain gas fees and destination gas fees
      uint256 zetaValue;
      bytes message;
  }
}

interface ZetaReceiver {
  function onZetaMessage(ZetaInterfaces.ZetaMessage calldata zetaMessage) external;
}
```

Inside the function, we can assume that the current smart contract has already
received `zetaAmount` ZETA token that the sending contract sent over (minus gas
fees).

## onZetaRevert

If this contract function call fails for some reason, the ZetaChain system will
call the `onZetaRevert` function of the sending smart contract. The burnt ZETA
token will be refunded to the sending contract, and the sending contract should
properly revert its actions regarding this cross-chain message.

The source chain smart contract must also implement this interface:

```solidity
interface ZetaInterfaces {
  struct ZetaRevert {
      address zetaTxSenderAddress;
      uint256 sourceChainId;
      bytes destinationAddress;
      uint256 destinationChainId;
      /// @dev Equals to: zetaValueAndGas - ZetaChain gas fees - destination chain gas fees - source chain revert tx gas fees
      uint256 remainingZetaValue;
      bytes message;
  }
}

interface ZetaReceiver {
  function onZetaRevert(ZetaInterfaces.ZetaRevert calldata zetaRevert) external;
}
```

In case the destination transaction fails, application level roll-back should
happen in this function.

## Summary

To make your dApps multi-chain using ZetaChain's Connector, you will need to
deploy contracts to multiple chains supported by ZetaChain. Those contracts will
be able to send messages and value between each other by implementing the
`onZetaMessage` and `onZetaRevert` callbacks, and calling `connector.send`.