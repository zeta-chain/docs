# Keygen Ceremony

:::caution
These steps have been automated for the Athens3 testnet via the
`node-setup.sh` and `start-zetaclient.sh` scripts. Operators should ignore this
document unless you they to perform their key generation manually.
:::

During the genesis process of the Athens3 testnet, the TSS Signers (validators
who are in the set of TSSSigner) need to coordinate the generation of a TSS
public key and key fragments (the `keygen` ceremony).

For the `keygen` ceremony all TSS signers need to be online at the same time,
and all TSS signers need to specify the same `--keygen-block <block num>`. The
keygen ceremony will begin at block `<block num>`.

First, query the seed node to join the zetaclient p2p network:

```bash
export SEEDIP=3.141.21.139
export SEED=$(curl --retry 10 --retry-delay 5 --retry-connrefused  -s $SEEDIP:8123/p2p)
```

You should not see any errors and can verify the `SEED` environment variable has
sensible values like:

```bash
echo $SEED 16Uiu2HAkzocxERFCih7PZWCzyoncZ9MEbH8M4Bi3dPjrzBb8tSEY
```

If your node has a public IP and private IP (such as AWS EC2 instance), then you
need to set the `MYIP` environment variable to your public IP otherwise the p2p
connection will not work.

```bash
export MYIP=3.141.21.139
```

Replace with your own operator key

```bash
rm ~/.tss/address_book.seed $ export TSSPATH=~/.tss
zetaclientd init --val val --log-console \
    --enable-chains "goerli_testnet,bsc_testnet" \
    --chain-id athens_7001-1 --dev \
    --operator <your-operator-key-here> \
    --log-level 0 \
    --peer /ip4/$SEEDIP/tcp/6668/p2p/$SEED \
    --keygen-block 15000
```

and then

```bash
zetaclientd start
```
