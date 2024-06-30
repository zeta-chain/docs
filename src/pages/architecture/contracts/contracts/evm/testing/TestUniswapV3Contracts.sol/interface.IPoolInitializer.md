# IPoolInitializer
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/testing/TestUniswapV3Contracts.sol)


## Functions
### createAndInitializePoolIfNecessary

Creates a new pool if it does not exist, then initializes if not initialized

*This method can be bundled with others via IMulticall for the first action (e.g. mint) performed against a pool*


```solidity
function createAndInitializePoolIfNecessary(address token0, address token1, uint24 fee, uint160 sqrtPriceX96)
    external
    payable
    returns (address pool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token0`|`address`|The contract address of token0 of the pool|
|`token1`|`address`|The contract address of token1 of the pool|
|`fee`|`uint24`|The fee amount of the v3 pool for the specified token pair|
|`sqrtPriceX96`|`uint160`|The initial square root price of the pool as a Q64.96 value|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`pool`|`address`|Returns the pool address based on the pair of tokens and fee, will return the newly created pool address if necessary|


