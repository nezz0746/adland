// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {IAdStrategy} from "../interfaces/IAdStrategy.sol";

/**
 * @title AdGroup
 * @dev Represents an advertising group.
 */
struct AdGroup {
    address admin;
}

/**
 * @title AdSpace
 * @dev Represents an advertising space.
 */
struct AdSpace {
    uint256 adGroupId;
    string uri;
    IAdStrategy strategy;
}

/**
 * @title AdSpaceConfig
 * @dev Represents the configuration for an advertising space.
 */
struct AdSpaceConfig {
    address currency;
    uint256 initialPrice;
    uint256 taxRate;
}
