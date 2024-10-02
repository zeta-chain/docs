# Messages

## MsgAddOutboundTracker

AddOutboundTracker adds a new record to the outbound transaction tracker.
only the admin policy account and the observer validators are authorized to broadcast this message without proof.
If no pending cctx is found, the tracker is removed, if there is an existed tracker with the nonce & chainID.

```proto
message MsgAddOutboundTracker {
	string creator = 1;
	int64 chain_id = 2;
	uint64 nonce = 3;
	string tx_hash = 4;
	pkg.proofs.Proof proof = 5;
	string block_hash = 6;
	int64 tx_index = 7;
}
```

## MsgAddInboundTracker

AddInboundTracker adds a new record to the inbound transaction tracker.

```proto
message MsgAddInboundTracker {
	string creator = 1;
	int64 chain_id = 2;
	string tx_hash = 3;
	pkg.coin.CoinType coin_type = 4;
	pkg.proofs.Proof proof = 5;
	string block_hash = 6;
	int64 tx_index = 7;
}
```

## MsgRemoveOutboundTracker

RemoveOutboundTracker removes a record from the outbound transaction tracker by chain ID and nonce.

Authorized: admin policy group 1.

```proto
message MsgRemoveOutboundTracker {
	string creator = 1;
	int64 chain_id = 2;
	uint64 nonce = 3;
}
```

## MsgVoteGasPrice

VoteGasPrice submits information about the connected chain's gas price at a specific block
height. Gas price submitted by each validator is recorded separately and a
median index is updated.

Only observer validators are authorized to broadcast this message.

```proto
message MsgVoteGasPrice {
	string creator = 1;
	int64 chain_id = 2;
	uint64 price = 3;
	uint64 priority_fee = 6;
	uint64 block_number = 4;
}
```

## MsgVoteOutbound

VoteOutbound casts a vote on an outbound transaction observed on a connected chain (after
it has been broadcasted to and finalized on a connected chain). If this is
the first vote, a new ballot is created. When a threshold of votes is
reached, the ballot is finalized. When a ballot is finalized, the outbound
transaction is processed.

If the observation is successful, the difference between zeta burned
and minted is minted by the bank module and deposited into the module
account.

If the observation is unsuccessful, the logic depends on the previous
status.

If the previous status was `PendingOutbound`, a new revert transaction is
created. To cover the revert transaction fee, the required amount of tokens
submitted with the CCTX are swapped using a Uniswap V2 contract instance on
ZetaChain for the ZRC20 of the gas token of the receiver chain. The ZRC20
tokens are then
burned. The nonce is updated. If everything is successful, the CCTX status is
changed to `PendingRevert`.

If the previous status was `PendingRevert`, the CCTX is aborted.

```mermaid
stateDiagram-v2

	state observation <<choice>>
	state success_old_status <<choice>>
	state fail_old_status <<choice>>
	PendingOutbound --> observation: Finalize outbound
	observation --> success_old_status: Observation succeeded
	success_old_status --> Reverted: Old status is PendingRevert
	success_old_status --> OutboundMined: Old status is PendingOutbound
	observation --> fail_old_status: Observation failed
	fail_old_status --> PendingRevert: Old status is PendingOutbound
	fail_old_status --> Aborted: Old status is PendingRevert
	PendingOutbound --> Aborted: Finalize outbound error

```

Only observer validators are authorized to broadcast this message.

```proto
message MsgVoteOutbound {
	string creator = 1;
	string cctx_hash = 2;
	string observed_outbound_hash = 3;
	uint64 observed_outbound_block_height = 4;
	uint64 observed_outbound_gas_used = 10;
	string observed_outbound_effective_gas_price = 11;
	uint64 observed_outbound_effective_gas_limit = 12;
	string value_received = 5;
	pkg.chains.ReceiveStatus status = 6;
	int64 outbound_chain = 7;
	uint64 outbound_tss_nonce = 8;
	pkg.coin.CoinType coin_type = 9;
}
```

## MsgVoteInbound

VoteInbound casts a vote on an inbound transaction observed on a connected chain. If this
is the first vote, a new ballot is created. When a threshold of votes is
reached, the ballot is finalized. When a ballot is finalized, a new CCTX is
created.

If the receiver chain is ZetaChain, `HandleEVMDeposit` is called. If the
tokens being deposited are ZETA, `MintZetaToEVMAccount` is called and the
tokens are minted to the receiver account on ZetaChain. If the tokens being
deposited are gas tokens or ERC20 of a connected chain, ZRC20's `deposit`
method is called and the tokens are deposited to the receiver account on
ZetaChain. If the message is not empty, system contract's `depositAndCall`
method is also called and an omnichain contract on ZetaChain is executed.
Omnichain contract address and arguments are passed as part of the message.
If everything is successful, the CCTX status is changed to `OutboundMined`.

If the receiver chain is a connected chain, the `FinalizeInbound` method is
called to prepare the CCTX to be processed as an outbound transaction. To
cover the outbound transaction fee, the required amount of tokens submitted
with the CCTX are swapped using a Uniswap V2 contract instance on ZetaChain
for the ZRC20 of the gas token of the receiver chain. The ZRC20 tokens are
then burned. The nonce is updated. If everything is successful, the CCTX
status is changed to `PendingOutbound`.

```mermaid
stateDiagram-v2

	state evm_deposit_success <<choice>>
	state finalize_inbound <<choice>>
	state evm_deposit_error <<choice>>
	PendingInbound --> evm_deposit_success: Receiver is ZetaChain
	evm_deposit_success --> OutboundMined: EVM deposit success
	evm_deposit_success --> evm_deposit_error: EVM deposit error
	evm_deposit_error --> PendingRevert: Contract error
	evm_deposit_error --> Aborted: Internal error, invalid chain, gas, nonce
	PendingInbound --> finalize_inbound: Receiver is connected chain
	finalize_inbound --> Aborted: Finalize inbound error
	finalize_inbound --> PendingOutbound: Finalize inbound success

```

Only observer validators are authorized to broadcast this message.

```proto
message MsgVoteInbound {
	string creator = 1;
	string sender = 2;
	int64 sender_chain_id = 3;
	string receiver = 4;
	int64 receiver_chain = 5;
	string amount = 6;
	string message = 8;
	string inbound_hash = 9;
	uint64 inbound_block_height = 10;
	uint64 gas_limit = 11;
	pkg.coin.CoinType coin_type = 12;
	string tx_origin = 13;
	string asset = 14;
	uint64 event_index = 15;
	ProtocolContractVersion protocol_contract_version = 16;
	RevertOptions revert_options = 17;
	CallOptions call_options = 18;
}
```

## MsgWhitelistERC20

WhitelistERC20 deploys a new zrc20, create a foreign coin object for the ERC20
and emit a crosschain tx to whitelist the ERC20 on the external chain

Authorized: admin policy group 1.

```proto
message MsgWhitelistERC20 {
	string creator = 1;
	string erc20_address = 2;
	int64 chain_id = 3;
	string name = 4;
	string symbol = 5;
	uint32 decimals = 6;
	int64 gas_limit = 7;
}
```

## MsgUpdateTssAddress

UpdateTssAddress updates the TSS address.

```proto
message MsgUpdateTssAddress {
	string creator = 1;
	string tss_pubkey = 2;
}
```

## MsgMigrateTssFunds

MigrateTssFunds migrates the funds from the current TSS to the new TSS

```proto
message MsgMigrateTssFunds {
	string creator = 1;
	int64 chain_id = 2;
	string amount = 3;
}
```

## MsgAbortStuckCCTX

AbortStuckCCTX aborts a stuck CCTX
Authorized: admin policy group 2

```proto
message MsgAbortStuckCCTX {
	string creator = 1;
	string cctx_index = 2;
}
```

## MsgRefundAbortedCCTX

RefundAbortedCCTX refunds the aborted CCTX.
It verifies if the CCTX is aborted and not refunded, and if the refund address is valid.
It refunds the amount to the refund address and sets the CCTX as refunded.
Refer to documentation for GetRefundAddress for the refund address logic.
Refer to documentation for GetAbortedAmount for the aborted amount logic.

```proto
message MsgRefundAbortedCCTX {
	string creator = 1;
	string cctx_index = 2;
	string refund_address = 3;
}
```

## MsgUpdateRateLimiterFlags

UpdateRateLimiterFlags updates the rate limiter flags.
Authorized: admin policy operational.

```proto
message MsgUpdateRateLimiterFlags {
	string creator = 1;
	RateLimiterFlags rate_limiter_flags = 2;
}
```

## MsgMigrateERC20CustodyFunds

MigrateERC20CustodyFunds migrates the funds from the current ERC20Custody contract to the new ERC20Custody contract

```proto
message MsgMigrateERC20CustodyFunds {
	string creator = 1;
	int64 chain_id = 2;
	string new_custody_address = 3;
	string erc20_address = 4;
	string amount = 5;
}
```

## MsgUpdateERC20CustodyPauseStatus

UpdateERC20CustodyPauseStatus creates a admin cmd cctx to update the pause status of the ERC20 custody contract

```proto
message MsgUpdateERC20CustodyPauseStatus {
	string creator = 1;
	int64 chain_id = 2;
	bool pause = 3;
}
```

