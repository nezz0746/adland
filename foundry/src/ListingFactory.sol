// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import {IDirectListings} from "contracts/prebuilts/marketplace/IMarketplace.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Should only be transferable by the marketplace
contract NFT is ERC721 {
    constructor() ERC721("NFT", "NFT") {}

    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }
}

contract AdGroupFactory {
    IDirectListings marketplace;

    struct AdGroup {
        uint8 size;
        address nft;
    }

    uint256 public group;

    mapping(uint256 => AdGroup) adGroups;

    event AdGroupCreated(uint256 group, uint8 size, address nft);

    constructor(address _marketplace) {
        marketplace = IDirectListings(_marketplace);
    }

    function createAdGroup(uint8 size) public {
        // Create NFT
        NFT nft = new NFT();
        for (uint8 i = 0; i < size; i++) {
            nft.setApprovalForAll(address(marketplace), true);

            nft.mint(address(this), i);

            marketplace.createListing(
                IDirectListings.ListingParameters(
                    address(nft),
                    i,
                    1,
                    CurrencyTransferLib.NATIVE_TOKEN,
                    0.1 ether,
                    uint128(block.timestamp),
                    type(uint128).max,
                    false
                )
            );
        }

        group++;

        adGroups[group] = AdGroup(size, address(nft));

        emit AdGroupCreated(group, size, address(nft));
    }

    function getAdGroup(uint256 _group) public view returns (AdGroup memory) {
        return adGroups[_group];
    }
}
