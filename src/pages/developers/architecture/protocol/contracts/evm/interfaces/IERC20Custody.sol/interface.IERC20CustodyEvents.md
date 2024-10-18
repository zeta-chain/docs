# IERC20CustodyEvents
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/evm/interfaces/IERC20Custody.sol)

Interface for the events emitted by the ERC20 custody contract.


## Events
### Withdrawn
Emitted when tokens are withdrawn.


```solidity
event Withdrawn(address indexed to, address indexed token, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address receiving the tokens.|
|`token`|`address`|The address of the ERC20 token.|
|`amount`|`uint256`|The amount of tokens withdrawn.|

### WithdrawnAndCalled
Emitted when tokens are withdrawn and a contract call is made.


```solidity
event WithdrawnAndCalled(address indexed to, address indexed token, uint256 amount, bytes data);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address receiving the tokens.|
|`token`|`address`|The address of the ERC20 token.|
|`amount`|`uint256`|The amount of tokens withdrawn.|
|`data`|`bytes`|The calldata passed to the contract call.|

### WithdrawnAndReverted
Emitted when tokens are withdrawn and a revertable contract call is made.


```solidity
event WithdrawnAndReverted(
    address indexed to, address indexed token, uint256 amount, bytes data, RevertContext revertContext
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address receiving the tokens.|
|`token`|`address`|The address of the ERC20 token.|
|`amount`|`uint256`|The amount of tokens withdrawn.|
|`data`|`bytes`|The calldata passed to the contract call.|
|`revertContext`|`RevertContext`|Revert context to pass to onRevert.|

### Whitelisted
Emitted when ERC20 token is whitelisted


```solidity
event Whitelisted(address indexed token);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|address of ERC20 token.|

### Unwhitelisted
Emitted when ERC20 token is unwhitelisted


```solidity
event Unwhitelisted(address indexed token);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|address of ERC20 token.|

### Deposited
Emitted in legacy deposit method.


```solidity
event Deposited(bytes recipient, IERC20 indexed asset, uint256 amount, bytes message);
```

### UpdatedCustodyTSSAddress
Emitted when tss address is updated


```solidity
event UpdatedCustodyTSSAddress(address oldTSSAddress, address newTSSAddress);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oldTSSAddress`|`address`|old tss address|
|`newTSSAddress`|`address`|new tss address|

