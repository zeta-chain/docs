# ZRC20
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/zevm/ZRC20.sol)

**Inherits:**
[IZRC20](/contracts/zevm/interfaces/IZRC20.sol/interface.IZRC20.md), [IZRC20Metadata](/contracts/zevm/Interfaces.sol/interface.IZRC20Metadata.md), [ZRC20Errors](/contracts/zevm/ZRC20.sol/interface.ZRC20Errors.md)


## State Variables
### FUNGIBLE_MODULE_ADDRESS
Fungible address is always the same, maintained at the protocol level


```solidity
address public constant FUNGIBLE_MODULE_ADDRESS = 0x735b14BB79463307AAcBED86DAf3322B1e6226aB;
```


### CHAIN_ID
Chain id.abi


```solidity
uint256 public immutable CHAIN_ID;
```


### COIN_TYPE
Coin type, checkout Interfaces.sol.


```solidity
CoinType public immutable COIN_TYPE;
```


### SYSTEM_CONTRACT_ADDRESS
System contract address.


```solidity
address public SYSTEM_CONTRACT_ADDRESS;
```


### GAS_LIMIT
Gas limit.


```solidity
uint256 public GAS_LIMIT;
```


### PROTOCOL_FLAT_FEE
Protocol flat fee.


```solidity
uint256 public PROTOCOL_FLAT_FEE;
```


### _balances

```solidity
mapping(address => uint256) private _balances;
```


### _allowances

```solidity
mapping(address => mapping(address => uint256)) private _allowances;
```


### _totalSupply

```solidity
uint256 private _totalSupply;
```


### _name

```solidity
string private _name;
```


### _symbol

```solidity
string private _symbol;
```


### _decimals

```solidity
uint8 private _decimals;
```


## Functions
### _msgSender


```solidity
function _msgSender() internal view virtual returns (address);
```

### _msgData


```solidity
function _msgData() internal view virtual returns (bytes calldata);
```

### onlyFungible

*Only fungible module modifier.*


```solidity
modifier onlyFungible();
```

### constructor

*The only one allowed to deploy new ZRC20 is fungible address.*


```solidity
constructor(
    string memory name_,
    string memory symbol_,
    uint8 decimals_,
    uint256 chainid_,
    CoinType coinType_,
    uint256 gasLimit_,
    address systemContractAddress_
);
```

### name

*ZRC20 name*


```solidity
function name() public view virtual override returns (string memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|name as string|


### symbol

*ZRC20 symbol.*


```solidity
function symbol() public view virtual override returns (string memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|symbol as string.|


### decimals

*ZRC20 decimals.*


```solidity
function decimals() public view virtual override returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|returns uint8 decimals.|


### totalSupply

*ZRC20 total supply.*


```solidity
function totalSupply() public view virtual override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|returns uint256 total supply.|


### balanceOf

*Returns ZRC20 balance of an account.*


```solidity
function balanceOf(address account) public view virtual override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 account balance.|


### transfer

*Returns ZRC20 balance of an account.*


```solidity
function transfer(address recipient, uint256 amount) public virtual override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`||
|`amount`|`uint256`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true/false if transfer succeeded/failed.|


### allowance

*Returns token allowance from owner to spender.*


```solidity
function allowance(address owner, address spender) public view virtual override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`||
|`spender`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 allowance.|


### approve

*Approves amount transferFrom for spender.*


```solidity
function approve(address spender, uint256 amount) public virtual override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`spender`|`address`||
|`amount`|`uint256`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true/false if succeeded/failed.|


### transferFrom

*Transfers tokens from sender to recipient.*


```solidity
function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`||
|`recipient`|`address`||
|`amount`|`uint256`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true/false if succeeded/failed.|


### burn

*Burns an amount of tokens.*


```solidity
function burn(uint256 amount) external returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true/false if succeeded/failed.|


### _transfer


```solidity
function _transfer(address sender, address recipient, uint256 amount) internal virtual;
```

### _mint


```solidity
function _mint(address account, uint256 amount) internal virtual;
```

### _burn


```solidity
function _burn(address account, uint256 amount) internal virtual;
```

### _approve


```solidity
function _approve(address owner, address spender, uint256 amount) internal virtual;
```

### deposit

*Deposits corresponding tokens from external chain, only callable by Fungible module.*


```solidity
function deposit(address to, uint256 amount) external override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`||
|`amount`|`uint256`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true/false if succeeded/failed.|


### withdrawGasFee

*Withdraws gas fees.*


```solidity
function withdrawGasFee() public view override returns (address, uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|returns the ZRC20 address for gas on the same chain of this ZRC20, and calculates the gas fee for withdraw()|
|`<none>`|`uint256`||


### withdraw

*Withraws ZRC20 tokens to external chains, this function causes cctx module to send out outbound tx to the outbound chain
this contract should be given enough allowance of the gas ZRC20 to pay for outbound tx gas fee.*


```solidity
function withdraw(bytes memory to, uint256 amount) external override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`bytes`||
|`amount`|`uint256`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true/false if succeeded/failed.|


### updateSystemContractAddress

*Updates system contract address. Can only be updated by the fungible module.*


```solidity
function updateSystemContractAddress(address addr) external onlyFungible;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`addr`|`address`||


### updateGasLimit

*Updates gas limit. Can only be updated by the fungible module.*


```solidity
function updateGasLimit(uint256 gasLimit) external onlyFungible;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gasLimit`|`uint256`||


### updateProtocolFlatFee

*Updates protocol flat fee. Can only be updated by the fungible module.*


```solidity
function updateProtocolFlatFee(uint256 protocolFlatFee) external onlyFungible;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`protocolFlatFee`|`uint256`||


