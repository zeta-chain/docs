---
title: "Protocol contracts"
---

### ⚠️ Important Notice: V2 in Development

We are currently developing Version 2 (V2) of our smart contract architecture. This new version will significantly enhance the developer experience for building Universal Apps.

Developers can already begin testing the new interface by referring to [the V2 Localnet guide](https://github.com/zeta-chain/localnet?tab=readme-ov-file#experimenting-with-the-new-architecture).

### Install dependencies

```shell
$ yarn
$ forge soldeer update
```

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/<DeployScript>.s.sol:<DeployScript> --rpc-url <your_rpc_url> --private-key <your_private_key>
```

##### More detailed instructions

To view detailed instructions on how to deploy the contracts, please refer to the [Deployment Guide](./scripts/deploy/readme.md).

This guide covers all steps required to deploy the contracts, including environment setup, commands, and best practices.

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
# Summary
- [Home](README.md)
# contracts
  - [❱ evm](/src/pages/developers/architecture/protocol/contracts/evm/README.md)
    - [❱ interfaces](/src/pages/developers/architecture/protocol/contracts/evm/interfaces/README.md)
      - [IERC20CustodyEvents](/src/pages/developers/architecture/protocol/contracts/evm/interfaces/IERC20Custody.sol/interface.IERC20CustodyEvents.mdx)
      - [IERC20CustodyErrors](/src/pages/developers/architecture/protocol/contracts/evm/interfaces/IERC20Custody.sol/interface.IERC20CustodyErrors.mdx)
      - [IERC20Custody](/src/pages/developers/architecture/protocol/contracts/evm/interfaces/IERC20Custody.sol/interface.IERC20Custody.mdx)
      - [IGatewayEVMEvents](/src/pages/developers/architecture/protocol/contracts/evm/interfaces/IGatewayEVM.sol/interface.IGatewayEVMEvents.mdx)
      - [IGatewayEVMErrors](/src/pages/developers/architecture/protocol/contracts/evm/interfaces/IGatewayEVM.sol/interface.IGatewayEVMErrors.mdx)
      - [IGatewayEVM](/src/pages/developers/architecture/protocol/contracts/evm/interfaces/IGatewayEVM.sol/interface.IGatewayEVM.mdx)
      - [MessageContext](/src/pages/developers/architecture/protocol/contracts/evm/interfaces/IGatewayEVM.sol/struct.MessageContext.mdx)
      - [Callable](/src/pages/developers/architecture/protocol/contracts/evm/interfaces/IGatewayEVM.sol/interface.Callable.mdx)
      - [IZetaConnectorEvents](/src/pages/developers/architecture/protocol/contracts/evm/interfaces/IZetaConnector.sol/interface.IZetaConnectorEvents.mdx)
      - [IZetaNonEthNew](/src/pages/developers/architecture/protocol/contracts/evm/interfaces/IZetaNonEthNew.sol/interface.IZetaNonEthNew.mdx)
    - [❱ legacy](/src/pages/developers/architecture/protocol/contracts/evm/legacy/README.md)
      - [ConnectorErrors](/src/pages/developers/architecture/protocol/contracts/evm/legacy/ConnectorErrors.sol/interface.ConnectorErrors.mdx)
      - [ZetaEth](/src/pages/developers/architecture/protocol/contracts/evm/legacy/Zeta.eth.sol/contract.ZetaEth.mdx)
      - [ZetaNonEth](/src/pages/developers/architecture/protocol/contracts/evm/legacy/Zeta.non-eth.sol/contract.ZetaNonEth.mdx)
      - [ZetaConnectorBase](/src/pages/developers/architecture/protocol/contracts/evm/legacy/ZetaConnector.base.sol/contract.ZetaConnectorBase.mdx)
      - [ZetaConnectorEth](/src/pages/developers/architecture/protocol/contracts/evm/legacy/ZetaConnector.eth.sol/contract.ZetaConnectorEth.mdx)
      - [ZetaConnectorNonEth](/src/pages/developers/architecture/protocol/contracts/evm/legacy/ZetaConnector.non-eth.sol/contract.ZetaConnectorNonEth.mdx)
      - [ZetaErrors](/src/pages/developers/architecture/protocol/contracts/evm/legacy/ZetaErrors.sol/interface.ZetaErrors.mdx)
      - [ZetaInterfaces](/src/pages/developers/architecture/protocol/contracts/evm/legacy/ZetaInterfaces.sol/interface.ZetaInterfaces.mdx)
      - [ZetaConnector](/src/pages/developers/architecture/protocol/contracts/evm/legacy/ZetaInterfaces.sol/interface.ZetaConnector.mdx)
      - [ZetaReceiver](/src/pages/developers/architecture/protocol/contracts/evm/legacy/ZetaInterfaces.sol/interface.ZetaReceiver.mdx)
      - [ZetaTokenConsumer](/src/pages/developers/architecture/protocol/contracts/evm/legacy/ZetaInterfaces.sol/interface.ZetaTokenConsumer.mdx)
      - [ZetaCommonErrors](/src/pages/developers/architecture/protocol/contracts/evm/legacy/ZetaInterfaces.sol/interface.ZetaCommonErrors.mdx)
      - [ZetaNonEthInterface](/src/pages/developers/architecture/protocol/contracts/evm/legacy/ZetaNonEthInterface.sol/interface.ZetaNonEthInterface.mdx)
    - [ERC20Custody](/src/pages/developers/architecture/protocol/contracts/evm/ERC20Custody.sol/contract.ERC20Custody.mdx)
    - [GatewayEVM](/src/pages/developers/architecture/protocol/contracts/evm/GatewayEVM.sol/contract.GatewayEVM.mdx)
    - [ZetaConnectorBase](/src/pages/developers/architecture/protocol/contracts/evm/ZetaConnectorBase.sol/abstract.ZetaConnectorBase.mdx)
    - [ZetaConnectorNative](/src/pages/developers/architecture/protocol/contracts/evm/ZetaConnectorNative.sol/contract.ZetaConnectorNative.mdx)
    - [ZetaConnectorNonNative](/src/pages/developers/architecture/protocol/contracts/evm/ZetaConnectorNonNative.sol/contract.ZetaConnectorNonNative.mdx)
  - [❱ zevm](/src/pages/developers/architecture/protocol/contracts/zevm/README.md)
    - [❱ interfaces](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/README.md)
      - [IGatewayZEVMEvents](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/IGatewayZEVM.sol/interface.IGatewayZEVMEvents.mdx)
      - [IGatewayZEVMErrors](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/IGatewayZEVM.sol/interface.IGatewayZEVMErrors.mdx)
      - [IGatewayZEVM](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/IGatewayZEVM.sol/interface.IGatewayZEVM.mdx)
      - [CallOptions](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/IGatewayZEVM.sol/struct.CallOptions.mdx)
      - [ISystem](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/ISystem.sol/interface.ISystem.mdx)
      - [IWETH9](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/IWZETA.sol/interface.IWETH9.mdx)
      - [IZRC20](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/IZRC20.sol/interface.IZRC20.mdx)
      - [IZRC20Metadata](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/IZRC20.sol/interface.IZRC20Metadata.mdx)
      - [ZRC20Events](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/IZRC20.sol/interface.ZRC20Events.mdx)
      - [CoinType](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/IZRC20.sol/enum.CoinType.mdx)
      - [zContext](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/UniversalContract.sol/struct.zContext.mdx)
      - [zContract](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/UniversalContract.sol/interface.zContract.mdx)
      - [MessageContext](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/UniversalContract.sol/struct.MessageContext.mdx)
      - [UniversalContract](/src/pages/developers/architecture/protocol/contracts/zevm/interfaces/UniversalContract.sol/interface.UniversalContract.mdx)
    - [❱ legacy](/src/pages/developers/architecture/protocol/contracts/zevm/legacy/README.md)
      - [ZetaInterfaces](/src/pages/developers/architecture/protocol/contracts/zevm/legacy/ZetaConnectorZEVM.sol/interface.ZetaInterfaces.mdx)
      - [ZetaReceiver](/src/pages/developers/architecture/protocol/contracts/zevm/legacy/ZetaConnectorZEVM.sol/interface.ZetaReceiver.mdx)
      - [ZetaConnectorZEVM](/src/pages/developers/architecture/protocol/contracts/zevm/legacy/ZetaConnectorZEVM.sol/contract.ZetaConnectorZEVM.mdx)
    - [GatewayZEVM](/src/pages/developers/architecture/protocol/contracts/zevm/GatewayZEVM.sol/contract.GatewayZEVM.mdx)
    - [SystemContractErrors](/src/pages/developers/architecture/protocol/contracts/zevm/SystemContract.sol/interface.SystemContractErrors.mdx)
    - [SystemContract](/src/pages/developers/architecture/protocol/contracts/zevm/SystemContract.sol/contract.SystemContract.mdx)
    - [WETH9](/src/pages/developers/architecture/protocol/contracts/zevm/WZETA.sol/contract.WETH9.mdx)
    - [ZRC20Errors](/src/pages/developers/architecture/protocol/contracts/zevm/ZRC20.sol/interface.ZRC20Errors.mdx)
    - [ZRC20](/src/pages/developers/architecture/protocol/contracts/zevm/ZRC20.sol/contract.ZRC20.mdx)
  - [INotSupportedMethods](/src/pages/developers/architecture/protocol/contracts/Errors.sol/interface.INotSupportedMethods.mdx)
  - [RevertOptions](/src/pages/developers/architecture/protocol/contracts/Revert.sol/struct.RevertOptions.mdx)
  - [RevertContext](/src/pages/developers/architecture/protocol/contracts/Revert.sol/struct.RevertContext.mdx)
  - [Revertable](/src/pages/developers/architecture/protocol/contracts/Revert.sol/interface.Revertable.mdx)
