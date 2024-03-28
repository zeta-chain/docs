---
sidebar_position: 2
---

# First Omnichain Contract

In this tutorial you will create a simple omnnichain contract, deploy it on
ZetaChain and make a contract call from a connected chain.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (version 18 or above)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Set Up Your Environment

Clone the Hardhat contract template:

```
git clone https://github.com/zeta-chain/template
```

Install dependencies:

```
cd template
yarn
```

## Create the Contract

To create a new omnichain contract you will use the `omnichain` Hardhat task
available by default in the template.

```
npx hardhat omnichain MyContract
```

The `omnichain` task can also accept a list of arguments (optionally with types)
to create a contract that accepts specific data from a connected chain. You can
learn more about passing arguments in the following tutorials. In this tutorial
you will create a contract that does not accept any arguments.

The `omnichain` task has created:

- `contracts/MyContract.sol`: a Solidity omnichain smart contract
- `tasks/deploy.ts`: a Hardhat task to deploy the contract
- `tasks/interact.ts`: a Hardhat task to interact with the contract

It also modified `hardhat.config.ts` to import both `deploy` and `interact`
tasks.

## Omnichain Contract

Let's review the contents of the `MyContract` contract:

```solidity title="contracts/MyContract.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";

contract MyContract is zContract {
    SystemContract public immutable systemContract;

    constructor(address systemContractAddress) {
        systemContract = SystemContract(systemContractAddress);
    }

    modifier onlySystem() {
        require(
            msg.sender == address(systemContract),
            "Only system contract can call this function"
        );
        _;
    }

    function onCrossChainCall(
        zContext calldata context,
        address zrc20,
        uint256 amount,
        bytes calldata message
    ) external virtual override onlySystem {
        // TODO: implement the logic
    }
}
```

`MyContract` is a simple contract that inherits from the
[`zContract` interface](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/interfaces/zContract.sol).

The contract declares a state variable of type `SystemContract` that stores a
reference to the [system contract](/developers/omnichain/system-contract).

The constructor function accepts the address of the system contract and stores
it in the `systemContract` state variable.

`onCrossChainCall` is a function that is called when the contract gets called by
a token transfer transaction sent to the TSS address on a connected chain (when
a gas token is deposited) or a `deposit` method call on the ERC-20 custody
contract (when an ERC-20 token is deposited). The function receives the
following inputs:

- `context`: is a struct of type
  [`zContext`](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/interfaces/zContract.sol)
  that contains the following values:
  - `origin`: EOA address that sent the token transfer transaction to the TSS
    address (triggering the omnichain contract) or the value passed to the
    `deposit` method call on the ERC-20 custody contract.
  - `chainID`: interger ID of the connected chain from which the omnichain
    contract was triggered.
  - `sender` (reserved for future use, currently empty)
- `zrc20`: the address of the ZRC-20 token contract that represents an asset
  from a connected chain on ZetaChain.
- `amount`: the amount of tokens that were transferred to the TSS address or an
  amount of tokens that were deposited to the ERC-20 custody contract.
- `message`: the contents of the `data` field of the token transfer transaction.

The `onCrossChainCall` function should only be called by the system contract (in
other words, by the ZetaChain protocol) to prevent a caller from supplying
arbitrary values in `context`. The `onlySystem` modifier ensures that the
function is called only as a response to a token transfer transaction sent to
the TSS address or an ERC-20 custody contract.

By default, the `onCrossChainCall` function doesn't do anything else. You will
implement the logic yourself based on your use case.

## Deploy Task

The `omnichain` task has created a Hardhat task to deploy the contract:

```ts title="tasks/deploy.ts"
import { getAddress } from "@zetachain/protocol-contracts";
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  if (hre.network.name !== "zeta_testnet") {
    throw new Error(
      '🚨 Please use the "zeta_testnet" network to deploy to ZetaChain.'
    );
  }

  const [signer] = await hre.ethers.getSigners();
  if (signer === undefined) {
    throw new Error(
      `Wallet not found. Please, run "npx hardhat account --save" or set PRIVATE_KEY env variable (for example, in a .env file)`
    );
  }

  const systemContract = getAddress("systemContract", "zeta_testnet");

  const factory = await hre.ethers.getContractFactory("MyContract");
  const contract = await factory.deploy(systemContract);
  await contract.deployed();

  if (args.json) {
    console.log(JSON.stringify(contract));
  } else {
    console.log(`🔑 Using account: ${signer.address}

🚀 Successfully deployed contract on ZetaChain.
📜 Contract address: ${contract.address}
🌍 Explorer: https://athens3.explorer.zetachain.com/address/${contract.address}
`);
  }
};

task("deploy", "Deploy the contract", main).addFlag("json", "Output in JSON");
```

Omnichain contracts are supposed to be deployed to ZetaChain, so the task checks
that the `--network` flag value is always `zeta_testnet`.

The task uses the `getAddress` function from `@zetachain/protocol-contracts` to
get the address of the system contract on ZetaChain.

The task then uses Ethers.js to deploy the contract to ZetaChain.

## Interact Task

The `omnichain` task has also created a Hardhat task to interact with the
contract:

```ts title="tasks/interact.ts"
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseUnits } from "@ethersproject/units";
import { getAddress } from "@zetachain/protocol-contracts";
import ERC20Custody from "@zetachain/protocol-contracts/abi/evm/ERC20Custody.sol/ERC20Custody.json";
import { prepareData } from "@zetachain/toolkit/client";
import { utils, ethers } from "ethers";
import ERC20 from "@openzeppelin/contracts/build/contracts/ERC20.json";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();

  const data = prepareData(args.contract, [], []);

  let tx;

  if (args.token) {
    const custodyAddress = getAddress("erc20Custody", hre.network.name as any);
    if (!custodyAddress) {
      throw new Error(
        `No ERC20 Custody contract found for ${hre.network.name} network`
      );
    }
    const custodyContract = new ethers.Contract(
      custodyAddress,
      ERC20Custody.abi,
      signer
    );
    const tokenContract = new ethers.Contract(args.token, ERC20.abi, signer);
    const decimals = await tokenContract.decimals();
    const value = parseUnits(args.amount, decimals);
    const approve = await tokenContract.approve(custodyAddress, value);
    await approve.wait();

    tx = await custodyContract.deposit(signer.address, args.token, value, data);
    tx.wait();
  } else {
    const value = parseUnits(args.amount, 18);
    const to = getAddress("tss", hre.network.name as any);
    tx = await signer.sendTransaction({ data, to, value });
  }

  if (args.json) {
    console.log(JSON.stringify(tx, null, 2));
  } else {
    console.log(`🔑 Using account: ${signer.address}\n`);

    console.log(`🚀 Successfully broadcasted a token transfer transaction on ${hre.network.name} network.
📝 Transaction hash: ${tx.hash}
  `);
  }
};

task("interact", "Interact with the contract", main)
  .addParam("contract", "The address of the withdraw contract on ZetaChain")
  .addParam("amount", "Amount of tokens to send")
  .addOptionalParam("token", "The address of the token to send")
  .addFlag("json", "Output in JSON");
```

The task uses the `prepareData` function from `@zetachain/toolkit/helpers` to
prepare the `data` field of the token transfer transaction. `prepareData`
accepts an omnichain contract address on ZetaChain, a list of argument types,
and a list of argument names. The `data` field contains the following
information:

- the address of the contract on ZetaChain
- the arguments to pass to the `onCrossChainCall` function in the `message`
  parameter

In the code generated above there are no arguments, so the `data` field is
simply the address of the contract on ZetaChain.

Calling omnichain contracts is differs depending on whether a gas token is being
deposited or an ERC-20 token.

If an ERC-20 token address is passed to the `--token` optional parameter, the
interact task assumes you want to deposit an ERC-20 token in an omnichain
contract.

To deposit an ERC-20 token into an omnichain contract you need to call the
`deposit` method of the ERC-20 custody contract. The task first gets the address
of the custody contract on the current network, creates an instance of a token
contract, gets the number of decimals of the token, and approves the custody
contract to spend the specified amount of ERC-20 tokens. The task then calls the
`deposit` method of the custody contract, passing the following information:

- `signer.address`: the sender address that will be available in the `origin`
  field of the `context` parameter of the `onCrossChainCall` function
- `args.token`: the address of the ERC-20 token being deposited
- `value`: the amount of tokens being deposited
- `data`: the contents of the `message`

If the `--token` optional parameter is not used, the interact task assumes you
want to deposit a gas token. To deposit a gas token you need to send a token
transfer transaction to the TSS address on a connected chain.

`getAddress` retrieves the address of the TSS on the current network.

The task then uses Ethers.js to send a token transfer transaction to the TSS
address. The transaction contains the following information:

- `data`: the `data` field prepared by `prepareData`
- `to`: the address of the TSS
- `value`: the amount of tokens to transfer

## Create an Account

To deploy and interact with the contract you will need a wallet with tokens.

Create a new wallet account:

```
npx hardhat account --save
```

This command generates a random wallet, prints information about the wallet to
the terminal, and saves the private key to a `.env` file to make it accessible
to Hardhat.

## Use the Faucet to Request Tokens

Request testnet ZETA tokens from the ZetaChain faucet:

```
npx hardhat faucet
```

This command requests tokens from the faucet for the account address derived
from the private key specified in the `.env`. Tokens sent to the address on
ZetaChain.

Using the `faucet` task you can get ZETA tokens on ZetaChain as well as ZETA
tokens on connected chains.

You will, however, need to request native tokens on connected chains from one of
the
[publicly available faucets](/reference/get-testnet-zeta/#getting-additional-testnet-gas-assets).

## Check Token Balances

Check token balances to ensure you have tokens on ZetaChain and at least one of
the connected chains:

```
npx hardhat balances
```

Learn more about these and other ZetaChain toolkit commands
[avaialble in the template](/developers/template/).

## Deploy the Contract

Clear the cache and artifacts, then compile the contract:

```
npx hardhat compile --force
```

Deploy the contract to ZetaChain:

```
npx hardhat deploy --network zeta_testnet
```

```
🔑 Using account: 0x1bE17D79b60182D7F3573576B7807F6C20Ae7C99

🚀 Successfully deployed contract on ZetaChain.
📜 Contract address: 0xE26F2e102E2f3267777F288389435d3037D14bb3
🌍 Explorer: https://athens3.explorer.zetachain.com/address/0xE26F2e102E2f3267777F288389435d3037D14bb3
```

## Interact with the Contract

Call the `interact` task to interact with the contract:

```
npx hardhat interact --contract 0xE26F2e102E2f3267777F288389435d3037D14bb3 --amount 0.1 --network goerli_testnet
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

🚀 Successfully broadcasted a token transfer transaction on goerli_testnet network.
📝 Transaction hash: 0x93b441dc2ddb751a60a2f4c0fc52dbbd447ed70eb962b1a01072328aa6872b73
```

Track the transaction:

```
npx hardhat cctx 0x93b441dc2ddb751a60a2f4c0fc52dbbd447ed70eb962b1a01072328aa6872b73
✓ CCTXs on ZetaChain found.

✓ 0x31310706ac4b33aa468e62a77d5db358e52a60dad3854210db8fc06c870186b6: 5 → 7001:
OutboundMined (Remote omnichain contract call completed)
```

Once the transaction is finalized on ZetaChain, you should be able to review the
transaction on the ZetaChain explorer:

https://explorer.zetachain.com/cc/tx/0x31310706ac4b33aa468e62a77d5db358e52a60dad3854210db8fc06c870186b6

The `interact` task has sent a token transfer transaction to the TSS address on
Goerli. The transaction contains the address of the contract on ZetaChain in the
`data` field. ZetaChain detects the transaction and triggers the
`onCrossChainCall` function of the contract. The `onCrossChainCall` function
does nothing in this example, but you can modify it to implement your own logic.

Congratulations! 🎉 In this tutorial you have:

- cloned the Hardhat contract template
- used `npx hardhat omnichain` to create a new omnichain contract
- reviewed the contents of the generated contract and the tasks to deploy and
  interact with the contract
- successfully deployed the contract to ZetaChain
- interacted with the contract by sending a token transfer transaction to the
  TSS address on a connected chain and triggering the `onCrossChainCall`
  function of the omnichain contract on ZetaChain
