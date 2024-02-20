# Mainnet Node Setup

If you want to setup a full node you can use the instructions from
[the testnet docs](/validators/state-sync) but the config files and some
configuration values will be slightly different for mainnet.

Node Software Version: v12.0.2

```
CHAIN_ID="zetachain_7000-1"
SEED="8d93468c6022fb3b263963bdea46b0a131d247cd@34.28.196.79:26656"
PEER="e04ee1d6b5cc1aa24f7c1ab55139d1cec9962e39@52.45.59.77:26656"
```

You can modify your existing config files or download the files below with these
values already correctly set:

- [app.toml](https://github.com/zeta-chain/network-mainnet/blob/main/network_files/config/app.toml)
- [config.toml](https://github.com/zeta-chain/network-mainnet/blob/main/network_files/config/config.toml)
- [client.toml](https://github.com/zeta-chain/network-mainnet/blob/main/network_files/config/client.toml)
- [genesis.json](https://github.com/zeta-chain/network-mainnet/blob/main/network_files/config/genesis.json)

## Syncing

You can sync your node using one of the three options below.

### Download Archive Snapshot:

Get the latest snapshot using this command. These snapshots only work if your
database is set to PebbleDB in the config.toml file.

```
BUCKET_NAME="archive-rpc-snapshots-zetachain-prod"
wget -O ./latest-snapshot.tar "$(curl -s "https://www.googleapis.com/storage/v1/b/${BUCKET_NAME}/o" | jq -r '.items | if length > 0 then sort_by(.timeCreated) | .[-1].mediaLink else empty end')"
```

### Download Non-Archive Snapshot:

Get the latest snapshot using this command. These snapshots only work if your
database is set to PebbleDB in the config.toml file.

```
BUCKET_NAME="statesync-rpc-snapshots-zetachain-prod"
wget -O ./latest-snapshot.tar "$(curl -s "https://www.googleapis.com/storage/v1/b/${BUCKET_NAME}/o" | jq -r '.items | if length > 0 then sort_by(.timeCreated) | .[-1].mediaLink else empty end')"
```

### StateSync:

Follow [these instructions](/validators/state-sync/) using the Mainnet information detailed in that documentation.