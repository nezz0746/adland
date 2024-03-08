// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {IDirectListings} from "contracts/prebuilts/marketplace/IMarketplace.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract AdCommonOwnership is ERC721 {
    uint256 constant MAX_BPS = 10_000;

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

    /// @notice Create a group of listings and transfer them to a beneficiary
    /// @param beneficiary The address that will receive the NFTs
    /// @param currency The currency to use for the listings
    /// @param initialPrice The initial price for the listings
    /// @param taxRate The tax rate for the listings (in BPS, i.e. 10000 = 100%)
    /// @param size The number of listings to create
    function createAdGroup(
        address beneficiary,
        address currency,
        uint256 initialPrice,
        uint256 taxRate,
        uint8 size
    ) public {
        require(taxRate < MAX_BPS, "AdCommonOwnership: Tax rate too high");
        // We use listingId as tokenId as they are perpetual
        uint256 nextStartListingId = marketplace.totalListings();

        for (
            uint256 i = nextStartListingId;
            i < nextStartListingId + size;
            i++
        ) {
            // Mint new group token to this contract
            _mint(address(this), i);

            // Create initial listings for the group
            marketplace.createListing(
                IDirectListings.ListingParameters(
                    address(this),
                    i,
                    1,
                    currency,
                    taxRate,
                    beneficiary,
                    initialPrice,
                    uint128(block.timestamp),
                    type(uint128).max,
                    false
                )
            );

            // Transfer the token to the beneficiary
            _transfer(address(this), beneficiary, i);
        }

        group++;

        adGroups[group] = AdGroup(
            nextStartListingId,
            nextStartListingId + size - 1
        );

        emit AdGroupCreated(group, size);
    }

    function getAdGroup(uint256 _group) public view returns (AdGroup memory) {
        return adGroups[_group];
    }

    function getAdGroupSize(uint256 _group) public view returns (uint256) {
        return
            adGroups[_group].endListingId - adGroups[_group].startListingId + 1;
    }

    function isApprovedForAll(
        address,
        address operator
    ) public view override returns (bool) {
        return operator == address(marketplace);
    }

    /// @dev for safeTransferFrom() method use on buyListing()
    /// @dev then _beforeTokenTransfer() will decide if the transfer is allowed
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
            // Can only transfer from this contract or marketplace
            (from == address(0) || from == address(this)) ||
                msg.sender == address(marketplace),
            "NFT: Only marketplace can transfer"
        );
    }
}
