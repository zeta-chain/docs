# Withdrawing Rewards

## Prerequisites

This tutorial requires `zetacored` CLI to be installed. Please, check out the
docs [on installing the CLI](/developers/cli/setup).

## Calculating Rewards

To calculate the rewards you have earned, you can use the following command:

```
zetacored q distribution rewards $(zetacored keys show alice -a) --node https://zetachain-athens.blockpi.network:443/rpc/v1/public
```

This command shows the rewards that you have earned from each validator:

```
rewards:
  - reward:
      - amount: "674201594136.000000000000000000"
        denom: azeta
    validator_address: zetavaloper1qumrwnz9x2emzd5yjylp8pf9w2wh3my0gag27y
  - reward:
      - amount: "1597782052369.999999999999999999"
        denom: azeta
    validator_address: zetavaloper1pptfhnyj37qn0nfuhmu7m5ssy5x6td8hmccpzl
  - reward:
      - amount: "337307045870000.003493213123204105"
        denom: azeta
    validator_address: zetavaloper1ymnrwg9e3xr9xkw42ygzjx34dyvwvtc24ct0t5
  - reward:
      - amount: "333720742599.014432608595395975"
        denom: azeta
    validator_address: zetavaloper1xkddnhcdy5j4auzefjqkt3kp56t6vq7sm5xlga
  - reward:
      - amount: "0.000063911026464599"
        denom: azeta
    validator_address: zetavaloper1ggqzjf5726uu7xc6pfwg00lny79w6t3a4unarz
  - reward:
      - amount: "32.761155900000000000"
        denom: azeta
    validator_address: zetavaloper1wwnug5n5e2s2sf0k7t4zcu7enlwj9vq0s09xlf
  - reward:
      - amount: "317101080947.999999999999999999"
        denom: azeta
    validator_address: zetavaloper10g9x93lw7hu0cey5fyvewm4lsnuhe8q3xzay7j
  - reward:
      - amount: "0.000343011411232999"
        denom: azeta
    validator_address: zetavaloper167ns6zwczl9asjs47jwv3uhtkxfjcvx3fg3d4a
total:
  - amount: "340229851340085.779488644156297676"
    denom: azeta
```

## Withdrawing Rewards

To withdraw your rewards from all validators, run the following command:

```
zetacored tx distribution withdraw-all-rewards --gas 5000000 --from alice --chain-id athens_7001-1 --node https://zetachain-athens.blockpi.network:443/rpc/v1/public
```

Please, note that this command broadcasts a transaction with potentially
multiple messages (one per validator). For the transaction to succeed, you may
need to specify gas manually. In the example above, we are using
`--gas 5000000`, but the actual amount of gas required may be different
depending on network conditions.

Confirm the transaction to withdraw your rewards:

```
auth_info:
  fee:
    amount: []
    gas_limit: "5000000"
    granter: ""
    payer: ""
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: ""
  messages:
  - '@type': /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
    delegator_address: zeta19nfaqu9wr0fktyyampva98ec025kjy0phww5um
    validator_address: zetavaloper1qumrwnz9x2emzd5yjylp8pf9w2wh3my0gag27y
  - '@type': /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
    delegator_address: zeta19nfaqu9wr0fktyyampva98ec025kjy0phww5um
    validator_address: zetavaloper1pptfhnyj37qn0nfuhmu7m5ssy5x6td8hmccpzl
  - '@type': /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
    delegator_address: zeta19nfaqu9wr0fktyyampva98ec025kjy0phww5um
    validator_address: zetavaloper1ymnrwg9e3xr9xkw42ygzjx34dyvwvtc24ct0t5
  - '@type': /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
    delegator_address: zeta19nfaqu9wr0fktyyampva98ec025kjy0phww5um
    validator_address: zetavaloper1xkddnhcdy5j4auzefjqkt3kp56t6vq7sm5xlga
  - '@type': /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
    delegator_address: zeta19nfaqu9wr0fktyyampva98ec025kjy0phww5um
    validator_address: zetavaloper1ggqzjf5726uu7xc6pfwg00lny79w6t3a4unarz
  - '@type': /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
    delegator_address: zeta19nfaqu9wr0fktyyampva98ec025kjy0phww5um
    validator_address: zetavaloper1wwnug5n5e2s2sf0k7t4zcu7enlwj9vq0s09xlf
  - '@type': /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
    delegator_address: zeta19nfaqu9wr0fktyyampva98ec025kjy0phww5um
    validator_address: zetavaloper10g9x93lw7hu0cey5fyvewm4lsnuhe8q3xzay7j
  - '@type': /cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
    delegator_address: zeta19nfaqu9wr0fktyyampva98ec025kjy0phww5um
    validator_address: zetavaloper167ns6zwczl9asjs47jwv3uhtkxfjcvx3fg3d4a
  non_critical_extension_options: []
  timeout_height: "0"
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
```
