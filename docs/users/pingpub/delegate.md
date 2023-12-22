# Delegating to a Validator

Ping Pub is a block explorer for Cosmos based blockchains. Ping Pub features a
dashboard that allows you to participate in governance, delegate tokens to
validators, withdraw staking rewards and more.

https://testnet.ping.pub/zetachain

![Ping Pub](/img/docs/ping-dashboard.png)

Press the wallet icon in the top right corner to connect your wallet. Ping Pub
supports [Keplr](/users/keplr/setup), [Leap](/users/leap/setup) and MetaMask as
well as Ledger. Select the wallet you want and press "Connect".

:::info

Note that there are currently issues when trying to use Ping Pub with MetaMask.
Please, use Keplr or Leap for now, instead.

:::

![Ping Pub](/img/docs/ping-connect.png)

Switch to the "Staking" tab and you will see a list of validators with
information about their commission and voting power. Choose a validator you want
and click on the validator's name.

![Ping Pub](/img/docs/ping-staking.png)

On the validator details page you can see more information about the validator,
including their jailed status, self bonded amount, addresses, website and more.
Press "Delegate" to delegate tokens to the validator.

A popup will appear where you can enter the amount of tokens you want to
delegate. Note that the amount is in `azeta`. So if you want to delegate 1 ZETA,
you need to enter `1000000000000000000`. Press "Send" to continue.

![Ping Pub](/img/docs/ping-delegate.png)

Confirm the transaction in your wallet (in this example we're using Keplr) by
pressing "Approve".

![Ping Pub](/img/docs/ping-keplr.png)

The transaction will be sent to the blockchain and you will see a confirmation
message once it's included in a block.

![Ping Pub](/img/docs/ping-success.png)

Click "View transaction" to see the transaction details.

![Ping Pub](/img/docs/ping-tx.png)

You can now go back to the dashboard and see your delegation.
