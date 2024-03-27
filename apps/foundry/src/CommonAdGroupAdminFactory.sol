// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC6551AccountCreator, AccountCreatorConfig} from "./lib/ERC6551AccountCreator.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ICommonAdGroupAdminFactory} from "./interfaces/ICommonAdGroupAdminFactory.sol";

/**
 * @title CommonAdGroupAdminFactory
 * @dev A contract that creates and manages group admins for ad groups.
 */
contract CommonAdGroupAdminFactory is ERC6551AccountCreator, ERC721, Ownable {
    /// @dev incrementing groupIds
    uint256 internal _groupIds;

    /**
     * @dev Constructor function.
     * @param accountConfig The configuration for the account creator.
     */
    constructor(
        AccountCreatorConfig memory accountConfig
    )
        ERC721("CommonAdGroupAdminFactory", "CAGAF")
        ERC6551AccountCreator(accountConfig)
    {
        _groupIds = 1;
    }

    /**
     * @dev Creates a new group admin and assigns it to the specified recipient.
     * Only the contract owner can call this function.
     * @param recipient The address of the recipient to whom the group admin will be assigned.
     * @return adGroupAdmin The address of the newly created group admin.
     * @return adGroupId The ID of the newly created group.
     */
    function createGroupAdmin(
        address recipient
    ) external onlyOwner returns (address adGroupAdmin, uint256 adGroupId) {
        uint256 groupId = _groupIds++;

        _safeMint(recipient, groupId);

        adGroupAdmin = _createAccount(block.chainid, address(this), groupId);

        adGroupId = groupId;

        _groupIds++;
    }

    /**
     * @dev Retrieves the address of the ad group admin for a given ad group ID.
     * @param adGroupId The ID of the ad group.
     * @return adGroupAdmin The address of the ad group admin.
     */
    function getGroupAdmin(
        uint256 adGroupId
    ) external view returns (address adGroupAdmin) {
        adGroupAdmin = _getAccount(block.chainid, address(this), adGroupId);
    }
}
