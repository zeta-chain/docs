# Staking Rewards

ZetaChain is a delegated proof of stake blockchain. Holders of ZETA tokens can
stake their tokens by delegating to validators. Staking tokens allows holders to
participate in governance and earn rewards for securing the network.

Currently, staking rewards are comprised of transaction fees collected each
block and fixed rewards coming from the emissions pool.

$$
StakingRewards = TransactionFees + {EmissionsPool \over NumberOfBlocksPerYear × 4}
$$

Emissions pool address:
[zeta1w43fn2ze2wyhu5hfmegr6vp52c3dgn0srdgymy](https://zetachain-athens.blockpi.network/lcd/v1/public/zeta-chain/emissions/list_addresses)

You can find the emissions pool balance by querying the API:

https://zetachain.blockpi.network/lcd/v1/public/cosmos/bank/v1beta1/balances/zeta1w43fn2ze2wyhu5hfmegr6vp52c3dgn0srdgymy

- The emission pool is currently funded manually
- Currently, there is no ZETA token emission in the network

Learn more about the tokenomics in the
[ZETA Token Utility](/about/token-utility/distribution/) section of the docs.
