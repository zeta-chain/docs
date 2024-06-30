# AttackerContract
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/testing/AttackerContract.sol)


## State Variables
### victimContractAddress

```solidity
address public victimContractAddress;
```


### _victimMethod

```solidity
uint256 private _victimMethod;
```


## Functions
### constructor


```solidity
constructor(address victimContractAddress_, address wzeta, uint256 victimMethod);
```

### receive


```solidity
receive() external payable;
```

### attackDeposit


```solidity
function attackDeposit() internal;
```

### attackWidrawal


```solidity
function attackWidrawal() internal;
```

### attack


```solidity
function attack() internal;
```

### balanceOf


```solidity
function balanceOf(address account) external returns (uint256);
```

### transferFrom


```solidity
function transferFrom(address from, address to, uint256 amount) public returns (bool);
```

### transfer


```solidity
function transfer(address to, uint256 amount) public returns (bool);
```

