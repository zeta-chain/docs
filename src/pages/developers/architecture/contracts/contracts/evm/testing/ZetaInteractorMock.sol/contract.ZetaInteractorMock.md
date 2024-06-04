# ZetaInteractorMock
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/testing/ZetaInteractorMock.sol)

**Inherits:**
Ownable2Step, [ZetaInteractor](/contracts/evm/tools/ZetaInteractor.sol/abstract.ZetaInteractor.md), [ZetaReceiver](/contracts/zevm/ZetaConnectorZEVM.sol/interface.ZetaReceiver.md)


## Functions
### constructor


```solidity
constructor(address zetaConnectorAddress) ZetaInteractor(zetaConnectorAddress);
```

### onZetaMessage


```solidity
function onZetaMessage(ZetaInterfaces.ZetaMessage calldata zetaMessage)
    external
    override
    isValidMessageCall(zetaMessage);
```

### onZetaRevert


```solidity
function onZetaRevert(ZetaInterfaces.ZetaRevert calldata zetaRevert) external override isValidRevertCall(zetaRevert);
```

