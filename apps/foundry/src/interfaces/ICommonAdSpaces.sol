// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {AdSpace, AdSpaceConfig} from "../lib/Structs.sol";
import {IAdStrategy} from "./IAdStrategy.sol";

/// @title ICommonAds
interface ICommonAdSpaces {
    event AdGroupCreated(uint256 group, address beneficiary);

    event AdSpaceCreated(uint256 adGroupId, uint256 adId, AdSpace adSpace);

    event AdSpaceURIUpdated(uint256 adId, string uri);

    event AdSpaceStrategyUpdate(uint256 adId, IAdStrategy strategy);

    function createAdGroup(
        address recipient
    ) external returns (address adGroupAdmin, uint256 adGroupId);

    function createAdGroup(
        address recipient,
        AdSpaceConfig memory initialAdSpaceConfig,
        uint256 numberOfAdSpaces
    ) external returns (address adGroupAdmin, uint256 adGroupId);

    function openAdSpaces(
        uint256 adGroupId,
        AdSpaceConfig memory initialAdSpaceConfig,
        uint256 numberOfAdSpaces
    ) external;

    function updateAdURI(uint256 adId, string memory uri) external;

    function updateAdStrategy(uint256 adId, IAdStrategy strategy) external;

    function getAdUri(uint256 adId) external view returns (string memory uri);
}
