## Crate 文档

**版本：** 0.1.0  
**格式版本：** 41

本文档概述 ZetaChain Solana Gateway 程序提供的 Anchor 模块、指令与数据结构，便于在 Solana 链上与 ZetaChain 通信。

---

## 模块 `gateway`

### 子模块

- `program`：Solana Program 入口，暴露 `Gateway` 类型及相关实现。
- `gateway`：核心逻辑模块，包含所有指令处理函数。
- `instruction`：由 Anchor 生成的指令数据结构，供客户端序列化。

---

### 类型：`Gateway`

`Gateway` 结构代表整个 Solana Gateway 程序。它实现了 Anchor 与 SPL 运行所需的多种 trait（如 `Clone`、`Send`、`TryFrom` 等），并提供 `id()` 返回程序 `Pubkey`。

---

## 指令处理函数

模块 `gateway` 中定义了常用指令，以下列出主要函数及其参数：

### `initialize`
- 初始化 Gateway PDA。
- 参数：`tss_address`（20 字节以太坊地址）、`chain_id`。

### `increment_nonce`
- 在出站失败时由 TSS 调用，递增 nonce。
- 参数：`amount`、`signature`、`recovery_id`、`message_hash`、`nonce`。

### `execute`
- 提取 SOL 并调用目标程序的 `on_call`。
- 参数：`amount`、`sender`（20 字节地址）、`data`、`signature`、`recovery_id`、`message_hash`、`nonce`。

### `execute_revert`
- 提取 SOL 并调用目标程序的 `on_revert`。
- 参数同 `execute`，但 `sender` 为 `Pubkey`。

### `execute_spl_token` / `execute_spl_token_revert`
- 处理 SPL 代币提取并回调目标程序。
- 额外参数：`decimals`（小数位）、`amount`。

### `set_deposit_paused`
- 切换存入功能的启停状态，仅 PDA authority 可调用。

### `update_tss`
- 更新 TSS 地址，仅 PDA authority 可调用。

### `update_authority`
- 更新 PDA authority。

### `reset_nonce`
- 重置 PDA nonce。

### `whitelist_spl_mint` / `unwhitelist_spl_mint`
- 由 TSS 调用，管理 SPL 代币白名单。
- 参数包含 TSS 签名、`recovery_id`、`message_hash`、`nonce`。

### `deposit` / `deposit_and_call`
- 从 Solana 存入 SOL 并可选携带消息调用 ZetaChain zEVM 合约。
- 参数：`amount`、`receiver`（20 字节地址）、`message`、`revert_options`。

### `deposit_spl_token` / `deposit_spl_token_and_call`
- 存入 SPL 代币并可选调用 zEVM 合约。

### `call`
- 仅发送消息到 zEVM 合约，不携带资产。

### `withdraw` / `withdraw_spl_token`
- 由 TSS 调用，从 Gateway 提取 SOL 或 SPL 代币。
- 参数包含签名、`message_hash`、`nonce`。

---

## 指令数据结构（模块 `instruction`）

Anchor 自动生成的结构体对应每个指令。示例如下：

- `Initialize`：包含 `tss_address`、`chain_id`。
- `IncrementNonce`：包含 `amount`、`signature`、`recovery_id`、`message_hash`、`nonce`。
- `Execute` / `ExecuteRevert`：包含跨链调用参数与签名。
- `ExecuteSplToken` / `ExecuteSplTokenRevert`：扩展 SPL 代币字段。
- `SetDepositPaused`、`UpdateTss`、`UpdateAuthority`、`ResetNonce` 等管理类结构。
- `Deposit`、`DepositAndCall`、`DepositSplToken`、`DepositSplTokenAndCall`、`Call`：对应各类存入与调用。

所有结构均实现 `BorshSerialize`、`BorshDeserialize`、`InstructionData` 等 trait，方便在客户端组合交易。

---

## 辅助类型

文件还定义了 `RevertOptions` 等结构（未完整展示），用于描述跨链回退策略、目标信息等。

---

## 小结

Solana Gateway 提供了完整的跨链指令集合，让 Solana 程序可：
- 初始化与管理 Gateway 状态（TSS、nonce、authority 等）
- 存入 SOL / SPL 代币并向 ZetaChain 发起消息
- 从 ZetaChain 提取资产并回调 Solana 程序
- 管理白名单与暂停状态

开发者可使用 Anchor 生成的指令结构构建客户端交易，也可参考上方函数签名在程序内进行调用。更多细节可查阅源码与 Anchor 文档。***

