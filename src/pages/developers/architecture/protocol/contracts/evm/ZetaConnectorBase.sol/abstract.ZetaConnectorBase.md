# ZetaConnectorBase
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/evm/ZetaConnectorBase.sol)

**Inherits:**
Initializable, UUPSUpgradeable, [IZetaConnectorEvents](/contracts/evm/interfaces/IZetaConnector.sol/interface.IZetaConnectorEvents.md), ReentrancyGuardUpgradeable, PausableUpgradeable, AccessControlUpgradeable

Abstract base contract for ZetaConnector.

*This contract implements basic functionality for handling tokens and interacting with the Gateway contract.*


## State Variables
### gateway
The Gateway contract used for executing cross-chain calls.


```solidity
IGatewayEVM public gateway;
```


### zetaToken
The address of the Zeta token.


```solidity
address public zetaToken;
```


### tssAddress
The address of the TSS (Threshold Signature Scheme) contract.


```solidity
address public tssAddress;
```


### WITHDRAWER_ROLE
New role identifier for withdrawer role.


```solidity
bytes32 public constant WITHDRAWER_ROLE = keccak256("WITHDRAWER_ROLE");
```


### PAUSER_ROLE
New role identifier for pauser role.


```solidity
bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
```


### TSS_ROLE
New role identifier for tss role.


```solidity
bytes32 public constant TSS_ROLE = keccak256("TSS_ROLE");
```


## Functions
### initialize

Initializer for ZetaConnectors.

*Set admin as default admin and pauser, and tssAddress as tss role.*


```solidity
function initialize(
    address gateway_,
    address zetaToken_,
    address tssAddress_,
    address admin_
)
    public
    virtual
    initializer;
```

### _authorizeUpgrade

*Authorizes the upgrade of the contract, sender must be owner.*


```solidity
function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newImplementation`|`address`|Address of the new implementation.|


### updateTSSAddress

Update tss address


```solidity
function updateTSSAddress(address newTSSAddress) external onlyRole(DEFAULT_ADMIN_ROLE);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newTSSAddress`|`address`|new tss address|


### pause

Pause contract.


```solidity
function pause() external onlyRole(PAUSER_ROLE);
```

### unpause

Unpause contract.


```solidity
function unpause() external onlyRole(PAUSER_ROLE);
```

### withdraw

Withdraw tokens to a specified address.


```solidity
function withdraw(address to, uint256 amount, bytes32 internalSendHash) external virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address to withdraw tokens to.|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`internalSendHash`|`bytes32`|A hash used for internal tracking of the transaction.|


### withdrawAndCall

Withdraw tokens and call a contract through Gateway.


```solidity
function withdrawAndCall(
    MessageContext calldata messageContext,
    address to,
    uint256 amount,
    bytes calldata data,
    bytes32 internalSendHash
)
    external
    virtual;
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


```solidity
function withdrawAndRevert(
    address to,
    uint256 amount,
    bytes calldata data,
    bytes32 internalSendHash,
    RevertContext calldata revertContext
)
    external
    virtual;
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
function receiveTokens(uint256 amount) external virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of tokens received.|


## Errors
### ZeroAddress
Error indicating that a zero address was provided.


```solidity
error ZeroAddress();
```

