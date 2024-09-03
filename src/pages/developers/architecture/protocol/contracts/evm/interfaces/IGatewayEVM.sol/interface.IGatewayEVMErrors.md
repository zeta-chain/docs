# IGatewayEVMErrors
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/c157025a39efca61d83e5991d093a94548f342fb/contracts/evm/interfaces/IGatewayEVM.sol)

Interface for the errors used in the GatewayEVM contract.


## Errors
### ExecutionFailed
Error for failed execution.


```solidity
error ExecutionFailed();
```

### DepositFailed
Error for failed deposit.


```solidity
error DepositFailed();
```

### InsufficientETHAmount
Error for insufficient ETH amount.


```solidity
error InsufficientETHAmount();
```

### InsufficientERC20Amount
Error for insufficient ERC20 token amount.


```solidity
error InsufficientERC20Amount();
```

### ZeroAddress
Error for zero address input.


```solidity
error ZeroAddress();
```

### ApprovalFailed
Error for failed token approval.


```solidity
error ApprovalFailed();
```

### CustodyInitialized
Error for already initialized custody.


```solidity
error CustodyInitialized();
```

### ConnectorInitialized
Error for already initialized connector.


```solidity
error ConnectorInitialized();
```

### NotWhitelistedInCustody
Error when trying to transfer not whitelisted token to custody.


```solidity
error NotWhitelistedInCustody();
```

