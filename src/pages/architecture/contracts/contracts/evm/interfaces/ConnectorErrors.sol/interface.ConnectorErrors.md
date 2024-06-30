# ConnectorErrors
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/interfaces/ConnectorErrors.sol)

*Interface with connector custom errors*


## Errors
### CallerIsNotPauser

```solidity
error CallerIsNotPauser(address caller);
```

### CallerIsNotTss

```solidity
error CallerIsNotTss(address caller);
```

### CallerIsNotTssUpdater

```solidity
error CallerIsNotTssUpdater(address caller);
```

### CallerIsNotTssOrUpdater

```solidity
error CallerIsNotTssOrUpdater(address caller);
```

### ZetaTransferError

```solidity
error ZetaTransferError();
```

### ExceedsMaxSupply

```solidity
error ExceedsMaxSupply(uint256 maxSupply);
```

