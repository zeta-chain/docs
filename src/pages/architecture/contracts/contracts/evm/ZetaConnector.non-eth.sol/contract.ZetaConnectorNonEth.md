# ZetaConnectorNonEth
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/ZetaConnector.non-eth.sol)

**Inherits:**
[ZetaConnectorBase](/contracts/evm/ZetaConnector.base.sol/contract.ZetaConnectorBase.md)

*Non ETH implementation of ZetaConnector.
This contract manages interactions between TSS and different chains.
This version is for every chain but Etherum network because in the other chains we mint and burn and in Etherum we lock and unlock*


## State Variables
### maxSupply

```solidity
uint256 public maxSupply = 2 ** 256 - 1;
```


## Functions
### constructor


```solidity
constructor(address zetaTokenAddress_, address tssAddress_, address tssAddressUpdater_, address pauserAddress_)
    ZetaConnectorBase(zetaTokenAddress_, tssAddress_, tssAddressUpdater_, pauserAddress_);
```

### getLockedAmount


```solidity
function getLockedAmount() external view returns (uint256);
```

### setMaxSupply


```solidity
function setMaxSupply(uint256 maxSupply_) external onlyTssAddress;
```

### send

*Entry point to send data to protocol
This call burn the token and emit an event with all the data needed by the protocol*


```solidity
function send(ZetaInterfaces.SendInput calldata input) external override whenNotPaused;
```

### onReceive

*Handler to receive data from other chain.
This method can be called only by TSS.
Transfer the Zeta tokens to destination and calls onZetaMessage if it's needed.
To perform the transfer mint new tokens, validating first the maxSupply allowed in the current chain.*


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
Transfer the Zeta tokens to destination and calls onZetaRevert if it's needed.
To perform the transfer mint new tokens, validating first the maxSupply allowed in the current chain.*


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

## Events
### MaxSupplyUpdated

```solidity
event MaxSupplyUpdated(address callerAddress, uint256 newMaxSupply);
```

