# Whitelisting an ERC20

## Overview

Adding support for new ERC20 tokens on ZetaChain as ZRC20 involves a series of
steps including obtaining liquidity, whitelisting the token, and setting up a
liquidity pool.

## Prerequisites

- Liquidity Requirement: Acquire sufficient liquidity for the new token to set
  up a liquidity pool.
- Zeta Tokens: Secure Zeta tokens for bootstrapping the liquidity in the gas
  token pool.
- Enable Outbound Transactions: Ensure that outbound transactions are enabled
  for the new token.

## Procedure

### Whitelist the ERC20 and Create the ZRC20

Create a Governance Proposal:

- Draft a govops group proposal to whitelist the ERC20 token. Refer to existing
  documentation for - detailed instructions.
- Modify group_policy_address and proposers as needed, based on previous
  proposals and network - requirements.
- Obtain the decimal information from the ERC20 token's explorer page.
- Format the ZRC20 name as `ZetaChain ZRC20 <ERC20> on <Source Chain Name>`.

### Example Proposal for USDC on BSC.

Use the provided template to structure the proposal, replacing the relevant
details for the specific ERC20 token.

```json
{
  "group_policy_address": "zeta1dlszg2sst9r69my4f84l3mj66zxcf3umcgujys30t84srg95dgvs5wguxq",
  "messages": [
    {
      "@type": "/zetachain.zetacore.crosschain.MsgWhitelistERC20",
      "creator": "zeta1dlszg2sst9r69my4f84l3mj66zxcf3umcgujys30t84srg95dgvs5wguxq",
      "erc20Address": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      "chainId": "56",
      "decimals": "18",
      "name": "ZetaChain ZRC20 USDC on BSC",
      "symbol": "USDC.BSC",
      "gasLimit": "100000"
    }
  ],
  "metadata": "ipfs://QmedMZL6AoL1HiGVGrj4rZNt6DEZgXZgxtU1m8EFgNCkDp",
  "proposers": ["zeta14m8s4x036jkjnfnkw92004zweh5prqzq69n880"]
}
```

### Add Liquidity for the Pool

1. Initial Liquidity Setup:

   It's crucial to add liquidity to the ZETA/ZRC20 pool as early as possible.
   This ensures that the ZRC20 token can be converted into a gas token in case
   of transaction reverts and prevents aborted cross-chain transactions (CCTX).

2. Using the Cast CLI Tool for EVM:

   The following snippet shows how to use the `cast` CLI tool to add liquidity.
   This process involves approving the liquidity amount and then adding
   liquidity through a Uniswap-like router.

   ```
   cast send [zrc20_address] "approve(address,uint256)" [uniswapRouter] [zrc20_liquidity]
   cast send [uniswapRouter] "addLiquidityETH(address,uint256,uint256,uint256,address,uint256)"  [zrc20_address] [zrc20_amount] [zrc20_min_amount] [zeta_min_amount] [address] [deadline]  --value [zeta_amount]
   ```

   Note: `cast` is suggested for illustrative purposes. For significant amounts
   of liquidity, a more secure method than a hot wallet (used by cast) should be
   employed.
