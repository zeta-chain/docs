# Intro to Zetachain


## Introduction

<details>
<summary>What is ZetaChain?</summary>
<br>
ZetaChain is the foundational, chain-agnostic backbone of the decentralized internet. It acts as a convergence point for various blockchains, including Ethereum and Bitcoin. ZetaChain enables omnichain functionality, supporting generic smart contracts and seamless messaging between different blockchains. By addressing the challenges of cross-chain interactions, it opens up the crypto and global financial ecosystem to a broader audience. ZetaChain envisions a fluid, multi-chain crypto ecosystem where users and developers can easily navigate and leverage the unique advantages of different blockchains for payments, DeFi, gaming, art, and more.
At its core, ZetaChain is a public omnichain blockchain that supports real, native cross-blockchain transactions with a complete toolkit for cross-chain messaging and general Omnichain Smart Contracts.
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
</details>


<details>
<summary>What is ZETA token?</summary>
<br>
ZetaChain's coin, ZETA, serves multiple purposes within the ZetaChain ecosystem.
  
- ZETA is used as gas for ZetaChain’s omnichain smart contracts layer and internal transactions. With transactions like EIP 1559, some ZETA is burned over time.

- ZETA is used in core pools that the protocol uses to exchange for external ZRC-20 gas assets to pay for and write outbound transactions to external chains. ZRC-20 is a token standard integrated into ZetaChain's omnichain smart contract platform. At a high-level, ZRC-20 tokens are an extension of the standard ERC-20 tokens found in the Ethereum ecosystem, ZRC-20 tokens have the added ability to manage assets on all ZetaChain-connected chains. 

- ZETA is used as a cross-chain intermediary asset through messaging. When a cross-chain message is sent, a dApp/user attaches ZETA in his message to represent value and to pay for all gas and transaction fees in a single bundle. ZETA is also exchanged on the core pools to pay for outbound gas.
  
- Users can conveniently pay for ZetaChain's cross-chain service and gas fees on the destination chain using ZETA in a single step or bundle.
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
- Overview
- Create a simple omnichain contract
  
## Using Cross-chain messaging contracts
- Overview
- Create a simple cross-chain messaging contract

## Developer resources




