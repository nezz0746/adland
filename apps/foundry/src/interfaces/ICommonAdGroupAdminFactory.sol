// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

interface ICommonAdGroupAdminFactory {
    function createGroupAdmin(
        address recipient
    ) external returns (address adGroupAdmin, uint256 adGroupId);

    function getGroupAdmin(
        uint256 adGroupId
    ) external view returns (address adGroupAdmin);
}
