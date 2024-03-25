// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./MintableERC20.sol";

contract MockERC20 is MintableERC20 {
    constructor() ERC20("ERC20", "ERC20") {}
}
