## 模块 `gateway::gateway`

本文档概述 ZetaChain Sui Gateway 模块中暴露的结构体、常量与函数，帮助开发者理解如何在 Sui 链上与 ZetaChain 交互。

---

### 核心结构体

- `Vault<T>`：托管特定代币的仓库，包含余额与白名单标记。
- `Gateway`：模块主对象，维护所有 `Vault`、当前 `nonce`、活跃权限 ID 及暂停状态。
- `WithdrawCap` / `WhitelistCap` / `AdminCap`：分别控制提现、白名单和管理员操作的能力凭证。
- `DepositEvent`、`DepositAndCallEvent`、`WithdrawEvent`、`NonceIncreaseEvent`、`DonateEvent`：跨链操作时发布的事件，便于链上追踪。

---

### 常量

定义了若干错误码与限制：

- `EAlreadyWhitelisted`、`ENotWhitelisted`：白名单状态校验。
- `ENonceMismatch`：防止 nonce 复用。
- `EInvalidReceiverAddress`：无效的 EVM 接收地址。
- `EPayloadTooLong`：消息载荷超限，`PayloadMaxLength = 1024` 字节。
- `EInactiveWithdrawCap`、`EInactiveWhitelistCap`：权限凭证校验。
- `EDepositPaused`：暂停状态提示。

---

### 初始化与权限管理

- `init`：创建 Gateway 对象，生成三类 Cap 并分发给交易发起者，默认将 `SUI` 加入白名单。
- `issue_withdraw_and_whitelist_cap` / `issue_withdraw_and_whitelist_cap_impl`：管理员重新签发新的提现与白名单 Cap，并更新活跃 ID。
- `pause` / `unpause`：管理员暂停或恢复存入功能，对应实现 `pause_impl` / `unpause_impl`。
- `reset_nonce`：管理员重置 `nonce`。

---

### Nonce 与权限校验

- `increase_nonce`：持有 `WithdrawCap` 的调用者（通常为 TSS）可在出站失败时手动递增 nonce，并触发 `NonceIncreaseEvent`。
- `nonce` / `active_withdraw_cap` / `active_whitelist_cap`：查询当前 `nonce` 和活跃 Cap ID。

---

### 白名单操作

- `whitelist` / `whitelist_impl`：使用 `WhitelistCap` 将某种代币加入白名单，若 vault 已存在则更新标记，否则创建新 vault。
- `unwhitelist` / `unwhitelist_impl`：管理员移除白名单。
- `is_whitelisted`：检测某代币是否被允许存入。

---

### 存入与事件

- `deposit`：用户将代币存入 Gateway，传入 EVM 接收地址，记录事件 `DepositEvent`。
- `deposit_and_call`：在存入的同时附带 payload 触发 zEVM 合约调用，payload 不得超过 `1024` 字节，对应事件 `DepositAndCallEvent`。
- `donate`：向 Gateway 捐赠代币，接收地址固定为零地址，触发 `DonateEvent`。
- `check_receiver_and_deposit_to_vault`：内部函数，统一检查接收地址有效性、白名单状态及暂停状态，并将代币注入 Vault。

---

### 提现与回调

- `withdraw`：持有 `WithdrawCap` 的调用者从 Vault 中提取代币和用于 gas 的 SUI，分别转给跨链接收地址与交易发起者，同时发布 `WithdrawEvent`。
- `withdraw_impl`：提现实现函数，校验 Cap、nonce 与白名单状态，并返回 `(Coin<T>, Coin<SUI>)`。

---

### 工具函数

- `vault_balance`：查询指定代币在 Vault 中的余额。
- `is_paused`：返回存入功能是否被暂停。
- `coin_name`：将类型名称转换为 ASCII 字符串，用作 Vault 键值。

---

## 总结

Sui Gateway 模块通过 Cap 权限体系与事件机制，为跨链存取、消息传递提供安全保障。常见流程包括：
1. 管理员使用 `init` 初始化，并根据需要签发新的权限 Cap。
2. 用户调用 `deposit` 或 `deposit_and_call` 将资产跨链至 zEVM。
3. TSS 或授权实体使用 `withdraw` / `increase_nonce` 等函数处理出站资产与异常情况。
4. 通过事件与查询函数监控状态、余额及暂停标识。***

