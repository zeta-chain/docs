# IWETH9
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/zevm/interfaces/IWZETA.sol)


## Functions
### totalSupply


```solidity
function totalSupply() external view returns (uint256);
```

### balanceOf


```solidity
function balanceOf(address owner) external view returns (uint256);
```

### allowance


```solidity
function allowance(address owner, address spender) external view returns (uint256);
```

### approve


```solidity
function approve(address spender, uint256 wad) external returns (bool);
```

### transfer


```solidity
function transfer(address to, uint256 wad) external returns (bool);
```

### transferFrom


```solidity
function transferFrom(address from, address to, uint256 wad) external returns (bool);
```

### deposit


```solidity
function deposit() external payable;
```

### withdraw


```solidity
function withdraw(uint256 wad) external;
```

## Events
### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value);
```

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);
```

### Deposit

```solidity
event Deposit(address indexed dst, uint256 wad);
```

### Withdrawal

```solidity
event Withdrawal(address indexed src, uint256 wad);
```

