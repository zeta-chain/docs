---
sidebar_position: 8
---

# Bitcoin Frontend

In this tutorial you will learn how to build a simple frontend application that
let's you call omnichain contract on ZetaChain from Bitcoin using a browser
wallet extension.

For the purposes of this tutorial we will be using the
[XDEFI](https://xdefi.io/) wallet.

## Prerequisites

- [XDEFI](https://xdefi.io/) wallet extension
  [installed in your browser](https://www.xdefi.io/article/create-wallet-new/)
- Bitcoin Testnet wallet with some testnet BTC (use
  [one of the faucets](https://coinfaucet.eu/en/btc-testnet/) available)
- [Node.js](https://nodejs.org/en/) installed on your machine with `npm` or
  `yarn`
- Learn how to
  [Deposit and call zEVM contracts from Bitcoin](https://www.zetachain.com/docs/developers/omnichain/bitcoin/).

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
    <input type="text" id="params" placeholder="Contract call parameters" />
    <button onclick="sendTransaction()">Send transaction</button>
    <script src="./script.js"></script>
  </body>
</html>
```

This HTML page contains a simple form with three inputs:

- Amount - the amount of tBTC to send
- Contract - the address of the omnichain contract to call
- Params - the parameters to pass to the contract call
- Send transaction - a button that will call the `sendTransaction` function

## Use XDEFI to send a transaction

Implement the `sendTransaction` function:

```javascript title="script.js"
async function sendTransaction() {
  const bitcoinTSSAddress = "tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur";
  const wallet = window?.xfi;
  if (wallet === undefined) return alert("XDEFI wallet not found");

  const account = (await wallet?.bitcoin?.getAccounts())?.[0];
  if (account === undefined) return alert("No account found");

  const contract = document.getElementById("contract").value.replace(/^0x/, "");
  const params = document.getElementById("params").value.replace(/^0x/, "");

  let memo = ""; // Default empty memo
  if (contract.length === 40) {
    // Contract looks like a valid address, sending an encoded memo
    memo = `hex::${contract}${params}`;
  }

  const amount = parseFloat(document.getElementById("amount").value) * 1e8;
  if (isNaN(amount)) return alert("Amount must be a number");

  window.xfi.bitcoin.request(
    {
      method: "transfer",
      params: [
        {
          feeRate: 10,
          from: account,
          recipient: bitcoinTSSAddress,
          amount: {
            amount,
            decimals: 8,
          },
          memo,
        },
      ],
    },
    (error, result) => {
      console.log(error, result);
    }
  );
}
```

To call an omnichain contract from Bitcoin you need to send a token transfer
transaction to the ZetaChain's
[TSS address](https://zetachain.com/docs/reference/testnet) on Bitcoin with a
memo that conforms to
[the required format](https://www.zetachain.com/docs/developers/omnichain/bitcoin).

The memo is composed of two parts:

- The first part is the contract address encoded as hex string (without the `0x`
  prefix). This is the address of the omnichain contract you want to call.
- The second part is the parameters encoded as hex string (without the `0x`
  prefix). This is the parameters you want to pass to the contract call.

For XDEFI to properly encode the memo, you need to prefix it with `hex::`.

For example, if the omnichain contract address is
`0xc79E6DC99C5928C5b08ae7a0f79412521996938e` and it expects to recieve one
argument that happens to be an address
`0x3724C896Cdc958611873D81547A98565c8cb849d`, the memo passed to XDEFI would
look like:

```
memo: "hex::c79E6DC99C5928C5b08ae7a0f79412521996938e3724C896Cdc958611873D81547A98565c8cb849d"
```

XDEFI injects itself into the `window` object, so we can access it from the
`window.xfi` property. Use the `getAccounts` method to get the list of accounts
and use the first one.

The list of TSS address is available in
[the docs](https://zetachain.com/docs/reference/testnet), for the purposes of
this tutorial we will use a hard-coded value.

Get the contract address and parameters from the form and ensure that the `0x`
prefix is removed.

If the contract address is 40 characters long, it is a valid address and we can
use it as the first part of the memo. If it is not 40 characters long, we will
use an empty string as the memo.

- If the memo is valid and contains a contract address, ZetaChain will deposit
  tBTC as ZRC-20 to the contract and call the contract with the provided
  parameters.
- If the memo is empty, ZetaChain will deposit tBTC as ZRC-20 to the user's
  address on ZetaChain.

The amount is passed in tBTC, so we need to multiply it by `1e8` to convert it
to satoshis.

Finally, call the `request` method on the `window.xfi.bitcoin` object to send
the transaction.

Now that we have the `from` address (your Bitcoin address), `recipient` address
(ZetaChain's TSS address), `amount` and a properly formatted `memo`, call
`window.xfi.bitcoin.request` to create and broadcast a transaction.

Learn more about how to use XDEFI programmatically in the
[XDEFI docs](https://docs.xdefi.io/).

## Send a Transaction

Start the HTTP server:

```
npx http-server
```

Open the page in your browser and fill in the form. You can test functionality
with your own contract address or follow one of the provided tutorials, for
example, the
[Staking](http://localhost:3001/developers/omnichain/tutorials/staking/)
tutorial to deploy a contract that you can call from Bitcoin.

Fill out the form and click the "Send transaction" button. You will be prompted
to confirm the transaction in XDEFI. If you filled out the "contract" field,
make sure that the memo in the prompt is prefixed with `hex::`.

Once the transaction is confirmed, you will see the transaction hash in the
console. You can use a Bitcoin block explorer like
[Blockstream](https://blockstream.info/testnet/) to check the transaction
status.

Once the transaction is confirmed on Bitcoin, you can check the transaction
status on ZetaChain using the `cctx` command from the
[Hardhat template](https://github.com/zeta-chain/template).
