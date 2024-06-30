# INonfungiblePositionManager
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/testing/TestUniswapV3Contracts.sol)

Wraps Uniswap V3 positions in a non-fungible token interface which allows for them to be transferred
and authorized.


## Functions
### positions

Returns the position information associated with a given token ID.

*Throws if the token ID is not valid.*


```solidity
function positions(uint256 tokenId)
    external
    view
    returns (
        uint96 nonce,
        address operator,
        address token0,
        address token1,
        uint24 fee,
        int24 tickLower,
        int24 tickUpper,
        uint128 liquidity,
        uint256 feeGrowthInside0LastX128,
        uint256 feeGrowthInside1LastX128,
        uint128 tokensOwed0,
        uint128 tokensOwed1
    );
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the token that represents the position|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`nonce`|`uint96`|The nonce for permits|
|`operator`|`address`|The address that is approved for spending|
|`token0`|`address`|The address of the token0 for a specific pool|
|`token1`|`address`|The address of the token1 for a specific pool|
|`fee`|`uint24`|The fee associated with the pool|
|`tickLower`|`int24`|The lower end of the tick range for the position|
|`tickUpper`|`int24`|The higher end of the tick range for the position|
|`liquidity`|`uint128`|The liquidity of the position|
|`feeGrowthInside0LastX128`|`uint256`|The fee growth of token0 as of the last action on the individual position|
|`feeGrowthInside1LastX128`|`uint256`|The fee growth of token1 as of the last action on the individual position|
|`tokensOwed0`|`uint128`|The uncollected amount of token0 owed to the position as of the last computation|
|`tokensOwed1`|`uint128`|The uncollected amount of token1 owed to the position as of the last computation|


### mint

Creates a new position wrapped in a NFT

*Call this when the pool does exist and is initialized. Note that if the pool is created but not initialized
a method does not exist, i.e. the pool is assumed to be initialized.*


```solidity
function mint(MintParams calldata params)
    external
    payable
    returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`MintParams`|The params necessary to mint a position, encoded as `MintParams` in calldata|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the token that represents the minted position|
|`liquidity`|`uint128`|The amount of liquidity for this position|
|`amount0`|`uint256`|The amount of token0|
|`amount1`|`uint256`|The amount of token1|


### increaseLiquidity

Increases the amount of liquidity in a position, with tokens paid by the `msg.sender`


```solidity
function increaseLiquidity(IncreaseLiquidityParams calldata params)
    external
    payable
    returns (uint128 liquidity, uint256 amount0, uint256 amount1);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`IncreaseLiquidityParams`|tokenId The ID of the token for which liquidity is being increased, amount0Desired The desired amount of token0 to be spent, amount1Desired The desired amount of token1 to be spent, amount0Min The minimum amount of token0 to spend, which serves as a slippage check, amount1Min The minimum amount of token1 to spend, which serves as a slippage check, deadline The time by which the transaction must be included to effect the change|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`liquidity`|`uint128`|The new liquidity amount as a result of the increase|
|`amount0`|`uint256`|The amount of token0 to acheive resulting liquidity|
|`amount1`|`uint256`|The amount of token1 to acheive resulting liquidity|


### decreaseLiquidity

Decreases the amount of liquidity in a position and accounts it to the position


```solidity
function decreaseLiquidity(DecreaseLiquidityParams calldata params)
    external
    payable
    returns (uint256 amount0, uint256 amount1);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`DecreaseLiquidityParams`|tokenId The ID of the token for which liquidity is being decreased, amount The amount by which liquidity will be decreased, amount0Min The minimum amount of token0 that should be accounted for the burned liquidity, amount1Min The minimum amount of token1 that should be accounted for the burned liquidity, deadline The time by which the transaction must be included to effect the change|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`amount0`|`uint256`|The amount of token0 accounted to the position's tokens owed|
|`amount1`|`uint256`|The amount of token1 accounted to the position's tokens owed|


### collect

Collects up to a maximum amount of fees owed to a specific position to the recipient


```solidity
function collect(CollectParams calldata params) external payable returns (uint256 amount0, uint256 amount1);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`CollectParams`|tokenId The ID of the NFT for which tokens are being collected, recipient The account that should receive the tokens, amount0Max The maximum amount of token0 to collect, amount1Max The maximum amount of token1 to collect|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`amount0`|`uint256`|The amount of fees collected in token0|
|`amount1`|`uint256`|The amount of fees collected in token1|


### burn

Burns a token ID, which deletes it from the NFT contract. The token must have 0 liquidity and all tokens
must be collected first.


```solidity
function burn(uint256 tokenId) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the token that is being burned|


## Events
### IncreaseLiquidity
Emitted when liquidity is increased for a position NFT

*Also emitted when a token is minted*


```solidity
event IncreaseLiquidity(uint256 indexed tokenId, uint128 liquidity, uint256 amount0, uint256 amount1);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the token for which liquidity was increased|
|`liquidity`|`uint128`|The amount by which liquidity for the NFT position was increased|
|`amount0`|`uint256`|The amount of token0 that was paid for the increase in liquidity|
|`amount1`|`uint256`|The amount of token1 that was paid for the increase in liquidity|

### DecreaseLiquidity
Emitted when liquidity is decreased for a position NFT


```solidity
event DecreaseLiquidity(uint256 indexed tokenId, uint128 liquidity, uint256 amount0, uint256 amount1);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the token for which liquidity was decreased|
|`liquidity`|`uint128`|The amount by which liquidity for the NFT position was decreased|
|`amount0`|`uint256`|The amount of token0 that was accounted for the decrease in liquidity|
|`amount1`|`uint256`|The amount of token1 that was accounted for the decrease in liquidity|

### Collect
Emitted when tokens are collected for a position NFT

*The amounts reported may not be exactly equivalent to the amounts transferred, due to rounding behavior*


```solidity
event Collect(uint256 indexed tokenId, address recipient, uint256 amount0, uint256 amount1);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the token for which underlying tokens were collected|
|`recipient`|`address`|The address of the account that received the collected tokens|
|`amount0`|`uint256`|The amount of token0 owed to the position that was collected|
|`amount1`|`uint256`|The amount of token1 owed to the position that was collected|

## Structs
### MintParams

```solidity
struct MintParams {
    address token0;
    address token1;
    uint24 fee;
    int24 tickLower;
    int24 tickUpper;
    uint256 amount0Desired;
    uint256 amount1Desired;
    uint256 amount0Min;
    uint256 amount1Min;
    address recipient;
    uint256 deadline;
}
```

### IncreaseLiquidityParams

```solidity
struct IncreaseLiquidityParams {
    uint256 tokenId;
    uint256 amount0Desired;
    uint256 amount1Desired;
    uint256 amount0Min;
    uint256 amount1Min;
    uint256 deadline;
}
```

### DecreaseLiquidityParams

```solidity
struct DecreaseLiquidityParams {
    uint256 tokenId;
    uint128 liquidity;
    uint256 amount0Min;
    uint256 amount1Min;
    uint256 deadline;
}
```

### CollectParams

```solidity
struct CollectParams {
    uint256 tokenId;
    address recipient;
    uint128 amount0Max;
    uint128 amount1Max;
}
```

