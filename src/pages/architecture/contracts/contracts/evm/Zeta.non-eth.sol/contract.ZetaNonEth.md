# ZetaNonEth
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/211e1d1303ec9b17c54dd015449852d1d240bf4f/contracts/evm/Zeta.non-eth.sol)

**Inherits:**
[ZetaNonEthInterface](/contracts/evm/interfaces/ZetaNonEthInterface.sol/interface.ZetaNonEthInterface.md), ERC20Burnable, [ZetaErrors](/contracts/evm/interfaces/ZetaErrors.sol/interface.ZetaErrors.md)


## State Variables
### connectorAddress

```solidity
address public connectorAddress;
```


### tssAddress
*Collectively held by Zeta blockchain validators*


```solidity
address public tssAddress;
```


### tssAddressUpdater
*Initially a multi-sig, eventually held by Zeta blockchain validators (via renounceTssAddressUpdater)*


```solidity
address public tssAddressUpdater;
```


## Functions
### constructor


```solidity
constructor(address tssAddress_, address tssAddressUpdater_) ERC20("Zeta", "ZETA");
```

### updateTssAndConnectorAddresses


```solidity
function updateTssAndConnectorAddresses(address tssAddress_, address connectorAddress_) external;
```

### renounceTssAddressUpdater

*Sets tssAddressUpdater to be tssAddress*


```solidity
function renounceTssAddressUpdater() external;
```

### mint


```solidity
function mint(address mintee, uint256 value, bytes32 internalSendHash) external override;
```

### burnFrom

*Only Connector can mint. Minting requires burning the equivalent amount on another chain*


```solidity
function burnFrom(address account, uint256 amount) public override(ZetaNonEthInterface, ERC20Burnable);
```

## Events
### Minted

```solidity
event Minted(address indexed mintee, uint256 amount, bytes32 indexed internalSendHash);
```

### Burnt

```solidity
event Burnt(address indexed burnee, uint256 amount);
```

### TSSAddressUpdated

```solidity
event TSSAddressUpdated(address callerAddress, address newTssAddress);
```

### TSSAddressUpdaterUpdated

```solidity
event TSSAddressUpdaterUpdated(address callerAddress, address newTssUpdaterAddress);
```

### ConnectorAddressUpdated

```solidity
event ConnectorAddressUpdated(address callerAddress, address newConnectorAddress);
```

