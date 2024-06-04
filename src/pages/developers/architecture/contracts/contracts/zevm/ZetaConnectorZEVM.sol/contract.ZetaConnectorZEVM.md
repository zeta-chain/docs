# ZetaConnectorZEVM
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/zevm/ZetaConnectorZEVM.sol)


## State Variables
### wzeta
WZETA token address.


```solidity
address public wzeta;
```


### FUNGIBLE_MODULE_ADDRESS
Fungible module address.


```solidity
address public constant FUNGIBLE_MODULE_ADDRESS = payable(0x735b14BB79463307AAcBED86DAf3322B1e6226aB);
```


## Functions
### onlyFungibleModule

*Modifier to restrict actions to fungible module.*


```solidity
modifier onlyFungibleModule();
```

### constructor


```solidity
constructor(address wzeta_);
```

### receive

*Receive function to receive ZETA from WETH9.withdraw().*


```solidity
receive() external payable;
```

### setWzetaAddress


```solidity
function setWzetaAddress(address wzeta_) external onlyFungibleModule;
```

### send

*Sends ZETA and bytes messages (to execute it) crosschain.*


```solidity
function send(ZetaInterfaces.SendInput calldata input) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`input`|`ZetaInterfaces.SendInput`||


### onReceive

*Handler to receive data from other chain.
This method can be called only by Fungible Module.
Transfer the Zeta tokens to destination and calls onZetaMessage if it's needed.
To perform the transfer wrap the new tokens*


```solidity
function onReceive(
    bytes calldata zetaTxSenderAddress,
    uint256 sourceChainId,
    address destinationAddress,
    uint256 zetaValue,
    bytes calldata message,
    bytes32 internalSendHash
) external payable onlyFungibleModule;
```

### onRevert

*Handler to receive errors from other chain.
This method can be called only by Fungible Module.
Transfer the Zeta tokens to destination and calls onZetaRevert if it's needed.*


```solidity
function onRevert(
    address zetaTxSenderAddress,
    uint256 sourceChainId,
    bytes calldata destinationAddress,
    uint256 destinationChainId,
    uint256 remainingZetaValue,
    bytes calldata message,
    bytes32 internalSendHash
) external payable onlyFungibleModule;
```

## Events
### SetWZETA

```solidity
event SetWZETA(address wzeta_);
```

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

## Errors
### OnlyWZETAOrFungible
Contract custom errors.


```solidity
error OnlyWZETAOrFungible();
```

### WZETATransferFailed

```solidity
error WZETATransferFailed();
```

### OnlyFungibleModule

```solidity
error OnlyFungibleModule();
```

### FailedZetaSent

```solidity
error FailedZetaSent();
```

### WrongValue

```solidity
error WrongValue();
```

