# Account Abstraction: Particle Network

Particle Network offers a comprehensive set of tools and services designed to
enhance the user experience of decentralized applications (dApps) on ZetaChain.

Particle Network's stack natively supports
[ERC-4337 Account Abstraction](https://eips.ethereum.org/EIPS/eip-4337),
empowering developers to implement smart accounts from the initial user
onboarding to the final construction and sponsorship of user operations.

Particle Network offers Wallet as a Service (WaaS), an alternative to
extension-based wallets, allowing users to create non-custodial accounts using
mechanisms similar to those of traditional web apps, for example, social login
and email/password. WaaS are embedded into web apps, so users can interact with
dApps without having to install any additional software.

Main components of the Particle Network stack:

- [Wallet as a Service](https://particlenetwork.readme.io/docs/understanding-wallet-as-a-service)
  (WaaS). WaaS allows a user to sign in to a dApp using social login or
  email/password. Within "classic" Wallet-as-a-Service, an
  Externally-Owned-Account (EOA) is the ending point after login. Alternatively,
  using account abstraction this EOA is used as an intermediary and instead the
  user is assigned a smart account to use for interaction.
- Account abstraction (AA)
  - [Bundler](https://particlenetwork.readme.io/docs/bundler). As apart of the
    AA stack Particle Network offers an open-source Bundler in which all
    "useroOperations" are constructed and sent.
  - [Paymaster](https://particlenetwork.readme.io/docs/paymaster). Alongside the
    Bundler, Particle Network also offers a paymaster for multi-chain gas
    sponsorship.

Particle Network's stack is modular, so developers can choose to use only the
components they need.

## Next Steps

To learn more about how Particle Network WaaS can be used to build dApps on
ZetaChain, check out the comprehensive tutorial on integrating a wallet into a
React-based web app:

https://particlenetwork.readme.io/docs/leveraging-particle-network-on-zetachain
