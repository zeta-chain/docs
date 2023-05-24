# Joining the Genesis

:::caution
These steps have been automated for the Athens3 testnet via the
`node-setup.sh` and `start-zetaclient.sh` scripts. Operators should ignore this
document unless you they to perform their key generation manually.
:::

The genesis file is a JSON file which defines the initial state of a blockchain.
It can be seen as height **0** of the blockchain. The first block, at
height **1**, will reference the genesis file as its parent. It is needed to
join the blockchain as it contains all the necessary information.

This document describes how to join this initial state.

### Requirements

Your node must be setup as a validator, and it will be part of the active set at
its initial state.

### Deploy a Node

If you have not already deployed a node, follow the instruction below but stop
at **Install Genesis File.**

[Hosting a Node](https://www.notion.so/Hosting-a-Node-64709ea14b6549b8abd45cd3299e8bff)

In the following process, you will participate in generating the genesis file.

### Create a Validator Account

Create the account `val` on your node.

Make sure to securely store the mnemonic from the output in a safe place. You
will need this information to later access your account.

```
zetacored keys add val --algo secp256k1
```

### Submit Your Validator Account Address

Display your validator account address to be submitted on the Zetachain Support
Channel:

```
zetacored keys show val -a
```

### Install the Initial Genesis File

You will receive an initial genesis file on the Zetachain Support Channel.
Install it in the following location:

```
~/.zetacored/config/genesis.json
```

### Generate a Genesis Transaction

This genesis file does not contain any `gentxs`. A `gentx` is a transaction that
bonds staking token present in the genesis file under `accounts` to a validator,
essentially creating a validator at genesis.

The following command will generate a genesis transaction that creates a
validator with a self-delegation.

```bash
zetacored gentx val <delegation_amount> \
  --chain-id $(zetacored config chain-id) \
  --ip <public_ip> \
  --moniker <moniker> \
  --commission-rate <commission_rate> \
  --commission-max-rate <commission_max_rate> \
  --commission-max-change-rate <commission_max_change_rate>
```

- `delegation_amount` is the amount to be delegate in `azeta`
- `public_ip` is your public IP. If you’re using sentry architecture, this would
  be one of your sentry public IP - `moniker` is the moniker for your node (ex.
  “my_node”)
- `commission_rate` is the initial commission rate percentage (optional, default
  value is 0.1)
- `commission_max_rate` is the maximum commission rate percentage (optional,
  default value 0.2)
- `commission_max_change_rate` is the maximum commission change rate percentage
  per day (optional, default value 0.01)

> `commission-max-rate` and `commission-max-change-rate` cannot be changed once
> a validator is up and running.

### Submit Your Genesis Transaction File

You can find your genesis transaction JSON file in the following directory.
Submit it on the ZetaChain Support Channel.

```
~/.zetacored/config/gentx
```

### Install the Genesis File

Once the final ZetaChain genesis file is ready, there will be an announcement
that it can be downloaded from our URL:

https://zetachain-external-files.s3.amazonaws.com/genesis/athens3/genesis.json
