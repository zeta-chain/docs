# IZetaConnectorEvents
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/evm/interfaces/IZetaConnector.sol)

Interface for the events emitted by the ZetaConnector contracts.


## Events
### Withdrawn
Emitted when tokens are withdrawn.


```solidity
event Withdrawn(address indexed to, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address to which the tokens are withdrawn.|
|`amount`|`uint256`|The amount of tokens withdrawn.|

### WithdrawnAndCalled
Emitted when tokens are withdrawn and a contract is called.


```solidity
event WithdrawnAndCalled(address indexed to, uint256 amount, bytes data);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address to which the tokens are withdrawn.|
|`amount`|`uint256`|The amount of tokens withdrawn.|
|`data`|`bytes`|The calldata passed to the contract call.|

### WithdrawnAndReverted
Emitted when tokens are withdrawn and a contract is called with a revert callback.


```solidity
event WithdrawnAndReverted(address indexed to, uint256 amount, bytes data, RevertContext revertContext);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address to which the tokens are withdrawn.|
|`amount`|`uint256`|The amount of tokens withdrawn.|
|`data`|`bytes`|The calldata passed to the contract call.|
|`revertContext`|`RevertContext`|Revert context to pass to onRevert.|

### UpdatedZetaConnectorTSSAddress
Emitted when tss address is updated


```solidity
event UpdatedZetaConnectorTSSAddress(address oldTSSAddress, address newTSSAddress);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oldTSSAddress`|`address`|old tss address|
|`newTSSAddress`|`address`|new tss address|

