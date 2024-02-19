
# Whitelisting ERC-20

## Overview

The community can propose fungible (ERC-20) tokens on Ethereum or other EVM
compatible chains connected by ZetaChain to be whitelisted. If whitelisted, such
ERC20 tokens can be managed by ZetaChain omnichain smart contract via a ZRC20
contract on ZetaChain’s EVM.

Note: The protocol has strict considerations for whitelisting tokens in order to
protect users of the Mainnet Beta network. These restrictions ensure
compatibility, performance, economic security, and overall system integrity. The
whitelisting process is necessary to prevent potential risks and vulnerabilities
associated with non-compliant or malicious tokens that can harm users and the
ecosystem. Any changes to the policies set out here or the protocol itself can
be proposed through governance.

## Background

The `zetacored` state maintains a list of whitelisted foreign fungible assets,
including ERC20 tokens on external chains in the `foreign_coins` construct. Each
of the `foreign_coin` is manageable by a ZRC20 contract on Zeta EVM.

By default all native gas assets on connected chains will be whitelisted. Other
fungible tokens need to be whitelisted.

The reason ZetaChain requires whitelisting process is because:

1. Compatibility: the ZetaChain system, by design, only works with _regular_
   ERC20 tokens, not arbitrary ones.
2. Performance: tracking unbounded number of token contracts cause performance
   issues.
3. Economic security: zombie tokens, infinite mints, economically unviable
   tokens may cause cascading problems on ZetaChain.
4. Security: ir*regular* ERC20 contracts may increase attack surface of
   ZetaChain system (re-entry, self-destruct, etc).

## Considerations for ERC20 contracts to be whitelisted

_Must_ means necessary conditions; _should_ means strong preference.

1. Must be ERC20 compliant and be _regular_ ERC20.
2. Must not rebase.
3. Must not have transfer fees.
4. Must not be involved in any scams.
5. Must be verified on Etherscan or equivalent explorers on other chain(s).
6. Must have a working product, utility, and an active community/userbase.
7. Must be audited.
8. Should be economically valuable/viable.
9. Should not be ERC777 or equivalent that can execute arbitrary code upon
   receiving funds.
10. Should have a proven track record without recent security, operational, or
    implementation issues.
11. Should have a source of initial liquidity.

## High-Level Procedure

First, a non-binding governance proposal that articulates the token and its
suitability (satisfaction of the above considerations) and benefits of
whitelisting the fungible token should be raised and passed.

Proposals that are passed will be reviewed, and if a decision is made to go
ahead with whitelisting the ERC20, according to the above requirements and
preferences as criteria, the protocol admin group 2 will sign a
`MsgWhitelistERC20` transaction and broadcast it. The ZetaChain network will do
the following procedure:

1. Deploy a ZRC20 contract on Zeta EVM to track and manage the foreign ERC20
   token;
2. Add an entry to the state variable viewable at
   `{IP}:1317/zeta-chain/fungible/foreign_coins`;
3. Whitelist the ERC20 contract address on the `ERC20Custody` contract on that
   external chain;

After these steps are done, the ERC20 whitelisting is finished. Liquidity for
the given asset should promptly begin deposits in order to provide a smooth
experience for users interested in interacting with the token.

## Detailed Procedure
### Prerequisites for Submission

Before initiating a governance proposal to whitelist an ERC-20 token as a ZRC-20, ensure you meet the following prerequisites:

* **Zetacored CLI Installation**: Make sure the zetacored CLI tool is installed on your system. This tool is essential for interacting with the Zetachain network and submitting proposals.
* **Wallet Setup and Funding**: A wallet must be set up and associated with the zetacored CLI. This wallet should contain a minimum of 1000 ZETA tokens, plus additional ZETA for gas fees, to cover the deposit required for proposal submission.

### **Submitting a Governance Proposal**

To submit a governance proposal for whitelisting an ERC-20 token, follow these steps:

1.  **Prepare the Proposal JSON File**: Draft a `mainnet_proposal.json` file that outlines the details of the token you wish to whitelist. This file must include:
    
    -   The proposal title and description, clearly articulating the value and details of the token and how it benefits the Zetachain ecosystem.
    -   A deposit amount in ZETA to accompany the proposal. Mainnet minimum is currently `1000 Zeta` or `1000000000000000000000azeta`
    
    Example `mainnet_proposal.json`:
```json
{ "messages": 
	[ { "@type": "/cosmos.gov.v1.MsgExecLegacyContent", 
		"content": { 
					"@type": "/cosmos.gov.v1beta1.TextProposal", 
					 "title": "Whitelist Token XYZ from XYZ Protocol", 
					 "description": "The current address is 0xADDRESSONMAINNET on ETH and is fully verified 			https://etherscan.io/token/ADDRESSONMAINNET#code. Whitelisting will allow us to launch our dApp fully and start onboarding users to Zetachain. XYZ's core product is a key component of the Zetachain ecosystem that is yet to be deployed. Whitelisting would mean we could rapidly deploy this." 
				}, 
		"authority": "zeta10d07y265gmmuvt4z0w9aw880jnsr700jvxasvr" 
	} ], 
	"metadata": "ipfs://YOUR_IPFS_METADATA.json", 
	"deposit": "1000000000000000000000azeta" 
}
```
2. **Prepare the IPFS Metadata JSON**: Create a metadata file to be uploaded to IPFS. This file should provide additional context and details about the proposal, including the title, authors, summary, detailed description, and a link to a forum or Discord for community discussion.

Example IPFS Metadata JSON:
```json
{   
	"title":  "Whitelist Token XYZ from XYZ Protocol",  
	"authors":  "Lead XYZ Dev",  
	"summary":  "We are proposing to enable the whitelisting of the XYZ ecosystem token, the XD token to enable transfers to Zetachain",  
	"details":  "The current address is 0xADDRESSONMAINNET on ETH and is fully verified https://etherscan.io/token/ADDRESSONMAINNET#code. Whitelisting will allow us to launch our dApp fully and start onboarding users to Zetachain. XYZ's core product is a key component of the Zetachain ecosystem that is yet to be deployed. Whitelisting would mean we could rapidly deploy this.",  
	"proposal_forum_url":  "FORUM_URL OR PROTOCOL DISCORD",  
	"vote_option_context":  "YES: Whitelist Token, NO: Do Not Whitelist Token"  
}
```
3. **Submit the Proposal via Command Line**: Use the `zetacored` CLI to submit your proposal to the mainnet. Ensure your wallet is configured correctly and has sufficient balance for the deposit and gas fees.

Command Line Submission:

```sh
zetacored tx gov submit-proposal mainnet_proposal.json --from YOUR_ZETA_ADDRESS --node https://zeta.rpc.nodeshub.online:443/ --log_format json --chain-id zetachain_7000-1 --trace --gas-prices 10000000000azeta
```

### **Next Steps After Submission**

After submitting your proposal, it's important to engage with the Zetachain community to discuss and gather support for your proposal. Utilize the provided forum or Discord link in your IPFS metadata to facilitate discussion and address any questions or concerns
