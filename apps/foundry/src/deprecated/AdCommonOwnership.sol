// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {IDirectListings} from "contracts/prebuilts/marketplace/IMarketplace.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {ERC721Royalty, ERC721} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import {AccountCreatorConfig} from "../lib/ERC6551AccountCreator.sol";
import {AdBeneficiary} from "../AdBeneficiary.sol";

contract AdCommonOwnership is ERC721Royalty {
    uint256 constant MAX_BPS = 10_000;

    uint256 constant MAX_GROUP_SIZE = 20;

    IDirectListings marketplace;

    AdBeneficiary public adBeneficiary;

    struct AdGroup {
        address beneficiary;
        uint256 startListingId;
        uint256 endListingId;
    }

    struct Ad {
        string uri;
    }

    string public placeholderURI;

    uint256 public group;

    mapping(uint256 => AdGroup) adGroups;

    mapping(uint256 => Ad) ads;

    event AdGroupCreated(uint256 group, address beneficiary, uint8 size);

    event AdUriSet(uint256 listingId, string uri);

    constructor(
        address _marketplace,
        AccountCreatorConfig memory _accountConfig,
        string memory _placeholderURI
    ) ERC721("AdCommonOwnership", "ACO") {
        marketplace = IDirectListings(_marketplace);
        adBeneficiary = new AdBeneficiary(_accountConfig);
        placeholderURI = _placeholderURI;
    }

    /// @notice Create a group of listings and transfer them to a beneficiary
    /// @param recipient The address of the beneficiary NFT recipient
    /// @param currency The currency to use for the listings
    /// @param initialPrice The initial price for the listings
    /// @param taxRate The tax rate for the listings (in BPS, i.e. 10000 = 100%)
    /// @param size The number of listings to create
    function createAdGroup(
        address recipient,
        address currency,
        uint256 initialPrice,
        uint256 taxRate,
        uint8 size
    ) public returns (AdGroup memory adGroup) {
        require(taxRate < MAX_BPS, "AdCommonOwnership: Tax rate too high");
        // We use listingId as tokenId as they are perpetual
        uint256 nextStartListingId = marketplace.totalListings();

        // Create smart account for beneficiary
        address beneficiary = adBeneficiary.createBeneficiary(recipient);

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

        adGroup = AdGroup(
            beneficiary,
            nextStartListingId,
            nextStartListingId + size - 1
        );

        adGroups[group] = adGroup;

        emit AdGroupCreated(group, beneficiary, size);
    }

    /**
     * @dev Sets the advertisement URI for a given listing.
     * @param listingId The ID of the listing.
     * @param uri The URI of the advertisement.
     * @notice Only the owner of the listing can set the advertisement URI.
     */
    function setAdUri(uint256 listingId, string memory uri) public {
        require(
            ownerOf(listingId) == msg.sender,
            "AdCommonOwnership: Not owner"
        );
        ads[listingId].uri = uri;

        emit AdUriSet(listingId, uri);
    }

    /**
     * @dev Retrieves the Ad information for a given listing ID.
     * @param listingId The ID of the listing.
     * @return The Ad struct containing the information of the listing.
     */
    function getAd(uint256 listingId) public view returns (Ad memory) {
        return ads[listingId];
    }

    /**
     * @dev Retrieves the AdGroup struct at the specified index.
     * @param _group The index of the AdGroup to retrieve.
     * @return The AdGroup struct at the specified index.
     */
    function getAdGroup(uint256 _group) public view returns (AdGroup memory) {
        return adGroups[_group];
    }

    /**
     * @dev Returns the size of an ad group.
     * @param _group The index of the ad group.
     * @return The size of the ad group.
     */
    function getAdGroupSize(uint256 _group) public view returns (uint256) {
        return
            adGroups[_group].endListingId - adGroups[_group].startListingId + 1;
    }

    function getAllGroups(
        uint256 startGroupId,
        uint256 endGroupId
    ) public view returns (AdGroup[] memory) {
        require(
            startGroupId <= endGroupId &&
                endGroupId - startGroupId < MAX_GROUP_SIZE,
            "AdCommonOwnership: Invalid range"
        );
        AdGroup[] memory groups = new AdGroup[](endGroupId - startGroupId + 1);
        for (uint256 i = startGroupId; i <= endGroupId; i++) {
            groups[i - startGroupId] = adGroups[i];
        }
        return groups;
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

    function tokenURI(uint256) public view override returns (string memory) {
        return placeholderURI;
    }
}
