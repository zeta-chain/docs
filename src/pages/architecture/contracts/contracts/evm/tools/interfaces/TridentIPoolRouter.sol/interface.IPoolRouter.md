# IPoolRouter
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/tools/interfaces/TridentIPoolRouter.sol)


## Functions
### exactInputSingle

Swap amountIn of one token for as much as possible of another token


```solidity
function exactInputSingle(ExactInputSingleParams calldata params) external payable returns (uint256 amountOut);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`ExactInputSingleParams`|The parameters necessary for the swap, encoded as ExactInputSingleParams in calldata|


### exactInput

Swap amountIn of one token for as much as possible of another along the specified path


```solidity
function exactInput(ExactInputParams calldata params) external payable returns (uint256 amountOut);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`ExactInputParams`|The parameters necessary for the multi-hop swap, encoded as ExactInputParams in calldata|


### exactOutputSingle

Swaps as little as possible of one token for `amountOut` of another token


```solidity
function exactOutputSingle(ExactOutputSingleParams calldata params) external payable returns (uint256 amountIn);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`ExactOutputSingleParams`|The parameters necessary for the swap, encoded as ExactOutputSingleParams in calldata|


### exactOutput

Swaps as little as possible of one token for `amountOut` of another along the specified path (reversed)


```solidity
function exactOutput(ExactOutputParams calldata params) external payable returns (uint256 amountIn);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`ExactOutputParams`|The parameters necessary for the multi-hop swap, encoded as ExactOutputParams in calldata|


### sweep

Recover mistakenly sent tokens


```solidity
function sweep(address token, uint256 amount, address recipient) external payable;
```

## Structs
### ExactInputSingleParams

```solidity
struct ExactInputSingleParams {
    address tokenIn;
    uint256 amountIn;
    uint256 amountOutMinimum;
    address pool;
    address to;
    bool unwrap;
}
```

### ExactInputParams

```solidity
struct ExactInputParams {
    address tokenIn;
    uint256 amountIn;
    uint256 amountOutMinimum;
    address[] path;
    address to;
    bool unwrap;
}
```

### ExactOutputSingleParams

```solidity
struct ExactOutputSingleParams {
    address tokenIn;
    uint256 amountOut;
    uint256 amountInMaximum;
    address pool;
    address to;
    bool unwrap;
}
```

### ExactOutputParams

```solidity
struct ExactOutputParams {
    address tokenIn;
    uint256 amountOut;
    uint256 amountInMaximum;
    address[] path;
    address to;
    bool unwrap;
}
```

