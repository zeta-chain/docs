# CallOptions
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/dedf2ca4d335fe85937fd686450fecebb5456bc9/contracts/zevm/interfaces/IGatewayZEVM.sol)

CallOptions struct passed to call and withdrawAndCall functions.


```solidity
struct CallOptions {
    uint256 gasLimit;
    bool isArbitraryCall;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`gasLimit`|`uint256`|Gas limit.|
|`isArbitraryCall`|`bool`|Indicates if call should be arbitrary or authenticated.|

