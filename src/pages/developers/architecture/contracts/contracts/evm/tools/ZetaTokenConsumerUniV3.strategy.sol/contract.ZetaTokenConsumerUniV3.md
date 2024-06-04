# ZetaTokenConsumerUniV3
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/tools/ZetaTokenConsumerUniV3.strategy.sol)

**Inherits:**
[ZetaTokenConsumer](/contracts/evm/interfaces/ZetaInterfaces.sol/interface.ZetaTokenConsumer.md), [ZetaTokenConsumerUniV3Errors](/contracts/evm/tools/ZetaTokenConsumerPancakeV3.strategy.sol/interface.ZetaTokenConsumerUniV3Errors.md)

*Uniswap V3 strategy for ZetaTokenConsumer*


## State Variables
### MAX_DEADLINE

```solidity
uint256 internal constant MAX_DEADLINE = 200;
```


### zetaPoolFee

```solidity
uint24 public immutable zetaPoolFee;
```


### tokenPoolFee

```solidity
uint24 public immutable tokenPoolFee;
```


### WETH9Address

```solidity
address public immutable WETH9Address;
```


### zetaToken

```solidity
address public immutable zetaToken;
```


### uniswapV3Router

```solidity
ISwapRouter public immutable uniswapV3Router;
```


### uniswapV3Factory

```solidity
IUniswapV3Factory public immutable uniswapV3Factory;
```


### _locked

```solidity
bool internal _locked;
```


## Functions
### constructor


```solidity
constructor(
    address zetaToken_,
    address uniswapV3Router_,
    address uniswapV3Factory_,
    address WETH9Address_,
    uint24 zetaPoolFee_,
    uint24 tokenPoolFee_
);
```

### nonReentrant


```solidity
modifier nonReentrant();
```

### receive


```solidity
receive() external payable;
```

### getZetaFromEth


```solidity
function getZetaFromEth(address destinationAddress, uint256 minAmountOut) external payable override returns (uint256);
```

### getZetaFromToken


```solidity
function getZetaFromToken(
    address destinationAddress,
    uint256 minAmountOut,
    address inputToken,
    uint256 inputTokenAmount
) external override returns (uint256);
```

### getEthFromZeta


```solidity
function getEthFromZeta(address destinationAddress, uint256 minAmountOut, uint256 zetaTokenAmount)
    external
    override
    returns (uint256);
```

### getTokenFromZeta


```solidity
function getTokenFromZeta(
    address destinationAddress,
    uint256 minAmountOut,
    address outputToken,
    uint256 zetaTokenAmount
) external override nonReentrant returns (uint256);
```

### hasZetaLiquidity


```solidity
function hasZetaLiquidity() external view override returns (bool);
```

