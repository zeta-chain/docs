# WETH9
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/zevm/WZETA.sol)


## State Variables
### name

```solidity
string public name = "Wrapped Zeta";
```


### symbol

```solidity
string public symbol = "WZETA";
```


### decimals

```solidity
uint8 public decimals = 18;
```


### balanceOf

```solidity
mapping(address => uint256) public balanceOf;
```


### allowance

```solidity
mapping(address => mapping(address => uint256)) public allowance;
```


## Functions
### function


```solidity
function() public payable;
```

### deposit


```solidity
function deposit() public payable;
```

### withdraw


```solidity
function withdraw(uint256 wad) public;
```

### totalSupply


```solidity
function totalSupply() public view returns (uint256);
```

### approve


```solidity
function approve(address guy, uint256 wad) public returns (bool);
```

### transfer


```solidity
function transfer(address dst, uint256 wad) public returns (bool);
```

### transferFrom


```solidity
function transferFrom(address src, address dst, uint256 wad) public returns (bool);
```

## Events
### Approval

```solidity
event Approval(address indexed src, address indexed guy, uint256 wad);
```

### Transfer

```solidity
event Transfer(address indexed src, address indexed dst, uint256 wad);
```

### Deposit

```solidity
event Deposit(address indexed dst, uint256 wad);
```

### Withdrawal

```solidity
event Withdrawal(address indexed src, uint256 wad);
```

