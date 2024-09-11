# Revertable
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/e9e111d59a014252dbe61290a7e2992479a0a46d/contracts/Revert.sol)

Interface for contracts that support revertable calls.


## Functions
### onRevert

Called when a revertable call is made.


```solidity
function onRevert(RevertContext calldata revertContext) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`revertContext`|`RevertContext`|Revert context to pass to onRevert.|


