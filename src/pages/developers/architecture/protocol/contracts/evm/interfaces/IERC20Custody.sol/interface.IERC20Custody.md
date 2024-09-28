# IERC20Custody
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/3a274ce7bad045a879c73669586611d35509cbce/contracts/evm/interfaces/IERC20Custody.sol)

**Inherits:**
[IERC20CustodyEvents](/contracts/evm/interfaces/IERC20Custody.sol/interface.IERC20CustodyEvents.md), [IERC20CustodyErrors](/contracts/evm/interfaces/IERC20Custody.sol/interface.IERC20CustodyErrors.md)


## Functions
### whitelisted

Mapping of whitelisted tokens => true/false.


```solidity
function whitelisted(address token) external view returns (bool);
```

### withdraw

Withdraw directly transfers the tokens to the destination address without contract call.

*This function can only be called by the TSS address.*


```solidity
function withdraw(address token, address to, uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|Address of the ERC20 token.|
|`to`|`address`|Destination address for the tokens.|
|`amount`|`uint256`|Amount of tokens to withdraw.|


### withdrawAndCall

WithdrawAndCall transfers tokens to Gateway and call a contract through the Gateway.

*This function can only be called by the TSS address.*


```solidity
function withdrawAndCall(address token, address to, uint256 amount, bytes calldata data) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|Address of the ERC20 token.|
|`to`|`address`|Address of the contract to call.|
|`amount`|`uint256`|Amount of tokens to withdraw.|
|`data`|`bytes`|Calldata to pass to the contract call.|


### withdrawAndRevert

WithdrawAndRevert transfers tokens to Gateway and call a contract with a revert functionality through
the Gateway.

*This function can only be called by the TSS address.*


```solidity
function withdrawAndRevert(
    address token,
    address to,
    uint256 amount,
    bytes calldata data,
    RevertContext calldata revertContext
)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|Address of the ERC20 token.|
|`to`|`address`|Address of the contract to call.|
|`amount`|`uint256`|Amount of tokens to withdraw.|
|`data`|`bytes`|Calldata to pass to the contract call.|
|`revertContext`|`RevertContext`|Revert context to pass to onRevert.|


