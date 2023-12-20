---
sidebar_position: 3
---

# Querying Balances

To query accounts balances, use the `q bank balances` command:

```
zetacored q bank balances zeta19nfaqu9wr0fktyyampva98ec025kjy0phww5um --node https://zetachain-athens.blockpi.network:443/rpc/v1/public
```

Provide a valid node RPC URL with the `--node` flag. You can use one of the
available RPCs [listed in the docs](/reference/api) labeled "Tendermint RPC".
Please, note that you need to specify the port number in the URL. If the
protocol scheme is `https://`, the port is 443, unless specified otherwise.

```yml
balances:
  - amount: "11345716912473012386685"
    denom: azeta
```

The amount is in `azeta` units, which is the smallest unit. To convert it to
ZETA, divide it by 10¹⁸. In the example above, the balance is approximately
11345 ZETA.
