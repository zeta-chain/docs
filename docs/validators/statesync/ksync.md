---
sidebar_position: 3
title: "Option 2: KSYNC"
---

# Sync with Kyve's KSYNC

The following doc covers a step by step guide on how to state-sync ZetaChain
Testnet with KSYNC.

KSYNC is a tool capable of syncing blocks and state-sync snapshots from the
decentralized KYVE data lake directly into Cosmos blockchain nodes. With KSYNC
Cosmos validators don't need to wait for peers in order to block-sync and they
don't need to search for trusted app hashes if they want to state-sync.
Furthermore, state-syncing to historical heights up to genesis are possible.

More information about KSYNC can be found here: https://docs.kyve.network/ksync

:::note

Please note that this is a PoC and only one snapshot at height 2,716,000 is
available.

:::

The data was validated and uploaded in the following pools:

Block pool: https://app.korellia.kyve.network/#/pools/55 (contains blocks from
height 2,712,001 to 2,717,256)

Snapshot pool: https://app.korellia.kyve.network/#/pools/59 (contains state-sync
snapshot 2,716,000)

## Install KSYNC

Install the latest KSYNC:

```
go install github.com/KYVENetwork/ksync/cmd/ksync@latest
```

Verify the installation:

```
ksync version
```

## Configure the Node

And change the following config in the `config.toml` file:

```toml
moniker = “<moniker>”

db_backend = "goleveldb"
```

Changing the `db_backend` to the default `goleveldb` is required for now, since
KSYNC does not yet support the `pebbledb` from ZetaChain’s dependency
https://github.com/BlockPILabs/cosmos-db.

## State-Sync to height 2,716,000

Now that everything is installed you can state-sync with KSYNC with the
following command:

```
ksync state-sync --binary="/path/to/zetacored" --chain-id=korellia-2 --snapshot-pool-id=59
```

After the state-sync is completed you can start syncing blocks from the network
normally

```
zetacored start --p2p.seeds=5aaa51a3b9465a32f7f6c9df1d46d4bfcc16aecb@34.30.34.119:26656
```
