---
sidebar_position: 3
---

# BTC RPC Node For Observer Signers

This applies to **Observer/Signer Validators only**. Most operators are `core validators` and can skip this step. If you aren't sure what type of validator
you are running then you are most likely a core validator.

## Requirements

You must use `Bitcoin Core 0.22`. Newer versions will not work..

## Step 1 Install Bitcoin Core 0.22

Here we assume a typical Ubuntu 22.04 LTS x86_64 setup. If you are using a
different OS you may need to make some adjustments.

1.  Download Bitcoin Core 0.22 software from the official Bitcoin Core website (`https://bitcoincore.org/en/download/`).

2.  Extract the archive file to a location of your choice on your Linux system.
    For example, you could extract it to `/opt/bitcoin`.

        ```
        tar -xzf bitcoin-0.22.1-x86_64-linux-gnu.tar.gz -C /opt/
        ```

3.  Change to the extracted directory.

    ```
    cd /opt/bitcoin-0.22.1/bin/
    ```

4.  Start the Bitcoin daemon by running the `bitcoind` command.

    ```
    ./bitcoind
    ```

5.  By default, the Bitcoin daemon will use the mainnet network. To use a
    different network, such as testnet or regtest, you can specify the network
    option when starting the daemon.

        For example, to start the daemon in testnet mode:

        ```
        ./bitcoind -testnet
        ```

6.  Once the daemon is running, you can use the `bitcoin-cli` command to interact
    with it. For example, you can use the `getinfo` command to get information about
    the current state of the Bitcoin network.

        ```
        ./bitcoin-cli getinfo
        ```

Note that the Bitcoin daemon will need to download and synchronize the entire
blockchain before it can be used. This process can take several hours or even
days, depending on your internet connection speed and the size of the
blockchain.

## Step 2 - Wait for TSS Genesis

Once you have configured your node, you will need to wait for the TSS genesis.
The ZetaChain coordinator will let you know when this is ready. Return to the
[main instructions page](/validators/node) for more information.

After TSS Genesis has been completed a TSS own BTC wallet address will be shared with you.

You can verify this address by running the following command, replacing
127.0.0.1 with the IP of any full ZetaChain Node

```bash
curl http://127.0.0.1:1317/zeta-chain/crosschain/TSS | jq .TSS
```

## Step 3 - Create Watch-Only Wallet

1.  Start the Bitcoin Core daemon if it is not already running.

    ```
    ./bitcoind
    ```

2.  Use the `getnewaddress` RPC command to generate a new Bitcoin address for
    your watch-only wallet. For example:

        ```
        ./bitcoin-cli getnewaddress "watchonly"
        ```

        This will generate a new address with the label "watchonly". You can use any label you like.

3.  Use the `importaddress` RPC command to add the new address to your watch-only wallet. For example:

    ```
    ./bitcoin-cli importaddress "<address>" "watchonly" true
    ```

    Replace `<address>` with the address you generated in step 2. The `true`
    argument tells Bitcoin Core to rescan the blockchain for transactions
    involving the imported address.

4.  Wait for Bitcoin Core to finish rescanning the blockchain. This may take some
    time, depending on the size of the blockchain and the number of transactions
    involving the imported address.

5.  Once the rescan is complete, you should be able to see any incoming
    transactions involving the imported address in your watch-only wallet.

Note that a watch-only wallet cannot be used to spend bitcoin, as it does not
have access to the private keys required to sign transactions. It can only be
used to monitor incoming transactions and view your bitcoin balance.
