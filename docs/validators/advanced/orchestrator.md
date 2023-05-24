# Orchestrator / Coordinator Steps

:::caution
These should only be run by the ZetaChain coordinator, and only after all PRs
containing the gentx and other information from operators have been submitted.
Operators should ignore this document.
:::

### Collector - Merge all PRS

`git pull` the merged branch so that you have all the files in the gentx folder.

`bash ./scripts/genesis_collector.sh`

- This would put a genesis.json into the `genesis_files/config/` folder
  - Commit and push the file to the Repo
