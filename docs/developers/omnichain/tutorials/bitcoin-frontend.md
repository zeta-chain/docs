---
sidebar_position: 8
---

# Bitcoin Frontend

In this tutorial you will learn how to build a simple frontend application that
let's you call omnichain contract on ZetaChain from Bitcoin using a browser
wallet extension.

## Prerequisites

- [XDEFI](https://xdefi.io/) wallet extension
  [installed in your browser](https://www.xdefi.io/article/create-wallet-new/)
- [Unisat](https://docs.unisat.io/) wallet extension
- Bitcoin Testnet wallet with some testnet BTC (use
  [one of the faucets](https://coinfaucet.eu/en/btc-testnet/) available)
- [Node.js](https://nodejs.org/en/) installed on your machine with `npm` or
  `yarn`
- Learn how to
  [Deposit and call zEVM contracts from Bitcoin](/developers/omnichain/bitcoin/).

# Create a new project

Initialize a new project:

```
npm init -y
```

Install a simple HTTP server:

```
yarn add --dev http-server
```

## HTML Page with a Simple Form

Create a page with a simple form:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bitcoin</title>
  </head>
  <body>
    <input type="number" id="amount" placeholder="Amount in tBTC" />
    <input type="text" id="contract" placeholder="Omnichain contract address" />
    <input type="text" id="message" placeholder="Contract call parameters" />
    <select id="walletSelect">
      <option value="xdefi">XDEFI</option>
      <option value="unisat">Unisat</option>
    </select>
    <button onclick="sendTransaction()">Send transaction</button>
    <script src="./script.js"></script>
  </body>
</html>
```

This HTML page contains a simple form with three inputs:

- Amount - the amount of tBTC to send
- Contract - the address of the omnichain contract to call
- Params - the parameters to pass to the contract call
- Wallet Select - a dropdown with a list of available wallets
- Send transaction - a button that will call the `sendTransaction` function

## Send Transaction Handler

To call an omnichain contract from Bitcoin you need to send a token transfer
transaction to the ZetaChain's [TSS address](/reference/contracts) on Bitcoin
with a memo that conforms to
[the required format](/developers/omnichain/bitcoin).

The memo is composed of two parts:

- The first part is the contract address encoded as hex string (without the `0x`
  prefix). This is the address of the omnichain contract you want to call.
- The second part is the message encoded as hex string (without the `0x`
  prefix). This is the message you want to pass to the contract call.

For example, if the omnichain contract address is
`0xc79E6DC99C5928C5b08ae7a0f79412521996938e` and it expects to receive one
argument that happens to be an address
`0x3724C896Cdc958611873D81547A98565c8cb849d`, the memo passed to the wallet
would look like:

```
c79E6DC99C5928C5b08ae7a0f79412521996938e3724C896Cdc958611873D81547A98565c8cb849d
```

The list of TSS address is available in [the docs](/reference/contracts), for
the purposes of this tutorial we will use a hard-coded value.

Get the contract address and parameters from the form and ensure that the `0x`
prefix is removed.

The amount is passed in tBTC, so we need to multiply it by `1e8` to convert it
to satoshis.

```js title="script.js"
async function sendTransaction() {
  const tss = "tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur";
  const contract = document.getElementById("contract").value.replace(/^0x/, "");
  if (contract.length !== 40) return alert("Not a valid contract address");
  const message = document.getElementById("message").value.replace(/^0x/, "");
  const amount = parseFloat(document.getElementById("amount").value) * 1e8;
  if (isNaN(amount)) return alert("Amount must be a number");
  const params = { contract, message, amount, tss };
  const wallet = document.getElementById("walletSelect")?.value;
  switch (wallet) {
    case "unisat":
      await useUnisat(params);
      break;
    case "xdefi":
      await useXDEFI(params);
      break;
  }
}
```

## Use XDEFI Wallet

XDEFI injects itself into the `window` object, so we can access it from the
`window.xfi` property. Use the `getAccounts` method to get the list of accounts
and use the first one.

For XDEFI to properly encode the memo, you need to prefix it with `hex::`.

```javascript title="script.js"
async function useXDEFI(p) {
  if (!window.xfi) return alert("XDEFI wallet not installed");
  const wallet = window.xfi;
  window.xfi.bitcoin.changeNetwork("testnet");
  const account = (await wallet?.bitcoin?.getAccounts())?.[0];
  if (!account) return alert("No account found");
  const tx = {
    method: "transfer",
    params: [
      {
        feeRate: 10,
        from: account,
        recipient: p.tss,
        amount: {
          amount: p.amount,
          decimals: 8,
        },
        memo: `hex::${p.contract}${p.message}`,
      },
    ],
  };
  window.xfi.bitcoin.request(tx, (err, res) => {
    if (e) {
      return alert(`Couldn't send transaction, ${JSON.stringify(err)}`);
    } else if (res) {
      return alert(`Broadcasted a transaction, ${JSON.stringify(res)}`);
    }
  });
}
```

Call the `request` method on the `window.xfi.bitcoin` object to send the
transaction.

Now that we have the `from` address (your Bitcoin address), `recipient` address
(ZetaChain's TSS address), `amount` and a properly formatted `memo`, call
`window.xfi.bitcoin.request` to create and broadcast a transaction.

Learn more about how to use XDEFI programmatically in the
[XDEFI docs](https://docs.xdefi.io/).

## Use Unisat Wallet

Unisat injects itself into the `window` object, so we can access it from the
`window.unisat` property. Use the `requestAccounts` method to get the list of
accounts.

Prepare the memo by concatenating the contract address and the message and
converting the resulting string to lower case.

Use `unisat.sendBitcoin()` to make a token transfer to the TSS address.

```js title="script.js"
async function useUnisat(p) {
  if (!window.unisat) return alert("Unisat wallet not installed");
  try {
    await window.unisat.requestAccounts();
    const memos = [`${p.contract}${p.message}`.toLowerCase()];
    const tx = await unisat.sendBitcoin(p.tss, p.amount, { memos });
    return alert(`Broadcasted a transaction: ${JSON.stringify(tx)}`);
  } catch (e) {
    return alert(`Couldn't send transaction, ${JSON.stringify(e)}`);
  }
}
```

## Send a Transaction

Start the HTTP server:

```
npx http-server
```

Open the page in your browser and fill in the form. You can test functionality
with your own contract address or follow one of the provided tutorials, for
example, the [Staking](/developers/omnichain/tutorials/staking/) tutorial to
deploy a contract that you can call from Bitcoin.

Fill out the form and click the "Send transaction" button. You will be prompted
to confirm the transaction.

Once the transaction is confirmed, you will see the transaction hash in an alert
window. You can use a Bitcoin block explorer like
[Blockstream](https://blockstream.info/testnet/) to check the transaction
status.

Once the transaction is confirmed on Bitcoin, you can check the transaction
status on ZetaChain using the `cctx` command from the
[Hardhat template](https://github.com/zeta-chain/template).
