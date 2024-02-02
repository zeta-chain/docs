---
sidebar_label: Gas Fees
hide_title: true
title: Gas Fees
sidebar_position: 5
---

import Fees from "@site/src/components/Fees/Fees";

# Fees

When interacting with smart contracts on ZetaChain, users need to include a fee
spent on gas for that specific transaction.

Smart contracts, both during deployment and when called, require gas. You can
interact with a zEVM (ZetaChain Virtual Machine) contract from an external chain
using a ZRC-20 `deposit`. This can include embedding a contract call within the
message. Alternatively, you can directly connect to ZetaChain and interact with
a contract that is already deployed on zEVM.

The gas market mechanism for ZetaEVM smart contracts is similar to that of
[Ethermint](https://docs.ethermint.zone/basics/gas.html) and behaves like
Ethereum's EIP 1559 gas fee structure. This system is designed to deter spamming
activities on the network.

## Omnichain Contract Fees

### Deposit

When depositing tokens to ZetaChain by sending them to the TSS (Threshold
Signature Scheme) address on a connected chain, you will pay the fee in the
native gas token of that chain, just as you would for a standard transaction.

For example, if you are depositing ETH from Ethereum to ZetaChain, the fee will
be in ETH and comparable to a regular token transfer on the Ethereum network.
For more information on Ethereum gas and fees, refer to the
[official documentation](https://ethereum.org/en/developers/docs/gas/).

### Withdraw

When withdrawing ZRC-20 tokens back to a connected external chain, the "withdraw
gas fee" is applicable (listed as "Total fee" in the table below).

To find out the fee amount, call the withdrawGasFee function on the
[ZRC-20 contract](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/ZRC20.sol)
for the token you wish to withdraw. This function will return the fee in the
native gas token of the connected chain.

The `withdraw` function will deduct this gas fee from your ZRC-20 balance and
proceed with the withdrawal to the destination chain.

### Current omnichain fees

:::note

These fees are calculated for ZetaChain testnet.

:::

In the table below you can see the current fees. The fees are defined in native
gas tokens on the destination chain (the chain to which ZRC-20 tokens are
withdrawn). The fees are calculated with the gas limit of 500000.

<Fees type="zevm" />

To calculate fees for a different gas limit, please, check out the `fees`
command in the smart-contract
[template](https://github.com/zeta-chain/template):

```
npx hardhat fees
```
