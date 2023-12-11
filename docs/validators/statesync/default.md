---
sidebar_position: 2
title: "Option 1: Default"
---

# Sync with ZetaChain's Node

### Testnet

| Region | IP             |
| :----- | :------------- |
| US     | 35.224.160.108 |

### Mainnet

| Region | IP  |
| :----- | :-- |
|        | TBD |

## State sync

Fetch the height and hash from our state-sync servers (make sure to replace
`<closest StateSync IP>` with the IP from our state-sync node):

```bash
STATE_SYNC_SERVER="[closest StateSync IP]:26657"
TRUST_HEIGHT=$(curl -s http://${STATE_SYNC_SERVER}/block | jq -r '.result.block.header.height')
HEIGHT=$((TRUST_HEIGHT-40000))
TRUST_HASH=$(curl -s "http://${STATE_SYNC_SERVER}/block?height=${HEIGHT}" | jq -r '.result.block_id.hash')
```

You need to sync from latest height 40000 to make sure that the node will fetch
an existing state-sync snapshot.

## Replace config values

Make sure to replace `[closest StateSync IP]` with the IP from our state-sync
node and run this block of code:

```bash
RPC_STATE_SYNC_SERVERS="[closest StateSync IP]:26657,[closest StateSync IP]:26657"
SEED="5aaa51a3b9465a32f7f6c9df1d46d4bfcc16aecb@34.30.34.119:26656"
EXTERNAL_IP=$(curl -4 icanhazip.com)
sed -i "" -e "s/-=RPC_SERVERS=-/${RPC_STATE_SYNC_SERVERS}/g" ~/.zetacored/config/config.toml &&
sed -i "" -e "s/-=SYNC_HEIGHT=-/${HEIGHT}/g" ~/.zetacored/config/config.toml &&
sed -i "" -e "s/-=TRUST_HASH=-/${TRUST_HASH}/g" ~/.zetacored/config/config.toml &&
sed -i "" -e "s/-=MONIKER=-/${MONIKER}/g" ~/.zetacored/config/config.toml &&
sed -i "" -e "s/-=external_ip_address=-/${EXTERNAL_IP}/g" ~/.zetacored/config/config.toml
sed -i "" -e "s/^seeds = .*/seeds = \"${SEED}\"/" ~/.zetacored/config/config.toml
sed -i "" -e 's/^max_num_inbound_peers = .*/max_num_inbound_peers = 120/' ~/.zetacored/config/config.toml
sed -i "" -e 's/^max_num_outbound_peers = .*/max_num_outbound_peers = 60/' ~/.zetacored/config/config.toml
```

## Generate keys

```
zetacored keys add ${MONIKER} --keyring-backend test
```

## Start node

```
zetacored start --home ~/.zetacored/ --log_level info --moniker ${MONIKER} --rpc.laddr tcp://0.0.0.0:26657 --minimum-gas-prices 1.0azeta "--grpc.enable=true"
```

The node will fetch a snapshot and start applying chunks. Once it gets to the
last chunk, it will take a few more minutes to finish the state-sync and start
commiting new blocks.

## Common errors

### Port error

```
accept tcp [::]:26657: use of closed network connection
```

Check if something is running on port 26657:

```
sudo lsof -i :26657
```

Kill any process running on that port:

```
kill -9 PID
```
