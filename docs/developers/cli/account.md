---
sidebar_position: 2
---

# Adding an Account

## Prerequisites

This tutorial requires `zetacored` CLI to be installed. Please, check out the
docs [on installing the CLI](/developers/cli/setup).

:::warning

This guide is using the test keyring, which is not secure. Do not use it in for
accounts with real funds.

:::

Before interacting with ZetaChain using the CLI, you need to add an account.

## Creating a New Account

Create a new account:

```
zetacored keys add alice
```

Where `alice` is the name of the account.

```
- address: zeta10r4ygmwhd5jyrfrve72u3vz0ujdr8lvatw0gw9
  name: alice
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"A4pXWBWe/MK8gRhBCuOgeVZu33IaMX08TYTznbHiUg5R"}'
  type: local


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

fade sunset wink lonely seek glass load group shove scan tape shop rather connect enhance absurd illness patch void save skirt fee code mushroom
```

In this and following guides we'll be using `alice` as an example account name.
When a command requires an address, we'll be using the following command
`$(zetacored keys show alice -a)` which simply returns an address of a given
key. Please, replace `alice` in the following examples with your own key name.

## Importing an Account

If you have an existing account, you can import it using the mnemonic phrase:

```
zetacored keys add bob --recover
```

The terminal will ask you to enter your mnemonic phrase:

```
> Enter your bip39 mnemonic
man promote grunt cube venture shaft fix scorpion payment tobacco bunker cannon sugar funny time lake foster believe raccoon then shadow price hour weekend

- address: zeta130c4smfsmdncp0vgqc8nh64dn80q3tkz3hjj4n
  name: bob
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AlwIbpaOnvauaiRXTGZgyzRBqexCUUvwzACG+j4KzceW"}'
  type: local
```

The mnemonic phrase above is for demonstration purposes only. Do not use it.

## Listing Accounts

List all accounts:

```
zetacored keys list
```

```
- address: zeta10r4ygmwhd5jyrfrve72u3vz0ujdr8lvatw0gw9
  name: alice
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"A4pXWBWe/MK8gRhBCuOgeVZu33IaMX08TYTznbHiUg5R"}'
  type: local
- address: zeta130c4smfsmdncp0vgqc8nh64dn80q3tkz3hjj4n
  name: bob
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AlwIbpaOnvauaiRXTGZgyzRBqexCUUvwzACG+j4KzceW"}'
  type: local
```

## Convert Between Address Formats

ZetaChain uses two types of addresses:

- bech32 addresses that look like `zeta***`
- hex addresses that look like `0x***`

You can convert between the two formats using the `debig addr` command:

```
zetacored debug addr zeta10r4ygmwhd5jyrfrve72u3vz0ujdr8lvatw0gw9
```

```
Address: [120 234 68 109 215 109 36 65 164 108 207 149 200 176 79 228 154 51 253 157]
Address (hex): 78EA446DD76D2441A46CCF95C8B04FE49A33FD9D
Bech32 Acc: zeta10r4ygmwhd5jyrfrve72u3vz0ujdr8lvatw0gw9
Bech32 Val: zetavaloper10r4ygmwhd5jyrfrve72u3vz0ujdr8lva0wh5rn
```

A single account can be represented by a bech32 or a hex address. You don't need
to "transfer tokens between `zeta***` and `0x***` addresses", because both
addresses represent the same account with the same amount of tokens.
