
<a name="gateway_gateway"></a>

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


<pre><code><b>use</b> <a href="../gateway/evm.md#gateway_evm">gateway::evm</a>;
<b>use</b> <a href="../dependencies/std/address.md#std_address">std::address</a>;
<b>use</b> <a href="../dependencies/std/ascii.md#std_ascii">std::ascii</a>;
<b>use</b> <a href="../dependencies/std/bcs.md#std_bcs">std::bcs</a>;
<b>use</b> <a href="../dependencies/std/option.md#std_option">std::option</a>;
<b>use</b> <a href="../dependencies/std/string.md#std_string">std::string</a>;
<b>use</b> <a href="../dependencies/std/type_name.md#std_type_name">std::type_name</a>;
<b>use</b> <a href="../dependencies/std/vector.md#std_vector">std::vector</a>;
<b>use</b> <a href="../dependencies/sui/address.md#sui_address">sui::address</a>;
<b>use</b> <a href="../dependencies/sui/bag.md#sui_bag">sui::bag</a>;
<b>use</b> <a href="../dependencies/sui/balance.md#sui_balance">sui::balance</a>;
<b>use</b> <a href="../dependencies/sui/coin.md#sui_coin">sui::coin</a>;
<b>use</b> <a href="../dependencies/sui/config.md#sui_config">sui::config</a>;
<b>use</b> <a href="../dependencies/sui/deny_list.md#sui_deny_list">sui::deny_list</a>;
<b>use</b> <a href="../dependencies/sui/dynamic_field.md#sui_dynamic_field">sui::dynamic_field</a>;
<b>use</b> <a href="../dependencies/sui/dynamic_object_field.md#sui_dynamic_object_field">sui::dynamic_object_field</a>;
<b>use</b> <a href="../dependencies/sui/event.md#sui_event">sui::event</a>;
<b>use</b> <a href="../dependencies/sui/hex.md#sui_hex">sui::hex</a>;
<b>use</b> <a href="../dependencies/sui/object.md#sui_object">sui::object</a>;
<b>use</b> <a href="../dependencies/sui/party.md#sui_party">sui::party</a>;
<b>use</b> <a href="../dependencies/sui/sui.md#sui_sui">sui::sui</a>;
<b>use</b> <a href="../dependencies/sui/table.md#sui_table">sui::table</a>;
<b>use</b> <a href="../dependencies/sui/transfer.md#sui_transfer">sui::transfer</a>;
<b>use</b> <a href="../dependencies/sui/tx_context.md#sui_tx_context">sui::tx_context</a>;
<b>use</b> <a href="../dependencies/sui/types.md#sui_types">sui::types</a>;
<b>use</b> <a href="../dependencies/sui/url.md#sui_url">sui::url</a>;
<b>use</b> <a href="../dependencies/sui/vec_map.md#sui_vec_map">sui::vec_map</a>;
<b>use</b> <a href="../dependencies/sui/vec_set.md#sui_vec_set">sui::vec_set</a>;
</code></pre>



<a name="gateway_gateway_Vault"></a>

## Struct `Vault`



<pre><code><b>public</b> <b>struct</b> <a href="../gateway/gateway.md#gateway_gateway_Vault">Vault</a>&lt;<b>phantom</b> T&gt; <b>has</b> store
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>balance: <a href="../dependencies/sui/balance.md#sui_balance_Balance">sui::balance::Balance</a>&lt;T&gt;</code>
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

<a name="gateway_gateway_Gateway"></a>

## Struct `Gateway`



<pre><code><b>public</b> <b>struct</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a> <b>has</b> key
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>id: <a href="../dependencies/sui/object.md#sui_object_UID">sui::object::UID</a></code>
</dt>
<dd>
</dd>
<dt>
<code>vaults: <a href="../dependencies/sui/bag.md#sui_bag_Bag">sui::bag::Bag</a></code>
</dt>
<dd>
</dd>
<dt>
<code><a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: u64</code>
</dt>
<dd>
</dd>
<dt>
<code><a href="../gateway/gateway.md#gateway_gateway_active_withdraw_cap">active_withdraw_cap</a>: <a href="../dependencies/sui/object.md#sui_object_ID">sui::object::ID</a></code>
</dt>
<dd>
</dd>
<dt>
<code><a href="../gateway/gateway.md#gateway_gateway_active_whitelist_cap">active_whitelist_cap</a>: <a href="../dependencies/sui/object.md#sui_object_ID">sui::object::ID</a></code>
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

<a name="gateway_gateway_WithdrawCap"></a>

## Struct `WithdrawCap`



<pre><code><b>public</b> <b>struct</b> <a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">WithdrawCap</a> <b>has</b> key, store
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>id: <a href="../dependencies/sui/object.md#sui_object_UID">sui::object::UID</a></code>
</dt>
<dd>
</dd>
</dl>


</details>

<a name="gateway_gateway_WhitelistCap"></a>

## Struct `WhitelistCap`



<pre><code><b>public</b> <b>struct</b> <a href="../gateway/gateway.md#gateway_gateway_WhitelistCap">WhitelistCap</a> <b>has</b> key, store
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>id: <a href="../dependencies/sui/object.md#sui_object_UID">sui::object::UID</a></code>
</dt>
<dd>
</dd>
</dl>


</details>

<a name="gateway_gateway_AdminCap"></a>

## Struct `AdminCap`



<pre><code><b>public</b> <b>struct</b> <a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a> <b>has</b> key, store
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>id: <a href="../dependencies/sui/object.md#sui_object_UID">sui::object::UID</a></code>
</dt>
<dd>
</dd>
</dl>


</details>

<a name="gateway_gateway_DepositEvent"></a>

## Struct `DepositEvent`



<pre><code><b>public</b> <b>struct</b> <a href="../gateway/gateway.md#gateway_gateway_DepositEvent">DepositEvent</a> <b>has</b> <b>copy</b>, drop
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>coin_type: <a href="../dependencies/std/ascii.md#std_ascii_String">std::ascii::String</a></code>
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
<code>receiver: <a href="../dependencies/std/ascii.md#std_ascii_String">std::ascii::String</a></code>
</dt>
<dd>
</dd>
</dl>


</details>

<a name="gateway_gateway_DepositAndCallEvent"></a>

## Struct `DepositAndCallEvent`



<pre><code><b>public</b> <b>struct</b> <a href="../gateway/gateway.md#gateway_gateway_DepositAndCallEvent">DepositAndCallEvent</a> <b>has</b> <b>copy</b>, drop
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>coin_type: <a href="../dependencies/std/ascii.md#std_ascii_String">std::ascii::String</a></code>
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
<code>receiver: <a href="../dependencies/std/ascii.md#std_ascii_String">std::ascii::String</a></code>
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

<a name="gateway_gateway_WithdrawEvent"></a>

## Struct `WithdrawEvent`



<pre><code><b>public</b> <b>struct</b> <a href="../gateway/gateway.md#gateway_gateway_WithdrawEvent">WithdrawEvent</a> <b>has</b> <b>copy</b>, drop
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>coin_type: <a href="../dependencies/std/ascii.md#std_ascii_String">std::ascii::String</a></code>
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
<code><a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: u64</code>
</dt>
<dd>
</dd>
</dl>


</details>

<a name="gateway_gateway_NonceIncreaseEvent"></a>

## Struct `NonceIncreaseEvent`



<pre><code><b>public</b> <b>struct</b> <a href="../gateway/gateway.md#gateway_gateway_NonceIncreaseEvent">NonceIncreaseEvent</a> <b>has</b> <b>copy</b>, drop
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
<code><a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: u64</code>
</dt>
<dd>
</dd>
</dl>


</details>

<a name="@Constants_0"></a>

## Constants


<a name="gateway_gateway_EAlreadyWhitelisted"></a>



<pre><code><b>const</b> <a href="../gateway/gateway.md#gateway_gateway_EAlreadyWhitelisted">EAlreadyWhitelisted</a>: u64 = 0;
</code></pre>



<a name="gateway_gateway_EDepositPaused"></a>



<pre><code><b>const</b> <a href="../gateway/gateway.md#gateway_gateway_EDepositPaused">EDepositPaused</a>: u64 = 7;
</code></pre>



<a name="gateway_gateway_EInactiveWhitelistCap"></a>



<pre><code><b>const</b> <a href="../gateway/gateway.md#gateway_gateway_EInactiveWhitelistCap">EInactiveWhitelistCap</a>: u64 = 6;
</code></pre>



<a name="gateway_gateway_EInactiveWithdrawCap"></a>



<pre><code><b>const</b> <a href="../gateway/gateway.md#gateway_gateway_EInactiveWithdrawCap">EInactiveWithdrawCap</a>: u64 = 5;
</code></pre>



<a name="gateway_gateway_EInvalidReceiverAddress"></a>



<pre><code><b>const</b> <a href="../gateway/gateway.md#gateway_gateway_EInvalidReceiverAddress">EInvalidReceiverAddress</a>: u64 = 1;
</code></pre>



<a name="gateway_gateway_ENonceMismatch"></a>



<pre><code><b>const</b> <a href="../gateway/gateway.md#gateway_gateway_ENonceMismatch">ENonceMismatch</a>: u64 = 3;
</code></pre>



<a name="gateway_gateway_ENotWhitelisted"></a>



<pre><code><b>const</b> <a href="../gateway/gateway.md#gateway_gateway_ENotWhitelisted">ENotWhitelisted</a>: u64 = 2;
</code></pre>



<a name="gateway_gateway_EPayloadTooLong"></a>



<pre><code><b>const</b> <a href="../gateway/gateway.md#gateway_gateway_EPayloadTooLong">EPayloadTooLong</a>: u64 = 4;
</code></pre>



<a name="gateway_gateway_PayloadMaxLength"></a>



<pre><code><b>const</b> <a href="../gateway/gateway.md#gateway_gateway_PayloadMaxLength">PayloadMaxLength</a>: u64 = 1024;
</code></pre>



<a name="gateway_gateway_init"></a>

## Function `init`



<pre><code><b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_init">init</a>(ctx: &<b>mut</b> <a href="../dependencies/sui/tx_context.md#sui_tx_context_TxContext">sui::tx_context::TxContext</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_init">init</a>(ctx: &<b>mut</b> TxContext) {
    // to <a href="../gateway/gateway.md#gateway_gateway_withdraw">withdraw</a> tokens from the <a href="../gateway/gateway.md#gateway_gateway">gateway</a>, the caller must have the <a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">WithdrawCap</a>
    <b>let</b> withdraw_cap = <a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">WithdrawCap</a> {
        id: object::new(ctx),
    };
    // to <a href="../gateway/gateway.md#gateway_gateway_whitelist">whitelist</a> a new vault, the caller must have the <a href="../gateway/gateway.md#gateway_gateway_WhitelistCap">WhitelistCap</a>
    <b>let</b> whitelist_cap = <a href="../gateway/gateway.md#gateway_gateway_WhitelistCap">WhitelistCap</a> {
        id: object::new(ctx),
    };
    // to <a href="../gateway/gateway.md#gateway_gateway_whitelist">whitelist</a> a new vault, the caller must have the <a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a>
    <b>let</b> admin_cap = <a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a> {
        id: object::new(ctx),
    };
    // create and share the <a href="../gateway/gateway.md#gateway_gateway">gateway</a> object
    <b>let</b> <b>mut</b> <a href="../gateway/gateway.md#gateway_gateway">gateway</a> = <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a> {
        id: object::new(ctx),
        vaults: bag::new(ctx),
        <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: 0,
        <a href="../gateway/gateway.md#gateway_gateway_active_withdraw_cap">active_withdraw_cap</a>: object::id(&withdraw_cap),
        <a href="../gateway/gateway.md#gateway_gateway_active_whitelist_cap">active_whitelist_cap</a>: object::id(&whitelist_cap),
        deposit_paused: <b>false</b>,
    };
    // <a href="../gateway/gateway.md#gateway_gateway_whitelist">whitelist</a> SUI by default
    <a href="../gateway/gateway.md#gateway_gateway_whitelist_impl">whitelist_impl</a>&lt;SUI&gt;(&<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway">gateway</a>, &whitelist_cap);
    transfer::transfer(withdraw_cap, tx_context::sender(ctx));
    transfer::transfer(whitelist_cap, tx_context::sender(ctx));
    transfer::transfer(admin_cap, tx_context::sender(ctx));
    transfer::share_object(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>);
}
</code></pre>



</details>

<a name="gateway_gateway_increase_nonce"></a>

## Function `increase_nonce`



<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_increase_nonce">increase_nonce</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: u64, cap: &<a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">gateway::gateway::WithdrawCap</a>, ctx: &<a href="../dependencies/sui/tx_context.md#sui_tx_context_TxContext">sui::tx_context::TxContext</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_increase_nonce">increase_nonce</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>, <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: u64, cap: &<a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">WithdrawCap</a>, ctx: &TxContext) {
    <b>assert</b>!(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_active_withdraw_cap">active_withdraw_cap</a> == object::id(cap), <a href="../gateway/gateway.md#gateway_gateway_EInactiveWithdrawCap">EInactiveWithdrawCap</a>);
    <b>assert</b>!(<a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a> == <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>, <a href="../gateway/gateway.md#gateway_gateway_ENonceMismatch">ENonceMismatch</a>);
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a> = <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a> + 1;
    // Emit event
    event::emit(<a href="../gateway/gateway.md#gateway_gateway_NonceIncreaseEvent">NonceIncreaseEvent</a> {
        sender: tx_context::sender(ctx),
        <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>,
    });
}
</code></pre>



</details>

<a name="gateway_gateway_withdraw"></a>

## Function `withdraw`



<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_withdraw">withdraw</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, amount: u64, <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: u64, receiver: <b>address</b>, gas_budget: u64, cap: &<a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">gateway::gateway::WithdrawCap</a>, ctx: &<b>mut</b> <a href="../dependencies/sui/tx_context.md#sui_tx_context_TxContext">sui::tx_context::TxContext</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_withdraw">withdraw</a>&lt;T&gt;(
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>,
    amount: u64,
    <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: u64,
    receiver: <b>address</b>,
    gas_budget: u64,
    cap: &<a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">WithdrawCap</a>,
    ctx: &<b>mut</b> TxContext,
) {
    <b>let</b> (coins, coins_gas_budget) = <a href="../gateway/gateway.md#gateway_gateway_withdraw_impl">withdraw_impl</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>, amount, <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>, gas_budget, cap, ctx);
    transfer::public_transfer(coins, receiver);
    transfer::public_transfer(coins_gas_budget, tx_context::sender(ctx));
    // Emit event
    event::emit(<a href="../gateway/gateway.md#gateway_gateway_WithdrawEvent">WithdrawEvent</a> {
        coin_type: <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;(),
        amount: amount,
        sender: tx_context::sender(ctx),
        receiver: receiver,
        <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>,
    });
}
</code></pre>



</details>

<a name="gateway_gateway_whitelist"></a>

## Function `whitelist`



<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_whitelist">whitelist</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, cap: &<a href="../gateway/gateway.md#gateway_gateway_WhitelistCap">gateway::gateway::WhitelistCap</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_whitelist">whitelist</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>, cap: &<a href="../gateway/gateway.md#gateway_gateway_WhitelistCap">WhitelistCap</a>) {
    <a href="../gateway/gateway.md#gateway_gateway_whitelist_impl">whitelist_impl</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>, cap)
}
</code></pre>



</details>

<a name="gateway_gateway_unwhitelist"></a>

## Function `unwhitelist`



<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_unwhitelist">unwhitelist</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">gateway::gateway::AdminCap</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_unwhitelist">unwhitelist</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>, cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a>) {
    <a href="../gateway/gateway.md#gateway_gateway_unwhitelist_impl">unwhitelist_impl</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>, cap)
}
</code></pre>



</details>

<a name="gateway_gateway_issue_withdraw_and_whitelist_cap"></a>

## Function `issue_withdraw_and_whitelist_cap`



<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_issue_withdraw_and_whitelist_cap">issue_withdraw_and_whitelist_cap</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">gateway::gateway::AdminCap</a>, ctx: &<b>mut</b> <a href="../dependencies/sui/tx_context.md#sui_tx_context_TxContext">sui::tx_context::TxContext</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_issue_withdraw_and_whitelist_cap">issue_withdraw_and_whitelist_cap</a>(
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>,
    _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a>,
    ctx: &<b>mut</b> TxContext,
) {
    <b>let</b> (withdraw_cap, whitelist_cap) = <a href="../gateway/gateway.md#gateway_gateway_issue_withdraw_and_whitelist_cap_impl">issue_withdraw_and_whitelist_cap_impl</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>, _cap, ctx);
    transfer::transfer(withdraw_cap, tx_context::sender(ctx));
    transfer::transfer(whitelist_cap, tx_context::sender(ctx));
}
</code></pre>



</details>

<a name="gateway_gateway_pause"></a>

## Function `pause`



<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_pause">pause</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">gateway::gateway::AdminCap</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_pause">pause</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>, cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a>) {
    <a href="../gateway/gateway.md#gateway_gateway_pause_impl">pause_impl</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>, cap)
}
</code></pre>



</details>

<a name="gateway_gateway_unpause"></a>

## Function `unpause`



<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_unpause">unpause</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">gateway::gateway::AdminCap</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_unpause">unpause</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>, cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a>) {
    <a href="../gateway/gateway.md#gateway_gateway_unpause_impl">unpause_impl</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>, cap)
}
</code></pre>



</details>

<a name="gateway_gateway_reset_nonce"></a>

## Function `reset_nonce`



<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_reset_nonce">reset_nonce</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: u64, _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">gateway::gateway::AdminCap</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_reset_nonce">reset_nonce</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>, <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: u64, _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a>) {
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a> = <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>;
}
</code></pre>



</details>

<a name="gateway_gateway_deposit"></a>

## Function `deposit`



<pre><code><b>public</b> <b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_deposit">deposit</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, coins: <a href="../dependencies/sui/coin.md#sui_coin_Coin">sui::coin::Coin</a>&lt;T&gt;, receiver: <a href="../dependencies/std/ascii.md#std_ascii_String">std::ascii::String</a>, ctx: &<b>mut</b> <a href="../dependencies/sui/tx_context.md#sui_tx_context_TxContext">sui::tx_context::TxContext</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_deposit">deposit</a>&lt;T&gt;(
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>,
    coins: Coin&lt;T&gt;,
    receiver: String,
    ctx: &<b>mut</b> TxContext,
) {
    <b>let</b> amount = coins.value();
    <b>let</b> <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a> = <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;();
    <a href="../gateway/gateway.md#gateway_gateway_check_receiver_and_deposit_to_vault">check_receiver_and_deposit_to_vault</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>, coins, receiver);
    // Emit <a href="../gateway/gateway.md#gateway_gateway_deposit">deposit</a> event
    event::emit(<a href="../gateway/gateway.md#gateway_gateway_DepositEvent">DepositEvent</a> {
        coin_type: <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>,
        amount: amount,
        sender: tx_context::sender(ctx),
        receiver: receiver,
    });
}
</code></pre>



</details>

<a name="gateway_gateway_deposit_and_call"></a>

## Function `deposit_and_call`



<pre><code><b>public</b> <b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_deposit_and_call">deposit_and_call</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, coins: <a href="../dependencies/sui/coin.md#sui_coin_Coin">sui::coin::Coin</a>&lt;T&gt;, receiver: <a href="../dependencies/std/ascii.md#std_ascii_String">std::ascii::String</a>, payload: vector&lt;u8&gt;, ctx: &<b>mut</b> <a href="../dependencies/sui/tx_context.md#sui_tx_context_TxContext">sui::tx_context::TxContext</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>entry</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_deposit_and_call">deposit_and_call</a>&lt;T&gt;(
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>,
    coins: Coin&lt;T&gt;,
    receiver: String,
    payload: vector&lt;u8&gt;,
    ctx: &<b>mut</b> TxContext,
) {
    <b>assert</b>!(payload.length() &lt;= <a href="../gateway/gateway.md#gateway_gateway_PayloadMaxLength">PayloadMaxLength</a>, <a href="../gateway/gateway.md#gateway_gateway_EPayloadTooLong">EPayloadTooLong</a>);
    <b>let</b> amount = coins.value();
    <b>let</b> <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a> = <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;();
    <a href="../gateway/gateway.md#gateway_gateway_check_receiver_and_deposit_to_vault">check_receiver_and_deposit_to_vault</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>, coins, receiver);
    // Emit <a href="../gateway/gateway.md#gateway_gateway_deposit">deposit</a> event
    event::emit(<a href="../gateway/gateway.md#gateway_gateway_DepositAndCallEvent">DepositAndCallEvent</a> {
        coin_type: <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>,
        amount: amount,
        sender: tx_context::sender(ctx),
        receiver: receiver,
        payload: payload,
    });
}
</code></pre>



</details>

<a name="gateway_gateway_check_receiver_and_deposit_to_vault"></a>

## Function `check_receiver_and_deposit_to_vault`



<pre><code><b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_check_receiver_and_deposit_to_vault">check_receiver_and_deposit_to_vault</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, coins: <a href="../dependencies/sui/coin.md#sui_coin_Coin">sui::coin::Coin</a>&lt;T&gt;, receiver: <a href="../dependencies/std/ascii.md#std_ascii_String">std::ascii::String</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_check_receiver_and_deposit_to_vault">check_receiver_and_deposit_to_vault</a>&lt;T&gt;(
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>,
    coins: Coin&lt;T&gt;,
    receiver: String,
) {
    <b>assert</b>!(<a href="../gateway/evm.md#gateway_evm_is_valid_evm_address">evm::is_valid_evm_address</a>(receiver), <a href="../gateway/gateway.md#gateway_gateway_EInvalidReceiverAddress">EInvalidReceiverAddress</a>);
    <b>assert</b>!(<a href="../gateway/gateway.md#gateway_gateway_is_whitelisted">is_whitelisted</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>), <a href="../gateway/gateway.md#gateway_gateway_ENotWhitelisted">ENotWhitelisted</a>);
    <b>assert</b>!(!<a href="../gateway/gateway.md#gateway_gateway">gateway</a>.deposit_paused, <a href="../gateway/gateway.md#gateway_gateway_EDepositPaused">EDepositPaused</a>);
    // Deposit the coin into the vault
    <b>let</b> <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a> = <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;();
    <b>let</b> vault = bag::borrow_mut&lt;String, <a href="../gateway/gateway.md#gateway_gateway_Vault">Vault</a>&lt;T&gt;&gt;(&<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.vaults, <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>);
    balance::join(&<b>mut</b> vault.balance, coins.into_balance());
}
</code></pre>



</details>

<a name="gateway_gateway_withdraw_impl"></a>

## Function `withdraw_impl`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_withdraw_impl">withdraw_impl</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, amount: u64, <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: u64, gas_budget: u64, cap: &<a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">gateway::gateway::WithdrawCap</a>, ctx: &<b>mut</b> <a href="../dependencies/sui/tx_context.md#sui_tx_context_TxContext">sui::tx_context::TxContext</a>): (<a href="../dependencies/sui/coin.md#sui_coin_Coin">sui::coin::Coin</a>&lt;T&gt;, <a href="../dependencies/sui/coin.md#sui_coin_Coin">sui::coin::Coin</a>&lt;<a href="../dependencies/sui/sui.md#sui_sui_SUI">sui::sui::SUI</a>&gt;)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_withdraw_impl">withdraw_impl</a>&lt;T&gt;(
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>,
    amount: u64,
    <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>: u64,
    gas_budget: u64,
    cap: &<a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">WithdrawCap</a>,
    ctx: &<b>mut</b> TxContext,
): (Coin&lt;T&gt;, Coin&lt;<a href="../dependencies/sui/sui.md#sui_sui_SUI">sui::sui::SUI</a>&gt;) {
    <b>assert</b>!(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_active_withdraw_cap">active_withdraw_cap</a> == object::id(cap), <a href="../gateway/gateway.md#gateway_gateway_EInactiveWithdrawCap">EInactiveWithdrawCap</a>);
    <b>assert</b>!(<a href="../gateway/gateway.md#gateway_gateway_is_whitelisted">is_whitelisted</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>), <a href="../gateway/gateway.md#gateway_gateway_ENotWhitelisted">ENotWhitelisted</a>);
    <b>assert</b>!(<a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a> == <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>, <a href="../gateway/gateway.md#gateway_gateway_ENonceMismatch">ENonceMismatch</a>); // prevent replay
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a> = <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a> + 1;
    // Withdraw the coin from the vault
    <b>let</b> <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a> = <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;();
    <b>let</b> vault = bag::borrow_mut&lt;String, <a href="../gateway/gateway.md#gateway_gateway_Vault">Vault</a>&lt;T&gt;&gt;(&<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.vaults, <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>);
    <b>let</b> coins_out = coin::take(&<b>mut</b> vault.balance, amount, ctx);
    // Withdraw SUI to cover the gas budget
    <b>let</b> sui_vault = bag::borrow_mut&lt;String, <a href="../gateway/gateway.md#gateway_gateway_Vault">Vault</a>&lt;<a href="../dependencies/sui/sui.md#sui_sui_SUI">sui::sui::SUI</a>&gt;&gt;(
        &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.vaults,
        <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;<a href="../dependencies/sui/sui.md#sui_sui_SUI">sui::sui::SUI</a>&gt;(),
    );
    <b>let</b> coins_gas_budget = coin::take(&<b>mut</b> sui_vault.balance, gas_budget, ctx);
    (coins_out, coins_gas_budget)
}
</code></pre>



</details>

<a name="gateway_gateway_whitelist_impl"></a>

## Function `whitelist_impl`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_whitelist_impl">whitelist_impl</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, cap: &<a href="../gateway/gateway.md#gateway_gateway_WhitelistCap">gateway::gateway::WhitelistCap</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_whitelist_impl">whitelist_impl</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>, cap: &<a href="../gateway/gateway.md#gateway_gateway_WhitelistCap">WhitelistCap</a>) {
    <b>assert</b>!(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_active_whitelist_cap">active_whitelist_cap</a> == object::id(cap), <a href="../gateway/gateway.md#gateway_gateway_EInactiveWhitelistCap">EInactiveWhitelistCap</a>);
    <b>assert</b>!(<a href="../gateway/gateway.md#gateway_gateway_is_whitelisted">is_whitelisted</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>) == <b>false</b>, <a href="../gateway/gateway.md#gateway_gateway_EAlreadyWhitelisted">EAlreadyWhitelisted</a>);
    // <b>if</b> the vault already exists, set it to whitelisted, otherwise create a new vault
    <b>if</b> (bag::contains_with_type&lt;String, <a href="../gateway/gateway.md#gateway_gateway_Vault">Vault</a>&lt;T&gt;&gt;(&<a href="../gateway/gateway.md#gateway_gateway">gateway</a>.vaults, <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;())) {
        <b>let</b> vault = bag::borrow_mut&lt;String, <a href="../gateway/gateway.md#gateway_gateway_Vault">Vault</a>&lt;T&gt;&gt;(&<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.vaults, <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;());
        vault.whitelisted = <b>true</b>;
    } <b>else</b> {
        <b>let</b> vault_name = <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;();
        <b>let</b> vault = <a href="../gateway/gateway.md#gateway_gateway_Vault">Vault</a>&lt;T&gt; {
            balance: balance::zero&lt;T&gt;(),
            whitelisted: <b>true</b>,
        };
        bag::add(&<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.vaults, vault_name, vault);
    }
}
</code></pre>



</details>

<a name="gateway_gateway_unwhitelist_impl"></a>

## Function `unwhitelist_impl`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_unwhitelist_impl">unwhitelist_impl</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">gateway::gateway::AdminCap</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_unwhitelist_impl">unwhitelist_impl</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>, _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a>) {
    <b>assert</b>!(<a href="../gateway/gateway.md#gateway_gateway_is_whitelisted">is_whitelisted</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>), <a href="../gateway/gateway.md#gateway_gateway_ENotWhitelisted">ENotWhitelisted</a>);
    <b>let</b> vault = bag::borrow_mut&lt;String, <a href="../gateway/gateway.md#gateway_gateway_Vault">Vault</a>&lt;T&gt;&gt;(&<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.vaults, <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;());
    vault.whitelisted = <b>false</b>;
}
</code></pre>



</details>

<a name="gateway_gateway_issue_withdraw_and_whitelist_cap_impl"></a>

## Function `issue_withdraw_and_whitelist_cap_impl`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_issue_withdraw_and_whitelist_cap_impl">issue_withdraw_and_whitelist_cap_impl</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">gateway::gateway::AdminCap</a>, ctx: &<b>mut</b> <a href="../dependencies/sui/tx_context.md#sui_tx_context_TxContext">sui::tx_context::TxContext</a>): (<a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">gateway::gateway::WithdrawCap</a>, <a href="../gateway/gateway.md#gateway_gateway_WhitelistCap">gateway::gateway::WhitelistCap</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_issue_withdraw_and_whitelist_cap_impl">issue_withdraw_and_whitelist_cap_impl</a>(
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>,
    _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a>,
    ctx: &<b>mut</b> TxContext,
): (<a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">WithdrawCap</a>, <a href="../gateway/gateway.md#gateway_gateway_WhitelistCap">WhitelistCap</a>) {
    <b>let</b> withdraw_cap = <a href="../gateway/gateway.md#gateway_gateway_WithdrawCap">WithdrawCap</a> {
        id: object::new(ctx),
    };
    <b>let</b> whitelist_cap = <a href="../gateway/gateway.md#gateway_gateway_WhitelistCap">WhitelistCap</a> {
        id: object::new(ctx),
    };
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_active_withdraw_cap">active_withdraw_cap</a> = object::id(&withdraw_cap);
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_active_whitelist_cap">active_whitelist_cap</a> = object::id(&whitelist_cap);
    (withdraw_cap, whitelist_cap)
}
</code></pre>



</details>

<a name="gateway_gateway_pause_impl"></a>

## Function `pause_impl`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_pause_impl">pause_impl</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">gateway::gateway::AdminCap</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_pause_impl">pause_impl</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>, _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a>) {
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.deposit_paused = <b>true</b>;
}
</code></pre>



</details>

<a name="gateway_gateway_unpause_impl"></a>

## Function `unpause_impl`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_unpause_impl">unpause_impl</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>, _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">gateway::gateway::AdminCap</a>)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_unpause_impl">unpause_impl</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<b>mut</b> <a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>, _cap: &<a href="../gateway/gateway.md#gateway_gateway_AdminCap">AdminCap</a>) {
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.deposit_paused = <b>false</b>;
}
</code></pre>



</details>

<a name="gateway_gateway_nonce"></a>

## Function `nonce`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>): u64
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>): u64 {
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_nonce">nonce</a>
}
</code></pre>



</details>

<a name="gateway_gateway_active_withdraw_cap"></a>

## Function `active_withdraw_cap`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_active_withdraw_cap">active_withdraw_cap</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>): <a href="../dependencies/sui/object.md#sui_object_ID">sui::object::ID</a>
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_active_withdraw_cap">active_withdraw_cap</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>): ID {
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_active_withdraw_cap">active_withdraw_cap</a>
}
</code></pre>



</details>

<a name="gateway_gateway_active_whitelist_cap"></a>

## Function `active_whitelist_cap`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_active_whitelist_cap">active_whitelist_cap</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>): <a href="../dependencies/sui/object.md#sui_object_ID">sui::object::ID</a>
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_active_whitelist_cap">active_whitelist_cap</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>): ID {
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.<a href="../gateway/gateway.md#gateway_gateway_active_whitelist_cap">active_whitelist_cap</a>
}
</code></pre>



</details>

<a name="gateway_gateway_vault_balance"></a>

## Function `vault_balance`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_vault_balance">vault_balance</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>): u64
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_vault_balance">vault_balance</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>): u64 {
    <b>if</b> (!<a href="../gateway/gateway.md#gateway_gateway_is_whitelisted">is_whitelisted</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>)) {
        <b>return</b> 0
    };
    <b>let</b> <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a> = <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;();
    <b>let</b> vault = bag::borrow&lt;String, <a href="../gateway/gateway.md#gateway_gateway_Vault">Vault</a>&lt;T&gt;&gt;(&<a href="../gateway/gateway.md#gateway_gateway">gateway</a>.vaults, <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>);
    balance::value(&vault.balance)
}
</code></pre>



</details>

<a name="gateway_gateway_is_paused"></a>

## Function `is_paused`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_is_paused">is_paused</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>): bool
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_is_paused">is_paused</a>(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>): bool {
    <a href="../gateway/gateway.md#gateway_gateway">gateway</a>.deposit_paused
}
</code></pre>



</details>

<a name="gateway_gateway_is_whitelisted"></a>

## Function `is_whitelisted`



<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_is_whitelisted">is_whitelisted</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">gateway::gateway::Gateway</a>): bool
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_is_whitelisted">is_whitelisted</a>&lt;T&gt;(<a href="../gateway/gateway.md#gateway_gateway">gateway</a>: &<a href="../gateway/gateway.md#gateway_gateway_Gateway">Gateway</a>): bool {
    <b>let</b> vault_name = <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;();
    <b>if</b> (!bag::contains_with_type&lt;String, <a href="../gateway/gateway.md#gateway_gateway_Vault">Vault</a>&lt;T&gt;&gt;(&<a href="../gateway/gateway.md#gateway_gateway">gateway</a>.vaults, vault_name)) {
        <b>return</b> <b>false</b>
    };
    <b>let</b> vault = bag::borrow&lt;String, <a href="../gateway/gateway.md#gateway_gateway_Vault">Vault</a>&lt;T&gt;&gt;(&<a href="../gateway/gateway.md#gateway_gateway">gateway</a>.vaults, vault_name);
    vault.whitelisted
}
</code></pre>



</details>

<a name="gateway_gateway_coin_name"></a>

## Function `coin_name`



<pre><code><b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;(): <a href="../dependencies/std/ascii.md#std_ascii_String">std::ascii::String</a>
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>fun</b> <a href="../gateway/gateway.md#gateway_gateway_coin_name">coin_name</a>&lt;T&gt;(): String {
    into_string(get&lt;T&gt;())
}
</code></pre>



</details>
