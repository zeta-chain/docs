# IZRC20
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/zevm/interfaces/IZRC20.sol)


## Functions
### totalSupply


```solidity
function totalSupply() external view returns (uint256);
```

### balanceOf


```solidity
function balanceOf(address account) external view returns (uint256);
```

### transfer


```solidity
function transfer(address recipient, uint256 amount) external returns (bool);
```

### allowance


```solidity
function allowance(address owner, address spender) external view returns (uint256);
```

### approve


```solidity
function approve(address spender, uint256 amount) external returns (bool);
```

### decreaseAllowance


```solidity
function decreaseAllowance(address spender, uint256 amount) external returns (bool);
```

### increaseAllowance


```solidity
function increaseAllowance(address spender, uint256 amount) external returns (bool);
```

### transferFrom


```solidity
function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
```

### deposit


```solidity
function deposit(address to, uint256 amount) external returns (bool);
```

### burn


```solidity
function burn(address account, uint256 amount) external returns (bool);
```

### withdraw


```solidity
function withdraw(bytes memory to, uint256 amount) external returns (bool);
```

### withdrawGasFee


```solidity
function withdrawGasFee() external view returns (address, uint256);
```

### PROTOCOL_FEE


```solidity
function PROTOCOL_FEE() external view returns (uint256);
```

## Events
### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);
```

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value);
```

### Deposit

```solidity
event Deposit(bytes from, address indexed to, uint256 value);
```

### Withdrawal

```solidity
event Withdrawal(address indexed from, bytes to, uint256 value, uint256 gasFee, uint256 protocolFlatFee);
```

### UpdatedSystemContract

```solidity
event UpdatedSystemContract(address systemContract);
```

### UpdatedGasLimit

```solidity
event UpdatedGasLimit(uint256 gasLimit);
```

### UpdatedProtocolFlatFee

```solidity
event UpdatedProtocolFlatFee(uint256 protocolFlatFee);
```

