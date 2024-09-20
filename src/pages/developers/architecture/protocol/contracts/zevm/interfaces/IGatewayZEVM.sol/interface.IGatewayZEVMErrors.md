# IGatewayZEVMErrors
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/c157025a39efca61d83e5991d093a94548f342fb/contracts/zevm/interfaces/IGatewayZEVM.sol)

Interface for the errors used in the GatewayZEVM contract.


## Errors
### WithdrawalFailed
Error indicating a withdrawal failure.


```solidity
error WithdrawalFailed();
```

### InsufficientZRC20Amount
Error indicating an insufficient ZRC20 token amount.


```solidity
error InsufficientZRC20Amount();
```

### InsufficientZetaAmount
Error indicating an insufficient zeta amount.


```solidity
error InsufficientZetaAmount();
```

### ZRC20BurnFailed
Error indicating a failure to burn ZRC20 tokens.


```solidity
error ZRC20BurnFailed();
```

### ZRC20TransferFailed
Error indicating a failure to transfer ZRC20 tokens.


```solidity
error ZRC20TransferFailed();
```

### ZRC20DepositFailed
Error indicating a failure to deposit ZRC20 tokens.


```solidity
error ZRC20DepositFailed();
```

### GasFeeTransferFailed
Error indicating a failure to transfer gas fee.


```solidity
error GasFeeTransferFailed();
```

### CallerIsNotFungibleModule
Error indicating that the caller is not the Fungible module.


```solidity
error CallerIsNotFungibleModule();
```

### InvalidTarget
Error indicating an invalid target address.


```solidity
error InvalidTarget();
```

### FailedZetaSent
Error indicating a failure to send ZETA tokens.


```solidity
error FailedZetaSent();
```

### OnlyWZETAOrFungible
Error indicating that only WZETA or the Fungible module can call the function.


```solidity
error OnlyWZETAOrFungible();
```

### EmptyMessage
Error indicating call method received empty message as argument.


```solidity
error EmptyMessage();
```

