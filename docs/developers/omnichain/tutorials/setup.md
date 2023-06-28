---
sidebar_position: 1
---

# Setup

In this tutorial you will set up a basic template for a ZetaChain smart contract
project. You will then be able to use this template for any of the following
tutorials.

## Prerequisites

- Node.js installed (version 16 or higher)
- Yarn package manager installed (optional, but recommended)

## Create a new project directory

Open your terminal and create a new project directory called `myproject`:

```
mkdir myproject
```

Change to the newly created directory:

```
cd myproject
```

## Initialize the project

Initialize a new Node.js project with default settings:

```
npm init -y
```

Add the necessary development dependencies:

```
yarn add --dev hardhat dotenv @zetachain/addresses-tools envfile @zetachain/addresses @zetachain/interfaces @zetachain/faucet-cli
```

Initialize the Hardhat project:

```
npx hardhat
```

Choose the "Create a TypeScript project" option when prompted and agree to all
the following prompts.

## Remove unnecessary files

The Hardhat template comes with an example “Lock” contract. We will write our
own contract in the following sections, so you can safely remove these files.

```
rm contracts/Lock.sol test/Lock.ts scripts/deploy.ts
```

## Configure Hardhat

Add two import statements: `dotenv` package, which is used to manage environment
variables, and the `getHardhatConfigNetworks` function from the
`@zetachain/addresses-tools` package, which will help configure the networks.

```ts reference
https://github.com/zeta-chain/template/blob/main/hardhat.config.ts
```

`dotenv.config()` is called to load environment variables from a `.env` file
created in the previous step. Then, we check if the `PRIVATE_KEY` environment
variable is defined. If it is, we create an array containing the private key as
a string with a `0x` prefix.

`...getHardhatConfigNetworks(PRIVATE_KEYS)` spreads the networks' configuration
returned by the function and passes the `PRIVATE_KEYS` array as an argument.
This will add all the networks that ZetaChain supports to the Hardhat
configuration file.

## Create helper tasks

Create a task that will generate new account and optionally save them to the
`.env` file:

```ts reference
https://github.com/zeta-chain/template/blob/main/tasks/account.ts
```

```ts title="hardhat.config.ts"
import "./tasks/account";
```

Create a task that will query the ZetaChain faucet for tokens:

```ts reference
https://github.com/zeta-chain/template/blob/main/tasks/faucet.ts
```

```ts title="hardhat.config.ts"
import "./tasks/faucet";
```

Create a task that will query ZetaChain for token balances:

```ts reference
https://github.com/zeta-chain/template/blob/main/tasks/balances.ts
```

```ts title="hardhat.config.ts"
import "./tasks/balances";
```

Great start! You now have a template you can use to build your ZetaChain dapps.
In the next tutorial you will learn how to create a simple "Hello Zeta" smart
contract.
