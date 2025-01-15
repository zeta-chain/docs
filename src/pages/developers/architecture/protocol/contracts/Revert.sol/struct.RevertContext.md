# RevertContext
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/Revert.sol)

Struct containing revert context passed to onRevert.


```solidity
struct RevertContext {
    address sender;
    address asset;
    uint256 amount;
    bytes revertMessage;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|Address of account that initiated smart contract call.|
|`asset`|`address`|Address of asset. On a connected chain, it contains the fungible token address or is empty if it's a gas token. On ZetaChain, it contains the address of the ZRC20.|
|`amount`|`uint256`|Amount specified with the transaction.|
|`revertMessage`|`bytes`|Arbitrary data sent back in onRevert.|

