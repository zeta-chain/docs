---
sidebar_position: 1
---

# Getting Started

Follow this guide to setup a RPC node using state-sync. This guide was created
and tested in macOS and may need to be modified slightly for your local system.

## Download binary

Make sure you are downloading the same version as our network is using. You can
find the available `zetacored` versions here:
https://github.com/zeta-chain/node/tags

Download the binary and give execution perms to the binary:

```bash
wget https://github.com/zeta-chain/node/releases/download/v10.1.0/zetacored_testnet-darwin-amd64 -O /usr/local/bin/zetacored
chmod a+x /usr/local/bin/zetacored
```

## Init base config

Initialize the base folder and config with the following command:

```bash
MONIKER=$(hostname)
zetacored init ${MONIKER} --chain-id athens_7001-1
```

## Download config files

Download the genesis.json file and \*.toml configuration files:

```bash
wget https://raw.githubusercontent.com/zeta-chain/network-athens3/main/network_files/config/genesis.json -O ~/.zetacored/config/genesis.json
wget https://raw.githubusercontent.com/zeta-chain/network-athens3/main/network_files/config/config.toml -O ~/.zetacored/config/config.toml
wget https://raw.githubusercontent.com/zeta-chain/network-athens3/main/network_files/config/app.toml -O ~/.zetacored/config/app.toml
wget https://raw.githubusercontent.com/zeta-chain/network-athens3/main/network_files/config/client.toml -O ~/.zetacored/config/client.toml
```

After you have set up your data directory, you can choose one of the following
options to sync your node:

- [Option 1: Default](/validators/statesync/default/). Manually configure your
  node to sync with ZetaChain's node maintained by the core team.
- [Option 2: KSYNC](/validators/statesync/ksync/). Sync with Kyve's
  [KSYNC](https://docs.kyve.network/ksync).
