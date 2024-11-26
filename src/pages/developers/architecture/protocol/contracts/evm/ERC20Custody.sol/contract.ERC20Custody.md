# ERC20Custody
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/evm/ERC20Custody.sol)

**Inherits:**
Initializable, UUPSUpgradeable, [IERC20Custody](/contracts/evm/interfaces/IERC20Custody.sol/interface.IERC20Custody.md), ReentrancyGuardUpgradeable, AccessControlUpgradeable, PausableUpgradeable

Holds the ERC20 tokens deposited on ZetaChain and includes functionality to call a contract.

*This contract does not call smart contracts directly, it passes through the Gateway contract.*


## State Variables
### gateway
Gateway contract.


```solidity
IGatewayEVM public gateway;
```


### whitelisted
Mapping of whitelisted tokens => true/false.


```solidity
mapping(address => bool) public whitelisted;
```


### tssAddress
The address of the TSS (Threshold Signature Scheme) contract.


```solidity
address public tssAddress;
```


### supportsLegacy
Used to flag if contract supports legacy methods (eg. deposit).


```solidity
bool public supportsLegacy;
```


### PAUSER_ROLE
New role identifier for pauser role.


```solidity
bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
```


### WITHDRAWER_ROLE
New role identifier for withdrawer role.


```solidity
bytes32 public constant WITHDRAWER_ROLE = keccak256("WITHDRAWER_ROLE");
```


### WHITELISTER_ROLE
New role identifier for whitelister role.


```solidity
bytes32 public constant WHITELISTER_ROLE = keccak256("WHITELISTER_ROLE");
```


## Functions
### initialize

Initializer for ERC20Custody.

*Set admin as default admin and pauser, and tssAddress as tss role.*


```solidity
function initialize(address gateway_, address tssAddress_, address admin_) public initializer;
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

### updateTSSAddress

Update tss address


```solidity
function updateTSSAddress(address newTSSAddress) external onlyRole(DEFAULT_ADMIN_ROLE);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newTSSAddress`|`address`|new tss address|


### setSupportsLegacy

Unpause contract.


```solidity
function setSupportsLegacy(bool _supportsLegacy) external onlyRole(DEFAULT_ADMIN_ROLE);
```

### whitelist

Whitelist ERC20 token.


```solidity
function whitelist(address token) external onlyRole(WHITELISTER_ROLE);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|address of ERC20 token|


### unwhitelist

Unwhitelist ERC20 token.


```solidity
function unwhitelist(address token) external onlyRole(WHITELISTER_ROLE);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|address of ERC20 token|


### withdraw

Withdraw directly transfers the tokens to the destination address without contract call.

*This function can only be called by the TSS address.*


```solidity
function withdraw(
    address to,
    address token,
    uint256 amount
)
    external
    nonReentrant
    onlyRole(WITHDRAWER_ROLE)
    whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|Destination address for the tokens.|
|`token`|`address`|Address of the ERC20 token.|
|`amount`|`uint256`|Amount of tokens to withdraw.|


### withdrawAndCall

WithdrawAndCall transfers tokens to Gateway and call a contract through the Gateway.

*This function can only be called by the TSS address.*


```solidity
function withdrawAndCall(
    MessageContext calldata messageContext,
    address to,
    address token,
    uint256 amount,
    bytes calldata data
)
    public
    nonReentrant
    onlyRole(WITHDRAWER_ROLE)
    whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`messageContext`|`MessageContext`|Message context containing sender.|
|`to`|`address`|Address of the contract to call.|
|`token`|`address`|Address of the ERC20 token.|
|`amount`|`uint256`|Amount of tokens to withdraw.|
|`data`|`bytes`|Calldata to pass to the contract call.|


### withdrawAndRevert

WithdrawAndRevert transfers tokens to Gateway and call a contract with a revert functionality through
the Gateway.

*This function can only be called by the TSS address.*


```solidity
function withdrawAndRevert(
    address to,
    address token,
    uint256 amount,
    bytes calldata data,
    RevertContext calldata revertContext
)
    public
    nonReentrant
    onlyRole(WITHDRAWER_ROLE)
    whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|Address of the contract to call.|
|`token`|`address`|Address of the ERC20 token.|
|`amount`|`uint256`|Amount of tokens to withdraw.|
|`data`|`bytes`|Calldata to pass to the contract call.|
|`revertContext`|`RevertContext`|Revert context to pass to onRevert.|


### deposit

Deposits asset to custody and pay fee in zeta erc20.

**Note:**
deprecated: This method is deprecated.


```solidity
function deposit(
    bytes calldata recipient,
    IERC20 asset,
    uint256 amount,
    bytes calldata message
)
    external
    nonReentrant
    whenNotPaused;
```

