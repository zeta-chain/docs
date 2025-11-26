# ZetaChain CLI

A command-line interface for building and interacting with
[ZetaChain](https://www.zetachain.com) universal applications. Seamlessly
interact with EVM, Solana, Bitcoin, Sui, and TON, all from one CLI.

## ✨ Features

- Scaffold new ZetaChain universal apps from templates
- Spin up a local multi-chain development environment (EVM, Solana, etc.) in one
  command
- Query cross-chain fees, contracts, balances, cross-chain transaction, tokens,
  and more
- Make cross-chain calls between Solana, Sui, Bitcoin, TON, and universal apps
  on ZetaChain
- Transfer supported tokens across connected chains

## ✅ Prerequisites

- Node.js ≥ 18
- Git (for template cloning)
- (Optional) Docker ≥ 24 for `localnet`

## 🚀 Quick Start

Run without installing:

```bash
npx zetachain@next new
```

Or install globally:

```bash
npm install -g zetachain@latest
```

Use `zetachain@next` for bleeding-edge builds.

## 📘 Examples

Create a new project:

```bash
zetachain new
```

Start localnet:

```bash
zetachain localnet start
```

Query cross-chain balances:

```bash
zetachain query balances
```

## 🤖 MCP Server Installation

The ZetaChain CLI can be used as an MCP (Model Context Protocol) server, allowing AI assistants like Claude Code and Cursor to execute ZetaChain commands.

### Local Installation (Recommended)

Install locally for full access to your filesystem, accounts, and localnet:

```bash
npm install -g zetachain
zetachain mcp install --client claude    # for Claude Code
# or
zetachain mcp install --client cursor    # for Cursor
```

Then restart your AI editor to activate the MCP server.

**Check installation status:**
```bash
zetachain mcp list
```

**Remove:**
```bash
zetachain mcp remove --client claude
```

### Cloud Installation (Smithery)

For quick setup without local installation, visit [Smithery](https://smithery.ai/server/@zeta-chain/cli) and click "One-Click Install".

⚠️ **Note**: The cloud version runs on remote servers and cannot access your local files, accounts, or localnet.

## 🧭 CLI Reference

For full command documentation:

```bash
zetachain docs
```

Or use `--help` with any command:

```bash
zetachain accounts --help
```

## 🤝 Contributing

We welcome contributions! Please open issues or submit pull requests.

## 📚 Learn More

- [ZetaChain Docs](https://www.zetachain.com/docs)
- [CLI Docs](https://www.zetachain.com/docs/reference/cli/)
- [Join Discord](https://discord.gg/zetachain)

## zetachain new

```
Usage: zetachain new [options]

Create a new universal contract project.

Options:
  --verbose                Enable verbose logging
  --output <directory>     Specify custom output directory or name
  --project <projectName>  Specify the example project to use and skip the
                           prompt
  -h, --help               display help for command

```

## zetachain accounts

```
Usage: zetachain accounts [options] [command]

Manages accounts for all connected chains in the ZetaChain CLI. Supports
creating new accounts, importing existing ones, listing all accounts, showing
details, and deleting accounts.

Accounts are stored locally in the CLI's key management system and can be used
across all supported networks.

Options:
  -h, --help        display help for command

Commands:
  create [options]  Create a new account
  delete [options]  Delete an existing account
  import [options]  Import an existing account
  list [options]    List all stored accounts
  show [options]    View details of a specific account

```

## zetachain accounts create

```
Usage: zetachain accounts create [options]

Generates a new account for the specified chain type.

You can name the account for easier identification; if no name is provided, it
defaults to default.

Options:
  --type <type>  Chain type (choices: "evm", "solana", "sui", "bitcoin", "ton")
  --name <name>  Account name (default: "default")
  -h, --help     display help for command

```

## zetachain accounts delete

```
Usage: zetachain accounts delete [options]

Removes an account from the local key store. You must provide both the chain
type and account name.

Options:
  --type <type>  Chain type (choices: "evm", "solana", "sui", "bitcoin", "ton")
  --name <name>  Account name
  -h, --help     display help for command

```

## zetachain accounts import

```
Usage: zetachain accounts import [options]

Adds an account to the local key store using a private key or mnemonic phrase.

You can choose the chain type and give the account a name.

Options:
  --type <type>        Chain type (choices: "evm", "solana", "sui", "bitcoin",
                       "ton")
  --name <name>        Account name (default: "default")
  --private-key <key>  Private key in hex format
  --mnemonic <phrase>  Mnemonic phrase
  -h, --help           display help for command

```

## zetachain accounts list

```
Usage: zetachain accounts list [options]

Display all accounts currently stored locally in the CLI key store

Options:
  --json      Output in JSON format
  -h, --help  display help for command

```

## zetachain accounts show

```
Usage: zetachain accounts show [options]

Show the address, public key, and other details for a specific account. You must
provide the chain type and account name.

Options:
  --type <type>  Chain type (choices: "evm", "solana", "sui", "bitcoin", "ton")
  --name <name>  Account name
  -h, --help     display help for command

```

## zetachain query

```
Usage: zetachain query|q [options] [command]

Provides a set of tools to fetch on-chain data from ZetaChain and its connected
chains.

You can retrieve balances, token information, supported chain details,
cross-chain transaction status, and fee estimates for cross-chain operations.

Options:
  -h, --help          display help for command

Commands:
  balances [options]  Fetch native and ZRC-20 token balances
  cctx [options]      Track the status of a cross-chain transaction.
  contracts           Contract registry commands
  fees                Fees commands
  tokens|t            Work with tokens on ZetaChain
  chains|c            View connected chain information

```

## zetachain query balances

```
Usage: zetachain query balances [options]

Retrieve token balances across connected chains

Options:
  --evm <address>      Address on EVM chains
  --solana <address>   Address on Solana
  --bitcoin <address>  Address on Bitcoin
  --sui <address>      Address on Sui
  --ton <address>      Address on TON
  --name <name>        Account name
  --network <network>  Network to use (choices: "mainnet", "testnet", default:
                       "testnet")
  --json               Output balances as JSON
  --show-zero          Include zero balances in output (default: false)
  -h, --help           display help for command

```

## zetachain query cctx

```
Usage: zetachain query cctx [options]

Queries the real-time status of a cross-chain transaction by its inbound
transaction hash. You can control polling frequency, timeout, and target RPC
endpoint.

Options:
  --hash <hash>       Inbound transaction hash
  -r, --rpc <rpc>     RPC endpoint (default:
                      "https://zetachain-athens.blockpi.network/lcd/v1/public")
  -d, --delay <ms>    Delay between polling rounds in milliseconds (default:
                      "2000")
  -t, --timeout <ms>  Timeout duration in milliseconds (default: indefinite)
                      (default: "0")
  -h, --help          display help for command

```

## zetachain query contracts

```
Usage: zetachain query contracts [options] [command]

Contract registry commands

Options:
  -h, --help        display help for command

Commands:
  list|l [options]  List protocol contracts on all connected chains
  show|s [options]  Show a protocol contract address on a specific chain

```

## zetachain query contracts list

```
Usage: zetachain query contracts list|l [options]

Options:
  --rpc <url>            Custom RPC URL (default:
                         "https://zetachain-athens-evm.blockpi.network/v1/rpc/public")
  --json                 Output contracts as JSON
  --columns <values...>  Additional columns to show (choices: "type", "address",
                         default: ["type","address"])
  -h, --help             display help for command

```

## zetachain query contracts show

```
Usage: zetachain query contracts show|s [options]

Options:
  --rpc <url>               Custom RPC URL (default:
                            "https://zetachain-athens-evm.blockpi.network/v1/rpc/public")
  -c, --chain-id <chainId>  Chain ID
  -t, --type <type>         Contract type
  -h, --help                display help for command

```

## zetachain query fees

```
Usage: zetachain query fees [options] [command]

Fees commands

Options:
  -h, --help      display help for command

Commands:
  list [options]  List withdraw gas fees
  show [options]  Show withdraw gas fee for a target ZRC-20, with optional
                  source conversion

```

## zetachain query fees list

```
Usage: zetachain query fees list [options]

List withdraw gas fees for all ZRC-20 tokens

Options:
  --api <url>          API endpoint URL (default:
                       "https://zetachain-athens.blockpi.network/lcd/v1/public")
  --rpc <url>          RPC endpoint URL (default:
                       "https://zetachain-athens-evm.blockpi.network/v1/rpc/public")
  --gas-limit <limit>  Gas limit for withdraw and call transactions
  --json               Output in JSON format
  -h, --help           display help for command

```

## zetachain query fees show

```
Usage: zetachain query fees show [options]

Show withdraw gas fee for a target ZRC-20, with optional source conversion

Options:
  --target <address>   Target ZRC-20 token address
  --gas-limit <limit>  Optional gas limit to compute withdraw fee with
  --target-chain <id>  Target chain ID to auto-resolve gas token ZRC-20
  --source <address>   Source ZRC-20 token address
  --source-chain <id>  Source chain ID to auto-resolve source ZRC-20
  --rpc <url>          RPC endpoint URL (default:
                       "https://zetachain-athens-evm.blockpi.network/v1/rpc/public")
  --router <address>   UniswapV2 router address (default:
                       "0x2ca7d64A7EFE2D62A725E2B35Cf7230D6677FfEe")
  --api <url>          API endpoint URL (default:
                       "https://zetachain-athens.blockpi.network/lcd/v1/public")
  --json               Output results in JSON format
  -h, --help           display help for command

```

## zetachain query tokens

```
Usage: zetachain query tokens|t [options] [command]

Provides commands to list all available ZRC-20 tokens or view detailed
information about a specific token. Useful for discovering token metadata,
contract addresses, and supported chains.

Options:
  -h, --help        display help for command

Commands:
  list|l [options]  List all ZRC-20 tokens
  show|s [options]  Show details for a ZRC-20 token

```

## zetachain query tokens list

```
Usage: zetachain query tokens list|l [options]

Fetch and display all registered ZRC-20 tokens on ZetaChain

Options:
  --api <url>            API endpoint URL (default:
                         "https://zetachain-athens.blockpi.network/lcd/v1/public")
  --json                 Output in JSON format
  --columns <values...>  Additional columns to display (choices: "asset",
                         "type", "decimals", default: [])
  -h, --help             display help for command

```

## zetachain query tokens show

```
Usage: zetachain query tokens show|s [options]

Display detailed information about a specific ZRC-20 token by symbol; supports
returning a single field for scripting

Options:
  --api <url>           API endpoint URL (default:
                        "https://zetachain-athens.blockpi.network/lcd/v1/public")
  --symbol -s <symbol>  Token symbol (e.g., POL.AMOY, USDC.BSC)
  --field -f <field>    Return only a specific field value. Use 'zrc20' as
                        shorthand for 'zrc20_contract_address'
  --json                Output in JSON format
  -h, --help            display help for command

```

## zetachain query chains

```
Usage: zetachain query chains|c [options] [command]

Provides commands to list all chains connected to ZetaChain or view details
about a specific chain by name or chain ID.

Options:
  -h, --help        display help for command

Commands:
  list|l [options]  List all connected chains
  show|s [options]  Show details for a connected chain

```

## zetachain query chains list

```
Usage: zetachain query chains list|l [options]

Retrieve a list of all supported chains connected to ZetaChain

Options:
  --api <url>  API endpoint URL (default:
               "https://zetachain-athens.blockpi.network/lcd/v1/public")
  --json       Output in JSON format
  -h, --help   display help for command

```

## zetachain query chains show

```
Usage: zetachain query chains show|s [options]

Fetches detailed information about a connected chain by name or chain ID. You
can query both testnet and mainnet endpoints, and optionally return only a
specific field for scripting.

Options:
  --api-testnet <url>        Testnet API endpoint URL (default:
                             "https://zetachain-athens.blockpi.network/lcd/v1/public")
  --api-mainnet <url>        Mainnet API endpoint URL (default:
                             "https://zetachain.blockpi.network/lcd/v1/public")
  --chain-name  <chain>      Chain name
  -c, --chain-id <chain-id>  Chain ID
  --field -f <field>         Return only a specific field value
  --json                     Output in JSON format
  -h, --help                 display help for command

```

## zetachain faucet

```
Usage: zetachain faucet [options]

Request testnet ZETA tokens from the faucet

Options:
  --address <address>  Recipient address.
  --name <name>        Account name to use if address not provided (default:
                       "default")
  -h, --help           display help for command

```

## zetachain zetachain

```
Usage: zetachain zetachain|z [options] [command]

Provides commands to call contracts, withdraw tokens, or withdraw tokens and
call contracts on any connected chain from ZetaChain. Supports both pure
contract calls and calls with asset transfers, with full control over gas
limits, revert handling, and execution parameters.

Options:
  -h, --help                   display help for command

Commands:
  call [options]               Call a contract on a connected chain from
                               ZetaChain
  withdraw [options]           Withdraw tokens from ZetaChain to a connected
                               chain
  withdraw-and-call [options]  Withdraw tokens and call a contract on a
                               connected chain

```

## zetachain zetachain call

```
Usage: zetachain zetachain call [options]

Executes a contract call from ZetaChain to a connected chain without
transferring tokens. You can specify the destination contract, function
signature, parameters, and advanced options like revert handling and gas
settings.

Options:
  --zrc20 <address>                 ZRC-20 token address to pay cross-chain fees
  --receiver <address>              Receiver contract address on the connected
                                    chain (non-hex strings will be encoded)
  --name <name>                     Account name (default: "default")
  --chain-id <chainId>              Chain ID of the destination network
  --private-key <key>               Private key for signing transactions
  --rpc <url>                       ZetaChain RPC URL
  --gateway <address>               Gateway contract address on ZetaChain
  --revert-address <address>        Address to receive tokens if the transaction
                                    reverts (default:
                                    "0x0000000000000000000000000000000000000000")
  --abort-address <address>         Address to receive tokens if transaction is
                                    aborted (default:
                                    "0x0000000000000000000000000000000000000000")
  --call-on-revert                  Call onRevert handler if the transaction
                                    fails (default: false)
  --on-revert-gas-limit <limit>     Gas limit for the revert transaction
                                    (default: "1000000")
  --revert-message <message>        Message to include in the revert call
                                    (default: "0x")
  --tx-options-gas-limit <limit>    Gas limit for the transaction (default:
                                    "1000000")
  --tx-options-gas-price <price>    Gas price for the transaction (default:
                                    "10000000000")
  --call-options-gas-limit <limit>  Gas limit for the contract call on the
                                    connected chain (default: "1000000")
  --call-options-is-arbitrary-call  Call any function (--function is required)
                                    (default: false)
  --yes                             Skip confirmation prompt (default: false)
  --function <function>             Function signature to call (example:
                                    "hello(string)")
  --types <types...>                List of parameter types (e.g. uint256
                                    address)
  --values <values...>              Parameter values for the function call
  --data <data>                     Raw data
  -h, --help                        display help for command

```

## zetachain zetachain withdraw

```
Usage: zetachain zetachain withdraw [options]

Send tokens from ZetaChain to a connected chain without making a contract call.
Specify the receiver address, token amount, and advanced execution options.

Options:
  --zrc20 <address>                 ZRC-20 token address to pay cross-chain fees
  --receiver <address>              Receiver contract address on the connected
                                    chain (non-hex strings will be encoded)
  --name <name>                     Account name (default: "default")
  --chain-id <chainId>              Chain ID of the destination network
  --private-key <key>               Private key for signing transactions
  --rpc <url>                       ZetaChain RPC URL
  --gateway <address>               Gateway contract address on ZetaChain
  --revert-address <address>        Address to receive tokens if the transaction
                                    reverts (default:
                                    "0x0000000000000000000000000000000000000000")
  --abort-address <address>         Address to receive tokens if transaction is
                                    aborted (default:
                                    "0x0000000000000000000000000000000000000000")
  --call-on-revert                  Call onRevert handler if the transaction
                                    fails (default: false)
  --on-revert-gas-limit <limit>     Gas limit for the revert transaction
                                    (default: "1000000")
  --revert-message <message>        Message to include in the revert call
                                    (default: "0x")
  --tx-options-gas-limit <limit>    Gas limit for the transaction (default:
                                    "1000000")
  --tx-options-gas-price <price>    Gas price for the transaction (default:
                                    "10000000000")
  --call-options-gas-limit <limit>  Gas limit for the contract call on the
                                    connected chain (default: "1000000")
  --call-options-is-arbitrary-call  Call any function (--function is required)
                                    (default: false)
  --yes                             Skip confirmation prompt (default: false)
  --amount <amount>                 The amount of tokens to withdraw
  -h, --help                        display help for command

```

## zetachain zetachain withdraw-and-call

```
Usage: zetachain zetachain withdraw-and-call [options]

Combines token withdrawal from ZetaChain with a contract call on the connected
chain in a single transaction. Supports full control over function parameters,
gas settings, and revert handling.

Options:
  --zrc20 <address>                 ZRC-20 token address to pay cross-chain fees
  --receiver <address>              Receiver contract address on the connected
                                    chain (non-hex strings will be encoded)
  --name <name>                     Account name (default: "default")
  --chain-id <chainId>              Chain ID of the destination network
  --private-key <key>               Private key for signing transactions
  --rpc <url>                       ZetaChain RPC URL
  --gateway <address>               Gateway contract address on ZetaChain
  --revert-address <address>        Address to receive tokens if the transaction
                                    reverts (default:
                                    "0x0000000000000000000000000000000000000000")
  --abort-address <address>         Address to receive tokens if transaction is
                                    aborted (default:
                                    "0x0000000000000000000000000000000000000000")
  --call-on-revert                  Call onRevert handler if the transaction
                                    fails (default: false)
  --on-revert-gas-limit <limit>     Gas limit for the revert transaction
                                    (default: "1000000")
  --revert-message <message>        Message to include in the revert call
                                    (default: "0x")
  --tx-options-gas-limit <limit>    Gas limit for the transaction (default:
                                    "1000000")
  --tx-options-gas-price <price>    Gas price for the transaction (default:
                                    "10000000000")
  --call-options-gas-limit <limit>  Gas limit for the contract call on the
                                    connected chain (default: "1000000")
  --call-options-is-arbitrary-call  Call any function (--function is required)
                                    (default: false)
  --yes                             Skip confirmation prompt (default: false)
  --amount <amount>                 The amount of tokens to withdraw
  --function <function>             Function signature to call (example:
                                    "hello(string)")
  --types <types...>                List of parameter types (e.g. uint256
                                    address)
  --values <values...>              Parameter values for the function call
  --data <data>                     Raw data for non-EVM chains like Solana
  -h, --help                        display help for command

```

## zetachain evm

```
Usage: zetachain evm [options] [command]

Interact from EVM chains: call contracts on ZetaChain or deposit tokens (with or
without a call).

Options:
  -h, --help                  display help for command

Commands:
  call [options]              Call a contract on ZetaChain from an
                              EVM-compatible chain
  deposit-and-call [options]  Deposit tokens and call a contract on ZetaChain
                              from an EVM-compatible chain
  deposit [options]           Deposit tokens to ZetaChain from an EVM-compatible
                              chain

```

## zetachain evm call

```
Usage: zetachain evm call [options]

Call a contract on ZetaChain from an EVM-compatible chain

Options:
  --chain-id <chainId>           Chain ID of the network
  --receiver <address>           Receiver address on ZetaChain
  --name <name>                  Account name (default: "default")
  --private-key <key>            Private key for signing transactions
  --rpc <url>                    RPC URL for the source chain
  --gateway <address>            EVM Gateway address
  --revert-address <address>     Address to revert to in case of failure
                                 (default: signer address)
  --abort-address <address>      Address to receive funds if aborted (default:
                                 "0x0000000000000000000000000000000000000000")
  --call-on-revert               Whether to call revert address on failure
                                 (default: false)
  --on-revert-gas-limit <limit>  Gas limit for revert operation (default:
                                 "200000")
  --revert-message <message>     Message to include in revert (default: "")
  --gas-limit <limit>            Gas limit for the transaction
  --gas-price <price>            Gas price for the transaction
  --yes                          Skip confirmation prompt (default: false)
  --types <types...>             List of parameter types (e.g. uint256 address)
  --values <values...>           Parameter values for the function call
  -h, --help                     display help for command

```

## zetachain evm deposit-and-call

```
Usage: zetachain evm deposit-and-call [options]

Deposit tokens and call a contract on ZetaChain from an EVM-compatible chain

Options:
  --chain-id <chainId>           Chain ID of the network
  --receiver <address>           Receiver address on ZetaChain
  --name <name>                  Account name (default: "default")
  --private-key <key>            Private key for signing transactions
  --rpc <url>                    RPC URL for the source chain
  --gateway <address>            EVM Gateway address
  --revert-address <address>     Address to revert to in case of failure
                                 (default: signer address)
  --abort-address <address>      Address to receive funds if aborted (default:
                                 "0x0000000000000000000000000000000000000000")
  --call-on-revert               Whether to call revert address on failure
                                 (default: false)
  --on-revert-gas-limit <limit>  Gas limit for revert operation (default:
                                 "200000")
  --revert-message <message>     Message to include in revert (default: "")
  --gas-limit <limit>            Gas limit for the transaction
  --gas-price <price>            Gas price for the transaction
  --yes                          Skip confirmation prompt (default: false)
  --amount <amount>              Amount of tokens to deposit
  --erc20 <address>              ERC20 token address (optional for native token
                                 deposits)
  --types <types...>             List of parameter types (e.g. uint256 address)
  --values <values...>           Parameter values for the function call
  -h, --help                     display help for command

```

## zetachain evm deposit

```
Usage: zetachain evm deposit [options]

Deposit tokens to ZetaChain from an EVM-compatible chain

Options:
  --chain-id <chainId>           Chain ID of the network
  --receiver <address>           Receiver address on ZetaChain
  --name <name>                  Account name (default: "default")
  --private-key <key>            Private key for signing transactions
  --rpc <url>                    RPC URL for the source chain
  --gateway <address>            EVM Gateway address
  --revert-address <address>     Address to revert to in case of failure
                                 (default: signer address)
  --abort-address <address>      Address to receive funds if aborted (default:
                                 "0x0000000000000000000000000000000000000000")
  --call-on-revert               Whether to call revert address on failure
                                 (default: false)
  --on-revert-gas-limit <limit>  Gas limit for revert operation (default:
                                 "200000")
  --revert-message <message>     Message to include in revert (default: "")
  --gas-limit <limit>            Gas limit for the transaction
  --gas-price <price>            Gas price for the transaction
  --yes                          Skip confirmation prompt (default: false)
  --amount <amount>              Amount of tokens to deposit
  --erc20 <address>              ERC20 token address (optional for native token
                                 deposits)
  -h, --help                     display help for command

```

## zetachain solana

```
Usage: zetachain solana [options] [command]

Interact from Solana: call contracts on ZetaChain or deposit tokens (with or
without a call).

Options:
  -h, --help                  display help for command

Commands:
  call [options]              Call a contract on ZetaChain from Solana
  deposit-and-call [options]  Deposit tokens from Solana and call a contract on
                              ZetaChain
  deposit [options]           Deposit tokens from Solana
  encode [options]            Encode payload data for Solana

```

## zetachain solana call

```
Usage: zetachain solana call [options]

Call a universal contract on ZetaChain from Solana

Options:
  --receiver <receiver>                     EOA or contract address on ZetaChain
  --mnemonic <mnemonic>                     Mnemonic
  --name <name>                             Name of the wallet (default: "default")
  --private-key <privateKey>                Private key in base58 or hex format (with optional 0x prefix)
  --chain-id <chainId>                      Chain ID of the network
  --revert-address <revertAddress>          Revert address
  --abort-address <abortAddress>            Abort address (default: "0x0000000000000000000000000000000000000000")
  --call-on-revert                          Call on revert (default: false)
  --revert-message <revertMessage>          Revert message (default: "")
  --on-revert-gas-limit <onRevertGasLimit>  On revert gas limit (default: "0")
  --types <types...>                        List of parameter types (e.g. uint256 address)
  --values <values...>                      Parameter values for the function call
  -h, --help                                display help for command

```

## zetachain solana deposit-and-call

```
Usage: zetachain solana deposit-and-call [options]

Deposit tokens from Solana and call a universal contract on ZetaChain

Options:
  --receiver <receiver>                     EOA or contract address on ZetaChain
  --mnemonic <mnemonic>                     Mnemonic
  --name <name>                             Name of the wallet (default: "default")
  --private-key <privateKey>                Private key in base58 or hex format (with optional 0x prefix)
  --chain-id <chainId>                      Chain ID of the network
  --revert-address <revertAddress>          Revert address
  --abort-address <abortAddress>            Abort address (default: "0x0000000000000000000000000000000000000000")
  --call-on-revert                          Call on revert (default: false)
  --revert-message <revertMessage>          Revert message (default: "")
  --on-revert-gas-limit <onRevertGasLimit>  On revert gas limit (default: "0")
  --amount <amount>                         Amount of tokens to deposit
  --token-program <tokenProgram>            Token program (default: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
  --types <types...>                        List of parameter types (e.g. uint256 address)
  --values <values...>                      Parameter values for the function call
  --mint <mint>                             SPL token mint address
  -h, --help                                display help for command

```

## zetachain solana deposit

```
Usage: zetachain solana deposit [options]

Options:
  --receiver <receiver>                     EOA or contract address on ZetaChain
  --mnemonic <mnemonic>                     Mnemonic
  --name <name>                             Name of the wallet (default: "default")
  --private-key <privateKey>                Private key in base58 or hex format (with optional 0x prefix)
  --chain-id <chainId>                      Chain ID of the network
  --revert-address <revertAddress>          Revert address
  --abort-address <abortAddress>            Abort address (default: "0x0000000000000000000000000000000000000000")
  --call-on-revert                          Call on revert (default: false)
  --revert-message <revertMessage>          Revert message (default: "")
  --on-revert-gas-limit <onRevertGasLimit>  On revert gas limit (default: "0")
  --amount <amount>                         Amount of tokens to deposit
  --token-program <tokenProgram>            Token program (default: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
  --mint <mint>                             SPL token mint address
  -h, --help                                display help for command

```

## zetachain solana encode

```
Usage: zetachain solana encode [options]

Options:
  --connected <address>     Connected program address
  --data <data>             Data to encode
  --gateway <address>       Gateway program address
  --mint <address>          Mint address for SPL token operations
  --accounts <accounts...>  Additional accounts in format 'address:isWritable'
  -h, --help                display help for command

```

## zetachain sui

```
Usage: zetachain sui [options] [command]

Interact from Sui: deposit tokens to ZetaChain or deposit and call contracts

Options:
  -h, --help                  display help for command

Commands:
  deposit-and-call [options]  Deposit tokens from Sui and call a contract on
                              ZetaChain
  deposit [options]           Deposit tokens from Sui
  encode [options]            Encode payload data for SUI

```

## zetachain sui deposit-and-call

```
Usage: zetachain sui deposit-and-call [options]

Options:
  --mnemonic <mnemonic>               Mnemonic for the account
  --private-key <privateKey>          Private key for the account
  --gateway-object <gatewayObject>    Gateway object ID
  --gateway-package <gatewayPackage>  Gateway package ID
  --receiver <receiver>               Receiver address on ZetaChain
  --amount <amount>                   Amount to deposit in decimal format
  --chain-id <chainId>                Chain ID
  --coin-type <coinType>              Coin type to deposit (default:
                                      "0x2::sui::SUI")
  --gas-budget <gasBudget>            Gas budget in MIST (default: "10000000")
  --name <name>                       Account name (default: "default")
  --decimals <number>                 Number of decimals for the coin type
                                      (default: "9")
  --values <values...>                Parameter values for the function call
  --types <types...>                  List of parameter types (e.g. uint256
                                      address)
  -h, --help                          display help for command

```

## zetachain sui deposit

```
Usage: zetachain sui deposit [options]

Options:
  --mnemonic <mnemonic>               Mnemonic for the account
  --private-key <privateKey>          Private key for the account
  --gateway-object <gatewayObject>    Gateway object ID
  --gateway-package <gatewayPackage>  Gateway package ID
  --receiver <receiver>               Receiver address on ZetaChain
  --amount <amount>                   Amount to deposit in decimal format
  --chain-id <chainId>                Chain ID
  --coin-type <coinType>              Coin type to deposit (default:
                                      "0x2::sui::SUI")
  --gas-budget <gasBudget>            Gas budget in MIST (default: "10000000")
  --name <name>                       Account name (default: "default")
  --decimals <number>                 Number of decimals for the coin type
                                      (default: "9")
  -h, --help                          display help for command

```

## zetachain sui encode

```
Usage: zetachain sui encode [options]

Options:
  --data <data>                        Data to encode
  --type-arguments <typeArguments...>  Type arguments for the encoding
  --objects <objects...>               Objects to include in the encoding
                                       (comma-separated)
  -h, --help                           display help for command

```

## zetachain ton

```
Usage: zetachain ton [options] [command]

Interact from TON: deposit TON to ZetaChain or deposit and call contracts

Options:
  -h, --help                  display help for command

Commands:
  deposit-and-call [options]  Deposit TON and call a contract on ZetaChain
  deposit [options]           Deposit tokens from TON

```

## zetachain ton deposit-and-call

```
Usage: zetachain ton deposit-and-call [options]

Deposit TON and call a universal contract on ZetaChain

Options:
  --mnemonic <mnemonic>  Mnemonic for the account
  --name <name>          Name of the account (default: "default")
  --gateway <gateway>    Gateway contract address (default: testnet)
  --receiver <receiver>  Receiver address
  --rpc <rpc>            RPC endpoint (default: testnet) (default:
                         "https://testnet.toncenter.com/api/v2/jsonRPC")
  --api-key <apiKey>     API key
  --chain-id <chainId>   Chain ID
  --amount <amount>      Amount in TON
  --types <types...>     ABI types
  --values <values...>   Values corresponding to types
  --data <data>          Data to call the contract with
  -h, --help             display help for command

```

## zetachain ton deposit

```
Usage: zetachain ton deposit [options]

Deposit tokens to an EOA or a contract on ZetaChain

Options:
  --mnemonic <mnemonic>  Mnemonic for the account
  --name <name>          Name of the account (default: "default")
  --gateway <gateway>    Gateway contract address (default: testnet)
  --receiver <receiver>  Receiver address
  --rpc <rpc>            RPC endpoint (default: testnet) (default:
                         "https://testnet.toncenter.com/api/v2/jsonRPC")
  --api-key <apiKey>     API key
  --chain-id <chainId>   Chain ID
  --amount <amount>      Amount in TON
  -h, --help             display help for command

```

## zetachain bitcoin

```
Usage: zetachain bitcoin|b [options] [command]

Work with Bitcoin to deposit BTC to ZetaChain or call contracts using
inscriptions or OP_RETURN memo.

Options:
  -h, --help     display help for command

Commands:
  inscription|i  Make a transaction using inscriptions
  memo|m         Make a transaction using a memo (OP_RETURN)

```

## zetachain bitcoin inscription

```
Usage: zetachain bitcoin inscription|i [options] [command]

Use Bitcoin inscriptions to deposit BTC to ZetaChain or call contracts

Options:
  -h, --help                  display help for command

Commands:
  call [options]              Call a contract on ZetaChain
  deposit-and-call [options]  Deposit BTC and call a contract on ZetaChain
  deposit [options]           Deposit BTC to ZetaChain
  encode [options]            Encode data for Bitcoin transactions using ABI
                              encoding

```

## zetachain bitcoin inscription call

```
Usage: zetachain bitcoin inscription call [options]

Options:
  --yes                       Skip confirmation prompt (default: false)
  -r, --receiver <address>    ZetaChain receiver address
  --commit-fee <fee>          Commit fee (in sats) (default: "15000")
  -g, --gateway <address>     Bitcoin gateway (TSS) address (default:
                              "tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur")
  --private-key <key>         Bitcoin private key
  --name <name>               Account name (default: "default")
  --revert-address <address>  Revert address
  --abort-address <address>   Abort address
  --revert-message <message>  Revert message
  --network <network>         Network (choices: "signet", "mainnet", default:
                              "signet")
  --format <format>           Encoding format (choices: "ABI", "CompactLong",
                              "CompactShort", default: "ABI")
  --data <data>               Pass raw data
  --bitcoin-api <url>         Bitcoin API (default:
                              "https://mempool.space/signet/api")
  --gas-price-api <url>       ZetaChain API (default:
                              "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/crosschain/gasPrice/18333")
  -t, --types <types...>      ABI types
  -v, --values <values...>    Values corresponding to types
  -h, --help                  display help for command

```

## zetachain bitcoin inscription deposit-and-call

```
Usage: zetachain bitcoin inscription deposit-and-call [options]

Options:
  --yes                       Skip confirmation prompt (default: false)
  -r, --receiver <address>    ZetaChain receiver address
  --commit-fee <fee>          Commit fee (in sats) (default: "15000")
  -g, --gateway <address>     Bitcoin gateway (TSS) address (default:
                              "tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur")
  --private-key <key>         Bitcoin private key
  --name <name>               Account name (default: "default")
  --revert-address <address>  Revert address
  --abort-address <address>   Abort address
  --revert-message <message>  Revert message
  --network <network>         Network (choices: "signet", "mainnet", default:
                              "signet")
  --format <format>           Encoding format (choices: "ABI", "CompactLong",
                              "CompactShort", default: "ABI")
  --data <data>               Pass raw data
  --bitcoin-api <url>         Bitcoin API (default:
                              "https://mempool.space/signet/api")
  --gas-price-api <url>       ZetaChain API (default:
                              "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/crosschain/gasPrice/18333")
  -t, --types <types...>      ABI types
  -v, --values <values...>    Values corresponding to types
  -a, --amount <btcAmount>    BTC amount to send (in BTC)
  -h, --help                  display help for command

```

## zetachain bitcoin inscription deposit

```
Usage: zetachain bitcoin inscription deposit [options]

Options:
  --yes                       Skip confirmation prompt (default: false)
  -r, --receiver <address>    ZetaChain receiver address
  --commit-fee <fee>          Commit fee (in sats) (default: "15000")
  -g, --gateway <address>     Bitcoin gateway (TSS) address (default:
                              "tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur")
  --private-key <key>         Bitcoin private key
  --name <name>               Account name (default: "default")
  --revert-address <address>  Revert address
  --abort-address <address>   Abort address
  --revert-message <message>  Revert message
  --network <network>         Network (choices: "signet", "mainnet", default:
                              "signet")
  --format <format>           Encoding format (choices: "ABI", "CompactLong",
                              "CompactShort", default: "ABI")
  --data <data>               Pass raw data
  --bitcoin-api <url>         Bitcoin API (default:
                              "https://mempool.space/signet/api")
  --gas-price-api <url>       ZetaChain API (default:
                              "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/crosschain/gasPrice/18333")
  -a, --amount <btcAmount>    BTC amount to send (in BTC)
  -h, --help                  display help for command

```

## zetachain bitcoin inscription encode

```
Usage: zetachain bitcoin inscription encode [options]

Options:
  -r, --receiver <address>        Receiver address
  -t, --types <types...>          ABI types (e.g. string uint256) (default: [])
  -v, --values <values...>        Values corresponding to types (default: [])
  -a, --revert-address <address>  Bitcoin revert address
  -o, --op-code <code>            Operation code (choices: "Call", "Deposit",
                                  "DepositAndCall", "Invalid", default:
                                  "DepositAndCall")
  -f, --format <format>           Encoding format (choices: "ABI",
                                  "CompactLong", "CompactShort", default: "ABI")
  -h, --help                      display help for command

```

## zetachain bitcoin memo

```
Usage: zetachain bitcoin memo|m [options] [command]

Use OP_RETURN memo to deposit BTC to ZetaChain or call contracts

Options:
  -h, --help                  display help for command

Commands:
  call [options]              Call a contract on ZetaChain
  deposit-and-call [options]  Deposit BTC and call a contract on ZetaChain
  deposit [options]           Deposit BTC to ZetaChain

```

## zetachain bitcoin memo call

```
Usage: zetachain bitcoin memo call [options]

Options:
  --yes                     Skip confirmation prompt (default: false)
  -r, --receiver <address>  ZetaChain receiver address
  --commit-fee <fee>        Commit fee (in sats) (default: "15000")
  -g, --gateway <address>   Bitcoin gateway (TSS) address (default:
                            "tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur")
  --private-key <key>       Bitcoin private key
  --name <name>             Account name (default: "default")
  -d, --data <data>         Pass raw data
  --network-fee <fee>       Network fee (in sats) (default: "1750")
  --network <network>       Network (choices: "signet", "mainnet", default:
                            "signet")
  --bitcoin-api <url>       Bitcoin API (default:
                            "https://mempool.space/signet/api")
  --gas-price-api <url>     ZetaChain API (default:
                            "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/crosschain/gasPrice/18333")
  -h, --help                display help for command

```

## zetachain bitcoin memo deposit-and-call

```
Usage: zetachain bitcoin memo deposit-and-call [options]

Options:
  --yes                     Skip confirmation prompt (default: false)
  -r, --receiver <address>  ZetaChain receiver address
  --commit-fee <fee>        Commit fee (in sats) (default: "15000")
  -g, --gateway <address>   Bitcoin gateway (TSS) address (default:
                            "tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur")
  --private-key <key>       Bitcoin private key
  --name <name>             Account name (default: "default")
  -d, --data <data>         Pass raw data
  --network-fee <fee>       Network fee (in sats) (default: "1750")
  --network <network>       Network (choices: "signet", "mainnet", default:
                            "signet")
  --bitcoin-api <url>       Bitcoin API (default:
                            "https://mempool.space/signet/api")
  --gas-price-api <url>     ZetaChain API (default:
                            "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/crosschain/gasPrice/18333")
  -a, --amount <btcAmount>  BTC amount to send (in BTC)
  -h, --help                display help for command

```

## zetachain bitcoin memo deposit

```
Usage: zetachain bitcoin memo deposit [options]

Options:
  --yes                     Skip confirmation prompt (default: false)
  -r, --receiver <address>  ZetaChain receiver address
  --commit-fee <fee>        Commit fee (in sats) (default: "15000")
  -g, --gateway <address>   Bitcoin gateway (TSS) address (default:
                            "tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur")
  --private-key <key>       Bitcoin private key
  --name <name>             Account name (default: "default")
  -d, --data <data>         Pass raw data
  --network-fee <fee>       Network fee (in sats) (default: "1750")
  --network <network>       Network (choices: "signet", "mainnet", default:
                            "signet")
  --bitcoin-api <url>       Bitcoin API (default:
                            "https://mempool.space/signet/api")
  --gas-price-api <url>     ZetaChain API (default:
                            "https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/crosschain/gasPrice/18333")
  -a, --amount <btcAmount>  BTC amount to send (in BTC)
  -h, --help                display help for command

```

## zetachain localnet

```
Usage: zetachain localnet [options] [command]

Local development environment

Options:
  -h, --help       display help for command

Commands:
  start [options]  Start localnet
  stop             Stop localnet
  check [options]  Check if localnet is running
  ton              TON commands

```

## zetachain localnet start

```
Usage: zetachain localnet start [options]

Start localnet

Options:
  -p, --port <number>      Port to run anvil on (default: "8545")
  -a, --anvil <string>     Additional arguments to pass to anvil (default: "-q")
  -f, --force-kill         Force kill any process on the port without prompting
                           (default: false)
  -s, --stop-after-init    Stop the localnet after successful initialization
                           (default: false)
  -e, --exit-on-error      Exit with an error if a call is reverted (default:
                           false)
  -v, --verbosity <level>  Logger verbosity level (choices: "emerg", "alert",
                           "crit", "error", "warning", "notice", "info",
                           "debug", default: "info")
  --chains [chains...]     Chains to launch when starting localnet (choices:
                           "ton", "solana", "sui", default: [])
  -h, --help               display help for command

```

## zetachain localnet stop

```
Usage: zetachain localnet stop [options]

Stop localnet

Options:
  -h, --help  display help for command

```

## zetachain localnet check

```
Usage: zetachain localnet check [options]

Check if localnet is running

Options:
  -d, --delay <number>  Seconds to wait before checking localnet (default: "3")
  -h, --help            display help for command

```

## zetachain localnet ton

```
Usage: zetachain localnet ton [options] [command]

TON commands

Options:
  -h, --help          display help for command

Commands:
  balance [options]   Show balance by address
  faucet [options]    Request TON from faucet
  wallet [options]    Create & fund a wallet
  withdraw [options]  Withdraw TON from gateway
  help [command]      display help for command

```

## zetachain localnet ton balance

```
Usage: zetachain localnet ton balance [options]

Show balance by address

Options:
  -a, --address <address>  Address
  -h, --help               display help for command

```

## zetachain localnet ton faucet

```
Usage: zetachain localnet ton faucet [options]

Request TON from faucet

Options:
  -a, --address <address>  Address
  -m, --amount <amount>    Amount in TON (default: "100")
  -h, --help               display help for command

```

## zetachain localnet ton wallet

```
Usage: zetachain localnet ton wallet [options]

Create & fund a wallet

Options:
  -m, --amount <amount>  Amount to topup in TON (default: "100")
  -h, --help             display help for command

```

## zetachain localnet ton withdraw

```
Usage: zetachain localnet ton withdraw [options]

Withdraw TON from gateway

Options:
  -a, --address <address>  Recipient
  -m, --amount <amount>    Amount in TON (default: "1")
  -k, --private-key <key>  Sender's private key on Zeta
  -g, --gateway <gateway>  Gateway address on ZEVM
  -t, --token <token>      TON.TON token address on ZEVM
  -p, --port <port>        Anvil port (default: "8545")
  -h, --help               display help for command

```

## zetachain mcp

```
Usage: zetachain mcp [options] [command]

MCP server management commands

Options:
  -h, --help         display help for command

Commands:
  install [options]  Install ZetaChain MCP server for your AI editor
  remove [options]   Remove ZetaChain MCP server from your AI editor (removes
                     from all projects if applicable)
  list               List MCP server installation status for all supported
                     clients

```

## zetachain mcp install

```
Usage: zetachain mcp install [options]

Install ZetaChain MCP server for your AI editor

Options:
  -c, --client <name>  AI client to install for (choices: "claude", "cursor")
  -h, --help           display help for command

```

## zetachain mcp remove

```
Usage: zetachain mcp remove [options]

Remove ZetaChain MCP server from your AI editor (removes from all projects if
applicable)

Options:
  -c, --client <name>  AI client to remove from (choices: "claude", "cursor")
  -h, --help           display help for command

```

## zetachain mcp list

```
Usage: zetachain mcp list [options]

List MCP server installation status for all supported clients

Options:
  -h, --help  display help for command

```

## zetachain docs

```
Usage: zetachain docs [options]

Display help information for all available commands and their subcommands

Options:
  --json      Output documentation as JSON (tools schema)
  -h, --help  display help for command

```

## zetachain ask

```
Usage: zetachain ask [options] [prompt...]

Chat with ZetaChain Docs AI

Arguments:
  prompt      Prompt to send to AI

Options:
  -h, --help  display help for command

```
