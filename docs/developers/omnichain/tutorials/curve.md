---
sidebar_position: 6
---

# Curve on zEVM

## Overview

Assuming you have familiarized yourself with
[ZRC-20 Tokens](/developers/omnichain/zrc-20) and
[zEVM](/developers/omnichain/zeta-evm), this example walks through how you'd
create an omnichain Curve pool! This means you can leverage the existing Curve
contracts and orchestrate external, native assets as if they were all on one
chain.

## Deploy Curve on ZetaChain

Since zEVM is fully EVM compatible, you can download the Curve repo as it is and
deploy it on zEVM, simply pointing the RPC to zEVM RPC. You can find all the
ZetaChain RPC information here: [testnet](/reference/testnet) and here
[mainnet](/reference/mainnet).

## Deploy a tri-token pool of ZRC-20 tokens

Let's say we already deployed a tri-token pool (if you don't know how to deploy
it take a look to official script, does all the work for you out of the box
[deployment script](https://github.com/curvefi/curve-contract/blob/master/scripts/deploy.py)),
using the address of three ZRC-2020 tokens. You can find the ZetaChain addresses
of ZRC-20 tokens supported right now on the Athens-2 testnet using this
[endpoint](https://api.athens2.zetachain.com/#/Query/ZetachainZetacoreFungibleForeignCoinsAll).

## Implement a cross-chain stableswap

Now that you have Curve and the pool you want deployed, swapping would look just
like this:

```solidity reference
https://github.com/zeta-chain/zetachain/blob/main/packages/zevm-example-contracts/contracts/zeta-swap/ZetaCurveSwapDemo.sol
```

In this example `crvZRC20s` is an array of three ZRC20 tokens, for example gETH,
tBNB and tMATIC. And `crv3pool` is the address of the pool you deployed with
Curve's code.

Easy right? In order to swap, you just need to write onCrossChainCall. This
function simply extracts params from the message, calls the Curve pool's
`exchange`, and then withdraws to the designated destination. All swap/pool
logic remains in the core Curve contract deployment. Users can interact by
depositing and calling this zEVM contract from an external chain. You can see
how you'd call this for a user programmatically
[here](https://www.zetachain.com/docs/developers/omnichain-smart-contracts/zrc-20#how-to-deposit-and-call-zevm-contracts-from-a-smart-contract-chain).
