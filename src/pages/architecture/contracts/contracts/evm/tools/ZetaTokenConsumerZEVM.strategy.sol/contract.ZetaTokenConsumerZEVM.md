# ZetaTokenConsumerZEVM
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/6aed43c93d3900874969a54408401c17997e7cb9/contracts/evm/tools/ZetaTokenConsumerZEVM.strategy.sol)

**Inherits:**
[ZetaTokenConsumer](/contracts/evm/interfaces/ZetaInterfaces.sol/interface.ZetaTokenConsumer.md), [ZetaTokenConsumerZEVMErrors](/contracts/evm/tools/ZetaTokenConsumerZEVM.strategy.sol/interface.ZetaTokenConsumerZEVMErrors.md)

*ZetaTokenConsumer for ZEVM*


## State Variables
### MAX_DEADLINE

```solidity
uint256 internal constant MAX_DEADLINE = 200;
```


### WETH9Address

```solidity
address public immutable WETH9Address;
```


### uniswapV2Router

```solidity
IUniswapV2Router02 internal immutable uniswapV2Router;
```


## Functions
### constructor


```solidity
constructor(address WETH9Address_, address uniswapV2Router_);
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
) external override returns (uint256);
```

### hasZetaLiquidity


```solidity
function hasZetaLiquidity() external view override returns (bool);
```

### receive


```solidity
receive() external payable;
```

