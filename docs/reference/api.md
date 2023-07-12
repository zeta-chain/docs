---
sidebar_position: 0
---

# API/RPC endpoints

Below is a list of public API endpoints that can be used to interact with the
ZetaChain testnets.

## Athens 2 Testnet (current)

| Type                 | Provider                                    | Endpoint                                           |
| -------------------- | ------------------------------------------- | -------------------------------------------------- |
| EVM RPC              | [Ankr](https://www.ankr.com/rpc/zetachain/) | https://rpc.ankr.com/zetachain_evm_testnet         |
| Tendermint RPC       | [Ankr](https://www.ankr.com/rpc/zetachain/) | https://rpc.ankr.com/zetachain_tendermint_testnet  |
| Cosmos SDK HTTP      | [Ankr](https://www.ankr.com/rpc/zetachain/) | https://rpc.ankr.com/http/zetachain_testnet        |
| EVM RPC              | ZetaChain                                   | https://api.athens2.zetachain.com/evm              |
| Tendermint RPC       | ZetaChain                                   | https://api.athens2.zetachain.com/tendermint       |
| Tendermint HTTP      | ZetaChain                                   | https://api.athens2.zetachain.com/tendermint       |
| Tendermint WebSocket | ZetaChain                                   | wss://api-lb.athens2.zetachain.com:26657/websocket |
| Cosmos SDK HTTP      | ZetaChain                                   | https://api.athens2.zetachain.com/                 |

## Athens 3 Testnet (upcoming)

| Type                 | Provider                             | Endpoint                                                       |
| -------------------- | ------------------------------------ | -------------------------------------------------------------- |
| EVM RPC              | [BlockPI](https://blockpi.io/)       | https://zetachain-athens-evm.blockpi.network/v1/rpc/public     |
| Tendermint RPC       | [BlockPI](https://blockpi.io/)       | https://zetachain-athens.blockpi.network/rpc/v1/public         |
| Cosmos SDK HTTP      | [BlockPI](https://blockpi.io/)       | https://zetachain-athens.blockpi.network/lcd/v1/public         |
| Tendermint WebSocket | [BlockPI](https://blockpi.io/)       | wss://zetachain-athens.blockpi.network/rpc/v1/public/websocket |
| Tendermint RPC       | [NodeJumper](https://nodejumper.io/) | https://zetachain-testnet.nodejumper.io:443                    |
| Cosmos SDK HTTP      | [NodeJumper](https://nodejumper.io/) | https://zetachain-testnet.nodejumper.io:1317                   |
| Cosmos SDK gRPC      | [NodeJumper](https://nodejumper.io/) | https://zetachain-testnet.nodejumper.io:9090                   |
| EVM RPC              | [Ankr](https://www.ankr.com/)        | https://rpc.ankr.com/zetachain_evm_athens_testnet              |
| Tendermint RPC       | [Ankr](https://www.ankr.com/)        | https://rpc.ankr.com/zetachain_tendermint_athens_testnet       |
| Tendermint HTTP      | [Ankr](https://www.ankr.com/)        | https://rpc.ankr.com/http/zetachain_tendermint_athens_testnet  |
| Cosmos SDK HTTP      | [Ankr](https://www.ankr.com/)        | https://rpc.ankr.com/http/zetachain_athens_testnet             |

## EVM RPC

ZetaChain is an EVM-compatible blockchain. EVM RPC allows you to connect to the
ZetaChain blockchain and interact with the EVM. This gives you direct access to
reading Ethereum-formatted transactions or sending them to the network

For example, querying the latest block number:

```
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' https://api.athens2.zetachain.com/evm
```

## Tendermint HTTP

ZetaChain is powered by the Tendermint Core BFT consensus engine. The Tendermint
HTTP API allows you to query blocks, information about validators, genesis file,
etc.

For example, querying a genesis file:

https://api.athens2.zetachain.com/tendermint/genesis

## Tendermint RPC

Tendermint RPC API allows broadcasting transactions and querying the blockchain
through an JSON RPC interface.

For example, requesting a specific block:

```
curl --header "Content-Type: application/json" --request POST --data '{"method": "block", "params": ["1779002"], "id": 1}' https://api.athens2.zetachain.com/tendermint
```

## Tendermint WebSocket

Tendermint WebSocket API provides access to JSON RPC via WebSockets.

For example, connecting to the WebSocket with `wscat`

```
wscat -c wss://api-lb.athens2.zetachain.com:26657/websocket
```

## Cosmos SDK HTTP

ZetaChain is built with Cosmos SDK. Cosmos SDK HTTP API allows querying the
state of the ZetaChain blockchain and broadcast transactions.

For example, querying the latest block:

https://api.athens2.zetachain.com/blocks/latest
