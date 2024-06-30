# SystemContract
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/zevm/SystemContract.sol)

**Inherits:**
[SystemContractErrors](/contracts/zevm/SystemContract.sol/interface.SystemContractErrors.md)

*The system contract it's called by the protocol to interact with the blockchain.
Also includes a lot of tools to make easier to interact with ZetaChain.*


## State Variables
### gasPriceByChainId
Map to know the gas price of each chain given a chain id.


```solidity
mapping(uint256 => uint256) public gasPriceByChainId;
```


### gasCoinZRC20ByChainId
Map to know the ZRC20 address of a token given a chain id, ex zETH, zBNB etc.


```solidity
mapping(uint256 => address) public gasCoinZRC20ByChainId;
```


### gasZetaPoolByChainId

```solidity
mapping(uint256 => address) public gasZetaPoolByChainId;
```


### FUNGIBLE_MODULE_ADDRESS
Fungible address is always the same, it's on protocol level.


```solidity
address public constant FUNGIBLE_MODULE_ADDRESS = 0x735b14BB79463307AAcBED86DAf3322B1e6226aB;
```


### uniswapv2FactoryAddress
Uniswap V2 addresses.


```solidity
address public immutable uniswapv2FactoryAddress;
```


### uniswapv2Router02Address

```solidity
address public immutable uniswapv2Router02Address;
```


### wZetaContractAddress
Address of the wrapped ZETA to interact with Uniswap V2.


```solidity
address public wZetaContractAddress;
```


### zetaConnectorZEVMAddress
Address of ZEVM Zeta Connector.


```solidity
address public zetaConnectorZEVMAddress;
```


## Functions
### constructor

*Only fungible module can deploy a system contract.*


```solidity
constructor(address wzeta_, address uniswapv2Factory_, address uniswapv2Router02_);
```

### depositAndCall

*Deposit foreign coins into ZRC20 and call user specified contract on zEVM.*


```solidity
function depositAndCall(
    zContext calldata context,
    address zrc20,
    uint256 amount,
    address target,
    bytes calldata message
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`context`|`zContext`||
|`zrc20`|`address`||
|`amount`|`uint256`||
|`target`|`address`||
|`message`|`bytes`||


### sortTokens

*Sort token addresses lexicographically. Used to handle return values from pairs sorted in the order.*


```solidity
function sortTokens(address tokenA, address tokenB) internal pure returns (address token0, address token1);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenA`|`address`||
|`tokenB`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`token0`|`address`|token1, returns sorted token addresses,.|
|`token1`|`address`||


### uniswapv2PairFor

*Calculates the CREATE2 address for a pair without making any external calls.*


```solidity
function uniswapv2PairFor(address factory, address tokenA, address tokenB) public pure returns (address pair);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`factory`|`address`||
|`tokenA`|`address`||
|`tokenB`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`pair`|`address`|tokens pair address.|


### setGasPrice

*Fungible module updates the gas price oracle periodically.*


```solidity
function setGasPrice(uint256 chainID, uint256 price) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`chainID`|`uint256`||
|`price`|`uint256`||


### setGasCoinZRC20

*Setter for gasCoinZRC20ByChainId map.*


```solidity
function setGasCoinZRC20(uint256 chainID, address zrc20) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`chainID`|`uint256`||
|`zrc20`|`address`||


### setGasZetaPool

*Set the pool wzeta/erc20 address.*


```solidity
function setGasZetaPool(uint256 chainID, address erc20) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`chainID`|`uint256`||
|`erc20`|`address`||


### setWZETAContractAddress

*Setter for wrapped ZETA address.*


```solidity
function setWZETAContractAddress(address addr) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`addr`|`address`||


### setConnectorZEVMAddress

*Setter for zetaConnector ZEVM Address*


```solidity
function setConnectorZEVMAddress(address addr) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`addr`|`address`||


## Events
### SystemContractDeployed
Custom SystemContract errors.


```solidity
event SystemContractDeployed();
```

### SetGasPrice

```solidity
event SetGasPrice(uint256, uint256);
```

### SetGasCoin

```solidity
event SetGasCoin(uint256, address);
```

### SetGasZetaPool

```solidity
event SetGasZetaPool(uint256, address);
```

### SetWZeta

```solidity
event SetWZeta(address);
```

### SetConnectorZEVM

```solidity
event SetConnectorZEVM(address);
```

