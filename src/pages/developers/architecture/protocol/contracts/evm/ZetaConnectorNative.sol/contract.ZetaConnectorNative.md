# ZetaConnectorNative
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/evm/ZetaConnectorNative.sol)

**Inherits:**
[ZetaConnectorBase](/contracts/evm/ZetaConnectorBase.sol/abstract.ZetaConnectorBase.md)

Implementation of ZetaConnectorBase for native token handling.

*This contract directly transfers Zeta tokens and interacts with the Gateway contract.*


## Functions
### initialize


```solidity
function initialize(
    address gateway_,
    address zetaToken_,
    address tssAddress_,
    address admin_
)
    public
    override
    initializer;
```

### withdraw

Withdraw tokens to a specified address.

*This function can only be called by the TSS address.*


```solidity
function withdraw(
    address to,
    uint256 amount,
    bytes32
)
    external
    override
    nonReentrant
    onlyRole(WITHDRAWER_ROLE)
    whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address to withdraw tokens to.|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`<none>`|`bytes32`||


### withdrawAndCall

Withdraw tokens and call a contract through Gateway.

*This function can only be called by the TSS address.*


```solidity
function withdrawAndCall(
    MessageContext calldata messageContext,
    address to,
    uint256 amount,
    bytes calldata data,
    bytes32
)
    external
    override
    nonReentrant
    onlyRole(WITHDRAWER_ROLE)
    whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`messageContext`|`MessageContext`|Message context containing sender.|
|`to`|`address`|The address to withdraw tokens to.|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`data`|`bytes`|The calldata to pass to the contract call.|
|`<none>`|`bytes32`||


### withdrawAndRevert

Withdraw tokens and call a contract with a revert callback through Gateway.

*This function can only be called by the TSS address.*


```solidity
function withdrawAndRevert(
    address to,
    uint256 amount,
    bytes calldata data,
    bytes32,
    RevertContext calldata revertContext
)
    external
    override
    nonReentrant
    onlyRole(WITHDRAWER_ROLE)
    whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address to withdraw tokens to.|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`data`|`bytes`|The calldata to pass to the contract call.|
|`<none>`|`bytes32`||
|`revertContext`|`RevertContext`|Revert context to pass to onRevert.|


### receiveTokens

Handle received tokens.


```solidity
function receiveTokens(uint256 amount) external override whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of tokens received.|


