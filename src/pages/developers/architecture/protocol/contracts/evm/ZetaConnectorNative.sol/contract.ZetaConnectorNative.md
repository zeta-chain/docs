# ZetaConnectorNative
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/dedf2ca4d335fe85937fd686450fecebb5456bc9/contracts/evm/ZetaConnectorNative.sol)

**Inherits:**
[ZetaConnectorBase](/contracts/evm/ZetaConnectorBase.sol/abstract.ZetaConnectorBase.md)

Implementation of ZetaConnectorBase for native token handling.

*This contract directly transfers Zeta tokens and interacts with the Gateway contract.*


## Functions
### constructor


```solidity
constructor(
    address gateway_,
    address zetaToken_,
    address tssAddress_,
    address admin_
)
    ZetaConnectorBase(gateway_, zetaToken_, tssAddress_, admin_);
```

### withdraw

Withdraw tokens to a specified address.

*This function can only be called by the TSS address.*


```solidity
function withdraw(
    address to,
    uint256 amount,
    bytes32 internalSendHash
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
|`internalSendHash`|`bytes32`|A hash used for internal tracking of the transaction.|


### withdrawAndCall

Withdraw tokens and call a contract through Gateway.

*This function can only be called by the TSS address.*


```solidity
function withdrawAndCall(
    address to,
    uint256 amount,
    bytes calldata data,
    bytes32 internalSendHash
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
|`internalSendHash`|`bytes32`|A hash used for internal tracking of the transaction.|


### withdrawAndRevert

Withdraw tokens and call a contract with a revert callback through Gateway.

*This function can only be called by the TSS address.*


```solidity
function withdrawAndRevert(
    address to,
    uint256 amount,
    bytes calldata data,
    bytes32 internalSendHash,
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
|`internalSendHash`|`bytes32`|A hash used for internal tracking of the transaction.|
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


