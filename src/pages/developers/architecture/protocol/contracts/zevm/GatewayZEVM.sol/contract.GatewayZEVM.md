# GatewayZEVM
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/zevm/GatewayZEVM.sol)

**Inherits:**
[IGatewayZEVM](/contracts/zevm/interfaces/IGatewayZEVM.sol/interface.IGatewayZEVM.md), Initializable, AccessControlUpgradeable, UUPSUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, [INotSupportedMethods](/contracts/Errors.sol/interface.INotSupportedMethods.md)

The GatewayZEVM contract is the endpoint to call smart contracts on omnichain.

*The contract doesn't hold any funds and should never have active allowances.*


## State Variables
### PROTOCOL_ADDRESS
The constant address of the protocol


```solidity
address public constant PROTOCOL_ADDRESS = 0x735b14BB79463307AAcBED86DAf3322B1e6226aB;
```


### zetaToken
The address of the Zeta token.


```solidity
address public zetaToken;
```


### PAUSER_ROLE
New role identifier for pauser role.


```solidity
bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
```


### MAX_MESSAGE_SIZE
Max size of message + revertOptions revert message.


```solidity
uint256 public constant MAX_MESSAGE_SIZE = 1024;
```


## Functions
### onlyProtocol

*Only protocol address allowed modifier.*


```solidity
modifier onlyProtocol();
```

### constructor

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor();
```

### initialize

Initialize with address of zeta token and admin account set as DEFAULT_ADMIN_ROLE.

*Using admin to authorize upgrades and pause.*


```solidity
function initialize(address zetaToken_, address admin_) public initializer;
```

### _authorizeUpgrade

*Authorizes the upgrade of the contract.*


```solidity
function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newImplementation`|`address`|The address of the new implementation.|


### receive

*Receive function to receive ZETA from WETH9.withdraw().*


```solidity
receive() external payable whenNotPaused;
```

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

### _withdrawZRC20

*Private function to withdraw ZRC20 tokens.*


```solidity
function _withdrawZRC20(uint256 amount, address zrc20) private returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`zrc20`|`address`|The address of the ZRC20 token.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The gas fee for the withdrawal.|


### _withdrawZRC20WithGasLimit

*Private function to withdraw ZRC20 tokens with gas limit.*


```solidity
function _withdrawZRC20WithGasLimit(uint256 amount, address zrc20, uint256 gasLimit) private returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`zrc20`|`address`|The address of the ZRC20 token.|
|`gasLimit`|`uint256`|Gas limit.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The gas fee for the withdrawal.|


### _transferZETA

*Private function to transfer ZETA tokens.*


```solidity
function _transferZETA(uint256 amount, address to) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of tokens to transfer.|
|`to`|`address`|The address to transfer the tokens to.|


### withdraw

Withdraw ZRC20 tokens to an external chain.


```solidity
function withdraw(
    bytes memory receiver,
    uint256 amount,
    address zrc20,
    RevertOptions calldata revertOptions
)
    external
    whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`bytes`|The receiver address on the external chain.|
|`amount`|`uint256`|The amount of tokens to withdraw.|
|`zrc20`|`address`|The address of the ZRC20 token.|
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
    external
    whenNotPaused;
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


### withdraw

Withdraw ZETA tokens to an external chain.


```solidity
function withdraw(bytes memory, uint256, uint256, RevertOptions calldata) external whenNotPaused;
```

### withdrawAndCall

Withdraw ZETA tokens and call a smart contract on an external chain.


```solidity
function withdrawAndCall(
    bytes memory,
    uint256,
    uint256,
    bytes calldata,
    CallOptions calldata,
    RevertOptions calldata
)
    external
    whenNotPaused;
```

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
    external
    whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`bytes`|The receiver address on the external chain.|
|`zrc20`|`address`|Address of zrc20 to pay fees.|
|`message`|`bytes`|The calldata to pass to the contract call.|
|`callOptions`|`CallOptions`|Call options including gas limit and arbirtrary call flag.|
|`revertOptions`|`RevertOptions`|Revert options.|


### _call


```solidity
function _call(
    bytes memory receiver,
    address zrc20,
    bytes calldata message,
    CallOptions memory callOptions,
    RevertOptions memory revertOptions
)
    private;
```

### deposit

Deposit foreign coins into ZRC20.


```solidity
function deposit(address zrc20, uint256 amount, address target) external onlyProtocol whenNotPaused;
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
    external
    nonReentrant
    onlyProtocol
    whenNotPaused;
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
    external
    nonReentrant
    onlyProtocol
    whenNotPaused;
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
    external
    nonReentrant
    onlyProtocol
    whenNotPaused;
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
function executeRevert(
    address target,
    RevertContext calldata revertContext
)
    external
    nonReentrant
    onlyProtocol
    whenNotPaused;
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
    external
    nonReentrant
    onlyProtocol
    whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`zrc20`|`address`|The address of the ZRC20 token.|
|`amount`|`uint256`|The amount of tokens to revert.|
|`target`|`address`|The target contract to call.|
|`revertContext`|`RevertContext`|Revert context to pass to onRevert.|


## Errors
### ZeroAddress
Error indicating a zero address was provided.


```solidity
error ZeroAddress();
```

