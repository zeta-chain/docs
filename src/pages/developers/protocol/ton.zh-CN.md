
## TON Gateway 文档

### 文件 `gateway.fc`

#### 操作码常量

- `op::internal::donate = 100`
- `op::internal::deposit = 101`
- `op::internal::deposit_and_call = 102`
- `op::internal::call = 103`
- `op::external::withdraw = 200`
- `op::external::increase_seqno = 205`
- `op::authority::set_deposits_enabled = 201`
- `op::authority::update_tss = 202`
- `op::authority::update_code = 203`
- `op::authority::update_authority = 204`
- `op::authority::reset_seqno = 206`

#### `handle_deposit`

```func
() handle_deposit(int amount, slice in_msg_body) impure inline {
```

处理用户向 Gateway 存入 TON，并指定 ZetaChain zEVM 上的接收地址。

#### `handle_call`

```func
() handle_call(int amount, slice in_msg_body) impure inline {
```

执行 zEVM 合约的 `onCall`，确保 `call_data` 大小与 gas 成本满足要求。当前不会退还超过手续费的多余金额，建议仅发送与 `op::call` 计算结果相等的金额。

#### `handle_set_deposits_enabled`

```func
() handle_set_deposits_enabled(slice sender, slice message) impure inline {
```

启用或停用存款功能。

#### `handle_update_tss`

```func
() handle_update_tss(slice sender, slice message) impure inline {
```

更新 TSS 地址，需格外谨慎，错误地址会导致资金损失。

#### `handle_update_code`

```func
() handle_update_code(slice sender, slice message) impure inline {
```

升级合约代码。内部调用 `handle_code_update(cell new_code)`。

#### `handle_reset_seqno`

```func
() handle_reset_seqno(slice sender, slice message) impure inline {
```

将序列号重置为指定值，对应 `reset_seqno(uint32 new_seqno)`。

#### `recv_internal`

```func
() recv_internal(int my_balance, int msg_value, cell in_msg_full, slice in_msg_body) impure {
```

所有内部消息的入口。

#### `handle_withdrawal`

```func
() handle_withdrawal(slice payload) impure inline {
```

执行资产提现，参数包括接收地址、金额和 `seqno`。

#### `handle_increase_seqno`

```func
() handle_increase_seqno(slice payload) impure inline {
```

单纯将 `seqno` 加一，用于处理失败后的重试。载荷包含 `failure_reason` 与 `seqno`。

#### `recv_external`

```func
() recv_external(slice message) impure {
```

所有外部消息的入口，依赖上述处理函数完成具体逻辑。***

