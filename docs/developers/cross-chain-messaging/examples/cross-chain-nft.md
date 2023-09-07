---
sidebar_position: 3
sidebar_label: Cross-Chain NFT
hide_title: true
id: cross-chain-nft
title: Build a Cross-Chain NFT
---

# Build a cross-chain NFT

In this tutorial you will create an NFT collection with cross-chain transfer
capabilities using
[Zeta Connector](/developers/cross-chain-messaging/connector).

![Cross-chain NFT transfer](/img/graphs/cross-chain-nft-transfer.svg)

## Set Up Your Environment

```
git clone https://github.com/zeta-chain/template
```

Install dependencies:

```
cd template
yarn add --dev @openzeppelin/contracts
```

## Create a new contract

To create a new cross-chain messaging contract, use the `messaging` command:

```
npx hardhat messaging CrossChainWarriors token:uint256 sender:address to:address
```

- `token` - NFT ID
- `sender`: address of the sender
- `to`: address of the recipient

Modify the contract to implement NFT logic:

```solidity title="contracts/CrossChainWarriors.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// highlight-start
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
// highlight-end
import "@zetachain/protocol-contracts/contracts/evm/tools/ZetaInteractor.sol";
import "@zetachain/protocol-contracts/contracts/evm/interfaces/ZetaInterfaces.sol";

interface CrossChainWarriorsErrors {
    error InvalidMessageType();
}

contract CrossChainWarriors is
    ZetaInteractor,
    ZetaReceiver,
    CrossChainWarriorsErrors,
    // highlight-next-line
    ERC721("CrossChainWarriors", "CCWAR")
{
    // highlight-next-line
    using Counters for Counters.Counter;
    bytes32 public constant CROSS_CHAIN_WARRIORS_MESSAGE_TYPE =
        keccak256("CROSS_CHAIN_CROSS_CHAIN_WARRIORS");

    event CrossChainWarriorsEvent(uint256, address, address);
    event CrossChainWarriorsRevertedEvent(uint256, address, address);

    ZetaTokenConsumer private immutable _zetaConsumer;
    IERC20 internal immutable _zetaToken;
    // highlight-next-line
    Counters.Counter public tokenIds;

    constructor(
        address connectorAddress,
        address zetaTokenAddress,
        address zetaConsumerAddress,
        bool useEven
    ) ZetaInteractor(connectorAddress) {
        _zetaToken = IERC20(zetaTokenAddress);
        _zetaConsumer = ZetaTokenConsumer(zetaConsumerAddress);

        // highlight-start
        tokenIds.increment();
        if (useEven) tokenIds.increment();
        // highlight-end
    }

    // highlight-start
    function mint(address to) public returns (uint256) {
        uint256 newWarriorId = tokenIds.current();

        tokenIds.increment();
        tokenIds.increment();

        _safeMint(to, newWarriorId);
        return newWarriorId;
    }

    function _mintId(address to, uint256 tokenId) internal {
        _safeMint(to, tokenId);
    }

    function _burnWarrior(uint256 burnedWarriorId) internal {
        _burn(burnedWarriorId);
    }

    // highlight-end

    function sendMessage(
        uint256 destinationChainId,
        uint256 token,
        // remove-next-line
        address sender,
        address to

    ) external payable {
        if (!_isValidChainId(destinationChainId))
            revert InvalidDestinationChainId();

        uint256 crossChainGas = 2 * (10 ** 18);
        uint256 zetaValueAndGas = _zetaConsumer.getZetaFromEth{
            value: msg.value
        }(address(this), crossChainGas);
        _zetaToken.approve(address(connector), zetaValueAndGas);

        // highlight-next-line
        _burnWarrior(token);

        connector.send(
            ZetaInterfaces.SendInput({
                destinationChainId: destinationChainId,
                destinationAddress: interactorsByChainId[destinationChainId],
                destinationGasLimit: 500000,
                message: abi.encode(
                    CROSS_CHAIN_WARRIORS_MESSAGE_TYPE,
                    token,
                    // highlight-next-line
                    msg.sender,
                    to
                ),
                zetaValueAndGas: zetaValueAndGas,
                zetaParams: abi.encode("")
            })
        );
    }

    function onZetaMessage(
        ZetaInterfaces.ZetaMessage calldata zetaMessage
    ) external override isValidMessageCall(zetaMessage) {
        (bytes32 messageType, uint256 token, address sender, address to) = abi
            .decode(zetaMessage.message, (bytes32, uint256, address, address));

        if (messageType != CROSS_CHAIN_WARRIORS_MESSAGE_TYPE)
            revert InvalidMessageType();

        // highlight-next-line
        _mintId(to, token);

        emit CrossChainWarriorsEvent(token, sender, to);
    }

    function onZetaRevert(
        ZetaInterfaces.ZetaRevert calldata zetaRevert
    ) external override isValidRevertCall(zetaRevert) {
        (bytes32 messageType, uint256 token, address sender, address to) = abi
            .decode(zetaRevert.message, (bytes32, uint256, address, address));

        if (messageType != CROSS_CHAIN_WARRIORS_MESSAGE_TYPE)
            revert InvalidMessageType();

        // highlight-next-line
        _mintId(to, token);

        emit CrossChainWarriorsRevertedEvent(token, sender, to);
    }
}
```

Firstly, import the `ERC721` contract from the OpenZeppelin library. This will
enable the contract to adopt the ERC721 NFT standard. Import the `Counters`
utility from the OpenZeppelin library. The `Counters` utility provides a secure
mechanism to increment or decrement a counter.

Next, ensure that the contract also inherits from ERC721 and initializes it with
the name "CrossChainWarriors" and the symbol "CCWAR". You can choose your own
name and symbol.

Introduce a new state variable by leveraging the `Counters.Counter` data
structure. Name this variable `tokenIds`. This state variable will be used to
manage unique IDs for the ERC721 tokens that the contract will mint.

Modify the constructor of the contract to incorporate the changes. It's
important that the `tokenIds` counter is incremented twice when the contract is
deployed. This action guarantees unique IDs for the initial tokens.

Furthermore, incorporate a series of new functions to extend the contract's
functionalities:

- Introduce a `mint(address to)`` function, a public-facing method that allows
  minting a new ERC721 token to a specified address and returns the ID of the
  newly minted token. Remember to increment the tokenIds counter twice within
  this function to ensure unique IDs.
- Add an internal function `_mintId(address to, uint256 tokenId)`. This function
  should be designed to mint a specific ERC721 token with a pre-determined ID to
  a specified address.
- Introduce another internal function `_burnWarrior(uint256 burnedWarriorId)`.
  This function should facilitate the burning (destruction) of a specific ERC721
  token using its provided ID.

Having done that, make necessary modifications to existing functions:

- Amend the `sendMessage(...)` function. As part of its operations, ensure that
  the function burns an ERC721 token using the `_burnWarrior(token)` method.
  This change ties the act of sending a message to burning an ERC721 token.
  Within the `sendMessage` function, you should notice that the address sender
  argument has been removed from the function's signature. Also, ensure that the
  message encoding captures `msg.sender` as part of its structure.
- Update the `onZetaMessage(...)` function. When a Zeta message is received and
  validated, the contract should now mint an ERC721 token to a specified address
  using the `_mintId(to, token)` function.
- Similarly, modify the `onZetaRevert(...)` function. On the reception and
  validation of a Zeta revert message, the contract should mint an ERC721 token
  to a specific address.

After thsese change the `CrossChainWarriors` contract is now able to mint and
burn non-fungible tokens using the ERC721 standard.

## Create a Mint Task

The mint task accepts a contract address as an argument, calls the `mint`
function on it, searches the events for a "Transfer" event and prints out the
token ID.

```ts title="tasks/mint.ts" reference
https://github.com/zeta-chain/example-contracts/blob/feat/import-toolkit/messaging/warriors/tasks/mint.ts
```

```ts title="hardhat.config.ts"
import "./tasks/mint";
```

## Update the Interact Task

Remove the `sender` argument. In the contract we're using the `msg.sender`
value, instead.

```ts title="tasks/interact.ts"
// remove-next-line
const paramSender = hre.ethers.utils.getAddress(args.sender);

const tx = await contract
  .connect(signer)
  // highlight-next-line
  .sendMessage(destination, paramToken, paramTo, {
    value: parseEther(args.amount),
  });

//...

task("interact", "Sends a message from one chain to another.", main)
  .addParam("contract", "Contract address")
  .addParam("amount", "Token amount to send")
  .addParam("destination", "Destination chain")
  .addParam("token", "uint256")
  // remove-next-line
  .addParam("sender", "address")
  .addParam("to", "address");
```

```
npx hardhat transfer --network goerli --contract 0xFeAF74733B6f046F3d609e663F667Ba61B19A148 --address 0x2cD3D070aE1BD365909dD859d29F387AA96911e1 --destination 97 --token 2 --amount 0.4
```

## Update the Deploy Task

Modify the deploy task by adding a new argument `parity` and passing it to the
`deployContract` function. The `parity` argument is used to determine the parity
of NFT IDs on different chains: even IDs on one chain and odd IDs on another.

```ts title="tasks/deploy.ts"
const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const networks = args.networks.split(",");
  // A mapping between network names and deployed contract addresses.
  const contracts: { [key: string]: string } = {};
  await Promise.all(
    // highlight-start
    networks.map(async (networkName: string, i: number) => {
      const parity = i % 2 == 0;
      contracts[networkName] = await deployContract(hre, networkName, parity);
    })
    // highlight-end
  );

  for (const source in contracts) {
    await setInteractors(hre, source, contracts);
  }
};

const deployContract = async (
  hre: HardhatRuntimeEnvironment,
  networkName: string,
  // highlight-next-line
  parity: boolean
) => {
  //...
  const contract = await factory.deploy(
    connector,
    zetaToken,
    zetaTokenConsumerUniV2 || zetaTokenConsumerUniV3,
    // highlight-next-line
    parity
  );
  //...
};
```

## Deploy the Contract

Clear the cache and artifacts, then compile the contract:

```
npx hardhat compile --force
```

Run the following command to deploy the contract to two networks:

```
npx hardhat deploy --networks goerli_testnet,mumbai_testnet
```

```
🚀 Successfully deployed contract on mumbai_testnet.
📜 Contract address: 0xe6663Ea61512630438ADC89dB7fD9aE5Ccb28D7B

🚀 Successfully deployed contract on goerli_testnet.
📜 Contract address: 0x834313e0C221A5507C3fD62d825FD5182b94c68D

🔗 Setting interactors for a contract on mumbai_testnet
✅ Interactor address for 5 (goerli_testnet) is set to 0x834313e0c221a5507c3fd62d825fd5182b94c68d

🔗 Setting interactors for a contract on goerli_testnet
✅ Interactor address for 80001 (mumbai_testnet) is set to 0xe6663ea61512630438adc89db7fd9ae5ccb28d7b
```

## Mint an NFT

```
npx hardhat mint --contract 0xe6663Ea61512630438ADC89dB7fD9aE5Ccb28D7B --network mumbai_testnet
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

✅ "mint" transaction has been broadcasted to mumbai_testnet
📝 Transaction hash: 0x9b0ed3d360aa7d42ed9e5a366caa9a71b3e85f8ed2041cb8572f6ccd60348cda
🌠 Minted NFT ID: 2
```

## Send the NFT to the Destination Chain

```
npx hardhat interact --contract 0xe6663Ea61512630438ADC89dB7fD9aE5Ccb28D7B --network mumbai_testnet --destination goerli_testnet --token 2 --amount 1.5 --to 0x2cD3D070aE1BD365909dD859d29F387AA96911e1
```

```
🔑 Using account: 0x2cD3D070aE1BD365909dD859d29F387AA96911e1

✅ The transaction has been broadcasted to mumbai_testnet
📝 Transaction hash: 0x3814bf4d75009a694435f2a0512be31750491c2d3a4fdee30f695e10392b345f
```

After the transfer transaction is confirmed, you will be able to see the NFT on
the recipient address page on the destination chain.

## Source Code

You can find the source code for the example in this tutorial here:

https://github.com/zeta-chain/example-contracts/tree/main/messaging/warriors
