// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {console} from "forge-std/Test.sol";
import {ListingBase, ISuperToken, SuperToken} from "./helpers/ListingBase.sol";
import {WETH9} from "../src/mocks/WETH9.sol";
import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import {AdCommonOwnership} from "../src/ListingFactory.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {IDirectListings} from "contracts/prebuilts/marketplace/IMarketplace.sol";
import {MockERC20} from "./mocks/MockERC20.sol";
import {FlowSender} from "./helpers/FlowSender.t.sol";
import {UD60x18, ud, intoUint256} from "@prb/math/src/UD60x18.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

contract ListingTest is ListingBase {
    using SuperTokenV1Library for ISuperToken;

    function testRevertWhenNotLister() public {
        vm.expectRevert("!LISTER_ROLE");
        adCommons.createAdGroup(
            beneficiary,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice,
            taxRate,
            3
        );
    }

    function testCreateAdGroup() public {
        _grantListRole(address(adCommons));

        adCommons.createAdGroup(
            beneficiary,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice,
            taxRate,
            3
        );

        assertEq(adCommons.getAdGroupSize(1), 3);
    }

    function testBuyListing() public {
        _grantListRole(address(adCommons));

        adCommons.createAdGroup(
            beneficiary,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice,
            taxRate,
            3
        );

        address buyer = vm.addr(69);

        vm.deal(buyer, 1 ether);
        label(buyer, "buyer");

        assertEq(adCommons.ownerOf(1), beneficiary);
        assertEq(beneficiary.balance, 0);

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            1,
            CurrencyTransferLib.NATIVE_TOKEN,
            0.1 ether
        );

        assertEq(beneficiary.balance, initialPrice);

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
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer2,
            1,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(adCommons.ownerOf(1), buyer2);
        vm.prank(buyer2);
        vm.expectRevert("NFT: Only marketplace can transfer");
        adCommons.safeTransferFrom(buyer2, vm.addr(22), 1);
    }

    function testBuyListingERC20() public {
        _grantListRole(address(adCommons));

        uint256 initialPriceInDai = 100e18; // 100 DAI

        adCommons.createAdGroup(
            beneficiary,
            address(erc20),
            initialPriceInDai,
            taxRate,
            3
        );

        address buyer = vm.addr(69);
        erc20.mintTo(buyer, 1000e18);

        assertEq(erc20.balanceOf(buyer), 1000e18);

        vm.prank(buyer);
        erc20.approve(address(marketplace), initialPriceInDai);

        vm.prank(buyer);
        marketplace.buyFromListing(
            1,
            buyer,
            1,
            address(erc20),
            initialPriceInDai
        );
    }

    function testSelfAssessListingPrice() public {
        _grantListRole(address(adCommons));

        adCommons.createAdGroup(
            beneficiary,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice,
            taxRate,
            3
        );

        IDirectListings.Listing memory listing = marketplace.getListing(1);

        uint256 newPrice = 0.2 ether;

        IDirectListings.ListingParameters
            memory priceChangeParams = IDirectListings.ListingParameters(
                listing.assetContract,
                listing.tokenId,
                listing.quantity,
                listing.currency,
                listing.taxRate,
                newPrice,
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
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer2,
            1,
            CurrencyTransferLib.NATIVE_TOKEN,
            newPrice
        );

        vm.prank(buyer2);
        marketplace.buyFromListing{value: newPrice}(
            1,
            buyer2,
            1,
            CurrencyTransferLib.NATIVE_TOKEN,
            newPrice
        );
    }

    function testUpgradeAccountDaiToDaiX() public {
        address account = vm.addr(69);

        FlowSender flowSender = new FlowSender(daix);

        vm.prank(account);
        flowSender.gainDaiX(1000e18);
    }

    function testCreateDaiXStream() public {
        address account = vm.addr(69);
        address account2 = vm.addr(96);

        uint256 priceOfAsset = 104e18; // 104 DAI

        // 1.2% per week
        uint256 taxRateBPS = 120;

        uint256 duePerWeek = (priceOfAsset * taxRateBPS) / 10000;

        int96 duePerSecond = int96(int256(duePerWeek / 7 days));

        vm.startPrank(account);
        dai.mint(account, duePerWeek);
        dai.approve(address(daix), duePerWeek);
        daix.upgrade(duePerWeek);

        daix.createFlow(account2, duePerSecond);
        vm.stopPrank();

        vm.warp(block.timestamp + 7 days + 1);
        assertEq(daix.balanceOf(account), 0);
        assertGte(daix.balanceOf(account2), duePerWeek);
    }

    function testAddTaxRateToListing() public {
        //
    }

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
