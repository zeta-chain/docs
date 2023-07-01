---
sidebar_position: 5
---

# Single Input Multiple Output

## Overview

If you already read the previous tutorials you already know how to use zEVM. A
very common use case on zEVM is a smart contract with a single input from one
chain, do some magic, and then execute the output to another or multiple chains.

The example in this tutorial does exactly that: the contract reads an address
from the message, and then send some tokens to that address in several chains.

## Set up your environment

```
git clone https://github.com/zeta-chain/template
```

Install the dependencies:

```
yarn add --dev @openzeppelin/contracts
```

## Create the contract

```solidity title="contracts/ZetaMultiOutput.sol" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/multioutput/contracts/ZetaMultiOutput.sol
```

## Create a deployment task

```solidity title="tasks/deploy.ts" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/multioutput/tasks/deploy.ts
```

## Create a task to set destination chain

```solidity title="tasks/destination.ts" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/multioutput/tasks/destination.ts
```

## Create a task to send tokens

```solidity title="tasks/send.ts" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/omnichain/multioutput/tasks/send.ts
```
