# ZetaTokenConsumerTrident
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/tools/ZetaTokenConsumerTrident.strategy.sol)

**Inherits:**
[ZetaTokenConsumer](/contracts/evm/interfaces/ZetaInterfaces.sol/interface.ZetaTokenConsumer.md), [ZetaTokenConsumerTridentErrors](/contracts/evm/tools/ZetaTokenConsumerTrident.strategy.sol/interface.ZetaTokenConsumerTridentErrors.md)

*Trident strategy for ZetaTokenConsumer*


## State Variables
### MAX_DEADLINE

```solidity
uint256 internal constant MAX_DEADLINE = 200;
```


### WETH9Address

```solidity
address internal immutable WETH9Address;
```


### zetaToken

```solidity
address public immutable zetaToken;
```


### tridentRouter

```solidity
IPoolRouter public immutable tridentRouter;
```


### poolFactory

```solidity
ConcentratedLiquidityPoolFactory public immutable poolFactory;
```


### _locked

```solidity
bool internal _locked;
```


## Functions
### constructor


```solidity
constructor(address zetaToken_, address uniswapV3Router_, address WETH9Address_, address poolFactory_);
```

### nonReentrant


```solidity
modifier nonReentrant();
```

### receive


```solidity
receive() external payable;
```

### getPair


```solidity
function getPair(address token0, address token1) internal pure returns (address, address);
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

