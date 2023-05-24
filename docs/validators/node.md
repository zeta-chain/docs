---
sidebar_position: 1
---

# Running a Full Node

The ZetaChan Genesis process for Athens 3 testnet is broken up into two phases:

Phase 1: Node Setup

- Setup your validator node
- Generate keys
- Submit keys to the coordinator via GitHub pull request (PR)

Phase 2: Genesis

- Wait for updated genesis file to be provided by the coordinator
- Start Your Node
- Wait for the coordinator to confirm network genesis is complete

## Phase 1: Node Setup

Here we assume a typical Ubuntu 22.04 LTS x86_64 setup. If you are using a
different OS you may need to make some adjustments. For more information about
the compute see [technical requirements](/validators/requirements).

### Install Prerequisites

Make sure `jq`, `git`, `curl`, and `make` are installed.

```
sudo apt update
sudo apt install -y jq curl git
jq --version
```

### Download and Install the Binaries

Download and install `zetacored` and `zetaclientd` binaries.

Binaries are built based on OS version and CPU architecture. The available binaries are:

```
zetaclientd-alpine-amd64
zetaclientd-ubuntu-20-amd64
zetaclientd-ubuntu-22-amd64
zetaclientd-ubuntu-22-arm64
zetacored-alpine-amd64
zetacored-ubuntu-20-amd64
zetacored-ubuntu-22-amd64
zetacored-ubuntu-22-arm64
```

For the rest of these instructions we'll assume you are usinng Ubuntu 22 with
`amd64` architecture. If you are using a different OS or CPU architecture you'll
need to adjust the commands below.

```
wget https://zetachain-external-files.s3.amazonaws.com/binaries/athens3/1.0.0/zetacored-ubuntu-22-amd64
wget https://zetachain-external-files.s3.amazonaws.com/binaries/athens3/1.0.0/zetaclientd-ubuntu-22-amd64
mv zetacored-ubuntu-22-amd64 /usr/bin/zetacored && chmod +x /usr/bin/zetacored
mv zetaclientd-ubuntu-22-amd64 /usr/bin/zetaclientd && chmod +x /usr/bin/zetaclientd
# You may need to set additional permissions depending on your node configuration
```

### Clone the Network GitHub Repository

Visit the repo: https://github.com/zeta-chain/network-athens3

Click the "Fork" button to fork the repo into you own account:

![](/img/docs/validator-fork.png)

Clone your own fork:

```
git clone https://github.com/USERNAME/network-athens3 && cd network-athens3
```

Where `USERNAME` is your GitHub username.

### Run The Node Setup Script

To streamline this process we have provided scripts that will automatically
generate the required keys, and create your gentx and os_info files. There are
others ways to configure your node but this is the method we can provide
techincal support for during this testnet genesis.

Give execute permissions to the scripts and run the node setup script.

When prompted for confirm, enter `y` to continue.

For observer validators:

```
chmod +x ./scripts/*.sh
./scripts/node-setup.sh -o y
```

For non-observer validators:

```
chmod +x ./scripts/*.sh
./scripts/node-setup.sh -o n
```

After the `node-setup.sh` script generates the keys and necessary files, create
a branch, commit, and raise a PR to submit the files to ZetaChain coordinator.

```
git checkout -B gen-files-YOUR_VALIDATOR_NAME
git add .
git commit -am "Created a validator transaction"
git push origin gen-files-YOUR_VALIDATOR_NAME
```

Go to the your fork on Github: https://github.com/USERNAME/network-athens3

Click "Compare & pull request" and submit a pull request:

![](/img/docs/validator-compare.png)

- Use `gen-files-YOUR_VALIDATOR_NAME` as the branch name for the new branch.
- The pr must contain only two files
  - `os_XX.json`
  - `gentx-XX.json`
- Do not commit `network_files/config/genesis.json` if it exists
  - This file can be deleted, it is not required.
- An automated GitHub action will validate your PR
- Your PR must pass this check before the coordinator will merge it

Note: a backup up is created for the existing zetacored folder under
`~/.zetacored_old/zetacored-<timestamp>`.You can copy back keys etc if needed.

### Node Configuration for Observer/Signer Validators

:::caution
These instructions apply to **Observer/Signer Validators only**. Most operators are
"core validators" and can skip to Phase 2. If you aren't sure what type of node you have, you are most likely a core validator.
:::

#### Configure RPC Connectivity

Observer Signers need an RPC endpoint for each connected chain. You can follow
the standard instructions to configure a node for most chains but the BTC
requires special instructions just for ZetaChain. The links below will take you
to a node setup guide for each chain.

- [Ethereum RPC Node Setup](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/)
- [BSC RPC Node Setup](https://docs.bnbchain.org/docs/validator/fullnode/)
- [Polygon RPC Node Setup](https://wiki.polygon.technology/docs/category/run-a-full-node)
- [BTC RPC Node Setup](/validators/btc)

Edit the `zetaclient_config.json` file located in the `.zetacored/config` directory
and add the RPC endpoints to the `Endpoint = ` section of each chain.

#### Set Public IP in `zetaclient_config.json`

Observer/Signer Validators must set their public IP in the `zetaclient_config.json` file located in the `.zetacored/config` directory.

## Phase 2: Core Genesis

### Get Updated Genesis File

After the ZetaChain coordinator has merged the gentx PRs and updated the genesis file:

- Switch back to the `main` branch
- Pull the latest changes to get the updated `genesis.json` file

```
git remote add upstream https://github.com/zeta-chain/network-athens3
git switch main
git fetch upstream
git merge upstream/main
```

### Start The Node

The `start-zetacored.sh` script automatically copies the new genesis file to `~/.zetacored/config/`.

```
./scripts/start-zetacore.sh
```

### Start `zetaclient`

This step applies to **Observer/Signer Validators only**.

```
SEEDIP=3.218.170.198
./scripts/start-zetaclient.sh -s $SEEDIP
```

### Wait for Genesis to Complete

:::note
Wait until ZetaChain coordinator confirms that genesis is completed.
:::

You can terminate the `zetacored` process that was manually started in the
previous step. You'll want to resume zetacored using a more robust process
management system. See the final section below for more information.

```
pkill zetacored
```

## Process Management for `zetacored` and `zetaclientd`

These instructions are for the initial setup and genesis of the network. Running
a validator 24/7 requires a more robust setup that will change depending on the
environment you are running the validator in. At a minimum we reccomend you:

- Run each process as a systemd service or containerized service
- Do NOT run these services as root. Create a new restricted ZetaChain user
- Create Sentry nodes to protect your validator
- Setup ngnix to forward p2p traffic from Sentry node to zetaclientd
- Make sure you setup resource monitoring (CPU, RAM, etc), uptime
  monitoring, log ingestion, etc to minimize the risk of downtime or
  slashing
- Install adequate security measures such as, endpoint protection,
  anti-virus, system level logging, WAF, etc
