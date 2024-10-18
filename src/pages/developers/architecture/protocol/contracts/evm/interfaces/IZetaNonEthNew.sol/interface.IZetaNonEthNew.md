# IZetaNonEthNew
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/v2/contracts/evm/interfaces/IZetaNonEthNew.sol)

**Inherits:**
IERC20

IZetaNonEthNew is a mintable / burnable version of IERC20.


## Functions
### burnFrom

Burns the specified amount of tokens from the specified account.

*Emits a {Transfer} event with `to` set to the zero address.*


```solidity
function burnFrom(address account, uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account from which tokens will be burned.|
|`amount`|`uint256`|The amount of tokens to burn.|


### mint

Mints the specified amount of tokens to the specified account.

*Emits a {Transfer} event with `from` set to the zero address.*


```solidity
function mint(address mintee, uint256 value, bytes32 internalSendHash) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`mintee`|`address`|The address of the account to which tokens will be minted.|
|`value`|`uint256`|The amount of tokens to mint.|
|`internalSendHash`|`bytes32`|A hash used for internal tracking of the minting transaction.|


