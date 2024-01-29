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

- [app.toml](https://file.notion.so/f/f/2814268c-c403-4b50-9e50-f2ada7eca9b2/a7ab1ae1-b666-4d39-808e-e307992598f8/app.toml?id=c7ef7211-aa61-4569-b98e-27e61c865854&table=block&spaceId=2814268c-c403-4b50-9e50-f2ada7eca9b2&expirationTimestamp=1706608800000&signature=6kV9k3QQeCk3-BwXVhiEtkqflormDTw4QvX6qnp6Lj8&downloadName=app.toml)
- [config.toml](https://file.notion.so/f/f/2814268c-c403-4b50-9e50-f2ada7eca9b2/0491c0a8-f277-4276-aea6-2bc84b750086/config.toml?id=e5b8e5f7-798e-4579-9bae-9b9fc1117830&table=block&spaceId=2814268c-c403-4b50-9e50-f2ada7eca9b2&expirationTimestamp=1706608800000&signature=WlXAlzxWpf07eRVQahcFQylTn1fxiXs3FcL_ETU-4Kc&downloadName=config.toml)
- [client.toml](https://file.notion.so/f/f/2814268c-c403-4b50-9e50-f2ada7eca9b2/3d1b17af-e990-469d-94f6-ae384554f3a6/client.toml?id=dbdd4bc7-b94f-4f8d-919c-b028894a21ac&table=block&spaceId=2814268c-c403-4b50-9e50-f2ada7eca9b2&expirationTimestamp=1706608800000&signature=Ym8Fsk7bZT2jnaCYb4Ybpq8KpT6kcI_jibrptGt3pFg&downloadName=client.toml)
- [genesis.json](https://file.notion.so/f/f/2814268c-c403-4b50-9e50-f2ada7eca9b2/856c68b6-94a9-4026-b25b-feb927734a42/genesis.json?id=f87e9e19-3d39-4170-990e-41cb38a171f9&table=block&spaceId=2814268c-c403-4b50-9e50-f2ada7eca9b2&expirationTimestamp=1706608800000&signature=oxvYqW_P5WPyZGQxMcRd8JxDxNqt7MqilOiHtfeVl-0&downloadName=genesis.json)

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

Follow [these instructions](/validators/state-sync/) but use the IP information
below:

```bash
STATE_SYNC_SERVER=”34.69.20.168:26657”
```
