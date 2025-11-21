# TON Gateway Docs

## gateway.fc

### Constants

-   **op::internal::donate** = 100
-   **op::internal::deposit** = 101
-   **op::internal::deposit_and_call** = 102
-   **op::internal::call** = 103
-   **op::external::withdraw** = 200
-   **op::external::increase_seqno** = 205
-   **op::authority::set_deposits_enabled** = 201
-   **op::authority::update_tss** = 202
-   **op::authority::update_code** = 203
-   **op::authority::update_authority** = 204
-   **op::authority::reset_seqno** = 206

### `handle_deposit`

```func
() handle_deposit(int amount, slice in_msg_body) impure inline {
```

Deposit TON to the gateway and specify the EVM recipient on ZetaChain

### `handle_call`

```func
() handle_call(int amount, slice in_msg_body) impure inline {
```

Handles zeta's onCall method by ensuring call_data size and gas costs are covered;

NOTE that this operation DOESN'T rebate sent amount if it's bigger than tx fee!
We can consider sending surplus amount back in the future improvements.
For now, send amount that is equal to calculate_gas_fee(op::call)

### `handle_set_deposits_enabled`

```func
() handle_set_deposits_enabled(slice sender, slice message) impure inline {
```

Enables or disables deposits.

### `handle_update_tss`

```func
() handle_update_tss(slice sender, slice message) impure inline {
```

Updates the TSS address. WARNING! Execute with extra caution.
Wrong TSS address leads to loss of funds.

### `handle_update_code`

```func
() handle_update_code(slice sender, slice message) impure inline {
```

Updated the code of the contract
Handle_code_update (cell new_code)

### `handle_reset_seqno`

```func
() handle_reset_seqno(slice sender, slice message) impure inline {
```

Resets the seqno to the specified value
Handles reset_seqno (uint32 new_seqno)

### `recv_internal`

```func
() recv_internal(int my_balance, int msg_value, cell in_msg_full, slice in_msg_body) impure {
```

Input for all internal messages

### `handle_withdrawal`

```func
() handle_withdrawal(slice payload) impure inline {
```

Withdraws assets to the recipient

Handle_withdrawal (MsgAddr recipient, Coins amount, uint32 seqno)

### `handle_increase_seqno`

```func
() handle_increase_seqno(slice payload) impure inline {
```

Increases seqno by 1 without doing any other operations.
Handle_increase_seqno (uint32 failure_reason, uint32 seqno)

### `recv_external`

```func
() recv_external(slice message) impure {
```

Entry point for all external messages
