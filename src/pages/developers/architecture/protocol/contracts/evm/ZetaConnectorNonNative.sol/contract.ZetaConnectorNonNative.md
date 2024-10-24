# ZetaConnectorNonNative
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/evm/ZetaConnectorNonNative.sol)

**Inherits:**
[ZetaConnectorBase](/contracts/evm/ZetaConnectorBase.sol/abstract.ZetaConnectorBase.md)

Implementation of ZetaConnectorBase for non-native token handling.

*This contract mints and burns Zeta tokens and interacts with the Gateway contract.*


## State Variables
### maxSupply
Max supply for minting.


```solidity
uint256 public maxSupply;
```


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

### setMaxSupply

Set max supply for minting.

*This function can only be called by the TSS address.*


```solidity
function setMaxSupply(uint256 maxSupply_) external onlyRole(TSS_ROLE) whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`maxSupply_`|`uint256`|New max supply.|


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

*This function can only be called by the TSS address, and mints if supply is not reached.*


```solidity
function withdrawAndCall(
    MessageContext calldata messageContext,
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
|`messageContext`|`MessageContext`|Message context containing sender.|
|`to`|`address`|The address to withdraw tokens to.|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`data`|`bytes`|The calldata to pass to the contract call.|
|`internalSendHash`|`bytes32`|A hash used for internal tracking of the transaction.|


### withdrawAndRevert

Withdraw tokens and call a contract with a revert callback through Gateway.

*This function can only be called by the TSS address, and mints if supply is not reached.*


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

Handle received tokens and burn them.


```solidity
function receiveTokens(uint256 amount) external override whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of tokens received.|


### _mintTo

*mints to provided account and checks if totalSupply will be exceeded*


```solidity
function _mintTo(address to, uint256 amount, bytes32 internalSendHash) private;
```

## Events
### MaxSupplyUpdated
Event triggered when max supply is updated.


```solidity
event MaxSupplyUpdated(uint256 maxSupply);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`maxSupply`|`uint256`|New max supply.|

## Errors
### ExceedsMaxSupply

```solidity
error ExceedsMaxSupply();
```

