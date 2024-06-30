# ERC20Custody
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/ERC20Custody.sol)

**Inherits:**
ReentrancyGuard

ERC20Custody for depositing ERC20 assets into ZetaChain and making operations with them.


## State Variables
### paused
If custody operations are paused.


```solidity
bool public paused;
```


### TSSAddress
TSSAddress is the TSS address collectively possessed by Zeta blockchain validators.


```solidity
address public TSSAddress;
```


### TSSAddressUpdater
Threshold Signature Scheme (TSS) [GG20] is a multi-sig ECDSA/EdDSA protocol.


```solidity
address public TSSAddressUpdater;
```


### zetaFee
Current zeta fee for depositing funds into ZetaChain.


```solidity
uint256 public zetaFee;
```


### zetaMaxFee
Maximum zeta fee for transaction.


```solidity
uint256 public immutable zetaMaxFee;
```


### zeta
Zeta ERC20 token .


```solidity
IERC20 public immutable zeta;
```


### whitelisted
Mapping of whitelisted token => true/false.


```solidity
mapping(IERC20 => bool) public whitelisted;
```


## Functions
### onlyTSS

*Only TSS address allowed modifier.*


```solidity
modifier onlyTSS();
```

### onlyTSSUpdater

*Only TSS address updater allowed modifier.*


```solidity
modifier onlyTSSUpdater();
```

### constructor


```solidity
constructor(address TSSAddress_, address TSSAddressUpdater_, uint256 zetaFee_, uint256 zetaMaxFee_, IERC20 zeta_);
```

### updateTSSAddress

*Update the TSSAddress in case of Zeta blockchain validator nodes churn.*


```solidity
function updateTSSAddress(address TSSAddress_) external onlyTSSUpdater;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`TSSAddress_`|`address`||


### updateZetaFee

*Update zeta fee*


```solidity
function updateZetaFee(uint256 zetaFee_) external onlyTSS;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`zetaFee_`|`uint256`||


### renounceTSSAddressUpdater

*Change the ownership of TSSAddressUpdater to the Zeta blockchain TSS nodes.
Effectively, only Zeta blockchain validators collectively can update TSSAddress afterwards.*


```solidity
function renounceTSSAddressUpdater() external onlyTSSUpdater;
```

### pause

*Pause custody operations.*


```solidity
function pause() external onlyTSS;
```

### unpause

*Unpause custody operations.*


```solidity
function unpause() external onlyTSS;
```

### whitelist

*Whitelist asset.*


```solidity
function whitelist(IERC20 asset) external onlyTSS;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`IERC20`||


### unwhitelist

*Unwhitelist asset.*


```solidity
function unwhitelist(IERC20 asset) external onlyTSS;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`IERC20`||


### deposit

*Deposit asset amount to recipient with message that encodes additional zetachain evm call or message.*


```solidity
function deposit(bytes calldata recipient, IERC20 asset, uint256 amount, bytes calldata message)
    external
    nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`bytes`||
|`asset`|`IERC20`||
|`amount`|`uint256`||
|`message`|`bytes`||


### withdraw

*Withdraw asset amount to recipient by custody TSS owner.*


```solidity
function withdraw(address recipient, IERC20 asset, uint256 amount) external nonReentrant onlyTSS;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`||
|`asset`|`IERC20`||
|`amount`|`uint256`||


## Events
### Paused

```solidity
event Paused(address sender);
```

### Unpaused

```solidity
event Unpaused(address sender);
```

### Whitelisted

```solidity
event Whitelisted(IERC20 indexed asset);
```

### Unwhitelisted

```solidity
event Unwhitelisted(IERC20 indexed asset);
```

### Deposited

```solidity
event Deposited(bytes recipient, IERC20 indexed asset, uint256 amount, bytes message);
```

### Withdrawn

```solidity
event Withdrawn(address indexed recipient, IERC20 indexed asset, uint256 amount);
```

### RenouncedTSSUpdater

```solidity
event RenouncedTSSUpdater(address TSSAddressUpdater_);
```

### UpdatedTSSAddress

```solidity
event UpdatedTSSAddress(address TSSAddress_);
```

### UpdatedZetaFee

```solidity
event UpdatedZetaFee(uint256 zetaFee_);
```

## Errors
### NotWhitelisted

```solidity
error NotWhitelisted();
```

### NotPaused

```solidity
error NotPaused();
```

### InvalidSender

```solidity
error InvalidSender();
```

### InvalidTSSUpdater

```solidity
error InvalidTSSUpdater();
```

### ZeroAddress

```solidity
error ZeroAddress();
```

### IsPaused

```solidity
error IsPaused();
```

### ZetaMaxFeeExceeded

```solidity
error ZetaMaxFeeExceeded();
```

### ZeroFee

```solidity
error ZeroFee();
```

