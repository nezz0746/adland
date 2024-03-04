// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {IDirectListings} from "contracts/prebuilts/marketplace/IMarketplace.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract AdCommonOwnership is ERC721 {
    IDirectListings marketplace;

    struct AdGroup {
        uint256 startListingId;
        uint256 endListingId;
    }

    uint256 public group;

    mapping(uint256 => AdGroup) adGroups;

    event AdGroupCreated(uint256 group, uint8 size);

    constructor(address _marketplace) ERC721("AdCommonOwnership", "ACO") {
        marketplace = IDirectListings(_marketplace);
    }

    function createAdGroup(address beneficiary, uint8 size) public {
        uint256 startListingId = marketplace.totalListings();
        for (uint256 i = startListingId; i < startListingId + size; i++) {
            // Create initial listings for the group
            marketplace.createListing(
                IDirectListings.ListingParameters(
                    address(this),
                    i,
                    1,
                    CurrencyTransferLib.NATIVE_TOKEN,
                    0.1 ether,
                    uint128(block.timestamp),
                    type(uint128).max,
                    false
                )
            );

            // We use listingId as tokenId as they are perpetual
            _safeMint(beneficiary, i);
        }

        group++;

        adGroups[group] = AdGroup(startListingId, startListingId + size - 1);

        emit AdGroupCreated(group, size);
    }

    function getAdGroup(uint256 _group) public view returns (AdGroup memory) {
        return adGroups[_group];
    }

    function getAdGroupSize(uint256 _group) public view returns (uint256) {
        return
            adGroups[_group].endListingId - adGroups[_group].startListingId + 1;
    }

    function _generateAdId(
        uint256 _group,
        uint256 _index
    ) internal pure returns (uint256) {
        return (_group << 128) | _index;
    }

    /// @dev consider marketplace as operator for all tokens
    function _isApprovedOrOwner(
        address spender,
        uint256 tokenId
    ) internal view override returns (bool) {
        return
            super._isApprovedOrOwner(spender, tokenId) ||
            spender == address(marketplace);
    }

    // @dev only marketplace can transfer
    function _beforeTokenTransfer(
        address from,
        address,
        uint256,
        uint256
    ) internal view override {
        require(
            from == address(0) || msg.sender == address(marketplace),
            "NFT: Only marketplace can transfer"
        );
    }
}
