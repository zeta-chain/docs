# ZetaReceiverMock
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/testing/ZetaReceiverMock.sol)

**Inherits:**
[ZetaReceiver](/contracts/zevm/ZetaConnectorZEVM.sol/interface.ZetaReceiver.md)


## Functions
### onZetaMessage


```solidity
function onZetaMessage(ZetaInterfaces.ZetaMessage calldata zetaMessage) external override;
```

### onZetaRevert


```solidity
function onZetaRevert(ZetaInterfaces.ZetaRevert calldata zetaRevert) external override;
```

## Events
### MockOnZetaMessage

```solidity
event MockOnZetaMessage(address destinationAddress);
```

### MockOnZetaRevert

```solidity
event MockOnZetaRevert(address zetaTxSenderAddress);
```

