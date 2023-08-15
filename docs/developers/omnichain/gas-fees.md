---
sidebar_label: Gas Fees
hide_title: true
title: Gas Fees
sidebar_position: 5
---

# Fees

When interacting with smart contracts on ZetaChain, a user includes a portion of
value that is spent on gas for that transaction.

Smart contract deployments and smart contract calls require gas to run. A user
can call a zEVM contract from an external chain by ZRC-20 `deposit`, including a
contract call in the message, or connecting directly to ZetaChain and
interacting with a contract that with a contract already deployed on zEVM.

The gas market/mechanism for ZetaEVM smart contracts is based on that of
[Ethermint](https://docs.ethermint.zone/basics/gas.html) and behaves similarly
to EIP 1559 Ethereum gas fees. This gas system is built to deter malicious users
from spamming the network.

## Omnichain Contract Fees

### Deposit

When depositing tokens to ZetaChain by sending them to the TSS address on a
connected chain, you pay the same fee as you would for a normal transaction on
that chain in a native gas token.

For example, if you deposit ETH to ZetaChain from Ethereum, you pay the same fee
as you would for a normal token transfer transaction on Ethereum in ETH. Refer
to the following docs for more information on
[gas and fees on Ethereum](https://ethereum.org/en/developers/docs/gas/).

### Withdraw

When withdrawing ZRC-20 tokens from ZetaChain to a connected chain, you pay the
"withdraw gas fee".

To get the fee, you can call the `withdrawGasFee` function on the
[ZRC-20 contract](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/ZRC20.sol)
of the token you want to withdraw. This function returns the fee in the native
gas token of the connected chain.

The `withdraw` function deducts the withdraw gas fee from the caller's ZRC-20
balance and withdraws the amount to the destination chain.
