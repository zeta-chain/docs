# SystemContractMock
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/zevm/testing/SystemContractMock.sol)

**Inherits:**
[SystemContractErrors](/contracts/zevm/SystemContract.sol/interface.SystemContractErrors.md)


## State Variables
### gasPriceByChainId

```solidity
mapping(uint256 => uint256) public gasPriceByChainId;
```


### gasCoinZRC20ByChainId

```solidity
mapping(uint256 => address) public gasCoinZRC20ByChainId;
```


### gasZetaPoolByChainId

```solidity
mapping(uint256 => address) public gasZetaPoolByChainId;
```


### wZetaContractAddress

```solidity
address public wZetaContractAddress;
```


### uniswapv2FactoryAddress

```solidity
address public uniswapv2FactoryAddress;
```


### uniswapv2Router02Address

```solidity
address public uniswapv2Router02Address;
```


## Functions
### constructor


```solidity
constructor(address wzeta_, address uniswapv2Factory_, address uniswapv2Router02_);
```

### setGasPrice


```solidity
function setGasPrice(uint256 chainID, uint256 price) external;
```

### setGasCoinZRC20


```solidity
function setGasCoinZRC20(uint256 chainID, address zrc20) external;
```

### setWZETAContractAddress


```solidity
function setWZETAContractAddress(address addr) external;
```

### sortTokens


```solidity
function sortTokens(address tokenA, address tokenB) internal pure returns (address token0, address token1);
```

### uniswapv2PairFor


```solidity
function uniswapv2PairFor(address factory, address tokenA, address tokenB) public pure returns (address pair);
```

### onCrossChainCall


```solidity
function onCrossChainCall(address target, address zrc20, uint256 amount, bytes calldata message) external;
```

## Events
### SystemContractDeployed

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

