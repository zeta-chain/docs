# ZetaConnectorBase
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/ZetaConnector.base.sol)

**Inherits:**
[ConnectorErrors](/contracts/evm/interfaces/ConnectorErrors.sol/interface.ConnectorErrors.md), Pausable

*Main abstraction of ZetaConnector.
This contract manages interactions between TSS and different chains.
There's an instance of this contract on each chain supported by ZetaChain.*


## State Variables
### zetaToken

```solidity
address public immutable zetaToken;
```


### pauserAddress
*Multisig contract to pause incoming transactions.
The responsibility of pausing outgoing transactions is left to the protocol for more flexibility.*


```solidity
address public pauserAddress;
```


### tssAddress
*Collectively held by ZetaChain validators.*


```solidity
address public tssAddress;
```


### tssAddressUpdater
*This address will start pointing to a multisig contract, then it will become the TSS address itself.*


```solidity
address public tssAddressUpdater;
```


## Functions
### constructor

*Constructor requires initial addresses.
zetaToken address is the only immutable one, while others can be updated.*


```solidity
constructor(address zetaToken_, address tssAddress_, address tssAddressUpdater_, address pauserAddress_);
```

### onlyPauser

*Modifier to restrict actions to pauser address.*


```solidity
modifier onlyPauser();
```

### onlyTssAddress

*Modifier to restrict actions to TSS address.*


```solidity
modifier onlyTssAddress();
```

### onlyTssUpdater

*Modifier to restrict actions to TSS updater address.*


```solidity
modifier onlyTssUpdater();
```

### updatePauserAddress

*Update the pauser address. The only address allowed to do that is the current pauser.*


```solidity
function updatePauserAddress(address pauserAddress_) external onlyPauser;
```

### updateTssAddress

*Update the TSS address. The address can be updated by the TSS updater or the TSS address itself.*


```solidity
function updateTssAddress(address tssAddress_) external;
```

### renounceTssAddressUpdater

*Changes the ownership of tssAddressUpdater to be the one held by the ZetaChain TSS Signer nodes.*


```solidity
function renounceTssAddressUpdater() external onlyTssUpdater;
```

### pause

*Pause the input (send) transactions.*


```solidity
function pause() external onlyPauser;
```

### unpause

*Unpause the contract to allow transactions again.*


```solidity
function unpause() external onlyPauser;
```

### send

*Entrypoint to send data and value through ZetaChain.*


```solidity
function send(ZetaInterfaces.SendInput calldata input) external virtual;
```

### onReceive

*Handler to receive data from other chain.
This method can be called only by TSS. Access validation is in implementation.*


```solidity
function onReceive(
    bytes calldata zetaTxSenderAddress,
    uint256 sourceChainId,
    address destinationAddress,
    uint256 zetaValue,
    bytes calldata message,
    bytes32 internalSendHash
) external virtual;
```

### onRevert

*Handler to receive errors from other chain.
This method can be called only by TSS. Access validation is in implementation.*


```solidity
function onRevert(
    address zetaTxSenderAddress,
    uint256 sourceChainId,
    bytes calldata destinationAddress,
    uint256 destinationChainId,
    uint256 remainingZetaValue,
    bytes calldata message,
    bytes32 internalSendHash
) external virtual;
```

## Events
### ZetaSent

```solidity
event ZetaSent(
    address sourceTxOriginAddress,
    address indexed zetaTxSenderAddress,
    uint256 indexed destinationChainId,
    bytes destinationAddress,
    uint256 zetaValueAndGas,
    uint256 destinationGasLimit,
    bytes message,
    bytes zetaParams
);
```

### ZetaReceived

```solidity
event ZetaReceived(
    bytes zetaTxSenderAddress,
    uint256 indexed sourceChainId,
    address indexed destinationAddress,
    uint256 zetaValue,
    bytes message,
    bytes32 indexed internalSendHash
);
```

### ZetaReverted

```solidity
event ZetaReverted(
    address zetaTxSenderAddress,
    uint256 sourceChainId,
    uint256 indexed destinationChainId,
    bytes destinationAddress,
    uint256 remainingZetaValue,
    bytes message,
    bytes32 indexed internalSendHash
);
```

### TSSAddressUpdated

```solidity
event TSSAddressUpdated(address callerAddress, address newTssAddress);
```

### TSSAddressUpdaterUpdated

```solidity
event TSSAddressUpdaterUpdated(address callerAddress, address newTssUpdaterAddress);
```

### PauserAddressUpdated

```solidity
event PauserAddressUpdated(address callerAddress, address newTssAddress);
```

