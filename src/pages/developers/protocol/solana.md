# Crate Documentation

**Version:** 0.1.0

**Format Version:** 41

# Module `gateway`

## Modules

## Module `program`

Module representing the program.

```rust
pub mod program { /* ... */ }
```

### Types

#### Struct `Gateway`

Type representing the program.

```rust
pub struct Gateway;
```

##### Implementations

###### Trait Implementations

- **Freeze**
- **Send**
- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **Unpin**
- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **RefUnwindSafe**
- **Sync**
- **UnwindSafe**
- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **Same**
- **Clone**
  - ```rust
    fn clone(self: &Self) -> Gateway { /* ... */ }
    ```

- **CloneToUninit**
  - ```rust
    unsafe fn clone_to_uninit(self: &Self, dst: *mut u8) { /* ... */ }
    ```

- **IntoEither**
- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **Id**
  - ```rust
    fn id() -> Pubkey { /* ... */ }
    ```

- **ToOwned**
  - ```rust
    fn to_owned(self: &Self) -> T { /* ... */ }
    ```

  - ```rust
    fn clone_into(self: &Self, target: &mut T) { /* ... */ }
    ```

## Module `gateway`

```rust
pub mod gateway { /* ... */ }
```

### Functions

#### Function `initialize`

Initializes the gateway PDA.


Arguments:

* `ctx` - The instruction context.
* `tss_address` - The Ethereum TSS address (20 bytes).
* `chain_id` - The chain ID associated with the PDA.

```rust
pub fn initialize(ctx: Context<''_, ''_, ''_, ''_, Initialize<''_>>, tss_address: [u8; 20], chain_id: u64) -> Result<()> { /* ... */ }
```

#### Function `increment_nonce`

Increments nonce, used by TSS in case outbound fails.

Arguments:

* `ctx` - The instruction context.
* `amount` - The amount in original outbound.
* `signature` - The TSS signature.
* `recovery_id` - The recovery ID for signature verification.
* `message_hash` - Message hash for signature verification.
* `nonce` - The current nonce value.

```rust
pub fn increment_nonce(ctx: Context<''_, ''_, ''_, ''_, IncrementNonce<''_>>, amount: u64, signature: [u8; 64], recovery_id: u8, message_hash: [u8; 32], nonce: u64) -> Result<()> { /* ... */ }
```

#### Function `execute`

Withdraws amount to destination program pda, and calls on_call on destination program

Arguments:

* `ctx` - The instruction context.
* `amount` - Amount of SOL to transfer.
* `sender` - Sender's address.
* `data` - Arbitrary data to pass to the destination program.
* `signature` - Signature of the message.
* `recovery_id` - Recovery ID of the signature.
* `message_hash` - Hash of the message.
* `nonce` - Nonce of the message.

```rust
pub fn execute(ctx: Context<''_, ''_, ''_, ''_, Execute<''_>>, amount: u64, sender: [u8; 20], data: Vec<u8>, signature: [u8; 64], recovery_id: u8, message_hash: [u8; 32], nonce: u64) -> Result<()> { /* ... */ }
```

#### Function `execute_revert`

Withdraws amount to destination program pda, and calls on_revert on destination program


Arguments:

* `ctx` - The instruction context.
* `amount` - The amount of SOL to withdraw.
* `sender` - Sender from ZEVM.
* `data` - Data to pass to destination program.
* `signature` - The TSS signature.
* `recovery_id` - The recovery ID for signature verification.
* `message_hash` - Message hash for signature verification.
* `nonce` - The current nonce value.

```rust
pub fn execute_revert(ctx: Context<''_, ''_, ''_, ''_, Execute<''_>>, amount: u64, sender: Pubkey, data: Vec<u8>, signature: [u8; 64], recovery_id: u8, message_hash: [u8; 32], nonce: u64) -> Result<()> { /* ... */ }
```

#### Function `execute_spl_token`

Withdraws amount of SPL tokens to destination program pda, and calls on_call on destination program

Arguments:

* `ctx` - The instruction context.
* `decimals` - Token decimals for precision.
* `amount` - The amount of tokens to withdraw.
* `sender` - Sender from ZEVM.
* `data` - Data to pass to destination program.
* `signature` - The TSS signature.
* `recovery_id` - The recovery ID for signature verification.
* `message_hash` - Message hash for signature verification.
* `nonce` - The current nonce value.

```rust
pub fn execute_spl_token(ctx: Context<''_, ''_, ''_, ''_, ExecuteSPLToken<''_>>, decimals: u8, amount: u64, sender: [u8; 20], data: Vec<u8>, signature: [u8; 64], recovery_id: u8, message_hash: [u8; 32], nonce: u64) -> Result<()> { /* ... */ }
```

#### Function `execute_spl_token_revert`

Withdraws SPL token amount to destination program pda, and calls on_revert on destination program


Arguments:

* `ctx` - The instruction context.
* `decimals` - Token decimals for precision.
* `amount` - The amount of tokens to withdraw.
* `sender` - Sender from ZEVM.
* `data` - Data to pass to destination program.
* `signature` - The TSS signature.
* `recovery_id` - The recovery ID for signature verification.
* `message_hash` - Message hash for signature verification.
* `nonce` - The current nonce value.

```rust
pub fn execute_spl_token_revert(ctx: Context<''_, ''_, ''_, ''_, ExecuteSPLToken<''_>>, decimals: u8, amount: u64, sender: Pubkey, data: Vec<u8>, signature: [u8; 64], recovery_id: u8, message_hash: [u8; 32], nonce: u64) -> Result<()> { /* ... */ }
```

#### Function `set_deposit_paused`

Pauses or unpauses deposits. Caller is authority stored in PDA.

Arguments:

* `ctx` - The instruction context.
* `deposit_paused` - Boolean flag to pause or unpause deposits.

```rust
pub fn set_deposit_paused(ctx: Context<''_, ''_, ''_, ''_, UpdatePaused<''_>>, deposit_paused: bool) -> Result<()> { /* ... */ }
```

#### Function `update_tss`

Updates the TSS address. Caller is authority stored in PDA.

Arguments:

* `ctx` - The instruction context.
* `tss_address` - The new Ethereum TSS address (20 bytes).

```rust
pub fn update_tss(ctx: Context<''_, ''_, ''_, ''_, UpdateTss<''_>>, tss_address: [u8; 20]) -> Result<()> { /* ... */ }
```

#### Function `update_authority`

Updates the PDA authority. Caller is authority stored in PDA.

Arguments:

* `ctx` - The instruction context.
* `new_authority_address` - The new authority's public key.

```rust
pub fn update_authority(ctx: Context<''_, ''_, ''_, ''_, UpdateAuthority<''_>>, new_authority_address: Pubkey) -> Result<()> { /* ... */ }
```

#### Function `reset_nonce`

Resets the PDA nonce. Caller is authority stored in PDA.


Arguments:

* `ctx` - The instruction context.
* `new_nonce` - The new nonce.

```rust
pub fn reset_nonce(ctx: Context<''_, ''_, ''_, ''_, ResetNonce<''_>>, new_nonce: u64) -> Result<()> { /* ... */ }
```

#### Function `whitelist_spl_mint`

Whitelists a new SPL token. Caller is TSS.

Arguments:

* `ctx` - The instruction context.
* `signature` - The TSS signature.
* `recovery_id` - The recovery ID for signature verification.
* `message_hash` - Message hash for signature verification.
* `nonce` - The current nonce value.

```rust
pub fn whitelist_spl_mint(ctx: Context<''_, ''_, ''_, ''_, Whitelist<''_>>, signature: [u8; 64], recovery_id: u8, message_hash: [u8; 32], nonce: u64) -> Result<()> { /* ... */ }
```

#### Function `unwhitelist_spl_mint`

Unwhitelists an SPL token. Caller is TSS.

Arguments:

* `ctx` - The instruction context.
* `signature` - The TSS signature.
* `recovery_id` - The recovery ID for signature verification.
* `message_hash` - Message hash for signature verification.
* `nonce` - The current nonce value.

```rust
pub fn unwhitelist_spl_mint(ctx: Context<''_, ''_, ''_, ''_, Unwhitelist<''_>>, signature: [u8; 64], recovery_id: u8, message_hash: [u8; 32], nonce: u64) -> Result<()> { /* ... */ }
```

#### Function `deposit`

Deposits SOL into the program and credits the `receiver` on ZetaChain zEVM.

Arguments:

* `ctx` - The instruction context.
* `amount` - The amount of lamports to deposit.
* `receiver` - The Ethereum address of the receiver on ZetaChain zEVM.
* `revert_options` - The revert options created by the caller.

```rust
pub fn deposit(ctx: Context<''_, ''_, ''_, ''_, Deposit<''_>>, amount: u64, receiver: [u8; 20], revert_options: Option<RevertOptions>) -> Result<()> { /* ... */ }
```

#### Function `deposit_and_call`

Deposits SOL and calls a contract on ZetaChain zEVM.

Arguments:

* `ctx` - The instruction context.
* `amount` - The amount of lamports to deposit.
* `receiver` - The Ethereum address of the receiver on ZetaChain zEVM.
* `message` - The message passed to the contract.
* `revert_options` - The revert options created by the caller.

```rust
pub fn deposit_and_call(ctx: Context<''_, ''_, ''_, ''_, Deposit<''_>>, amount: u64, receiver: [u8; 20], message: Vec<u8>, revert_options: Option<RevertOptions>) -> Result<()> { /* ... */ }
```

#### Function `deposit_spl_token`

Deposits SPL tokens and credits the `receiver` on ZetaChain zEVM.

Arguments:

* `ctx` - The instruction context.
* `amount` - The amount of SPL tokens to deposit.
* `receiver` - The Ethereum address of the receiver on ZetaChain zEVM.
* `revert_options` - The revert options created by the caller.

```rust
pub fn deposit_spl_token(ctx: Context<''_, ''_, ''_, ''_, DepositSplToken<''_>>, amount: u64, receiver: [u8; 20], revert_options: Option<RevertOptions>) -> Result<()> { /* ... */ }
```

#### Function `deposit_spl_token_and_call`

Deposits SPL tokens and calls a contract on ZetaChain zEVM.

Arguments:

* `ctx` - The instruction context.
* `amount` - The amount of SPL tokens to deposit.
* `receiver` - The Ethereum address of the receiver on ZetaChain zEVM.
* `message` - The message passed to the contract.
* `revert_options` - The revert options created by the caller.

```rust
pub fn deposit_spl_token_and_call(ctx: Context<''_, ''_, ''_, ''_, DepositSplToken<''_>>, amount: u64, receiver: [u8; 20], message: Vec<u8>, revert_options: Option<RevertOptions>) -> Result<()> { /* ... */ }
```

#### Function `call`

Calls a contract on ZetaChain zEVM.

Arguments:

* `receiver` - The Ethereum address of the receiver on ZetaChain zEVM.
* `message` - The message passed to the contract.
* `revert_options` - The revert options created by the caller.

```rust
pub fn call(ctx: Context<''_, ''_, ''_, ''_, Call<''_>>, receiver: [u8; 20], message: Vec<u8>, revert_options: Option<RevertOptions>) -> Result<()> { /* ... */ }
```

#### Function `withdraw`

Withdraws SOL. Caller is TSS.

Arguments:

* `ctx` - The instruction context.
* `amount` - The amount of SOL to withdraw.
* `signature` - The TSS signature.
* `recovery_id` - The recovery ID for signature verification.
* `message_hash` - Message hash for signature verification.
* `nonce` - The current nonce value.

```rust
pub fn withdraw(ctx: Context<''_, ''_, ''_, ''_, Withdraw<''_>>, amount: u64, signature: [u8; 64], recovery_id: u8, message_hash: [u8; 32], nonce: u64) -> Result<()> { /* ... */ }
```

#### Function `withdraw_spl_token`

Withdraws SPL tokens. Caller is TSS.

Arguments:

* `ctx` - The instruction context.
* `decimals` - Token decimals for precision.
* `amount` - The amount of tokens to withdraw.
* `signature` - The TSS signature.
* `recovery_id` - The recovery ID for signature verification.
* `message_hash` - Message hash for signature verification.
* `nonce` - The current nonce value.

```rust
pub fn withdraw_spl_token(ctx: Context<''_, ''_, ''_, ''_, WithdrawSPLToken<''_>>, decimals: u8, amount: u64, signature: [u8; 64], recovery_id: u8, message_hash: [u8; 32], nonce: u64) -> Result<()> { /* ... */ }
```

## Module `instruction`

An Anchor generated module containing the program's set of
instructions, where each method handler in the `#[program]` mod is
associated with a struct defining the input arguments to the
method. These should be used directly, when one wants to serialize
Anchor instruction data, for example, when speciying
instructions on a client.

```rust
pub mod instruction { /* ... */ }
```

### Types

#### Struct `Initialize`

Instruction.

```rust
pub struct Initialize {
    pub tss_address: [u8; 20],
    pub chain_id: u64,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `tss_address` | `[u8; 20]` |  |
| `chain_id` | `u64` |  |

##### Implementations

###### Trait Implementations

- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **InstructionData**
- **Freeze**
- **UnwindSafe**
- **RefUnwindSafe**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **Sync**
- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **IntoEither**
- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Discriminator**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **Same**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **Unpin**
- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **Send**
#### Struct `IncrementNonce`

Instruction.

```rust
pub struct IncrementNonce {
    pub amount: u64,
    pub signature: [u8; 64],
    pub recovery_id: u8,
    pub message_hash: [u8; 32],
    pub nonce: u64,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `amount` | `u64` |  |
| `signature` | `[u8; 64]` |  |
| `recovery_id` | `u8` |  |
| `message_hash` | `[u8; 32]` |  |
| `nonce` | `u64` |  |

##### Implementations

###### Trait Implementations

- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **Same**
- **Send**
- **Unpin**
- **RefUnwindSafe**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **Freeze**
- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **IntoEither**
- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **Discriminator**
- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **UnwindSafe**
- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Sync**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **InstructionData**
- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

#### Struct `Execute`

Instruction.

```rust
pub struct Execute {
    pub amount: u64,
    pub sender: [u8; 20],
    pub data: Vec<u8>,
    pub signature: [u8; 64],
    pub recovery_id: u8,
    pub message_hash: [u8; 32],
    pub nonce: u64,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `amount` | `u64` |  |
| `sender` | `[u8; 20]` |  |
| `data` | `Vec<u8>` |  |
| `signature` | `[u8; 64]` |  |
| `recovery_id` | `u8` |  |
| `message_hash` | `[u8; 32]` |  |
| `nonce` | `u64` |  |

##### Implementations

###### Trait Implementations

- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **IntoEither**
- **Same**
- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Discriminator**
- **RefUnwindSafe**
- **Freeze**
- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **Unpin**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **UnwindSafe**
- **Sync**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Send**
- **InstructionData**
#### Struct `ExecuteRevert`

Instruction.

```rust
pub struct ExecuteRevert {
    pub amount: u64,
    pub sender: Pubkey,
    pub data: Vec<u8>,
    pub signature: [u8; 64],
    pub recovery_id: u8,
    pub message_hash: [u8; 32],
    pub nonce: u64,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `amount` | `u64` |  |
| `sender` | `Pubkey` |  |
| `data` | `Vec<u8>` |  |
| `signature` | `[u8; 64]` |  |
| `recovery_id` | `u8` |  |
| `message_hash` | `[u8; 32]` |  |
| `nonce` | `u64` |  |

##### Implementations

###### Trait Implementations

- **Same**
- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **Sync**
- **InstructionData**
- **UnwindSafe**
- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **Freeze**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Discriminator**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **Unpin**
- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **RefUnwindSafe**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **IntoEither**
- **Send**
#### Struct `ExecuteSplToken`

Instruction.

```rust
pub struct ExecuteSplToken {
    pub decimals: u8,
    pub amount: u64,
    pub sender: [u8; 20],
    pub data: Vec<u8>,
    pub signature: [u8; 64],
    pub recovery_id: u8,
    pub message_hash: [u8; 32],
    pub nonce: u64,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `decimals` | `u8` |  |
| `amount` | `u64` |  |
| `sender` | `[u8; 20]` |  |
| `data` | `Vec<u8>` |  |
| `signature` | `[u8; 64]` |  |
| `recovery_id` | `u8` |  |
| `message_hash` | `[u8; 32]` |  |
| `nonce` | `u64` |  |

##### Implementations

###### Trait Implementations

- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **Same**
- **Send**
- **Sync**
- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **IntoEither**
- **Unpin**
- **Freeze**
- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **InstructionData**
- **RefUnwindSafe**
- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **UnwindSafe**
- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Discriminator**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

#### Struct `ExecuteSplTokenRevert`

Instruction.

```rust
pub struct ExecuteSplTokenRevert {
    pub decimals: u8,
    pub amount: u64,
    pub sender: Pubkey,
    pub data: Vec<u8>,
    pub signature: [u8; 64],
    pub recovery_id: u8,
    pub message_hash: [u8; 32],
    pub nonce: u64,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `decimals` | `u8` |  |
| `amount` | `u64` |  |
| `sender` | `Pubkey` |  |
| `data` | `Vec<u8>` |  |
| `signature` | `[u8; 64]` |  |
| `recovery_id` | `u8` |  |
| `message_hash` | `[u8; 32]` |  |
| `nonce` | `u64` |  |

##### Implementations

###### Trait Implementations

- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **UnwindSafe**
- **RefUnwindSafe**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **Unpin**
- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Same**
- **Discriminator**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **InstructionData**
- **Freeze**
- **IntoEither**
- **Send**
- **Sync**
#### Struct `SetDepositPaused`

Instruction.

```rust
pub struct SetDepositPaused {
    pub deposit_paused: bool,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `deposit_paused` | `bool` |  |

##### Implementations

###### Trait Implementations

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Send**
- **Freeze**
- **Unpin**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **UnwindSafe**
- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Discriminator**
- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Same**
- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **Sync**
- **IntoEither**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **InstructionData**
- **RefUnwindSafe**
- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

#### Struct `UpdateTss`

Instruction.

```rust
pub struct UpdateTss {
    pub tss_address: [u8; 20],
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `tss_address` | `[u8; 20]` |  |

##### Implementations

###### Trait Implementations

- **Same**
- **InstructionData**
- **Unpin**
- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **Discriminator**
- **Freeze**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **Send**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **Sync**
- **IntoEither**
- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **UnwindSafe**
- **RefUnwindSafe**
- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

#### Struct `UpdateAuthority`

Instruction.

```rust
pub struct UpdateAuthority {
    pub new_authority_address: Pubkey,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `new_authority_address` | `Pubkey` |  |

##### Implementations

###### Trait Implementations

- **Send**
- **UnwindSafe**
- **RefUnwindSafe**
- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **Sync**
- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **Same**
- **Freeze**
- **Unpin**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **IntoEither**
- **Discriminator**
- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **InstructionData**
- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

#### Struct `ResetNonce`

Instruction.

```rust
pub struct ResetNonce {
    pub new_nonce: u64,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `new_nonce` | `u64` |  |

##### Implementations

###### Trait Implementations

- **Same**
- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **IntoEither**
- **Freeze**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **UnwindSafe**
- **RefUnwindSafe**
- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **InstructionData**
- **Sync**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Unpin**
- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **Send**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Discriminator**
#### Struct `WhitelistSplMint`

Instruction.

```rust
pub struct WhitelistSplMint {
    pub signature: [u8; 64],
    pub recovery_id: u8,
    pub message_hash: [u8; 32],
    pub nonce: u64,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `signature` | `[u8; 64]` |  |
| `recovery_id` | `u8` |  |
| `message_hash` | `[u8; 32]` |  |
| `nonce` | `u64` |  |

##### Implementations

###### Trait Implementations

- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **UnwindSafe**
- **Discriminator**
- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Same**
- **RefUnwindSafe**
- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **Send**
- **InstructionData**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **Freeze**
- **Unpin**
- **IntoEither**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **Sync**
#### Struct `UnwhitelistSplMint`

Instruction.

```rust
pub struct UnwhitelistSplMint {
    pub signature: [u8; 64],
    pub recovery_id: u8,
    pub message_hash: [u8; 32],
    pub nonce: u64,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `signature` | `[u8; 64]` |  |
| `recovery_id` | `u8` |  |
| `message_hash` | `[u8; 32]` |  |
| `nonce` | `u64` |  |

##### Implementations

###### Trait Implementations

- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **Send**
- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **Unpin**
- **Same**
- **Discriminator**
- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **IntoEither**
- **Freeze**
- **Sync**
- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **InstructionData**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **RefUnwindSafe**
- **UnwindSafe**
#### Struct `Deposit`

Instruction.

```rust
pub struct Deposit {
    pub amount: u64,
    pub receiver: [u8; 20],
    pub revert_options: Option<RevertOptions>,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `amount` | `u64` |  |
| `receiver` | `[u8; 20]` |  |
| `revert_options` | `Option<RevertOptions>` |  |

##### Implementations

###### Trait Implementations

- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **RefUnwindSafe**
- **Unpin**
- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **Discriminator**
- **InstructionData**
- **Freeze**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **UnwindSafe**
- **Sync**
- **Send**
- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **IntoEither**
- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **Same**
#### Struct `DepositAndCall`

Instruction.

```rust
pub struct DepositAndCall {
    pub amount: u64,
    pub receiver: [u8; 20],
    pub message: Vec<u8>,
    pub revert_options: Option<RevertOptions>,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `amount` | `u64` |  |
| `receiver` | `[u8; 20]` |  |
| `message` | `Vec<u8>` |  |
| `revert_options` | `Option<RevertOptions>` |  |

##### Implementations

###### Trait Implementations

- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **Sync**
- **UnwindSafe**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **Discriminator**
- **Freeze**
- **Same**
- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **IntoEither**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **InstructionData**
- **RefUnwindSafe**
- **Send**
- **Unpin**
- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

#### Struct `DepositSplToken`

Instruction.

```rust
pub struct DepositSplToken {
    pub amount: u64,
    pub receiver: [u8; 20],
    pub revert_options: Option<RevertOptions>,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `amount` | `u64` |  |
| `receiver` | `[u8; 20]` |  |
| `revert_options` | `Option<RevertOptions>` |  |

##### Implementations

###### Trait Implementations

- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **Sync**
- **Discriminator**
- **Freeze**
- **IntoEither**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **RefUnwindSafe**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **Same**
- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **Send**
- **InstructionData**
- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **UnwindSafe**
- **Unpin**
#### Struct `DepositSplTokenAndCall`

Instruction.

```rust
pub struct DepositSplTokenAndCall {
    pub amount: u64,
    pub receiver: [u8; 20],
    pub message: Vec<u8>,
    pub revert_options: Option<RevertOptions>,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `amount` | `u64` |  |
| `receiver` | `[u8; 20]` |  |
| `message` | `Vec<u8>` |  |
| `revert_options` | `Option<RevertOptions>` |  |

##### Implementations

###### Trait Implementations

- **Freeze**
- **Discriminator**
- **Sync**
- **Unpin**
- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **RefUnwindSafe**
- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **UnwindSafe**
- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **InstructionData**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **Send**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **IntoEither**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **Same**
- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

#### Struct `Call`

Instruction.

```rust
pub struct Call {
    pub receiver: [u8; 20],
    pub message: Vec<u8>,
    pub revert_options: Option<RevertOptions>,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `receiver` | `[u8; 20]` |  |
| `message` | `Vec<u8>` |  |
| `revert_options` | `Option<RevertOptions>` |  |

##### Implementations

###### Trait Implementations

- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Freeze**
- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **Send**
- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **Sync**
- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **IntoEither**
- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Discriminator**
- **InstructionData**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **Same**
- **Unpin**
- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **RefUnwindSafe**
- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **UnwindSafe**
#### Struct `Withdraw`

Instruction.

```rust
pub struct Withdraw {
    pub amount: u64,
    pub signature: [u8; 64],
    pub recovery_id: u8,
    pub message_hash: [u8; 32],
    pub nonce: u64,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `amount` | `u64` |  |
| `signature` | `[u8; 64]` |  |
| `recovery_id` | `u8` |  |
| `message_hash` | `[u8; 32]` |  |
| `nonce` | `u64` |  |

##### Implementations

###### Trait Implementations

- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **Same**
- **Unpin**
- **Send**
- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **UnwindSafe**
- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **IntoEither**
- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **InstructionData**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **Freeze**
- **Sync**
- **RefUnwindSafe**
- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Discriminator**
- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

#### Struct `WithdrawSplToken`

Instruction.

```rust
pub struct WithdrawSplToken {
    pub decimals: u8,
    pub amount: u64,
    pub signature: [u8; 64],
    pub recovery_id: u8,
    pub message_hash: [u8; 32],
    pub nonce: u64,
}
```

##### Fields

| Name | Type | Documentation |
|------|------|---------------|
| `decimals` | `u8` |  |
| `amount` | `u64` |  |
| `signature` | `[u8; 64]` |  |
| `recovery_id` | `u8` |  |
| `message_hash` | `[u8; 32]` |  |
| `nonce` | `u64` |  |

##### Implementations

###### Trait Implementations

- **Any**
  - ```rust
    fn type_id(self: &Self) -> TypeId { /* ... */ }
    ```

- **IntoEither**
- **BorshSerialize**
  - ```rust
    fn serialize<W: borsh::maybestd::io::Write>(self: &Self, writer: &mut W) -> ::core::result::Result<(), borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Unpin**
- **From**
  - ```rust
    fn from(t: T) -> T { /* ... */ }
    ```
    Returns the argument unchanged.

- **Borrow**
  - ```rust
    fn borrow(self: &Self) -> &T { /* ... */ }
    ```

- **Discriminator**
- **InstructionData**
- **Owner**
  - ```rust
    fn owner() -> Pubkey { /* ... */ }
    ```

- **VZip**
  - ```rust
    fn vzip(self: Self) -> V { /* ... */ }
    ```

- **Send**
- **RefUnwindSafe**
- **Same**
- **Freeze**
- **BorshDeserialize**
  - ```rust
    fn deserialize_reader<R: borsh::maybestd::io::Read>(reader: &mut R) -> ::core::result::Result<Self, borsh::maybestd::io::Error> { /* ... */ }
    ```

- **Into**
  - ```rust
    fn into(self: Self) -> U { /* ... */ }
    ```
    Calls `U::from(self)`.

- **Sync**
- **BorrowMut**
  - ```rust
    fn borrow_mut(self: &mut Self) -> &mut T { /* ... */ }
    ```

- **TryInto**
  - ```rust
    fn try_into(self: Self) -> Result<U, <U as TryFrom<T>>::Error> { /* ... */ }
    ```

- **UnwindSafe**
- **TryFrom**
  - ```rust
    fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error> { /* ... */ }
    ```

## Module `accounts`

An Anchor generated module, providing a set of structs
mirroring the structs deriving `Accounts`, where each field is
a `Pubkey`. This is useful for specifying accounts for a client.

```rust
pub mod accounts { /* ... */ }
```

### Re-exports

#### Re-export `crate::__client_accounts_deposit_spl_token::*`

```rust
pub use crate::__client_accounts_deposit_spl_token::*;
```

#### Re-export `crate::__client_accounts_call::*`

```rust
pub use crate::__client_accounts_call::*;
```

#### Re-export `crate::__client_accounts_initialize::*`

```rust
pub use crate::__client_accounts_initialize::*;
```

#### Re-export `crate::__client_accounts_whitelist::*`

```rust
pub use crate::__client_accounts_whitelist::*;
```

#### Re-export `crate::__client_accounts_update_authority::*`

```rust
pub use crate::__client_accounts_update_authority::*;
```

#### Re-export `crate::__client_accounts_unwhitelist::*`

```rust
pub use crate::__client_accounts_unwhitelist::*;
```

#### Re-export `crate::__client_accounts_execute::*`

```rust
pub use crate::__client_accounts_execute::*;
```

#### Re-export `crate::__client_accounts_withdraw_spl_token::*`

```rust
pub use crate::__client_accounts_withdraw_spl_token::*;
```

#### Re-export `crate::__client_accounts_withdraw::*`

```rust
pub use crate::__client_accounts_withdraw::*;
```

#### Re-export `crate::__client_accounts_update_tss::*`

```rust
pub use crate::__client_accounts_update_tss::*;
```

#### Re-export `crate::__client_accounts_deposit::*`

```rust
pub use crate::__client_accounts_deposit::*;
```

#### Re-export `crate::__client_accounts_update_paused::*`

```rust
pub use crate::__client_accounts_update_paused::*;
```

#### Re-export `crate::__client_accounts_execute_spl_token::*`

```rust
pub use crate::__client_accounts_execute_spl_token::*;
```

#### Re-export `crate::__client_accounts_increment_nonce::*`

```rust
pub use crate::__client_accounts_increment_nonce::*;
```

#### Re-export `crate::__client_accounts_reset_nonce::*`

```rust
pub use crate::__client_accounts_reset_nonce::*;
```

## Functions

### Function `check_id`

Confirms that a given pubkey is equivalent to the program ID

```rust
pub fn check_id(id: &anchor_lang::solana_program::pubkey::Pubkey) -> bool { /* ... */ }
```

### Function `id`

Returns the program ID

```rust
pub fn id() -> anchor_lang::solana_program::pubkey::Pubkey { /* ... */ }
```

### Function `id_const`

Const version of `ID`

```rust
pub const fn id_const() -> anchor_lang::solana_program::pubkey::Pubkey { /* ... */ }
```

### Function `entrypoint`

**Attributes:**

- `#[no_mangle]`

# Safety

```rust
pub unsafe extern "C" fn entrypoint(input: *mut u8) -> u64 { /* ... */ }
```

### Function `entry`

The Anchor codegen exposes a programming model where a user defines
a set of methods inside of a `#[program]` module in a way similar
to writing RPC request handlers. The macro then generates a bunch of
code wrapping these user defined methods into something that can be
executed on Solana.

These methods fall into one category for now.

Global methods - regular methods inside of the `#[program]`.

Care must be taken by the codegen to prevent collisions between
methods in these different namespaces. For this reason, Anchor uses
a variant of sighash to perform method dispatch, rather than
something like a simple enum variant discriminator.

The execution flow of the generated code can be roughly outlined:

* Start program via the entrypoint.
* Check whether the declared program id matches the input program
  id. If it's not, return an error.
* Find and invoke the method based on whether the instruction data
  starts with the method's discriminator.
* Run the method handler wrapper. This wraps the code the user
  actually wrote, deserializing the accounts, constructing the
  context, invoking the user's code, and finally running the exit
  routine, which typically persists account changes.

The `entry` function here, defines the standard entry to a Solana
program, where execution begins.

```rust
pub fn entry<''info>(program_id: &Pubkey, accounts: &''info [AccountInfo<''info>], data: &[u8]) -> anchor_lang::solana_program::entrypoint::ProgramResult { /* ... */ }
```

## Constants and Statics

### Static `ID`

The static program ID

```rust
pub static ID: anchor_lang::solana_program::pubkey::Pubkey = _;
```

### Constant `ID_CONST`

Const version of `ID`

```rust
pub const ID_CONST: anchor_lang::solana_program::pubkey::Pubkey = _;
```

## Re-exports

### Re-export `DEPOSIT_FEE`

```rust
pub use utils::DEPOSIT_FEE;
```

### Re-export `contexts::*`

```rust
pub use contexts::*;
```

### Re-export `errors::*`

```rust
pub use errors::*;
```

### Re-export `state::*`

```rust
pub use state::*;
```

