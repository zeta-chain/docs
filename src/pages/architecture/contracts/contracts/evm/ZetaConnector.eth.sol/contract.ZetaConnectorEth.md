# ZetaConnectorEth
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/ZetaConnector.eth.sol)

**Inherits:**
[ZetaConnectorBase](/contracts/evm/ZetaConnector.base.sol/contract.ZetaConnectorBase.md)

*ETH implementation of ZetaConnector.
This contract manages interactions between TSS and different chains.
This version is only for Ethereum network because in the other chains we mint and burn and in this one we lock and unlock.*


## Functions
### constructor


```solidity
constructor(address zetaToken_, address tssAddress_, address tssAddressUpdater_, address pauserAddress_)
    ZetaConnectorBase(zetaToken_, tssAddress_, tssAddressUpdater_, pauserAddress_);
```

### getLockedAmount


```solidity
function getLockedAmount() external view returns (uint256);
```

### send

*Entrypoint to send data through ZetaChain
This call locks the token on the contract and emits an event with all the data needed by the protocol.*


```solidity
function send(ZetaInterfaces.SendInput calldata input) external override whenNotPaused;
```

### onReceive

*Handler to receive data from other chain.
This method can be called only by TSS.
Transfers the Zeta tokens to destination and calls onZetaMessage if it's needed.*


```solidity
function onReceive(
    bytes calldata zetaTxSenderAddress,
    uint256 sourceChainId,
    address destinationAddress,
    uint256 zetaValue,
    bytes calldata message,
    bytes32 internalSendHash
) external override onlyTssAddress;
```

### onRevert

*Handler to receive errors from other chain.
This method can be called only by TSS.
Transfers the Zeta tokens to destination and calls onZetaRevert if it's needed.*


```solidity
function onRevert(
    address zetaTxSenderAddress,
    uint256 sourceChainId,
    bytes calldata destinationAddress,
    uint256 destinationChainId,
    uint256 remainingZetaValue,
    bytes calldata message,
    bytes32 internalSendHash
) external override whenNotPaused onlyTssAddress;
```

