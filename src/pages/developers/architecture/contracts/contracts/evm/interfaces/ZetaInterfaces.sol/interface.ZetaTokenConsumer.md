# ZetaTokenConsumer
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/interfaces/ZetaInterfaces.sol)

*ZetaTokenConsumer makes it easier to handle the following situations:
- Getting Zeta using native coin (to pay for destination gas while using `connector.send`)
- Getting Zeta using a token (to pay for destination gas while using `connector.send`)
- Getting native coin using Zeta (to return unused destination gas when `onZetaRevert` is executed)
- Getting a token using Zeta (to return unused destination gas when `onZetaRevert` is executed)*

*The interface can be implemented using different strategies, like UniswapV2, UniswapV3, etc*


## Functions
### getZetaFromEth


```solidity
function getZetaFromEth(address destinationAddress, uint256 minAmountOut) external payable returns (uint256);
```

### getZetaFromToken


```solidity
function getZetaFromToken(
    address destinationAddress,
    uint256 minAmountOut,
    address inputToken,
    uint256 inputTokenAmount
) external returns (uint256);
```

### getEthFromZeta


```solidity
function getEthFromZeta(address destinationAddress, uint256 minAmountOut, uint256 zetaTokenAmount)
    external
    returns (uint256);
```

### getTokenFromZeta


```solidity
function getTokenFromZeta(
    address destinationAddress,
    uint256 minAmountOut,
    address outputToken,
    uint256 zetaTokenAmount
) external returns (uint256);
```

### hasZetaLiquidity


```solidity
function hasZetaLiquidity() external view returns (bool);
```

## Events
### EthExchangedForZeta

```solidity
event EthExchangedForZeta(uint256 amountIn, uint256 amountOut);
```

### TokenExchangedForZeta

```solidity
event TokenExchangedForZeta(address token, uint256 amountIn, uint256 amountOut);
```

### ZetaExchangedForEth

```solidity
event ZetaExchangedForEth(uint256 amountIn, uint256 amountOut);
```

### ZetaExchangedForToken

```solidity
event ZetaExchangedForToken(address token, uint256 amountIn, uint256 amountOut);
```

