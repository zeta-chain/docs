# IGatewayZEVMEvents
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/e9e111d59a014252dbe61290a7e2992479a0a46d/contracts/zevm/interfaces/IGatewayZEVM.sol)

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
    uint256 gasLimit,
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
|`gasLimit`|`uint256`|Gas limit.|
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
    uint256 gasLimit,
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
|`gasLimit`|`uint256`|Gas limit.|
|`revertOptions`|`RevertOptions`|Revert options.|

