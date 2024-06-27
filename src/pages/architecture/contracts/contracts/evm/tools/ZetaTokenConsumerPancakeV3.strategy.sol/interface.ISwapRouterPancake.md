# ISwapRouterPancake
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/tools/ZetaTokenConsumerPancakeV3.strategy.sol)

**Inherits:**
IUniswapV3SwapCallback


## Functions
### exactInputSingle

Swaps `amountIn` of one token for as much as possible of another token


```solidity
function exactInputSingle(ExactInputSingleParams calldata params) external payable returns (uint256 amountOut);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`ExactInputSingleParams`|The parameters necessary for the swap, encoded as `ExactInputSingleParams` in calldata|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`amountOut`|`uint256`|The amount of the received token|


### exactInput

Swaps `amountIn` of one token for as much as possible of another along the specified path


```solidity
function exactInput(ExactInputParams calldata params) external payable returns (uint256 amountOut);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`ExactInputParams`|The parameters necessary for the multi-hop swap, encoded as `ExactInputParams` in calldata|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`amountOut`|`uint256`|The amount of the received token|


## Structs
### ExactInputSingleParams

```solidity
struct ExactInputSingleParams {
    address tokenIn;
    address tokenOut;
    uint24 fee;
    address recipient;
    uint256 amountIn;
    uint256 amountOutMinimum;
    uint160 sqrtPriceLimitX96;
}
```

### ExactInputParams

```solidity
struct ExactInputParams {
    bytes path;
    address recipient;
    uint256 amountIn;
    uint256 amountOutMinimum;
}
```

