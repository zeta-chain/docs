# IGatewayZEVMEvents
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/zevm/interfaces/IGatewayZEVM.sol)

Interface for the events emitted by the GatewayZEVM contract.


## Events
### Called
Emitted when a cross-chain call is made.


```solidity
event Called(
    address indexed sender,
    address indexed zrc20,
    bytes receiver,
    bytes message,
    CallOptions callOptions,
    RevertOptions revertOptions
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address of the sender.|
|`zrc20`|`address`|Address of zrc20 to pay fees.|
|`receiver`|`bytes`|The receiver address on the external chain.|
|`message`|`bytes`|The calldata passed to the contract call.|
|`callOptions`|`CallOptions`|Call options including gas limit and arbirtrary call flag.|
|`revertOptions`|`RevertOptions`|Revert options.|

### Withdrawn
Emitted when a withdrawal is made.


```solidity
event Withdrawn(
    address indexed sender,
    uint256 indexed chainId,
    bytes receiver,
    address zrc20,
    uint256 value,
    uint256 gasfee,
    uint256 protocolFlatFee,
    bytes message,
    CallOptions callOptions,
    RevertOptions revertOptions
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address from which the tokens are withdrawn.|
|`chainId`|`uint256`|Chain id of external chain.|
|`receiver`|`bytes`|The receiver address on the external chain.|
|`zrc20`|`address`|The address of the ZRC20 token.|
|`value`|`uint256`|The amount of tokens withdrawn.|
|`gasfee`|`uint256`|The gas fee for the withdrawal.|
|`protocolFlatFee`|`uint256`|The protocol flat fee for the withdrawal.|
|`message`|`bytes`|The calldata passed with the withdraw. No longer used. Kept to maintain compatibility.|
|`callOptions`|`CallOptions`|Call options including gas limit and arbirtrary call flag.|
|`revertOptions`|`RevertOptions`|Revert options.|

### WithdrawnAndCalled
Emitted when a withdraw and call is made.


```solidity
event WithdrawnAndCalled(
    address indexed sender,
    uint256 indexed chainId,
    bytes receiver,
    address zrc20,
    uint256 value,
    uint256 gasfee,
    uint256 protocolFlatFee,
    bytes message,
    CallOptions callOptions,
    RevertOptions revertOptions
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address from which the tokens are withdrawn.|
|`chainId`|`uint256`|Chain id of external chain.|
|`receiver`|`bytes`|The receiver address on the external chain.|
|`zrc20`|`address`|The address of the ZRC20 token.|
|`value`|`uint256`|The amount of tokens withdrawn.|
|`gasfee`|`uint256`|The gas fee for the withdrawal.|
|`protocolFlatFee`|`uint256`|The protocol flat fee for the withdrawal.|
|`message`|`bytes`|The calldata passed to the contract call.|
|`callOptions`|`CallOptions`|Call options including gas limit and arbirtrary call flag.|
|`revertOptions`|`RevertOptions`|Revert options.|

