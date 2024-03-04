// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";
import {ListingBase} from "./helpers/ListingBase.sol";
import {WETH9} from "../src/mocks/WETH9.sol";
import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import {AdGroupFactory} from "../src/ListingFactory.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";

contract ListingTest is ListingBase {
    WETH9 public weth;
    DirectListingsLogic public marketplace;
    AdGroupFactory public adGroupFactory;
    address deployer = vm.addr(420);

    // Counter public counter;
    function setUp() public {
        vm.startPrank(deployer);
        weth = _deployWETH();

        marketplace = DirectListingsLogic(_deployMarketplace(address(weth)));

        adGroupFactory = new AdGroupFactory(address(marketplace));

        MarketplaceV3(payable(address(marketplace))).revokeRole(
            keccak256("LISTER_ROLE"),
            address(0)
        );
        vm.stopPrank();
    }

    function testRevertWhenNotLister() public {
        vm.expectRevert("!LISTER_ROLE");
        adGroupFactory.createAdGroup(3);
    }

    function testCreateAdGroup() public {
        _grantListRole(address(adGroupFactory));

        adGroupFactory.createAdGroup(3);

        assertEq(adGroupFactory.getAdGroup(1).size, 3);
    }

    function testBuyListing() public {
        _grantListRole(address(adGroupFactory));

        adGroupFactory.createAdGroup(3);

        address buyer = vm.addr(69);

        vm.deal(buyer, 1);

        marketplace.buyFromListing{value: 0.1 ether}(
            1,
            buyer,
            1,
            CurrencyTransferLib.NATIVE_TOKEN,
            0.1 ether
        );
    }

    ////////////////////////// HELPERS //////////////////////////

    function _grantListRole(address to) internal {
        vm.prank(deployer);
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("LISTER_ROLE"),
            to
        );
    }
}
