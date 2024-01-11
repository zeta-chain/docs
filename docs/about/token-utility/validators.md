---
sidebar_position: 3
---

# Validator Incentives

Validator incentives are structured such that operators are remunerated for
their efforts in securing the network, offsetting operational costs and risk
involved in staking ZETA to run a Validator. Although the proportion of
distribution over time may be changed via parameter changes/protocol upgrades,
the amount dedicated to rewards is fixed.

## Validator types

Validators are comprised of 3 different roles: Core Validators, Observers, and
TSS Signers. Fees from transactions and rewards are distributed to Validators in
return for their service of processing transactions and keeping the network
secure.

> _Note: in general, Observers and TSS Signers are technically separate but will
> be batched together for operators such that an operator is either running a
> Core Validator or an Observer-Signer Validator. Core Validator u prerequisite
> to being an Observer-Signer (Observer-Signers will run all 3 roles,
> technically). Observer-Signers receive 25% of block rewards and Core
> Validators receive the other 75%. At launch, it is planned such that the top
> 42 Core Validators on total stake will be eligible to participate in
> consensus. 9 validators will comprise the initial Observer-Signer set. These
> numbers will increase over time further the decentralization of the network._

Here we define the different functions of validators and their allocation of the
validator block incentives.

**Core Validators (75%)**

These provide consensus for ZetaCore (ZetaChain’s base blockchain). These will
support general PoS mechanics and delegation from users. Anyone will be able to
run a validator to earn rewards by securing the network. Users may delegate
stake to any existing operator, or run their own validator.

**Observer Validators (12.5%)**

These observe external chains and send relevant events to the Core Validators.
Observation will eventually become less important with further
verification/proof development, so the portion of rewards allocated to Observers
will eventually transition more to TSS Signers via governance-based upgrades.

**TSS Signer Validators (12.5%)**

When ZetaChain wants to write receiving info from Core Validators transactions
to different chains, it uses a network of TSS Signers to write in a
decentralized manner.

## Validator block rewards curve

Validator incentives are programmed into the protocol itself and distributed to
the validator set according to this pre-programmed curve that currently looks
like:

$$
Reward=RemainingReserveAmount \times \dfrac{TargetBondedRatio}{BondedRatio} \times \dfrac{month\times log(1 + 0.052 / 12)}{1 + (month * log(1 + 0.052/12))}
$$

Emissions follow a fixed curve based on time/block. Validators earn rewards
based on this curve and their securing the network. Rather than an exponential
decay like some other protocols have adopted, this model coincides with the
growth of overall circulating supply, incentivizing validators to operate longer
while still being compensated sufficiently for the real costs (hardware costs,
operational costs) as well as risk involved in putting up stake.

As this initial genesis pool tends lower, the protocol will introduce a planned
2.5% inflation through validator rewards separate from the emission curve at a
certain block height estimated at 4-5 years after the start of the network. This
inflation rate, at this shift, will replace the existing rate of validator
emissions. Beyond this time, the inflation rate will be adjustable by the
network via governance.

In addition, there is a factor of the bonded ratio and a target bonded ratio
that is bounded. If the bonded ratio goes over the target, the emissions will
reduce, and if the bonded ratio goes lower, the emissions will increase, helping
incentivize more or less staking/bonding over time. However, the core emission
curve and pool remains the same. Note that the bonded ratio also applies to
inflation, so the inflation rate can oscillate based on the ratio of bonded to
unbonded ZETA. The inflation curve will look like:

$$
RewardPerEpoch =
TotalCirculatingSupply*0.025/(YearTime/EpochTime)*\dfrac{TargetBondedRatio}{BondedRatio}
$$

## Unlock Period

Any stake has an unlock period of 21 days. Rewards are allocated to
delegators/stakers, but to withdraw them, one must wait 21 days to receive them.

## Slashing

To ensure network liveness and safety, deviation from the protocol by the
validators will be penalized by slashing their bonded ZETA. This could include
standard Cosmos SDK defined slash-able violations such as missed votes on
blocks, conflicting votes on blocks, etc., for core validators. Besides that,
for observer-signer validators, additional behaviors will be penalized by
slashing the accompanying core validator staked ZETA. Such behaviors may include
repeatedly failing to observe relevant external events, reporting incorrect
events, failing to join the TSS keygen or keysign party, etc.
