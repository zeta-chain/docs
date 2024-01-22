# Frontend dApp

## Overview

In this section, you will create a frontend dApp that allows users to deposit
native tokens on connected chains to mint NFTs on ZetaChain, view their
collection, burn NFTs to withdraw native tokens from ZetaChain and transfer NFTs
to other addresses on ZetaChain.

This UI is built as part of
[the example frontend project](https://github.com/zeta-chain/example-frontend),
but you can replicate it in your own project.

![Frontend dApp](/img/docs/nft.png)

## Prerequisites

- Complete the
  [NFT Omnichain Contract](/developers/omnichain/tutorials/nft/contract)
  tutorial. Make sure that you've configured Goldsky to index events from your
  contract.

## Page Layout

The entry point of the frontend dApp is the `NFTPage` component. It is
responsible for rendering the page layout and the widgets that trigger
broadcasting of transactions.

The `NFTPage` component uses the `useNFT` hook to access the state of the
frontend dApp. The `useNFT` hook is responsible for managing the state of the
frontend dApp and for broadcasting transactions.

On component load the `NFTPage` component calls the `fetchNFTs` function to
fetch the NFTs owned by the connected address.

```tsx reference
https://github.com/zeta-chain/example-frontend/blob/nft/app/nft/page.tsx
```

## useNFT Hook

`useNFT` is a simple component that stores the state of the frontend dApp.

```tsx reference
https://github.com/zeta-chain/example-frontend/blob/nft/app/nft/useNFT.tsx
```

## Fetching NFTs

The hook is responsible for fetching NFTs owned by the connected address.

Set the constant to store the URL of the subgraph that you deployed in the
previous section.

Goldsky is a subgraph indexer that uses GraphQL to query events from your
contract. Write a query that fetches all `Transfer` events. You're interested in
transfers that were sent to or from a specific address. In the bory of the query
specify the fields your're interested in.

The function to fetch NFT makes a GraphQL request to the subgraph to fetch the
`transfer` events. The function then filters the events to find the NFTs that
are currently owned by the address by checking which NFTs were sent to the
addres and which NFTs were sent from the address.

Since you're using the default ERC-721 Transfer event, you only have the
`tokenId` field that contains the ID of the NFT. You will need to query the
contract to get the chain ID and the amount of the NFT.

To correctly format the amount of tokens in NFTs, you to know the number of
decimals of the corresponding ZRC-20 token. Query the foreign coins endpoints to
find the decimals and use to correctly format the amounts.

Finally, sort NFTs by ID in descending order.

```tsx reference
https://github.com/zeta-chain/example-frontend/blob/nft/app/nft/fetchNFTs.ts
```

## Minting NFTs
