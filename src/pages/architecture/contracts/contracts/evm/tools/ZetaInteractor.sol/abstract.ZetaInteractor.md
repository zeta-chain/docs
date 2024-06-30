# ZetaInteractor
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/tools/ZetaInteractor.sol)

**Inherits:**
Ownable2Step, [ZetaInteractorErrors](/contracts/evm/interfaces/ZetaInteractorErrors.sol/interface.ZetaInteractorErrors.md)


## State Variables
### ZERO_BYTES

```solidity
bytes32 constant ZERO_BYTES = keccak256(new bytes(0));
```


### currentChainId

```solidity
uint256 internal immutable currentChainId;
```


### connector

```solidity
ZetaConnector public immutable connector;
```


### interactorsByChainId
*Maps a chain id to its corresponding address of the MultiChainSwap contract
The address is expressed in bytes to allow non-EVM chains
This mapping is useful, mainly, for two reasons:
- Given a chain id, the contract is able to route a transaction to its corresponding address
- To check that the messages (onZetaMessage, onZetaRevert) come from a trusted source*


```solidity
mapping(uint256 => bytes) public interactorsByChainId;
```


## Functions
### isValidMessageCall


```solidity
modifier isValidMessageCall(ZetaInterfaces.ZetaMessage calldata zetaMessage);
```

### isValidRevertCall


```solidity
modifier isValidRevertCall(ZetaInterfaces.ZetaRevert calldata zetaRevert);
```

### constructor


```solidity
constructor(address zetaConnectorAddress);
```

### _isValidCaller


```solidity
function _isValidCaller() private view;
```

### _isValidChainId

*Useful for contracts that inherit from this one*


```solidity
function _isValidChainId(uint256 chainId) internal view returns (bool);
```

### setInteractorByChainId


```solidity
function setInteractorByChainId(uint256 destinationChainId, bytes calldata contractAddress) external onlyOwner;
```

