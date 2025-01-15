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
  - [❱ evm](protocol/contracts/evm/README.md)
    - [❱ interfaces](protocol/contracts/evm/interfaces/README.md)
      - [IERC20CustodyEvents](protocol/contracts/evm/interfaces/IERC20Custody.sol/interface.IERC20CustodyEvents.md)
      - [IERC20CustodyErrors](protocol/contracts/evm/interfaces/IERC20Custody.sol/interface.IERC20CustodyErrors.md)
      - [IERC20Custody](protocol/contracts/evm/interfaces/IERC20Custody.sol/interface.IERC20Custody.md)
      - [IGatewayEVMEvents](protocol/contracts/evm/interfaces/IGatewayEVM.sol/interface.IGatewayEVMEvents.md)
      - [IGatewayEVMErrors](protocol/contracts/evm/interfaces/IGatewayEVM.sol/interface.IGatewayEVMErrors.md)
      - [IGatewayEVM](protocol/contracts/evm/interfaces/IGatewayEVM.sol/interface.IGatewayEVM.md)
      - [MessageContext](protocol/contracts/evm/interfaces/IGatewayEVM.sol/struct.MessageContext.md)
      - [Callable](protocol/contracts/evm/interfaces/IGatewayEVM.sol/interface.Callable.md)
      - [IZetaConnectorEvents](protocol/contracts/evm/interfaces/IZetaConnector.sol/interface.IZetaConnectorEvents.md)
      - [IZetaNonEthNew](protocol/contracts/evm/interfaces/IZetaNonEthNew.sol/interface.IZetaNonEthNew.md)
    - [❱ legacy](protocol/contracts/evm/legacy/README.md)
      - [ConnectorErrors](protocol/contracts/evm/legacy/ConnectorErrors.sol/interface.ConnectorErrors.md)
      - [ZetaEth](protocol/contracts/evm/legacy/Zeta.eth.sol/contract.ZetaEth.md)
      - [ZetaNonEth](protocol/contracts/evm/legacy/Zeta.non-eth.sol/contract.ZetaNonEth.md)
      - [ZetaConnectorBase](protocol/contracts/evm/legacy/ZetaConnector.base.sol/contract.ZetaConnectorBase.md)
      - [ZetaConnectorEth](protocol/contracts/evm/legacy/ZetaConnector.eth.sol/contract.ZetaConnectorEth.md)
      - [ZetaConnectorNonEth](protocol/contracts/evm/legacy/ZetaConnector.non-eth.sol/contract.ZetaConnectorNonEth.md)
      - [ZetaErrors](protocol/contracts/evm/legacy/ZetaErrors.sol/interface.ZetaErrors.md)
      - [ZetaInterfaces](protocol/contracts/evm/legacy/ZetaInterfaces.sol/interface.ZetaInterfaces.md)
      - [ZetaConnector](protocol/contracts/evm/legacy/ZetaInterfaces.sol/interface.ZetaConnector.md)
      - [ZetaReceiver](protocol/contracts/evm/legacy/ZetaInterfaces.sol/interface.ZetaReceiver.md)
      - [ZetaTokenConsumer](protocol/contracts/evm/legacy/ZetaInterfaces.sol/interface.ZetaTokenConsumer.md)
      - [ZetaCommonErrors](protocol/contracts/evm/legacy/ZetaInterfaces.sol/interface.ZetaCommonErrors.md)
      - [ZetaNonEthInterface](protocol/contracts/evm/legacy/ZetaNonEthInterface.sol/interface.ZetaNonEthInterface.md)
    - [ERC20Custody](protocol/contracts/evm/ERC20Custody.sol/contract.ERC20Custody.md)
    - [GatewayEVM](protocol/contracts/evm/GatewayEVM.sol/contract.GatewayEVM.md)
    - [ZetaConnectorBase](protocol/contracts/evm/ZetaConnectorBase.sol/abstract.ZetaConnectorBase.md)
    - [ZetaConnectorNative](protocol/contracts/evm/ZetaConnectorNative.sol/contract.ZetaConnectorNative.md)
    - [ZetaConnectorNonNative](protocol/contracts/evm/ZetaConnectorNonNative.sol/contract.ZetaConnectorNonNative.md)
  - [❱ zevm](protocol/contracts/zevm/README.md)
    - [❱ interfaces](protocol/contracts/zevm/interfaces/README.md)
      - [IGatewayZEVMEvents](protocol/contracts/zevm/interfaces/IGatewayZEVM.sol/interface.IGatewayZEVMEvents.md)
      - [IGatewayZEVMErrors](protocol/contracts/zevm/interfaces/IGatewayZEVM.sol/interface.IGatewayZEVMErrors.md)
      - [IGatewayZEVM](protocol/contracts/zevm/interfaces/IGatewayZEVM.sol/interface.IGatewayZEVM.md)
      - [CallOptions](protocol/contracts/zevm/interfaces/IGatewayZEVM.sol/struct.CallOptions.md)
      - [ISystem](protocol/contracts/zevm/interfaces/ISystem.sol/interface.ISystem.md)
      - [IWETH9](protocol/contracts/zevm/interfaces/IWZETA.sol/interface.IWETH9.md)
      - [IZRC20](protocol/contracts/zevm/interfaces/IZRC20.sol/interface.IZRC20.md)
      - [IZRC20Metadata](protocol/contracts/zevm/interfaces/IZRC20.sol/interface.IZRC20Metadata.md)
      - [ZRC20Events](protocol/contracts/zevm/interfaces/IZRC20.sol/interface.ZRC20Events.md)
      - [CoinType](protocol/contracts/zevm/interfaces/IZRC20.sol/enum.CoinType.md)
      - [zContext](protocol/contracts/zevm/interfaces/UniversalContract.sol/struct.zContext.md)
      - [zContract](protocol/contracts/zevm/interfaces/UniversalContract.sol/interface.zContract.md)
      - [MessageContext](protocol/contracts/zevm/interfaces/UniversalContract.sol/struct.MessageContext.md)
      - [UniversalContract](protocol/contracts/zevm/interfaces/UniversalContract.sol/interface.UniversalContract.md)
    - [❱ legacy](protocol/contracts/zevm/legacy/README.md)
      - [ZetaInterfaces](protocol/contracts/zevm/legacy/ZetaConnectorZEVM.sol/interface.ZetaInterfaces.md)
      - [ZetaReceiver](protocol/contracts/zevm/legacy/ZetaConnectorZEVM.sol/interface.ZetaReceiver.md)
      - [ZetaConnectorZEVM](protocol/contracts/zevm/legacy/ZetaConnectorZEVM.sol/contract.ZetaConnectorZEVM.md)
    - [GatewayZEVM](protocol/contracts/zevm/GatewayZEVM.sol/contract.GatewayZEVM.md)
    - [SystemContractErrors](protocol/contracts/zevm/SystemContract.sol/interface.SystemContractErrors.md)
    - [SystemContract](protocol/contracts/zevm/SystemContract.sol/contract.SystemContract.md)
    - [WETH9](protocol/contracts/zevm/WZETA.sol/contract.WETH9.md)
    - [ZRC20Errors](protocol/contracts/zevm/ZRC20.sol/interface.ZRC20Errors.md)
    - [ZRC20](protocol/contracts/zevm/ZRC20.sol/contract.ZRC20.md)
  - [INotSupportedMethods](protocol/contracts/Errors.sol/interface.INotSupportedMethods.md)
  - [RevertOptions](protocol/contracts/Revert.sol/struct.RevertOptions.md)
  - [RevertContext](protocol/contracts/Revert.sol/struct.RevertContext.md)
  - [Revertable](protocol/contracts/Revert.sol/interface.Revertable.md)
