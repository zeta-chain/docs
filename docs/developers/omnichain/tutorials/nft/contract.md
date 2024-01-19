# NFT Smart Contract

## Overview

In this tutorial you will learn how to create an NFT omnichain smart contract
that mints NFTs on ZetaChain in response to token deposits on connected chains.

A user deposits a native gas token on one of the connected chains by sending it
to the TSS address. This triggers an omnichain contract call on ZetaChain, and
`onCrossChainCall` is called. The contract then mints an NFT with an `amount`
property equal to the amount of tokens deposited, and a `chain` property equal
to the chain ID of the chain that the deposit was made on. The NFT is sent to
the user address on ZetaChain.

A user may then send the NFT to another address on ZetaChain (as it is a regular
ERC-721) or burn it.

When an NFT is burned, the `amount` of tokens that it represents is withdrawn to
a recipient (specified by the user when burning the NFT) on the `chain` from
which the NFT was minted.

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

## Create the contract

Run the following command to create a new omnichain contract called `NFT`.

```
npx hardhat omnichain NFT recipient:address
```

## Omnichain Contract

```solidity title="contracts/NFT.sol"
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";
// highlight-start
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@zetachain/toolkit/contracts/BytesHelperLib.sol";
// highlight-end

// highlight-next-line
contract NFT is zContract, ERC721 {
    SystemContract public immutable systemContract;
    // highlight-next-line
    uint256 constant BITCOIN = 18332;

    // highlight-start
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    mapping(uint256 => uint256) public tokenAmounts;
    mapping(uint256 => uint256) public tokenChains;

    constructor(address systemContractAddress) ERC721("MyNFT", "MNFT") {
    // highlight-end
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
    ) external override onlySystem {
        // highlight-start
        address recipient;

        if (context.chainID == BITCOIN) {
            recipient = BytesHelperLib.bytesToAddress(message, 0);
        } else {
            recipient = abi.decode(message, (address));
        }

        _mintNFT(recipient, context.chainID, amount);
        // highlight-end
    }
}
```

Import OpenZeppelin's ERC-721 implementation and the `Counters` library. You
will use the `Counters` library to keep track of the token IDs. You will also
import the `BytesHelperLib` from the ZetaChain toolkit. This library will be
used for decoding data sent from other chains.

The `NFT` contract inherits from `zContract` and `ERC721`. The `zContract`
interface is required for omnichain contracts and the `ERC721` interface is
required for NFTs.

Create a new `BITCOIN` constant that is set to the chain ID of the Bitcoin
testnet.

Create two mappings: `tokenAmounts` that maps token IDs to the amount of tokens
that the NFT represents and `tokenChains` that maps token IDs to the chain ID of
the chain that the NFT was minted on.

Create a `systemContract` variable that is set to the address of the
`SystemContract` contract.

Modify the constructor to call the `ERC721` constructor with the name and symbol
of the NFT.

Let's now take a look at the `onCrossChainCall` function. This function is
called when a user deposits tokens from a connected chain.

The only value that will be passed in the `message` parameter is the recipient
address.

For Bitcoin this is important, because NFTs are minted on ZetaChain, which uses
hex addresses, but the `context.origin` contains a bech32 Bitcoin address. Since
we cannot derive the hex address from the bech32 address, we pass the hex
address as a parameter in the `message` parameter.

For EVM chains, passing the recipient address in the `message` parameter is not
strictly necessary, because the `context.origin` contains the hex address of the
sender, but we will do it anyway for consistency. And it allows users to specify
a different recipient address than the sender address.

In the `onCrossChainCall` function, decode the `message` parameter to get the
recipient address. Then call the `_mintNFT` function to mint the NFT.

## Minting

Create a new `_mintNFT` function that takes a `recipient` address, a `chainId`,
and an `amount` as parameters. This function is private, because it is only
called from the `onCrossChainCall` function.

```solidity title="contracts/NFT.sol"
    function _mintNFT(
        address recipient,
        uint256 chainId,
        uint256 amount
    ) private {
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(recipient, tokenId);
        tokenChains[tokenId] = chainId;
        tokenAmounts[tokenId] = amount;
        _tokenIdCounter.increment();
    }
```

The function mints a new NFT and stores the `chainId` and `amount` in the
`tokenChains` and `tokenAmounts` mappings. It then increments the token ID
counter.

## Burning

Create a new `burn` function that takes a `tokenId` and a `recipient` address as
parameters. This function is public, because it is called by the user when they
want to burn an NFT and withdraw the tokens that it represents.

```solidity title="contracts/NFT.sol"
    function burnNFT(uint256 tokenId, bytes memory recipient) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "Caller is not owner nor approved"
        );
        address zrc20 = systemContract.gasCoinZRC20ByChainId(
            tokenChains[tokenId]
        );

        (, uint256 gasFee) = IZRC20(zrc20).withdrawGasFee();

        IZRC20(zrc20).approve(zrc20, gasFee);
        IZRC20(zrc20).withdraw(recipient, tokenAmounts[tokenId] - gasFee);

        _burn(tokenId);
        delete tokenAmounts[tokenId];
        delete tokenChains[tokenId];
    }
```

The function first checks that the caller is the owner of the NFT. It then
retrieves the gas token ZRC-20 address for the chain that the NFT was minted on.
It then withdraws the tokens that the NFT represents to the `recipient` address.
The amount of tokens that the NFT represents minus the gas fee is withdrawn.
