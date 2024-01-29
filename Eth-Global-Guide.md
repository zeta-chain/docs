# Intro to Zetachain


## Introduction

<details>
<summary>What is ZetaChain?</summary>
<br>
ZetaChain is the foundational, chain-agnostic backbone of the decentralized internet. It acts as a convergence point for various blockchains, including Ethereum and Bitcoin. ZetaChain enables omnichain functionality, supporting generic smart contracts and seamless messaging between different blockchains. By addressing the challenges of cross-chain interactions, it opens up the crypto and global financial ecosystem to a broader audience. ZetaChain envisions a fluid, multi-chain crypto ecosystem where users and developers can easily navigate and leverage the unique advantages of different blockchains for payments, DeFi, gaming, art, and more.
At its core, ZetaChain is a public omnichain blockchain that supports real, native cross-blockchain transactions with a complete toolkit for cross-chain messaging and general Omnichain Smart Contracts.
  
------
<h3>MCQs</h3>

**Question:What is the primary role of ZetaChain in the context of the decentralized internet?**

◻  A. Providing exclusive support for Ethereum transactions <br>
◻  B. Acting as a specialized gaming blockchain <br>
✅ C. Enabling omnichain functionality for cross-blockchain transactions <br>
◻  D. Focusing solely on Bitcoin-related smart contracts


-------
</details>

<details>
<summary>Why build dApps on Zeta ?</summary>
<br>

**1. Decentralized and public blockchain network:**

ZetaChain is built on the Cosmos SDK and Tendermint Consensus. Unlike many cross-chain solutions that rely on centralized trust models prone to exploits and hacks, ZetaChain operates as a Proof-of-Stake blockchain. This means that all transactions and activities on the chain, including cross-chain transactions, are fully transparent, verifiable, and operate in a trust-minimized manner.

**2. Hyper-connected nodes:**

ZetaChain's nodes have observers that monitor transactions on every connected chain. Through ZetaChain's TSS architecture, the network can sign and verify transactions on each connected chain, similar to how a wallet operates. These hyper-connected nodes provide a seamless omnichain environment, allowing developers to build novel and powerful cross-chain applications.

**3. Omnichain smart contracts:**

ZetaChain supports the native deployment of smart contracts that can read from and write to connected chains. It is the only public blockchain that offers this capability, opening up new possibilities for app development.

**4. Cross-chain message passing:**

Developers can easily pass messages (data and value) between chains and layers using simple function calls. By leveraging message passing, dApp developers can create robust cross-chain applications by implementing a few functions within their existing smart contracts.

**5. Managed external assets:**

ZetaChain's network and dApps built on top of it can manage assets and vaults of externally connected chains. This allows for the management of assets on any chain, similar to how a smart contract on a single chain manages assets. As a result, a dApp on ZetaChain can orchestrate and bring smart contract logic to any connected chain, including non-smart-contract chains like Bitcoin.


-------
<h3>MCQs</h3>

**Question:How does ZetaChain's use of the Tendermint Consensus and Proof-of-Stake differ from some cross-chain solutions?**

◻  A. It introduces a centralized trust model. <br>
◻  B. It relies on a Proof-of-Work blockchain <br>
◻  C. It minimizes hyper-connected nodes <br>
✅  D. It ensures fully transparent and verifiable transactions


<br>

**Question:What distinguishes ZetaChain's approach to cross-chain applications through hyper-connected nodes?**

◻  A. Limited connectivity with external chains <br>
✅ B. Utilization of TSS architecture for transaction signing <br>
◻  C. Exclusively supporting single-chain applications <br>
◻  D. Reliance on a centralized node model <br>

----------
</details>


<details>
<summary>What is ZETA token?</summary>
<br>
ZetaChain's coin, ZETA, serves multiple purposes within the ZetaChain ecosystem.
  
- ZETA is used as gas for ZetaChain’s omnichain smart contracts layer and internal transactions. With transactions like EIP 1559, some ZETA is burned over time.

- ZETA is used in core pools that the protocol uses to exchange for external ZRC-20 gas assets to pay for and write outbound transactions to external chains. ZRC-20 is a token standard integrated into ZetaChain's omnichain smart contract platform. At a high-level, ZRC-20 tokens are an extension of the standard ERC-20 tokens found in the Ethereum ecosystem, ZRC-20 tokens have the added ability to manage assets on all ZetaChain-connected chains. 

- ZETA is used as a cross-chain intermediary asset through messaging. When a cross-chain message is sent, a dApp/user attaches ZETA in his message to represent value and to pay for all gas and transaction fees in a single bundle. ZETA is also exchanged on the core pools to pay for outbound gas.
  
- Users can conveniently pay for ZetaChain's cross-chain service and gas fees on the destination chain using ZETA in a single step or bundle.

-------
<h3>MCQs</h3>
<br>
**Question: What are the primary use cases of ZETA within the ZetaChain ecosystem?**

◻  A. Solely used for gas in external transactions <br>
◻  B. Exclusively burned over time in internal transactions <br>
✅ C. Multi-purpose, including gas for smart contracts, exchange in core pools, and as a cross-chain intermediary asset <br>
◻  D. Limited to managing assets on ZetaChain-connected chains
-------

</details>

## Build with ZetaChain (things common to both CCM and omnichain)
<details>
<summary> Start building dapps </summary>
<br>
ZetaChain is a Proof of Stake (PoS) blockchain developed using the Cosmos SDK and Tendermint Core consensus engine. This design choice allows ZetaChain to benefit from fast block times and instant finality.

ZetaChain includes an Ethereum Virtual Machine (EVM) compatible execution layer called zEVM. In addition to supporting all EVM features and standard interactions (such as contract creation, contract interaction, and contract composition), zEVM offers two unique capabilities:

- Contracts on zEVM can be called from external chains.
- Contracts on zEVM can generate outbound transactions on external chains.

These two features make zEVM a versatile programmable platform, enabling cross-chain transactions that can modify states across different chains in a single step.

When developing on ZetaChain, you create zEVM contracts. While these contracts can be standard Solidity contracts, to fully utilize ZetaChain's capabilities, they should adhere to specific interfaces. These interfaces, unique to ZetaChain, facilitate interaction with externally connected blockchains.

ZetaChain provides two methods for developing dApps: omnichain contracts and cross-chain message passing.

</details>

<details>
<summary> Interacting with Zetachain smart contracts </summary>
<br>

This ZetaChain smart contract template will help you to setup your dApp quickly. In order to begin, git clone the below repository.

```git clone https://github.com/zeta-chain/template```


This template uses Hardhat to compile, test, and deploy contracts. It also imports @zetachain/toolkit that provides a useful set of utilities for creating contracts, querying balances, tracking cross-chain transactions, accessing the faucet, and more. The template exposes most of the features available in the toolkit through Hardhat tasks.

1. Generating a Random Wallet
To generate a random wallet:

```npx hardhat account --save```

This command generates a random wallet, prints information about the wallet to the terminal, and saves the private key to a .env file to make it accessible to Hardhat. If you don't want to save the wallet (for example, if you just need an address to send tokens to for testing purposes), you can run the command without the --save flag.

If you already have a private key or a mnemonic you want to import, you can use the --recover flag:

```npx hardhat account --save --recover``` 

The account command will prompt you for a private key or a mnemonic, print the derived addresses and save the private key into the .env file.

The account command shows derived addresses in hexacecimal (for EVM-based chains), bech32 with zeta prefix for ZetaChain, and bech32 for Bitcoin.

2. Querying for Token Balances
To query for token balances:

```npx hardhat balances```

This command queries token balances for the account address derived from the private key specified in the ```.env```. If you need to query for balances as part of a script, you can also use a --json flag to output the balances in JSON format:

```npx hardhat balances --json```

If you want to query for token balances for a different account, you can use the --address flag:

```npx hardhat balances --address ADDRESS```

The balances command supports querying for native gas tokens, wrapped ZETA on all connected chains as well as ZetaChain, ZRC-20 tokens, and BTC on Bitcoin.

3. Requesting Tokens from the Faucet
To request ZETA tokens from the faucet:

```npx hardhat faucet```

This command requests tokens from the faucet for the account address derived from the private key specified in the .env. Tokens sent to the address on ZetaChain.

You can specify a different address to send the tokens to:

```npx hardhat faucet --address ADDRESS```

Alternatively, you can install a standalone faucet CLI:

```yarn global add @zetachain/faucet-cli```

You can then use it with the following command:

```zetafaucet -h```

4. Creating an Omnichain Contract
The template includes a set of commands for generating code for smart contracts and helper tasks.

To create a new omnichain contract:

```npx hardhat omnichain MyContract```

This command creates a new omnichain contract in contracts/MyContract.sol, a task to deploy the contract in tasks/deploy.ts, and a task to interact with the contract in tasks/interact.ts.

When an omnichain contract is called, it can receive data in the data field of a transaction. This data is passed to the message parameter of the contract's onCrossChainCall function. To specify the fields of the message parameter, use positional arguments:

```npx hardhat omnichain MyContract recepient:address description quantity:uint256```

A field may have a type specified after the field name, separated by a colon. If no type is specified, the type defaults to string.

Supported types are: address, bool, bytes32, string, int,int8,int16,int128,int256,uint,uint8,uint16,uint128,uint256.

Learn more about omnichain contracts by following the tutorials.

5. Creating a Cross-Chain Messaging Contract
To create a new cross-chain messaging contract:

```npx hardhat messaging MyContract```

This command creates a new cross-chain messaging contract in contracts/MyContract.sol, a task to deploy the contract in tasks/deploy.ts, and a task to interact with the contract in tasks/interact.ts.

You can pass additional optional arguments to the messaging command to specify the data that will be sent in the message.

npx hardhat messaging MyContract token:uint256 sender:address to:address description

A field may have a type specified after the field name, separated by a colon. If no type is specified, the type defaults to string.

The list of supported types is the same as for omnichain contracts.


6. Tracking a Cross-Chain Transaction
After broadcasting a cross-chain transaction on a connected chain either to a cross-chain messaging contract or to trigger an omnichain contract, you can track its status:

```npx hardhat cctx TX_HASH```

7. Verifying a Contract
To verify a contract deployed on ZetaChain:

```npx hardhat verify:zeta --contract ADDRESS```

Select the contract to verify:
```
? Select a contract to verify: (Use arrow keys)
  @zetachain/zevm-protocol-contracts/contracts/interfaces/IZRC20.sol:IZRC20
  @zetachain/zevm-protocol-contracts/contracts/interfaces/zContract.sol:zContract
❯ contracts/Withdraw.sol:Withdraw
```

After the confirmation the contract will be verified.

8. Sending Tokens
Sending ZETA from ZetaChain to Goerli:

```npx hardhat send-zeta --amount 1 --network zeta_testnet --destination goerli_testnet```

9. Sending ZETA from Goerli to ZetaChain:

```npx hardhat send-zeta --amount 1 --network goerli_testnet --destination zeta_testnet```

10. Depositing gETH to ZetaChain as ZRC-20:

```npx hardhat send-zrc20 --amount 1 --network goerli_testnet --destination zeta_testnetv```

11. Withdrawing ZRC-20 from ZetaChain go Goerli as gETH:

```npx hardhat send-zrc20 --amount 1 --network zeta_testnet --destination goerli_testnet```

12. Depositing tBTC from the Bitcoin testnet to ZetaChain:

```npx hardhat send-btc --amount 1 --recipient TSS_ADDRESS --memo RECIPIENT_ADDRESS_WITHOUT_0x```


13. Querying Cross-Chain Fees


```npx hardhat fees```

This command will query the latest omnichain withdrawal fees as well as cross-chain messaging fees.

14. To calculate the fees for a different gas limit use the --gas flag:

```npx hardhat fees --gas 300000```

</details>

<details>
<Summary> Sending and depositing tokens </Summary>
<br>
<h3>Native ZETA Token on ZetaChain</h3>
The native token of the ZetaChain ZETA is a staking token, and is used to pay for transaction fees. ZetaChain node is built with Cosmos SDK framework and the ZETA token is implemented as a sdk.Coin. The on-chain denomination for the same is aZeta.

1 ZETA = 10¹⁸ aZeta.

To query for account balance you can use the Cosmos HTTP API balances endpoint:

```https://zetachain-athens.blockpi.network/lcd/v1/public/cosmos/bank/v1beta1/balances/zeta19nfaqu9wr0fktyyampva98ec025kjy0phww5um```
- To convert the value amount from azeta to ZETA, divide it by 10¹⁸. In the example above the balance is 10 ZETA.
  

> Sending ZETA from ZetaChain to Goerli:

```npx hardhat send-zeta --amount 1 --network zeta_testnet --destination goerli_testnet```

- send-zeta sends native ZETA to the wrapped ZETA contract on ZetaChain, approves the wrapped ZETA to be spent by the connector contract, then finally calls the connector's send method to send the wrapped ZETA to the connected chain.

> Wrapped ZETA on ZetaChain
ZETA can exists on ZetaChain in a wrapped form (WZETA) as a WETH9 token. WZETA is primarily used in internal liquidity pools on ZetaChain paired with native gas tokens of connected blockchains (for example, gETH/WZETA pair).

To wrap native ZETA and turn it into WZETA, send it to the zetaToken contract on Zetachain.

> ZETA Tokens on Connected Blockchains

ZETA tokens on EVM-compatible connected blockchains (like Ethereum, Polygon and BSC) are implemented as ERC-20 tokens. You can find the contract addresses of the zetaToken on a connected blockchain on the testnet page.

> Sending ZETA from Goerli to ZetaChain:

```npx hardhat send-zeta --amount 1 --network goerli_testnet --destination zeta_testnet```

 When you use the send-zeta command above, you will receive unwrapped native ZETA on ZetaChain.

> Sending ZETA from Goerli to BSC testnet:

```npx hardhat send-zeta --amount 1 --network goerli_testnet --destination bsc_testnet```

> Acquiring ZETA on ZetaChain

One way to accquire ZETA on ZetaChain is to swap native gas tokens (like gETH) on a connected chain's (like Goerli) Uniswap for ZETA. Use the zetaToken [contract address](https://www.zetachain.com/docs/reference/testnet/) on the connected chain of choice to add it to [Uniswap's UI](https://app.uniswap.org/swap), swap gETH for ZETA, then send ZETA to ZetaChain using the send-zeta command described above.

> Foreign Tokens on ZetaChain
> 
Native gas tokens of connected blockchains (like gETH, tMATIC, tBNB, and tBTC) are represented on ZetaChain as ZRC-20. ZRC-20 is an extension of ERC-20 that allows depositing tokens to and withdrawing tokens from ZetaChain.

To deposit tokens to ZetaChain, send them to the TSS address on a connected chain. To withdraw native gas tokens from ZetaChain, call the withdraw method of the ZRC-20 contract.

- Depositing gETH to ZetaChain as ZRC-20:

```npx hardhat send-zrc20 --amount 1 --network goerli_testnet --destination zeta_testnet```

- Withdrawing ZRC-20 from ZetaChain to Goerli as gETH:

```npx hardhat send-zrc20 --amount 1 --network zeta_testnet --destination goerli_testnet```

tBTC is represented on ZetaChain as ZRC-20 as well. To deposit tBTC to ZetaChain you need to send it to the tss address on the Bitcoin testnet with the recipient's address encoded in the memo.

- Depositing tBTC from the Bitcoin testnet to ZetaChain:

```npx hardhat send-btc --amount 1 --recipient <TSS_ADDRESS> --memo <RECIPIENT_ADDRESS>```

</details>


## Build using Omnichain contracts
<details>
<Summary> Overview </Summary>
<br>
Omnichain Smart Contracts are contracts deployed on ZetaChain that can use and orchestrate assets on connected chains, as well as on ZetaChain. With omnichain smart contracts you are able to have a single place of logic that can maintain the state of assets and data across all connected chains.

For a contract to be considered omnichain it must inherit from the zContract interface and implement the onCrossChainCall function:
```
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/interfaces/IZRC20.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";

contract YourContract is zContract {
    function onCrossChainCall(
        zContext calldata context,
        address zrc20,
        uint256 amount,
        bytes calldata message
    ) external virtual override {
        bytes32 recipient = abi.decode(message, (bytes32));

        (, uint256 gasFee) = IZRC20(zrc20).withdrawGasFee();

        IZRC20(zrc20).approve(zrc20, gasFee);
        IZRC20(zrc20).withdraw(abi.encodePacked(recipient), amount - gasFee);
    }
}
```
An omnichain contract is deployed on ZetaChain and can be called from any connected chain.

To call on omnichain contract the only thing a user has to do is send a transaction to a connected chain to ZetaChain's TSS address. The transaction amount becomes available to the sender on ZetaChain as ZRC-20 and the data byte array (containing an the omnichain contract address and message) is used to call the omnichain contract by address and pass arguments from the message.

Omnichain Smart Contracts are ideal for more complex applications where state management between different chains is core to the application. Some use case examples include:

- Complex trading or DeFi applications that involve liquidity on multiple chains.
- Adding smart contract layer to non-smart-contract chains like Bitcoin and Dogecoin, or incorporating these chains/assets with other pieces of the DeFi ecosystem natively.
- Multichain smart-contract wallet applications like portfolio management across all chains.
Leveraging existing implementations of protocols like Aave, Uniswap, Curve, etc. for omnichain. Since zEVM is EVM-compatible, one can build on top of these implementations (just as they would on Ethereum) to adapt them for omnichain interoperability.

Let's take a look at simple omnichain contract example in next section.

</details>




<details>
<Summary> Creating your first omnichain contract </Summary>
<br>

In this tutorial you will create a simple omnnichain contract, deploy it on ZetaChain and make a contract call from a connected chain.

<h3>Prerequisites:</h3>
<br>

- Node.js (version 18 or above)
- Yarn
- Git
- Set Up Your Environment
  
You can start from cloning the Hardhat contract template using the following command :

```git clone https://github.com/zeta-chain/template```

- Install dependencies:

```
cd template
yarn
```

<h3>Create the Contract :</h3>
<br>
  
To create a new omnichain contract you will use the omnichain Hardhat task available by default in the template.

```npx hardhat omnichain MyContract```

The omnichain task can also accept a list of arguments (optionally with types) to create a contract that accepts specific data from a connected chain.In this tutorial, you will create a contract that does not accept any arguments.

The omnichain task has created:

- ```contracts/MyContract.sol```: a Solidity omnichain smart contract
- ```tasks/deploy.ts```: a Hardhat task to deploy the contract
- ```tasks/interact.ts```: a Hardhat task to interact with the contract
- It also modified ```hardhat.config.ts``` to import both deploy and interact tasks.

<h3>Omnichain Contract</h3>

Let's review the contents of the MyContract contract:

```
contracts/MyContract.sol
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

MyContract is a simple contract that inherits from the zContract interface.

- The contract declares a state variable of type SystemContract that stores a reference to the system contract.

- The constructor function accepts the address of the system contract and stores it in the systemContract state variable.

- ```onCrossChainCall``` is a function that is called when the contract gets called by a token transfer transaction sent to the TSS address on a connected chain (when a gas token is deposited) or a deposit method call on the ERC-20 custody contract (when an ERC-20 token is deposited). The function receives the following inputs:

- context: is a struct of type zContext that contains the following values:
- origin: EOA address that sent the token transfer transaction to the TSS address (triggering the omnichain contract) or the value passed to the deposit method call on the ERC-20 custody contract.
- chainID: interger ID of the connected chain from which the omnichain contract was triggered.
- sender (reserved for future use, currently empty)
- zrc20: the address of the ZRC-20 token contract that represents an asset from a connected chain on ZetaChain.
- amount: the amount of tokens that were transferred to the TSS address or an amount of tokens that were deposited to the ERC-20 custody contract.
- message: the contents of the data field of the token transfer transaction.

The ```onCrossChainCall``` function should only be called by the system contract (in other words, by the ZetaChain protocol) to prevent a caller from supplying arbitrary values in context. The onlySystem modifier ensures that the function is called only as a response to a token transfer transaction sent to the TSS address or an ERC-20 custody contract.

By default, the ```onCrossChainCall``` function doesn't do anything else. Based on usecase, you can implement the logic for the same.

<h3>Deploy Task</h3>
<br>

The omnichain task has created a Hardhat task to deploy the contract:


```tasks/deploy.ts```

```
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

- Omnichain contracts are supposed to be deployed to ZetaChain, so the task checks that the ```--network``` flag value is always zeta_testnet.

- The task uses the ```getAddress``` function from @zetachain/protocol-contracts to get the address of the system contract on ZetaChain.

- The task then uses ```Ethers.js``` to deploy the contract to ZetaChain.


<h3>Interact Task</h3>
<br>

The omnichain task has also created a Hardhat task to interact with the contract:

```tasks/interact.ts```
```
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseUnits } from "@ethersproject/units";
import { getAddress } from "@zetachain/protocol-contracts";
import ERC20Custody from "@zetachain/protocol-contracts/abi/evm/ERC20Custody.sol/ERC20Custody.json";
import { prepareData } from "@zetachain/toolkit/helpers";
import { utils, ethers } from "ethers";
import ERC20 from "@openzeppelin/contracts/build/contracts/ERC20.json";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();

  const data = prepareData(args.contract, [], []);

  let tx;

  if (args.token) {
    const custodyAddress = getAddress("erc20Custody", hre.network.name as any);
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

The task uses the prepareData function from @zetachain/toolkit/helpers to prepare the data field of the token transfer transaction. prepareData accepts an omnichain contract address on ZetaChain, a list of argument types, and a list of argument names. The data field contains the following information:

- the address of the contract on ZetaChain
- the arguments to pass to the onCrossChainCall function in the message parameter
- In the code generated above there are no arguments, so the data field is simply the address of the contract on ZetaChain.

Calling omnichain contracts is differs depending on whether a gas token is being deposited or an ERC-20 token.

If an ERC-20 token address is passed to the ```--token``` optional parameter, the interact task assumes you want to deposit an ERC-20 token in an omnichain contract.

To deposit an ERC-20 token into an omnichain contract you need to call the deposit method of the ERC-20 custody contract. The task first gets the address of the custody contract on the current network, creates an instance of a token contract, gets the number of decimals of the token, and approves the custody contract to spend the specified amount of ERC-20 tokens. The task then calls the deposit method of the custody contract, passing the following information:

- signer.address: the sender address that will be available in the origin field of the context parameter of the onCrossChainCall function
- args.token: the address of the ERC-20 token being deposited
- value: the amount of tokens being deposited
- data: the contents of the message
- If the --token optional parameter is not used, the interact task assumes you want to deposit a gas token. To deposit a gas token you need to send a token transfer transaction to the TSS address on a connected chain.

```getAddress``` retrieves the address of the TSS on the current network.

The task then uses Ethers.js to send a token transfer transaction to the TSS address. The transaction contains the following information:

- data: the data field prepared by prepareData
- to: the address of the TSS
- value: the amount of tokens to transfer


<h3>Create an Account</h3>
<br>

To deploy and interact with the contract you will need a wallet with tokens.

- Create a new wallet account:

```npx hardhat account --save```

This command generates a random wallet, prints information about the wallet to the terminal, and saves the private key to a .env file to make it accessible to Hardhat.

- Use the Faucet to Request Tokens
Request testnet ZETA tokens from the ZetaChain faucet:

```npx hardhat faucet```

This command requests tokens from the faucet for the account address derived from the private key specified in the .env. Tokens sent to the address on ZetaChain.

Using the faucet task you can get ZETA tokens on ZetaChain as well as ZETA tokens on connected chains.

You will, however, need to request native tokens on connected chains from one of the publicly available faucets.

- Check Token Balances
Check token balances to ensure you have tokens on ZetaChain and at least one of the connected chains:

```npx hardhat balances```

Learn more about these and other ZetaChain toolkit commands avaialble in the [template](https://www.zetachain.com/docs/developers/template/).

- Deploy the Contract
Clear the cache and artifacts, then compile the contract:

```npx hardhat compile --force```

- Deploy the contract to ZetaChain:

```npx hardhat deploy --network zeta_testnet```

</details>

  
## Using Cross-chain messaging contracts
<details>
<summary>Overview</summary>
<br>

Cross-chain messaging (CCM) lets you send messages from any connected chain to any connected chain, including ZetaChain. Cross-chain messaging makes the most sense for applications that generally need minimal logic or state to maintain across all chains, and where data that needs only to be passed between different chains one way.

```
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/evm/tools/ZetaInteractor.sol";
import "@zetachain/protocol-contracts/contracts/evm/interfaces/ZetaInterfaces.sol";

contract YourContract is ZetaInteractor, ZetaReceiver {
    constructor(address connectorAddress)
        ZetaInteractor(connectorAddress)
    {}

    function sendMessage(uint256 destinationChainId) external payable {
        connector.send(
            ZetaInterfaces.SendInput({
                destinationChainId: destinationChainId,
                destinationAddress: interactorsByChainId[destinationChainId],
                destinationGasLimit: 300000,
                message: abi.encode("Hello, Cross-Chain World!"),
                zetaValueAndGas: msg.value,
                zetaParams: abi.encode("")
            })
        );
    }

    function onZetaMessage(ZetaInterfaces.ZetaMessage calldata zetaMessage) external override isValidMessageCall(zetaMessage) {
        // Handle the message
    }

    function onZetaRevert(ZetaInterfaces.ZetaRevert calldata zetaRevert) external override isValidRevertCall(zetaRevert) {
        // Handle the revert
    }
}
```
CCM contracts are deployed on two or more connected chains. ZetaChain acts as a relayer transferring the messages between blockchains.

- To send a message a user calls a function that executes connector.send(). ZetaChain picks up the message and sends it to the destination chain. The message is then received by a CCM contract passed to the onZetaMessage function.

A good use-case of CCM is an application that needs only to call a contract or send value to an address on a different chain. After the message is received and processed on the destination, the application ideally doesn't have to broadcast anything back to synchronize state for anything, and the sender doesn't care about the results.

Cross-chain messaging works to build a variety of applications and primitives such as:

- Omnichain NFTs that can be sent between different chains, and that don't need to know about the state of the collection on other chains
- “Simple” swap or bridge apps that use liquidity pools on existing chains
- Proving ownership of NFTs or simple action-calls to a different chain


</details>

<details>
<summary>Create a simple cross-chain messaging contract</summary>
<br>
In this tutorial we will create a simple contract that allows sending a message from one chain to another using the [Connector API](https://www.zetachain.com/docs/developers/cross-chain-messaging/connector/).

<h3>Prerequisites</h3>
<br>

- Node.js (version 18 or above)
- Yarn
- Git
  
<h3> Set up your environment </h3>

```git clone https://github.com/zeta-chain/template
cd template
yarn
```

- Create the Contract
To create a new cross-chain messaging contract you will use the messaging Hardhat task available by default in the template.

```npx hardhat messaging CrossChainMessage message:string```

The messaging task accepts one or more arguments: the name of the contract and a list of arguments (optionally with types). The arguments define the contents of the message that will be sent across chains.

In the example above the message will have only one field: message of type string. If the type is not specified it is assumed to be string.

The messaging task has created:

- ```contracts/CrossChainMessage.sol```: a Solidity cross-chain messaging contract
- ```tasks/deploy.ts```: a Hardhat task to deploy the contract on one or more chains
- ```tasks/interact.ts```: a Hardhat task to interact with the contract
- It also modified ```hardhat.config.ts``` to import both deploy and interact tasks.

- Cross-Chain Messaging Contract
Let's review the contents of the CrossChainMessage contract:

```
contracts/CrossChainMessage.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@zetachain/protocol-contracts/contracts/evm/tools/ZetaInteractor.sol";
import "@zetachain/protocol-contracts/contracts/evm/interfaces/ZetaInterfaces.sol";

contract CrossChainMessage is ZetaInteractor, ZetaReceiver {
    error InvalidMessageType();

    event CrossChainMessageEvent(string);
    event CrossChainMessageRevertedEvent(string);

    bytes32 public constant CROSS_CHAIN_MESSAGE_MESSAGE_TYPE =
        keccak256("CROSS_CHAIN_CROSS_CHAIN_MESSAGE");
    ZetaTokenConsumer private immutable _zetaConsumer;
    IERC20 internal immutable _zetaToken;

    constructor(
        address connectorAddress,
        address zetaTokenAddress,
        address zetaConsumerAddress
    ) ZetaInteractor(connectorAddress) {
        _zetaToken = IERC20(zetaTokenAddress);
        _zetaConsumer = ZetaTokenConsumer(zetaConsumerAddress);
    }

    function sendMessage(
        uint256 destinationChainId,
        string memory message
    ) external payable {
        if (!_isValidChainId(destinationChainId))
            revert InvalidDestinationChainId();

        uint256 crossChainGas = 2 * (10 ** 18);
        uint256 zetaValueAndGas = _zetaConsumer.getZetaFromEth{
            value: msg.value
        }(address(this), crossChainGas);
        _zetaToken.approve(address(connector), zetaValueAndGas);

        connector.send(
            ZetaInterfaces.SendInput({
                destinationChainId: destinationChainId,
                destinationAddress: interactorsByChainId[destinationChainId],
                destinationGasLimit: 300000,
                message: abi.encode(CROSS_CHAIN_MESSAGE_MESSAGE_TYPE, message),
                zetaValueAndGas: zetaValueAndGas,
                zetaParams: abi.encode("")
            })
        );
    }

    function onZetaMessage(
        ZetaInterfaces.ZetaMessage calldata zetaMessage
    ) external override isValidMessageCall(zetaMessage) {
        (bytes32 messageType, string memory message) = abi.decode(
            zetaMessage.message,
            (bytes32, string)
        );

        if (messageType != CROSS_CHAIN_MESSAGE_MESSAGE_TYPE)
            revert InvalidMessageType();

        emit CrossChainMessageEvent(message);
    }

    function onZetaRevert(
        ZetaInterfaces.ZetaRevert calldata zetaRevert
    ) external override isValidRevertCall(zetaRevert) {
        (bytes32 messageType, string memory message) = abi.decode(
            zetaRevert.message,
            (bytes32, string)
        );

        if (messageType != CROSS_CHAIN_MESSAGE_MESSAGE_TYPE)
            revert InvalidMessageType();

        emit CrossChainMessageRevertedEvent(message);
    }
}
```
The above contract:

- inherits from ```ZetaInteractor```, which provides two modifiers that are used to validate the message and revert calls: ```isValidMessageCall``` and ```isValidRevertCall.```
- implements ```ZetaReceiver```, which defines two functions: ```onZetaMessage``` and ```onZetaRevert```.
  
<h4>State Variables:</h4>
<br>

- ```CROSS_CHAIN_MESSAGE_MESSAGE_TYPE```: a public constant state variable which defines the message type. If your contract supports more than one message type, it's useful to define a constant for each one.
- ```_zetaConsumer```: a private immutable state variable that stores the address of ZetaTokenConsumer, which is used amond other things for getting ZETA tokens from native tokens to pay for gas when sending a message.
- ```_zetaToken```: an internal immutable state variable that stores the address of the ZETA token contract.
The contract defines two events: ```CrossChainMessageEvent``` emitted when a message is processed on the destination chain and ```CrossChainMessageRevertedEvent``` emitted when a message is reverted on the destination chain.

The constructor passes ```connectorAddress``` to the ```ZetaInteractor``` constructor and initializes both ```_zetaToken``` and ```_zetaConsumer``` state variables.

The ```sendMessage``` function is used to send a message to a recipient contract on the destination chain. It first checks that the destination chain ID is valid. Then it uses ZETA consumer to get the needed amount of ZETA tokens from the provided ```msg.value``` (amount of native gas assets sent with the function call), and approves the ```ZetaConnector``` to spend the ```zetaValueAndGas``` amount of ZETA tokens.

The ```sendMessagev function uses ```connector.send``` to send a crosss-chain message with the following arguments wrapped in a struct:

- ```destinationChainId```: chain ID of the destination chain
- ```destinationAddress```: address of the contract receiving the message on the destination chain (expressed in bytes since it can be non-EVM)
- ```destinationGasLimit```: gas limit for the destination chain's transaction
- ```message```: arbitrary message to be parsed by the receiving contract on the destination chain
- ```zetaValueAndGas```: amount of ZETA tokens to be sent to the destination chain, ZetaChain gas fees, and destination chain gas fees (expressed in ZETA tokens)
```zetaParams```: optional ZetaChain parameters.
- The ```onZetaMessage``` function processes incoming cross-chain messages. The function decodes the message to identify its type and content.

- If the message type matches a predefined constant, the message's reception is logged through the CrossChainMessageEvent. However, if the type is unrecognized, the function reverts to ensure that only specific message types are handled. The function also uses a ```isValidMessageCall``` modifier to verify the message's authenticity, ensuring it comes from a trusted source.

The ```onZetaRevert``` function handles the reversal of cross-chain messages. Taking in a ```ZetaInterfaces.ZetaRevert``` parameter, the function decodes this reverted message to identify its type and content. If the message type aligns with a predefined constant, the function logs the reversal through the ```CrossChainMessageRevertedEvent```. On the other hand, if the type is not recognized, the function reverts the transaction. The function also uses the ```isValidRevertCall``` modifier to ensure that the revert message is genuine and originates from the trusted source.

<h3>Deploy Task</h3>
<br>
The messaging task has created a Hardhat task to deploy the contract.

```tasks/deploy.ts```

```
import { getAddress } from "@zetachain/protocol-contracts";
import { ethers } from "ethers";
import { task, types } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { getSupportedNetworks } from "@zetachain/networks";

const contractName = "CrossChainMessage";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const networks = args.networks.split(",");
  const contracts: { [key: string]: string } = {};
  await Promise.all(
    networks.map(async (networkName: string) => {
      contracts[networkName] = await deployContract(
        hre,
        networkName,
        args.json,
        args.gasLimit
      );
    })
  );

  for (const source in contracts) {
    await setInteractors(hre, source, contracts, args.json, args.gasLimit);
  }

  if (args.json) {
    console.log(JSON.stringify(contracts, null, 2));
  }
};

const initWallet = (hre: HardhatRuntimeEnvironment, networkName: string) => {
  const { url } = hre.config.networks[networkName] as any;
  const provider = new ethers.providers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);

  return wallet;
};

const deployContract = async (
  hre: HardhatRuntimeEnvironment,
  networkName: string,
  json: boolean = false,
  gasLimit: number
) => {
  const wallet = initWallet(hre, networkName);

  const connector = getAddress("connector", networkName as any);
  const zetaToken = getAddress("zetaToken", networkName as any);
  const zetaTokenConsumerUniV2 = getAddress(
    "zetaTokenConsumerUniV2",
    networkName as any
  );
  const zetaTokenConsumerUniV3 = getAddress(
    "zetaTokenConsumerUniV3",
    networkName as any
  );

  const { abi, bytecode } = await hre.artifacts.readArtifact(contractName);
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const contract = await factory.deploy(
    connector,
    zetaToken,
    zetaTokenConsumerUniV2 || zetaTokenConsumerUniV3,
    { gasLimit }
  );

  await contract.deployed();
  if (!json) {
    console.log(`
🚀 Successfully deployed contract on ${networkName}.
📜 Contract address: ${contract.address}`);
  }
  return contract.address;
};

const setInteractors = async (
  hre: HardhatRuntimeEnvironment,
  source: string,
  contracts: { [key: string]: string },
  json: boolean = false,
  gasLimit: number
) => {
  if (!json) {
    console.log(`
🔗 Setting interactors for a contract on ${source}`);
  }
  const wallet = initWallet(hre, source);

  const { abi, bytecode } = await hre.artifacts.readArtifact(contractName);
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const contract = factory.attach(contracts[source]);

  for (const counterparty in contracts) {
    if (counterparty === source) continue;

    const counterpartyContract = hre.ethers.utils.solidityPack(
      ["address"],
      [contracts[counterparty]]
    );
    const chainId = hre.config.networks[counterparty].chainId;
    await (
      await contract.setInteractorByChainId(chainId, counterpartyContract, {
        gasLimit,
      })
    ).wait();
    if (!json) {
      console.log(
        `✅ Interactor address for ${chainId} (${counterparty}) is set to ${counterpartyContract}`
      );
    }
  }
};

task("deploy", "Deploy the contract", main)
  .addParam(
    "networks",
    `Comma separated list of networks to deploy to (e.g. ${getSupportedNetworks(
      "ccm"
    )})`
  )
  .addOptionalParam("gasLimit", "Gas limit", 10000000, types.int)
  .addFlag("json", "Output JSON");
```

To establish cross-chain messaging between blockchains via ZetaChain, you need to deploy contracts capable of sending and receiving cross-chain messages to two or more blockchains connected to ZetaChain.

You can specify the desired chains by using a --networks parameter of the deploy task, which accepts a list of network names separated by commas. For instance, ```--networks goerli_testnet,bsc_testnet```.

The main function maintains a mapping of network names to their corresponding deployed contract addresses, iterating over the networks to deploy the contract on each one.

The contract's constructor requires three arguments: 
- the connector contract's address,
- the ZETA token's address, and
- the ZETA token consumer contract's address.
These addresses are obtained using ZetaChain's ```getAddress```.

The main function subsequently sets interactors for each contract. An interactor is a mapping between a chain ID of the destination and the contract address on that chain.

When deploying to two chains (like Goerli and BSC testnet), you will invoke ```setInteractorByChainId``` on a Goerli contract and pass the BSC testnet chain ID (97) and the BSC testnet contract address. You then perform the same operation on a BSC testnet contract, passing the Goerli chain ID (5) and the Goerli contract address. If deploying to more than two chains, you must call ```setInteractorByChainId``` for each link between the chains.

<h3>Interact Task</h3>
<br>

The messaging task has also created a Hardhat task to interact with the contract:

```tasks/interact.ts```

```https://github.com/zeta-chain/example-contracts/blob/main/messaging/message/tasks/interact.ts```


The task accepts the following arguments:

- ```contract```: address of the contract on the source chain
- ```amount```: amount of native tokens to send with the transaction
- ```destination```: name of the destination chain
- ```message```: message to be sent to the destination chain
  
The main function uses the contract argument to attach to the contract on the source chain. It then uses the destination argument to obtain the destination chain's chain ID. The function subsequently converts the message argument to bytes and sends a transaction to the contract's sendMessage function, passing the destination chain ID and the message.

Finally, the task uses the trackCCTX function from ```@zetachain/toolkit/helpers``` to track the token transfer transaction. The function waits for the transaction to appear on ZetaChain and tracks the status of the transaction. Transaction tracking is optional, but helpful to know when the transaction has been processed by ZetaChain.

<h3>Create an Account</h3>
<br>

To deploy and interact with the contract you will need a wallet with tokens.

- Create a new wallet account:

```npx hardhat account --save```

This command generates a random wallet, prints information about the wallet to the terminal, and saves the private key to a .env file to make it accessible to Hardhat.

- Use the Faucet to Request Tokens
To pay for the transaction fees to deploy and interact with the cross-chain messaging contracts you will need native gas tokens on the connected chains you are deploying contracts to. You can find a list of recommended faucets [here](https://www.zetachain.com/docs/reference/get-testnet-zeta/)

- Check Token Balances
```npx hardhat balances```

- Deploy the Contract
Clear the cache and artifacts, then compile the contract:

```npx hardhat compile --force```

Run the following command to deploy the contract to two networks:

```npx hardhat deploy --networks bsc_testnet,goerli_testnet```

```

🚀 Successfully deployed contract on bsc_testnet
📜 Contract address: 0x6Fd784c16219026Ab0349A1a8A6e99B6eE579C93

🚀 Successfully deployed contract on goerli_testnet.
📜 Contract address: 0xf1907bb130feb28D6e1305C53A4bfdb32140d8E6

🔗 Setting interactors for a contract on bsc_testnet
✅ Interactor address for 5 (goerli_testnet) is set to 0xf1907bb130feb28d6e1305c53a4bfdb32140d8e6

🔗 Setting interactors for a contract on goerli_testnet
✅ Interactor address for 97 (bsc_testnet) is set to 0x6fd784c16219026ab0349a1a8a6e99b6ee579c93
```

- Interact with the Contract
Send a message from BSC testnet to Goerli using the contract address (see the output of the deploy task). Make sure to submit enough native tokens with ```--amount``` to pay for the transaction fees.

```
npx hardhat interact --message hello --network bsc_testnet --destination goerli_testnet --contract 0x6Fd784c16219026Ab0349A1a8A6e99B6eE579C93 --amount 2
```
```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

✅ "sendHelloWorld" transaction has been broadcasted to bsc_testnet
📝 Transaction hash: 0xa3a507d34056f4c00b753e7d0b47b16eb6d35b3c5016efa0323beb274725b1a1
```

After the cross-chain transaction is processed on ZetaChain, look up the contract on the Goerli explorer by the contract address ```(0xf1907bb130feb28D6e1305C53A4bfdb32140d8E6)``` and you should be able to see the emitted ```HelloWorldEvent``` event.

<h3>Source Code</h3>

You can find the source code for the example in this tutorial here:

```https://github.com/zeta-chain/example-contracts/tree/main/messaging/message```

</details>



## Developer resources




