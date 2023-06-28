---
sidebar_position: 2
---

# Hello Zeta

## Overview

In this tutorial, we will walk through the process of creating, testing, and
deploying a simple Solidity smart contract to the ZetaChain testnet using the
Hardhat development environment. This tutorial will not feature any
ZetaChain-specific features, but will instead focus on the basics of creating
and testing a smart contract.

## Set up your environment

Create a new wallet and request tokens from the testnet faucet if you haven't
done so already:

```
npx hardhat account --save

npx hardhat faucet
```

## Create the contract

In the `contracts` directory, create a new file called `HelloZeta.sol` and add
the following Solidity code to it:

```solidity reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/hello/contracts/HelloZeta.sol
```

This contract has a single function, `helloZeta()`, which returns a string
"Hello Zeta".

## Write a test for the contract

In the `test` directory, create a new file called `HelloZeta.test.ts` and add
the following test code to it:

```ts reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/hello/test/HelloZeta.spec.ts
```

First, we import the necessary modules. The `expect` function is imported from
the Chai library, which is an assertion library that allows us to write
human-readable assertions for our tests. The `ethers` object is imported from
the Hardhat library, which provides a set of tools and utilities for smart
contract development and testing.

We then define a test suite for the HelloZeta contract using the `describe`
function from the Mocha framework. This function takes two arguments: a string
describing the test suite, and a callback function that contains the tests.

Inside the test suite, we write a single test case using the `it` function. This
function also takes two arguments: a string describing the test case, and an
asynchronous callback function that performs the test.

In the test case, we begin by deploying the HelloZeta smart contract. We first
get the contract factory using the `ethers.getContractFactory()` method, passing
the name of the contract as an argument. Next, we deploy the contract by calling
the `deploy()` method on the contract factory. We wait for the contract to be
deployed using the `deployed()` method.

Once the contract is deployed, we call the `helloZeta()` function on the
contract instance. This function should return the string "Hello Zeta". We store
the result of this function call in a constant variable named `result`.

Finally, we check if the result matches our expectation using the `expect`
function from the Chai library. We pass the `result` variable to the `expect`
function and chain the `to.equal()` method to it, asserting that the result
should be equal to the expected string "Hello Zeta".

In summary, this test suite is a simple example of testing a smart contract
using Hardhat, Mocha, and Chai. It deploys the HelloZeta contract, calls the
`helloZeta()` function, and checks if the returned result matches the expected
value. This serves as a good starting point for understanding how to write tests
for more complex smart contracts.

### Run the test

Execute the following command to run the `HelloZeta` test using `hardhat` on the
`athens` testnet:

```
npx hardhat test --network athens
```

```
HelloZeta
    ✔ Should return 'Hello Zeta' when calling helloZeta() (4709ms)

  1 passing (5s)
```

## Create a deployment task

Now, we'll implement a simple Hardhat task that deploys a smart contract to the
ZetaChain.

```ts reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/hello/tasks/deploy.ts
```

Don't forget to import the deployment task in your `hardhat.config.ts` file.

```ts title="hardhat.config.ts"
import "./tasks/deploy";
```

The deployment task defines an asynchronous function called `main` that will
execute the deployment process. Inside this function, the code first retrieves
the deployer's address by getting a signer, which is an entity capable of
signing transactions on the blockchain.

Once the deployer's address is obtained, the script proceeds to deploy the
"HelloZeta" smart contract. It does so by first getting a contract factory for
the "HelloZeta" contract using the `ethers` object. Then, it deploys the
contract using the `deploy` method on the factory object, and waits for the
deployment to complete. After the deployment is successful, the address of the
deployed contract is logged to the console.

### Deploy the contract to the ZetaChain testnet

Execute the following command to deploy `HelloZeta` contract to the `athens`
testnet:

```
npx hardhat deploy --network zeta_testnet
```

```
Deploying contracts with the account: 0x4bc06EAA43CA52BAaa857B21df6F49939a78274E
HelloZeta contract deployed to: 0xff4bB2F0F2F947320e1Aa09e14789E62cc429e9c
```
