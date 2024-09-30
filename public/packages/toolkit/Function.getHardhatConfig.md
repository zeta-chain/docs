[@zetachain/toolkit](toolkit/index.md) / getHardhatConfig

# Function: getHardhatConfig()

> **getHardhatConfig**(`__namedParameters`): `object`

## Parameters

• **\_\_namedParameters**: `any`

## Returns

`object`

### etherscan

> **etherscan**: `object`

### etherscan.apiKey

> **apiKey**: `object`

### etherscan.apiKey.zeta\_mainnet

> **zeta\_mainnet**: `string` = `"YOUR_KEY_HERE"`

### etherscan.apiKey.zeta\_testnet

> **zeta\_testnet**: `string` = `"YOUR_KEY_HERE"`

### etherscan.customChains

> **customChains**: `object`[]

### networks

> **networks**: `object`

### networks.hardhat

> **hardhat**: `object`

### networks.hardhat.chainId

> **chainId**: `number` = `1337`

### networks.hardhat.forking

> **forking**: `object`

### networks.hardhat.forking.blockNumber

> **blockNumber**: `number` = `14672712`

### networks.hardhat.forking.url

> **url**: `string` = `"https://rpc.ankr.com/eth"`

### solidity

> **solidity**: `string` = `"0.8.7"`

## Defined in

[getHardhatConfig.ts:13](https://github.com/zeta-chain/toolkit/blob/ff9b248edd3cba24d9f8444af6a768e2af201e71/packages/client/src/getHardhatConfig.ts#L13)
