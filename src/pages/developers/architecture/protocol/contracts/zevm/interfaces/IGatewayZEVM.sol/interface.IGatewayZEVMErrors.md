# IGatewayZEVMErrors
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/3a274ce7bad045a879c73669586611d35509cbce/contracts/zevm/interfaces/IGatewayZEVM.sol)

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

### CallerIsNotProtocol
Error indicating that the caller is not the protocol account.


```solidity
error CallerIsNotProtocol();
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

### OnlyWZETAOrProtocol
Error indicating that only WZETA or the protocol address can call the function.


```solidity
error OnlyWZETAOrProtocol();
```

### EmptyMessage
Error indicating call method received empty message as argument.


```solidity
error EmptyMessage();
```

