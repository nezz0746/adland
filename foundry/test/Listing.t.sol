// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {console} from "forge-std/Test.sol";
import {ListingBase} from "./helpers/ListingBase.sol";
import {WETH9} from "../src/mocks/WETH9.sol";
import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import {AdCommonOwnership} from "../src/ListingFactory.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {IDirectListings} from "contracts/prebuilts/marketplace/IMarketplace.sol";

contract ListingTest is ListingBase {
    WETH9 public weth;
    DirectListingsLogic public marketplace;
    AdCommonOwnership public adCommons;
    address internal deployer = vm.addr(420);
    address internal beneficiary = vm.addr(421);
    uint256 taxRate = 0.05e18;

    // Counter public counter;
    function setUp() public {
        vm.startPrank(deployer);
        weth = _deployWETH();

        marketplace = DirectListingsLogic(_deployMarketplace(address(weth)));

        vm.label(address(marketplace), "marketplace");

        adCommons = new AdCommonOwnership(address(marketplace));

        MarketplaceV3(payable(address(marketplace))).revokeRole(
            keccak256("LISTER_ROLE"),
            address(0)
        );
        MarketplaceV3(payable(address(marketplace))).revokeRole(
            keccak256("ASSET_ROLE"),
            address(0)
        );
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("ASSET_ROLE"),
            address(adCommons)
        );

        label(address(adCommons), "adCommons");
        label(beneficiary, "beneficiary");

        vm.stopPrank();
    }

    function testRevertWhenNotLister() public {
        vm.expectRevert("!LISTER_ROLE");
        adCommons.createAdGroup(beneficiary, taxRate, 3);
    }

    function testCreateAdGroup() public {
        _grantListRole(address(adCommons));

        adCommons.createAdGroup(beneficiary, taxRate, 3);

        assertEq(adCommons.getAdGroupSize(1), 3);
    }

    function testBuyListing() public {
        _grantListRole(address(adCommons));

        adCommons.createAdGroup(beneficiary, taxRate, 3);

        address buyer = vm.addr(69);

        vm.deal(buyer, 1 ether);
        label(buyer, "buyer");

        assertEq(adCommons.ownerOf(1), beneficiary);
        assertEq(beneficiary.balance, 0);

        vm.prank(buyer);
        marketplace.buyFromListing{value: 0.1 ether}(
            1,
            buyer,
            1,
            CurrencyTransferLib.NATIVE_TOKEN,
            0.1 ether
        );

        assertEq(beneficiary.balance, 0.1 ether);

        assertEq(adCommons.ownerOf(1), buyer);

        IDirectListings.Listing memory listing = marketplace.getListing(1);

        assertEq(
            uint256(listing.status),
            uint256(IDirectListings.Status.CREATED)
        );

        address buyer2 = vm.addr(96);
        label(buyer2, "buyer2");
        vm.deal(buyer2, 1 ether);

        vm.prank(buyer2);
        marketplace.buyFromListing{value: 0.1 ether}(
            1,
            buyer2,
            1,
            CurrencyTransferLib.NATIVE_TOKEN,
            0.1 ether
        );

        assertEq(adCommons.ownerOf(1), buyer2);
        vm.prank(buyer2);
        vm.expectRevert("NFT: Only marketplace can transfer");
        adCommons.safeTransferFrom(buyer2, vm.addr(22), 1);
    }

    function testSelfAssessListingPrice() public {
        _grantListRole(address(adCommons));

        adCommons.createAdGroup(beneficiary, taxRate, 3);

        IDirectListings.Listing memory listing = marketplace.getListing(1);

        IDirectListings.ListingParameters
            memory priceChangeParams = IDirectListings.ListingParameters(
                listing.assetContract,
                listing.tokenId,
                listing.quantity,
                listing.currency,
                listing.taxRate,
                0.2 ether,
                listing.startTimestamp,
                listing.endTimestamp,
                listing.reserved
            );

        vm.prank(beneficiary);
        marketplace.updateListing(listing.listingId, priceChangeParams);

        address buyer2 = vm.addr(96);
        label(buyer2, "buyer2");
        vm.deal(buyer2, 1 ether);

        vm.prank(buyer2);
        vm.expectRevert(
            "Marketplace: msg.value must exactly be the total price."
        );
        marketplace.buyFromListing{value: 0.1 ether}(
            1,
            buyer2,
            1,
            CurrencyTransferLib.NATIVE_TOKEN,
            0.2 ether
        );

        vm.prank(buyer2);
        marketplace.buyFromListing{value: 0.2 ether}(
            1,
            buyer2,
            1,
            CurrencyTransferLib.NATIVE_TOKEN,
            0.2 ether
        );
    }

    function testAddTaxRateToListing() public {}

    ////////////////////////// HELPERS //////////////////////////

    function _grantListRole(address to) internal {
        vm.prank(deployer);
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("LISTER_ROLE"),
            to
        );
    }

    function _grantAssetRole(address tokenContract) internal {
        vm.prank(deployer);
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("ASSET_ROLE"),
            tokenContract
        );
    }
}
