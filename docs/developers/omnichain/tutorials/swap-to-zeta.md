---
sidebar_position: 5
---

# Swap

## Overview

In this tutorial you will write a cross-chain swap contract that allows users to
swap a native gas or ERC-20 token from one of the connected chains for a token
on another chain.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@zetachain/protocol-contracts/contracts/zevm/SystemContract.sol";
import "@zetachain/protocol-contracts/contracts/zevm/interfaces/zContract.sol";
import "@zetachain/toolkit/contracts/SwapHelperLib.sol";
import "@zetachain/toolkit/contracts/BytesHelperLib.sol";
// highlight-next-line
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// highlight-next-line
contract SwapToZeta is zContract {
    SystemContract public systemContract;

    uint256 constant BITCOIN = 18332;

    constructor(address systemContractAddress) {
        systemContract = SystemContract(systemContractAddress);
    }

    modifier onlySystem() {
        require(
            msg.sender == address(systemContract),
            "Only system contract can call this function"
        );
        _;
    }

    function onCrossChainCall(
        zContext calldata context,
        address zrc20,
        uint256 amount,
        bytes calldata message
    ) external virtual override onlySystem {
        address target;
        bytes memory to;

        if (context.chainID == BITCOIN) {
            target = BytesHelperLib.bytesToAddress(message, 0);
            to = abi.encodePacked(BytesHelperLib.bytesToAddress(message, 20));
        } else {
            (address targetToken, bytes memory recipient) = abi.decode(
                message,
                (address, bytes)
            );
            target = targetToken;
            to = recipient;
        }

        // highlight-start
        bool isTargetZeta = target == systemContract.wZetaContractAddress();
        uint256 inputForGas;
        address gasZRC20;
        uint256 gasFee;
        // highlight-end

        // highlight-next-line
        if (!isTargetZeta) {
            (gasZRC20, gasFee) = IZRC20(target).withdrawGasFee();

            inputForGas = SwapHelperLib.swapTokensForExactTokens(
                systemContract,
                zrc20,
                gasFee,
                gasZRC20,
                amount
            );
        }

        uint256 outputAmount = SwapHelperLib.swapExactTokensForTokens(
            systemContract,
            zrc20,
            // highlight-next-line
            isTargetZeta ? amount : amount - inputForGas,
            target,
            0
        );

        // highlight-next-line
        if (!isTargetZeta) {
            IZRC20(gasZRC20).approve(target, gasFee);
            IZRC20(target).withdraw(to, outputAmount);
        }
    }
}
```
