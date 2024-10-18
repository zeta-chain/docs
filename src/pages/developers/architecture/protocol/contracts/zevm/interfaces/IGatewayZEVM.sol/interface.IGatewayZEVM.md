# IGatewayZEVM
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/zevm/interfaces/IGatewayZEVM.sol)

**Inherits:**
[IGatewayZEVMErrors](/contracts/zevm/interfaces/IGatewayZEVM.sol/interface.IGatewayZEVMErrors.md), [IGatewayZEVMEvents](/contracts/zevm/interfaces/IGatewayZEVM.sol/interface.IGatewayZEVMEvents.md)

Interface for the GatewayZEVM contract.

*Defines functions for cross-chain interactions and token handling.*


## Functions
### withdraw

Withdraw ZRC20 tokens to an external chain.


```solidity
function withdraw(
    bytes memory receiver,
    uint256 amount,
    address zrc20,
    RevertOptions calldata revertOptions
)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`bytes`|The receiver address on the external chain.|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`zrc20`|`address`|The address of the ZRC20 token.|
|`revertOptions`|`RevertOptions`|Revert options.|


### withdraw

Withdraw ZETA tokens to an external chain.


```solidity
function withdraw(
    bytes memory receiver,
    uint256 amount,
    uint256 chainId,
    RevertOptions calldata revertOptions
)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`bytes`|The receiver address on the external chain.|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`chainId`|`uint256`||
|`revertOptions`|`RevertOptions`|Revert options.|


### withdrawAndCall

Withdraw ZRC20 tokens and call a smart contract on an external chain.


```solidity
function withdrawAndCall(
    bytes memory receiver,
    uint256 amount,
    address zrc20,
    bytes calldata message,
    CallOptions calldata callOptions,
    RevertOptions calldata revertOptions
)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`bytes`|The receiver address on the external chain.|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`zrc20`|`address`|The address of the ZRC20 token.|
|`message`|`bytes`|The calldata to pass to the contract call.|
|`callOptions`|`CallOptions`|Call options including gas limit and arbirtrary call flag.|
|`revertOptions`|`RevertOptions`|Revert options.|


### withdrawAndCall

Withdraw ZETA tokens and call a smart contract on an external chain.


```solidity
function withdrawAndCall(
    bytes memory receiver,
    uint256 amount,
    uint256 chainId,
    bytes calldata message,
    CallOptions calldata callOptions,
    RevertOptions calldata revertOptions
)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`bytes`|The receiver address on the external chain.|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`chainId`|`uint256`|Chain id of the external chain.|
|`message`|`bytes`|The calldata to pass to the contract call.|
|`callOptions`|`CallOptions`|Call options including gas limit and arbirtrary call flag.|
|`revertOptions`|`RevertOptions`|Revert options.|


### call

Call a smart contract on an external chain without asset transfer.


```solidity
function call(
    bytes memory receiver,
    address zrc20,
    bytes calldata message,
    CallOptions calldata callOptions,
    RevertOptions calldata revertOptions
)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`bytes`|The receiver address on the external chain.|
|`zrc20`|`address`|Address of zrc20 to pay fees.|
|`message`|`bytes`|The calldata to pass to the contract call.|
|`callOptions`|`CallOptions`|Call options including gas limit and arbirtrary call flag.|
|`revertOptions`|`RevertOptions`|Revert options.|


### deposit

Deposit foreign coins into ZRC20.


```solidity
function deposit(address zrc20, uint256 amount, address target) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`zrc20`|`address`|The address of the ZRC20 token.|
|`amount`|`uint256`|The amount of tokens to deposit.|
|`target`|`address`|The target address to receive the deposited tokens.|


### execute

Execute a user-specified contract on ZEVM.


```solidity
function execute(
    MessageContext calldata context,
    address zrc20,
    uint256 amount,
    address target,
    bytes calldata message
)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`context`|`MessageContext`|The context of the cross-chain call.|
|`zrc20`|`address`|The address of the ZRC20 token.|
|`amount`|`uint256`|The amount of tokens to transfer.|
|`target`|`address`|The target contract to call.|
|`message`|`bytes`|The calldata to pass to the contract call.|


### depositAndCall

Deposit foreign coins into ZRC20 and call a user-specified contract on ZEVM.


```solidity
function depositAndCall(
    MessageContext calldata context,
    address zrc20,
    uint256 amount,
    address target,
    bytes calldata message
)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`context`|`MessageContext`|The context of the cross-chain call.|
|`zrc20`|`address`|The address of the ZRC20 token.|
|`amount`|`uint256`|The amount of tokens to transfer.|
|`target`|`address`|The target contract to call.|
|`message`|`bytes`|The calldata to pass to the contract call.|


### depositAndCall

Deposit ZETA and call a user-specified contract on ZEVM.


```solidity
function depositAndCall(
    MessageContext calldata context,
    uint256 amount,
    address target,
    bytes calldata message
)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`context`|`MessageContext`|The context of the cross-chain call.|
|`amount`|`uint256`|The amount of tokens to transfer.|
|`target`|`address`|The target contract to call.|
|`message`|`bytes`|The calldata to pass to the contract call.|


### executeRevert

Revert a user-specified contract on ZEVM.


```solidity
function executeRevert(address target, RevertContext calldata revertContext) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`target`|`address`|The target contract to call.|
|`revertContext`|`RevertContext`|Revert context to pass to onRevert.|


### depositAndRevert

Deposit foreign coins into ZRC20 and revert a user-specified contract on ZEVM.


```solidity
function depositAndRevert(
    address zrc20,
    uint256 amount,
    address target,
    RevertContext calldata revertContext
)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`zrc20`|`address`|The address of the ZRC20 token.|
|`amount`|`uint256`|The amount of tokens to revert.|
|`target`|`address`|The target contract to call.|
|`revertContext`|`RevertContext`|Revert context to pass to onRevert.|


