# Pyth Price Oracle

[Pyth Network](https://docs.pyth.network/) is a price oracle that provides a
high-frequency, low-latency price feed for a wide range of assets. It is
designed to be used by high-frequency trading systems and other applications
that require a high degree of accuracy and reliability.

Pyth is deployed on ZetaChain and provides price feeds for a wide range of
assets, including cryptocurrencies, fiat currencies, and equity.

Pyth contract addresses:

| Network      | Address                                                                                                                                    |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| Mainnet Beta | [0x2880aB155794e7179c9eE2e38200202908C17B43](https://zetachain.blockscout.com/address/0x2880aB155794e7179c9eE2e38200202908C17B43)          |
| Testnet      | [0x0708325268dF9F66270F1401206434524814508b](https://zetachain-athens-3.blockscout.com/address/0x0708325268dF9F66270F1401206434524814508b) |

Source: https://docs.pyth.network/price-feeds/contract-addresses/evm

Pyth Network is a permissionless system, meaning that anyone can submit prices
to the oracle. The system uses a decentralized consensus mechanism to ensure
that the prices are accurate and reliable.

The ZetaChain contributor team runs a Pyth scheduler that submits prices to the
Pyth oracle. The scheduler regularly updates the prices of assets on the oracle,
ensuring that the price feeds are accurate and up-to-date.

:::info

ZetaChain's Pyth scheduler is provided as a public service to the community to
enhance the developer experience and make it easier to test out dapps. If you're
building a production level dapp, you should **consider running your own
scheduler**. Learn more in
[the Pyth's docs](https://docs.pyth.network/price-feeds/schedule-price-updates/using-scheduler).

:::

Currently supported assets: BTC, BNB, MATIC, ETH, USDC, ZETA, USDT.

Price feed IDs: https://pyth.network/developers/price-feed-ids
