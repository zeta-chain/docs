# zContext
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/zevm/interfaces/UniversalContract.sol)

**Note:**
deprecated: should be removed once v2 SystemContract is not used anymore.
MessageContext should be used


```solidity
struct zContext {
    bytes origin;
    address sender;
    uint256 chainID;
}
```

