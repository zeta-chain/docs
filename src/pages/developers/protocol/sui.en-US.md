


# Module `gateway::gateway`



-  [Struct `Vault`](#gateway_gateway_Vault)
-  [Struct `Gateway`](#gateway_gateway_Gateway)
-  [Struct `WithdrawCap`](#gateway_gateway_WithdrawCap)
-  [Struct `WhitelistCap`](#gateway_gateway_WhitelistCap)
-  [Struct `AdminCap`](#gateway_gateway_AdminCap)
-  [Struct `DepositEvent`](#gateway_gateway_DepositEvent)
-  [Struct `DepositAndCallEvent`](#gateway_gateway_DepositAndCallEvent)
-  [Struct `WithdrawEvent`](#gateway_gateway_WithdrawEvent)
-  [Struct `NonceIncreaseEvent`](#gateway_gateway_NonceIncreaseEvent)
-  [Struct `DonateEvent`](#gateway_gateway_DonateEvent)
-  [Constants](#@Constants_0)
-  [Function `init`](#gateway_gateway_init)
-  [Function `increase_nonce`](#gateway_gateway_increase_nonce)
-  [Function `withdraw`](#gateway_gateway_withdraw)
-  [Function `whitelist`](#gateway_gateway_whitelist)
-  [Function `unwhitelist`](#gateway_gateway_unwhitelist)
-  [Function `issue_withdraw_and_whitelist_cap`](#gateway_gateway_issue_withdraw_and_whitelist_cap)
-  [Function `pause`](#gateway_gateway_pause)
-  [Function `unpause`](#gateway_gateway_unpause)
-  [Function `reset_nonce`](#gateway_gateway_reset_nonce)
-  [Function `deposit`](#gateway_gateway_deposit)
-  [Function `deposit_and_call`](#gateway_gateway_deposit_and_call)
-  [Function `donate`](#gateway_gateway_donate)
-  [Function `check_receiver_and_deposit_to_vault`](#gateway_gateway_check_receiver_and_deposit_to_vault)
-  [Function `withdraw_impl`](#gateway_gateway_withdraw_impl)
-  [Function `whitelist_impl`](#gateway_gateway_whitelist_impl)
-  [Function `unwhitelist_impl`](#gateway_gateway_unwhitelist_impl)
-  [Function `issue_withdraw_and_whitelist_cap_impl`](#gateway_gateway_issue_withdraw_and_whitelist_cap_impl)
-  [Function `pause_impl`](#gateway_gateway_pause_impl)
-  [Function `unpause_impl`](#gateway_gateway_unpause_impl)
-  [Function `nonce`](#gateway_gateway_nonce)
-  [Function `active_withdraw_cap`](#gateway_gateway_active_withdraw_cap)
-  [Function `active_whitelist_cap`](#gateway_gateway_active_whitelist_cap)
-  [Function `vault_balance`](#gateway_gateway_vault_balance)
-  [Function `is_paused`](#gateway_gateway_is_paused)
-  [Function `is_whitelisted`](#gateway_gateway_is_whitelisted)
-  [Function `coin_name`](#gateway_gateway_coin_name)


<pre><code><b>use</b> gateway::evm;
<b>use</b> std::address;
<b>use</b> std::ascii;
<b>use</b> std::bcs;
<b>use</b> std::option;
<b>use</b> std::string;
<b>use</b> std::type_name;
<b>use</b> std::vector;
<b>use</b> sui::address;
<b>use</b> sui::bag;
<b>use</b> sui::balance;
<b>use</b> sui::coin;
<b>use</b> sui::config;
<b>use</b> sui::deny_list;
<b>use</b> sui::dynamic_field;
<b>use</b> sui::dynamic_object_field;
<b>use</b> sui::event;
<b>use</b> sui::hex;
<b>use</b> sui::object;
<b>use</b> sui::party;
<b>use</b> sui::sui;
<b>use</b> sui::table;
<b>use</b> sui::transfer;
<b>use</b> sui::tx_context;
<b>use</b> sui::types;
<b>use</b> sui::url;
<b>use</b> sui::vec_map;
<b>use</b> sui::vec_set;
</code></pre>





## Struct `Vault`



<pre><code><b>public</b> <b>struct</b> Vault&lt;<b>phantom</b> T&gt; <b>has</b> store
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>balance: sui::balance::Balance&lt;T&gt;</code>
</dt>
<dd>
</dd>
<dt>
<code>whitelisted: bool</code>
</dt>
<dd>
</dd>
</dl>


</details>



## Struct `Gateway`



<pre><code><b>public</b> <b>struct</b> Gateway <b>has</b> key
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>id: sui::object::UID</code>
</dt>
<dd>
</dd>
<dt>
<code>vaults: sui::bag::Bag</code>
</dt>
<dd>
</dd>
<dt>
<code>nonce: u64</code>
</dt>
<dd>
</dd>
<dt>
<code>active_withdraw_cap: sui::object::ID</code>
</dt>
<dd>
</dd>
<dt>
<code>active_whitelist_cap: sui::object::ID</code>
</dt>
<dd>
</dd>
<dt>
<code>deposit_paused: bool</code>
</dt>
<dd>
</dd>
</dl>


</details>



## Struct `WithdrawCap`



<pre><code><b>public</b> <b>struct</b> WithdrawCap <b>has</b> key, store
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>id: sui::object::UID</code>
</dt>
<dd>
</dd>
</dl>


</details>



## Struct `WhitelistCap`



<pre><code><b>public</b> <b>struct</b> WhitelistCap <b>has</b> key, store
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>id: sui::object::UID</code>
</dt>
<dd>
</dd>
</dl>


</details>



## Struct `AdminCap`



<pre><code><b>public</b> <b>struct</b> AdminCap <b>has</b> key, store
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>id: sui::object::UID</code>
</dt>
<dd>
</dd>
</dl>


</details>



## Struct `DepositEvent`



<pre><code><b>public</b> <b>struct</b> DepositEvent <b>has</b> <b>copy</b>, drop
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>coin_type: std::ascii::String</code>
</dt>
<dd>
</dd>
<dt>
<code>amount: u64</code>
</dt>
<dd>
</dd>
<dt>
<code>sender: <b>address</b></code>
</dt>
<dd>
</dd>
<dt>
<code>receiver: std::ascii::String</code>
</dt>
<dd>
</dd>
</dl>


</details>



## Struct `DepositAndCallEvent`



<pre><code><b>public</b> <b>struct</b> DepositAndCallEvent <b>has</b> <b>copy</b>, drop
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>coin_type: std::ascii::String</code>
</dt>
<dd>
</dd>
<dt>
<code>amount: u64</code>
</dt>
<dd>
</dd>
<dt>
<code>sender: <b>address</b></code>
</dt>
<dd>
</dd>
<dt>
<code>receiver: std::ascii::String</code>
</dt>
<dd>
</dd>
<dt>
<code>payload: vector&lt;u8&gt;</code>
</dt>
<dd>
</dd>
</dl>


</details>



## Struct `WithdrawEvent`



<pre><code><b>public</b> <b>struct</b> WithdrawEvent <b>has</b> <b>copy</b>, drop
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>coin_type: std::ascii::String</code>
</dt>
<dd>
</dd>
<dt>
<code>amount: u64</code>
</dt>
<dd>
</dd>
<dt>
<code>sender: <b>address</b></code>
</dt>
<dd>
</dd>
<dt>
<code>receiver: <b>address</b></code>
</dt>
<dd>
</dd>
<dt>
<code>nonce: u64</code>
</dt>
<dd>
</dd>
</dl>


</details>



## Struct `NonceIncreaseEvent`



<pre><code><b>public</b> <b>struct</b> NonceIncreaseEvent <b>has</b> <b>copy</b>, drop
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>sender: <b>address</b></code>
</dt>
<dd>
</dd>
<dt>
<code>nonce: u64</code>
</dt>
<dd>
</dd>
</dl>


</details>



## Struct `DonateEvent`



<pre><code><b>public</b> <b>struct</b> DonateEvent <b>has</b> <b>copy</b>, drop
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>coin_type: std::ascii::String</code>
</dt>
<dd>
</dd>
<dt>
<code>amount: u64</code>
</dt>
<dd>
</dd>
<dt>
<code>sender: <b>address</b></code>
</dt>
<dd>
</dd>
</dl>


</details>



## Constants






<pre><code><b>const</b> EAlreadyWhitelisted: u64 = 0;
</code></pre>







<pre><code><b>const</b> EInvalidReceiverAddress: u64 = 1;
</code></pre>







<pre><code><b>const</b> ENotWhitelisted: u64 = 2;
</code></pre>







<pre><code><b>const</b> ENonceMismatch: u64 = 3;
</code></pre>







<pre><code><b>const</b> EPayloadTooLong: u64 = 4;
</code></pre>







<pre><code><b>const</b> EInactiveWithdrawCap: u64 = 5;
</code></pre>







<pre><code><b>const</b> EInactiveWhitelistCap: u64 = 6;
</code></pre>







<pre><code><b>const</b> EDepositPaused: u64 = 7;
</code></pre>







<pre><code><b>const</b> PayloadMaxLength: u64 = 1024;
</code></pre>





## Function `init`



<pre><code><b>fun</b> init(ctx: &<b>mut</b> sui::tx_context::TxContext)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>fun</b> init(ctx: &<b>mut</b> TxContext) {
    // to withdraw tokens from the gateway, the caller must have the WithdrawCap
    <b>let</b> withdraw_cap = WithdrawCap {
        id: object::new(ctx),
    };
    // to whitelist a new vault, the caller must have the WhitelistCap
    <b>let</b> whitelist_cap = WhitelistCap {
        id: object::new(ctx),
    };
    // to whitelist a new vault, the caller must have the AdminCap
    <b>let</b> admin_cap = AdminCap {
        id: object::new(ctx),
    };
    // create and share the gateway object
    <b>let</b> <b>mut</b> gateway = Gateway {
        id: object::new(ctx),
        vaults: bag::new(ctx),
        nonce: 0,
        active_withdraw_cap: object::id(&withdraw_cap),
        active_whitelist_cap: object::id(&whitelist_cap),
        deposit_paused: <b>false</b>,
    };
    // whitelist SUI by default
    whitelist_impl&lt;SUI&gt;(&<b>mut</b> gateway, &whitelist_cap);
    transfer::transfer(withdraw_cap, tx_context::sender(ctx));
    transfer::transfer(whitelist_cap, tx_context::sender(ctx));
    transfer::transfer(admin_cap, tx_context::sender(ctx));
    transfer::share_object(gateway);
}
</code></pre>



</details>



## Function `increase_nonce`



<pre><code><b>entry</b> <b>fun</b> increase_nonce(gateway: &<b>mut</b> gateway::gateway::Gateway, nonce: u64, cap: &gateway::gateway::WithdrawCap, ctx: &sui::tx_context::TxContext)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> increase_nonce(gateway: &<b>mut</b> Gateway, nonce: u64, cap: &WithdrawCap, ctx: &TxContext) {
    <b>assert</b>!(gateway.active_withdraw_cap == object::id(cap), EInactiveWithdrawCap);
    <b>assert</b>!(nonce == gateway.nonce, ENonceMismatch);
    gateway.nonce = nonce + 1;
    // Emit event
    event::emit(NonceIncreaseEvent {
        sender: tx_context::sender(ctx),
        nonce: gateway.nonce,
    });
}
</code></pre>



</details>



## Function `withdraw`



<pre><code><b>entry</b> <b>fun</b> withdraw&lt;T&gt;(gateway: &<b>mut</b> gateway::gateway::Gateway, amount: u64, nonce: u64, receiver: <b>address</b>, gas_budget: u64, cap: &gateway::gateway::WithdrawCap, ctx: &<b>mut</b> sui::tx_context::TxContext)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> withdraw&lt;T&gt;(
    gateway: &<b>mut</b> Gateway,
    amount: u64,
    nonce: u64,
    receiver: <b>address</b>,
    gas_budget: u64,
    cap: &WithdrawCap,
    ctx: &<b>mut</b> TxContext,
) {
    <b>let</b> (coins, coins_gas_budget) = withdraw_impl&lt;T&gt;(gateway, amount, nonce, gas_budget, cap, ctx);
    transfer::public_transfer(coins, receiver);
    transfer::public_transfer(coins_gas_budget, tx_context::sender(ctx));
    // Emit event
    event::emit(WithdrawEvent {
        coin_type: coin_name&lt;T&gt;(),
        amount: amount,
        sender: tx_context::sender(ctx),
        receiver: receiver,
        nonce: nonce,
    });
}
</code></pre>



</details>



## Function `whitelist`



<pre><code><b>entry</b> <b>fun</b> whitelist&lt;T&gt;(gateway: &<b>mut</b> gateway::gateway::Gateway, cap: &gateway::gateway::WhitelistCap)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> whitelist&lt;T&gt;(gateway: &<b>mut</b> Gateway, cap: &WhitelistCap) {
    whitelist_impl&lt;T&gt;(gateway, cap)
}
</code></pre>



</details>



## Function `unwhitelist`



<pre><code><b>entry</b> <b>fun</b> unwhitelist&lt;T&gt;(gateway: &<b>mut</b> gateway::gateway::Gateway, cap: &gateway::gateway::AdminCap)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> unwhitelist&lt;T&gt;(gateway: &<b>mut</b> Gateway, cap: &AdminCap) {
    unwhitelist_impl&lt;T&gt;(gateway, cap)
}
</code></pre>



</details>



## Function `issue_withdraw_and_whitelist_cap`



<pre><code><b>entry</b> <b>fun</b> issue_withdraw_and_whitelist_cap(gateway: &<b>mut</b> gateway::gateway::Gateway, _cap: &gateway::gateway::AdminCap, ctx: &<b>mut</b> sui::tx_context::TxContext)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> issue_withdraw_and_whitelist_cap(
    gateway: &<b>mut</b> Gateway,
    _cap: &AdminCap,
    ctx: &<b>mut</b> TxContext,
) {
    <b>let</b> (withdraw_cap, whitelist_cap) = issue_withdraw_and_whitelist_cap_impl(gateway, _cap, ctx);
    transfer::transfer(withdraw_cap, tx_context::sender(ctx));
    transfer::transfer(whitelist_cap, tx_context::sender(ctx));
}
</code></pre>



</details>



## Function `pause`



<pre><code><b>entry</b> <b>fun</b> pause(gateway: &<b>mut</b> gateway::gateway::Gateway, cap: &gateway::gateway::AdminCap)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> pause(gateway: &<b>mut</b> Gateway, cap: &AdminCap) {
    pause_impl(gateway, cap)
}
</code></pre>



</details>



## Function `unpause`



<pre><code><b>entry</b> <b>fun</b> unpause(gateway: &<b>mut</b> gateway::gateway::Gateway, cap: &gateway::gateway::AdminCap)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> unpause(gateway: &<b>mut</b> Gateway, cap: &AdminCap) {
    unpause_impl(gateway, cap)
}
</code></pre>



</details>



## Function `reset_nonce`



<pre><code><b>entry</b> <b>fun</b> reset_nonce(gateway: &<b>mut</b> gateway::gateway::Gateway, nonce: u64, _cap: &gateway::gateway::AdminCap)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> reset_nonce(gateway: &<b>mut</b> Gateway, nonce: u64, _cap: &AdminCap) {
    gateway.nonce = nonce;
}
</code></pre>



</details>



## Function `deposit`



<pre><code><b>public</b> <b>entry</b> <b>fun</b> deposit&lt;T&gt;(gateway: &<b>mut</b> gateway::gateway::Gateway, coins: sui::coin::Coin&lt;T&gt;, receiver: std::ascii::String, ctx: &<b>mut</b> sui::tx_context::TxContext)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>entry</b> <b>fun</b> deposit&lt;T&gt;(
    gateway: &<b>mut</b> Gateway,
    coins: Coin&lt;T&gt;,
    receiver: String,
    ctx: &<b>mut</b> TxContext,
) {
    <b>let</b> amount = coins.value();
    <b>let</b> coin_name = coin_name&lt;T&gt;();
    check_receiver_and_deposit_to_vault(gateway, coins, receiver);
    // Emit deposit event
    event::emit(DepositEvent {
        coin_type: coin_name,
        amount: amount,
        sender: tx_context::sender(ctx),
        receiver: receiver,
    });
}
</code></pre>



</details>



## Function `deposit_and_call`



<pre><code><b>public</b> <b>entry</b> <b>fun</b> deposit_and_call&lt;T&gt;(gateway: &<b>mut</b> gateway::gateway::Gateway, coins: sui::coin::Coin&lt;T&gt;, receiver: std::ascii::String, payload: vector&lt;u8&gt;, ctx: &<b>mut</b> sui::tx_context::TxContext)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>entry</b> <b>fun</b> deposit_and_call&lt;T&gt;(
    gateway: &<b>mut</b> Gateway,
    coins: Coin&lt;T&gt;,
    receiver: String,
    payload: vector&lt;u8&gt;,
    ctx: &<b>mut</b> TxContext,
) {
    <b>assert</b>!(payload.length() &lt;= PayloadMaxLength, EPayloadTooLong);
    <b>let</b> amount = coins.value();
    <b>let</b> coin_name = coin_name&lt;T&gt;();
    check_receiver_and_deposit_to_vault(gateway, coins, receiver);
    // Emit deposit event
    event::emit(DepositAndCallEvent {
        coin_type: coin_name,
        amount: amount,
        sender: tx_context::sender(ctx),
        receiver: receiver,
        payload: payload,
    });
}
</code></pre>



</details>



## Function `donate`



<pre><code><b>public</b> <b>entry</b> <b>fun</b> donate&lt;T&gt;(gateway: &<b>mut</b> gateway::gateway::Gateway, coins: sui::coin::Coin&lt;T&gt;, ctx: &<b>mut</b> sui::tx_context::TxContext)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>entry</b> <b>fun</b> donate&lt;T&gt;(
    gateway: &<b>mut</b> Gateway,
    coins: Coin&lt;T&gt;,
    ctx: &<b>mut</b> TxContext,
) {
    <b>let</b> amount = coins.value();
    <b>let</b> coin_name = coin_name&lt;T&gt;();
    // <b>use</b> check_receiver_and_deposit_to_vault to deposit and provide the zero <b>address</b> <b>as</b> receiver
    // receiver is only passed to the function to ensure the <b>address</b> is valid
    check_receiver_and_deposit_to_vault(gateway, coins, string(b"0x0000000000000000000000000000000000000000"));
    // Emit donate event
    event::emit(DonateEvent {
        coin_type: coin_name,
        amount: amount,
        sender: tx_context::sender(ctx),
    });
}
</code></pre>



</details>



## Function `check_receiver_and_deposit_to_vault`



<pre><code><b>fun</b> check_receiver_and_deposit_to_vault&lt;T&gt;(gateway: &<b>mut</b> gateway::gateway::Gateway, coins: sui::coin::Coin&lt;T&gt;, receiver: std::ascii::String)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>fun</b> check_receiver_and_deposit_to_vault&lt;T&gt;(
    gateway: &<b>mut</b> Gateway,
    coins: Coin&lt;T&gt;,
    receiver: String,
) {
    <b>assert</b>!(evm::is_valid_evm_address(receiver), EInvalidReceiverAddress);
    <b>assert</b>!(is_whitelisted&lt;T&gt;(gateway), ENotWhitelisted);
    <b>assert</b>!(!gateway.deposit_paused, EDepositPaused);
    // Deposit the coin into the vault
    <b>let</b> coin_name = coin_name&lt;T&gt;();
    <b>let</b> vault = bag::borrow_mut&lt;String, Vault&lt;T&gt;&gt;(&<b>mut</b> gateway.vaults, coin_name);
    balance::join(&<b>mut</b> vault.balance, coins.into_balance());
}
</code></pre>



</details>



## Function `withdraw_impl`



<pre><code><b>public</b> <b>fun</b> withdraw_impl&lt;T&gt;(gateway: &<b>mut</b> gateway::gateway::Gateway, amount: u64, nonce: u64, gas_budget: u64, cap: &gateway::gateway::WithdrawCap, ctx: &<b>mut</b> sui::tx_context::TxContext): (sui::coin::Coin&lt;T&gt;, sui::coin::Coin&lt;sui::sui::SUI&gt;)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> withdraw_impl&lt;T&gt;(
    gateway: &<b>mut</b> Gateway,
    amount: u64,
    nonce: u64,
    gas_budget: u64,
    cap: &WithdrawCap,
    ctx: &<b>mut</b> TxContext,
): (Coin&lt;T&gt;, Coin&lt;sui::sui::SUI&gt;) {
    <b>assert</b>!(gateway.active_withdraw_cap == object::id(cap), EInactiveWithdrawCap);
    <b>assert</b>!(is_whitelisted&lt;T&gt;(gateway), ENotWhitelisted);
    <b>assert</b>!(nonce == gateway.nonce, ENonceMismatch); // prevent replay
    gateway.nonce = nonce + 1;
    // Withdraw the coin from the vault
    <b>let</b> coin_name = coin_name&lt;T&gt;();
    <b>let</b> vault = bag::borrow_mut&lt;String, Vault&lt;T&gt;&gt;(&<b>mut</b> gateway.vaults, coin_name);
    <b>let</b> coins_out = coin::take(&<b>mut</b> vault.balance, amount, ctx);
    // Withdraw SUI to cover the gas budget
    <b>let</b> sui_vault = bag::borrow_mut&lt;String, Vault&lt;sui::sui::SUI&gt;&gt;(
        &<b>mut</b> gateway.vaults,
        coin_name&lt;sui::sui::SUI&gt;(),
    );
    <b>let</b> coins_gas_budget = coin::take(&<b>mut</b> sui_vault.balance, gas_budget, ctx);
    (coins_out, coins_gas_budget)
}
</code></pre>



</details>



## Function `whitelist_impl`



<pre><code><b>public</b> <b>fun</b> whitelist_impl&lt;T&gt;(gateway: &<b>mut</b> gateway::gateway::Gateway, cap: &gateway::gateway::WhitelistCap)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> whitelist_impl&lt;T&gt;(gateway: &<b>mut</b> Gateway, cap: &WhitelistCap) {
    <b>assert</b>!(gateway.active_whitelist_cap == object::id(cap), EInactiveWhitelistCap);
    <b>assert</b>!(is_whitelisted&lt;T&gt;(gateway) == <b>false</b>, EAlreadyWhitelisted);
    // <b>if</b> the vault already exists, set it to whitelisted, otherwise create a new vault
    <b>if</b> (bag::contains_with_type&lt;String, Vault&lt;T&gt;&gt;(&gateway.vaults, coin_name&lt;T&gt;())) {
        <b>let</b> vault = bag::borrow_mut&lt;String, Vault&lt;T&gt;&gt;(&<b>mut</b> gateway.vaults, coin_name&lt;T&gt;());
        vault.whitelisted = <b>true</b>;
    } <b>else</b> {
        <b>let</b> vault_name = coin_name&lt;T&gt;();
        <b>let</b> vault = Vault&lt;T&gt; {
            balance: balance::zero&lt;T&gt;(),
            whitelisted: <b>true</b>,
        };
        bag::add(&<b>mut</b> gateway.vaults, vault_name, vault);
    }
}
</code></pre>



</details>



## Function `unwhitelist_impl`



<pre><code><b>public</b> <b>fun</b> unwhitelist_impl&lt;T&gt;(gateway: &<b>mut</b> gateway::gateway::Gateway, _cap: &gateway::gateway::AdminCap)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> unwhitelist_impl&lt;T&gt;(gateway: &<b>mut</b> Gateway, _cap: &AdminCap) {
    <b>assert</b>!(is_whitelisted&lt;T&gt;(gateway), ENotWhitelisted);
    <b>let</b> vault = bag::borrow_mut&lt;String, Vault&lt;T&gt;&gt;(&<b>mut</b> gateway.vaults, coin_name&lt;T&gt;());
    vault.whitelisted = <b>false</b>;
}
</code></pre>



</details>



## Function `issue_withdraw_and_whitelist_cap_impl`



<pre><code><b>public</b> <b>fun</b> issue_withdraw_and_whitelist_cap_impl(gateway: &<b>mut</b> gateway::gateway::Gateway, _cap: &gateway::gateway::AdminCap, ctx: &<b>mut</b> sui::tx_context::TxContext): (gateway::gateway::WithdrawCap, gateway::gateway::WhitelistCap)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> issue_withdraw_and_whitelist_cap_impl(
    gateway: &<b>mut</b> Gateway,
    _cap: &AdminCap,
    ctx: &<b>mut</b> TxContext,
): (WithdrawCap, WhitelistCap) {
    <b>let</b> withdraw_cap = WithdrawCap {
        id: object::new(ctx),
    };
    <b>let</b> whitelist_cap = WhitelistCap {
        id: object::new(ctx),
    };
    gateway.active_withdraw_cap = object::id(&withdraw_cap);
    gateway.active_whitelist_cap = object::id(&whitelist_cap);
    (withdraw_cap, whitelist_cap)
}
</code></pre>



</details>



## Function `pause_impl`



<pre><code><b>public</b> <b>fun</b> pause_impl(gateway: &<b>mut</b> gateway::gateway::Gateway, _cap: &gateway::gateway::AdminCap)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> pause_impl(gateway: &<b>mut</b> Gateway, _cap: &AdminCap) {
    gateway.deposit_paused = <b>true</b>;
}
</code></pre>



</details>



## Function `unpause_impl`



<pre><code><b>public</b> <b>fun</b> unpause_impl(gateway: &<b>mut</b> gateway::gateway::Gateway, _cap: &gateway::gateway::AdminCap)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> unpause_impl(gateway: &<b>mut</b> Gateway, _cap: &AdminCap) {
    gateway.deposit_paused = <b>false</b>;
}
</code></pre>



</details>



## Function `nonce`



<pre><code><b>public</b> <b>fun</b> nonce(gateway: &gateway::gateway::Gateway): u64
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> nonce(gateway: &Gateway): u64 {
    gateway.nonce
}
</code></pre>



</details>



## Function `active_withdraw_cap`



<pre><code><b>public</b> <b>fun</b> active_withdraw_cap(gateway: &gateway::gateway::Gateway): sui::object::ID
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> active_withdraw_cap(gateway: &Gateway): ID {
    gateway.active_withdraw_cap
}
</code></pre>



</details>



## Function `active_whitelist_cap`



<pre><code><b>public</b> <b>fun</b> active_whitelist_cap(gateway: &gateway::gateway::Gateway): sui::object::ID
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> active_whitelist_cap(gateway: &Gateway): ID {
    gateway.active_whitelist_cap
}
</code></pre>



</details>



## Function `vault_balance`



<pre><code><b>public</b> <b>fun</b> vault_balance&lt;T&gt;(gateway: &gateway::gateway::Gateway): u64
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> vault_balance&lt;T&gt;(gateway: &Gateway): u64 {
    <b>if</b> (!is_whitelisted&lt;T&gt;(gateway)) {
        <b>return</b> 0
    };
    <b>let</b> coin_name = coin_name&lt;T&gt;();
    <b>let</b> vault = bag::borrow&lt;String, Vault&lt;T&gt;&gt;(&gateway.vaults, coin_name);
    balance::value(&vault.balance)
}
</code></pre>



</details>



## Function `is_paused`



<pre><code><b>public</b> <b>fun</b> is_paused(gateway: &gateway::gateway::Gateway): bool
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> is_paused(gateway: &Gateway): bool {
    gateway.deposit_paused
}
</code></pre>



</details>



## Function `is_whitelisted`



<pre><code><b>public</b> <b>fun</b> is_whitelisted&lt;T&gt;(gateway: &gateway::gateway::Gateway): bool
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> is_whitelisted&lt;T&gt;(gateway: &Gateway): bool {
    <b>let</b> vault_name = coin_name&lt;T&gt;();
    <b>if</b> (!bag::contains_with_type&lt;String, Vault&lt;T&gt;&gt;(&gateway.vaults, vault_name)) {
        <b>return</b> <b>false</b>
    };
    <b>let</b> vault = bag::borrow&lt;String, Vault&lt;T&gt;&gt;(&gateway.vaults, vault_name);
    vault.whitelisted
}
</code></pre>



</details>



## Function `coin_name`



<pre><code><b>fun</b> coin_name&lt;T&gt;(): std::ascii::String
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>fun</b> coin_name&lt;T&gt;(): String {
    into_string(get&lt;T&gt;())
}
</code></pre>



</details>
