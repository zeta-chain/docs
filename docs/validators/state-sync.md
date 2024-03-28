---
sidebar_position: 3
sidebar_label: "Option 1: State-Sync"
---

# Syncing a Node Using State-Sync

:::note

This guide assumes you've completed the
"[Setting Up Your Node](/validators/setup)" step.

:::

Follow this guide to setup a RPC node using state-sync. This guide was created
and tested in MacOS and may need to be modified slightly for your local system.

## State-sync nodes

| Network      | State Sync Server IP |
| :----------- | :------------------- |
| Mainnet Beta | 35.224.53.42         |
| Testnet      | 34.30.34.119         |

:::info

Don't forget to replace the state sync server IP address for the network you're
setting a node for (mainnet beta or testnet).

:::

Fetch the latest height:

```
curl -s http://35.224.53.42:26657/block | jq -r '.result.block.header.height'

1968420
```

Next, subtract 40000 from the latest height to get the `trust_height`: 1928420.

Fetch the trust hash:

```
curl -s "http://35.224.53.42:26657/block?height=1928420" | jq -r '.result.block_id.hash'

CE9E5908B9B319C6F48AC68044F4ECA53DFF7D78EABEC979EF5CF5061B315ABA
```

Enable state-sync, add RPC servers (choose the right IP from the table above for
testnet or mainnet beta) and set the correct values for trust height and hash:

```text title="~/.zetacored/config/config.toml"
[statesync]
enable = "true"
rpc_servers = "34.69.20.168:26657,34.69.20.168:26657"
trust_height = "1928420"
trust_hash = "CE9E5908B9B319C6F48AC68044F4ECA53DFF7D78EABEC979EF5CF5061B315ABA"
```

## Alternative Options

- https://polkachu.com/state_sync/zetachain
