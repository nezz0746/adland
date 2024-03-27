// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {console} from "forge-std/Test.sol";
import {CommonAdSpacesBase, ISuperToken, SuperToken} from "./helpers/CommonAdSpacesBase.sol";
import {WETH9} from "../test/mocks/WETH9.sol";
import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {IDirectListings} from "contracts/prebuilts/marketplace/IMarketplace.sol";
import {UD60x18, ud, intoUint256} from "@prb/math/src/UD60x18.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {ISETH} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/tokens/ISETH.sol";
import {StreamCreator} from "./mocks/StreamCreator.sol";
import {TestToken} from "@superfluid-finance/ethereum-contracts/contracts/utils/TestToken.sol";
import {AdBeneficiary} from "../src/AdBeneficiary.sol";
import {ERC6551Registry} from "erc6551/ERC6551Registry.sol";

import {AdSpaceConfig} from "../src/CommonAdSpaces.sol";
import {CommonAdGroupAdminFactory} from "../src/CommonAdGroupAdminFactory.sol";

contract CommonAdSpacesTest is CommonAdSpacesBase {
    using SuperTokenV1Library for ISuperToken;
    uint256 constant baseTaxRateBPS = 120; // 1.2% per month
    uint256 constant MAX_BPS = 10_000;
    uint256 constant DEFAULT_QUANTITY = 1;

    function testCannotTransferAsOwnerOfListing() public {
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));

        _upgradeETH(ethx, buyer, _taxDuePerWeek(baseTaxRateBPS, initialPrice));

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(commonAds.ownerOf(1), buyer);

        vm.prank(buyer);
        vm.expectRevert("CommonAdSpaces: Only marketplace can transfer");
        commonAds.transferFrom(buyer, vm.addr(111), 1);
    }

    function testCommonAdGroupAdminFactory() public {
        CommonAdGroupAdminFactory adminFactory = commonAds
            .adGroupAdminFactory();

        vm.expectRevert("Ownable: caller is not the owner");
        adminFactory.createGroupAdmin(vm.addr(69));

        vm.prank(address(commonAds));
        adminFactory.createGroupAdmin(vm.addr(69));

        assertEq(adminFactory.ownerOf(1), vm.addr(69));
    }

    function testCreateAdGroup() public {
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3
        );
    }

    function testStreamCreator() public {
        StreamCreator streamCreator = new StreamCreator();
        address account = _getAccount(69, 1000 ether);

        uint256 priceOfPurchase = 100e18; // 100 DAI
        uint256 taxRateBPS = 120; // 1.2% per month
        uint256 duePerMonth = (priceOfPurchase * taxRateBPS) / 10000;
        uint256 duePerSecond = duePerMonth / 30 days;
        int96 duePerSecondInt = int96(int256(duePerSecond));

        _grantMaxFlowPermissions(daix, account, address(streamCreator));

        _mintAndUpgradeERC20(daix, account, 12 * duePerMonth);

        streamCreator.createStream(
            address(daix),
            account,
            vm.addr(96),
            duePerSecondInt
        );
    }

    function testBuyListingETH() public {
        (address admin, ) = commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));

        uint256 missingAmount = 1;

        _upgradeETH(
            ethx,
            buyer,
            _taxDuePerWeek(baseTaxRateBPS, initialPrice) - missingAmount
        );

        vm.prank(buyer);
        vm.expectRevert("Marketplace: TokenX insufficient balance");
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        // Add missing amount
        _upgradeETH(ethx, buyer, missingAmount);

        assertEq(commonAds.ownerOf(1), admin);
        assertEq(admin.balance, 0);

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        vm.warp(block.timestamp + 1 days);

        assertEq(admin.balance, initialPrice);
        assertEq(commonAds.ownerOf(1), buyer);

        IDirectListings.Listing memory listing = marketplace.getListing(1);

        assertEq(
            uint256(listing.status),
            uint256(IDirectListings.Status.CREATED)
        );

        address buyer2 = _getAccount(96, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer2, address(marketplace));

        _upgradeETH(ethx, buyer2, 1 ether);

        vm.prank(buyer2);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer2,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(commonAds.ownerOf(1), buyer2);
        vm.prank(buyer2);
        vm.expectRevert("CommonAdSpaces: Only marketplace can transfer");
        commonAds.safeTransferFrom(buyer2, vm.addr(22), 1);

        // Expect flow for buyer to be stopped
        assertEq(_getFlowRate(address(ethx), buyer, admin), 0);

        // Test Buyer 2 can set ad uri
        vm.prank(buyer);
        vm.expectRevert("CommonAdSpaces: Not ad owner");
        commonAds.updateAdURI(1, "https://www.google.com");

        vm.prank(buyer2);
        commonAds.updateAdURI(1, "https://www.google.com");
    }

    function testBuyMultipleListings() public {
        (address admin, ) = commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));
        _upgradeETH(ethx, buyer, 1 ether);

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            0,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, initialPrice),
            _getFlowRate(address(ethx), buyer, admin)
        );

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, initialPrice) * 2,
            _getFlowRate(address(ethx), buyer, admin)
        );

        address buyer2 = _getAccount(22, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer2, address(marketplace));

        _upgradeETH(ethx, buyer2, 1 ether);

        vm.prank(buyer2);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer2,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, initialPrice),
            _getFlowRate(address(ethx), buyer, admin)
        );

        vm.prank(buyer2);
        marketplace.buyFromListing{value: initialPrice}(
            0,
            buyer2,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(0, _getFlowRate(address(ethx), buyer, admin));
    }

    function testBuyListingDAI() public {
        uint256 initialPriceInDai = 100e18; // 100 DAI
        uint256 taxRateBPS = 120; // 1.2% per month

        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: address(dai),
                initialPrice: initialPriceInDai,
                taxRate: taxRateBPS
            }),
            3
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(daix, buyer, address(marketplace));

        // Mint DAI for actual purchase
        dai.mint(buyer, 1000e18);

        // Mint more DAI & upgrade to DAIx for tax
        _mintAndUpgradeERC20(daix, buyer, 1000e18);

        assertEq(dai.balanceOf(buyer), 1000e18);

        vm.prank(buyer);
        dai.approve(address(marketplace), initialPriceInDai);

        vm.prank(buyer);
        marketplace.buyFromListing(
            1,
            buyer,
            DEFAULT_QUANTITY,
            address(dai),
            initialPriceInDai
        );
    }

    function testSelfAssessListingPrice() public {
        (address admin, ) = commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
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
                listing.taxBeneficiary,
                newPrice,
                listing.startTimestamp,
                listing.endTimestamp,
                listing.reserved
            );
        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));

        _upgradeETH(ethx, buyer, _taxDuePerWeek(baseTaxRateBPS, initialPrice));

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, initialPrice),
            _getFlowRate(address(ethx), buyer, admin)
        );

        console.log(
            "flowBefore",
            uint256(int256(_getFlowRate(address(ethx), buyer, admin)))
        );

        vm.prank(buyer);
        marketplace.updateListing(listing.listingId, priceChangeParams);

        console.log(
            "flowAfter",
            uint256(int256(_getFlowRate(address(ethx), buyer, admin)))
        );

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, newPrice),
            _getFlowRate(address(ethx), buyer, admin)
        );

        priceChangeParams.pricePerToken = initialPrice;

        vm.prank(buyer);
        marketplace.updateListing(listing.listingId, priceChangeParams);

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, initialPrice),
            _getFlowRate(address(ethx), buyer, admin)
        );

        priceChangeParams.pricePerToken = newPrice;
        vm.prank(buyer);
        marketplace.updateListing(listing.listingId, priceChangeParams);

        address buyer2 = _getAccount(96, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer2, address(marketplace));

        _upgradeETH(ethx, buyer2, _taxDuePerWeek(baseTaxRateBPS, newPrice));

        vm.prank(buyer2);
        vm.expectRevert(
            "Marketplace: msg.value must exactly be the total price."
        );
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer2,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            newPrice
        );

        vm.prank(buyer2);
        marketplace.buyFromListing{value: newPrice}(
            1,
            buyer2,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            newPrice
        );
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

    function testSetTokenXToDirectListingForTax() public {
        vm.prank(deployer);
        marketplace.setTokenX(address(dai), address(daix));
    }

    function testCancelListing() public {
        (address admin, ) = commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));

        _upgradeETH(ethx, buyer, 1 ether);

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(
            _getFlowRate(address(ethx), buyer, admin),
            _computeFlowRate(baseTaxRateBPS, initialPrice)
        );
        assertEq(commonAds.ownerOf(1), buyer);

        vm.prank(buyer);
        marketplace.cancelListing(1);

        assertEq(_getFlowRate(address(ethx), buyer, admin), 0);
        assertEq(commonAds.ownerOf(1), admin);
    }

    function testForecloseListing() public {
        (address admin, ) = commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));

        _upgradeETH(ethx, buyer, _taxDuePerWeek(baseTaxRateBPS, initialPrice));

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        vm.warp(block.timestamp + 7 days);

        vm.prank(admin);
        marketplace.forecloseListing(1);

        assertEq(commonAds.ownerOf(1), admin);
        assertEq(_getFlowRate(address(ethx), buyer, admin), 0);

        _upgradeETH(ethx, buyer, _taxDuePerWeek(baseTaxRateBPS, initialPrice));
        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        vm.warp(block.timestamp + 7 days);

        address landlord = _getAccount(420, 1000 ether);

        vm.prank(landlord);
        vm.expectRevert("Marketplace: not tax beneficiary or landlord");
        marketplace.forecloseListing(1);

        vm.prank(deployer);
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("LANDLORD_ROLE"),
            landlord
        );

        vm.prank(landlord);
        marketplace.forecloseListing(1);
    }

    ////////////////////////// HELPERS //////////////////////////

    function _getFlowRate(
        address token,
        address sender,
        address reciever
    ) internal view returns (int96) {
        (, int96 flowRate, , ) = cfa.getFlow(
            ISuperToken(token),
            sender,
            reciever
        );
        return flowRate;
    }

    function _computeAssetFlowRate(
        uint256 taxRateBPS,
        uint256 price
    ) internal pure returns (int96) {
        uint256 duePerWeek = _taxDuePerWeek(taxRateBPS, price);

        return int96(int256(duePerWeek / 7 days));
    }

    function _logFlowInfo(
        address sender,
        address receiver
    )
        internal
        view
        returns (
            uint256 timestamp,
            int96 flowRate,
            uint256 deposit,
            uint256 owedDeposit
        )
    {
        (timestamp, flowRate, deposit, owedDeposit) = cfa.getFlow(
            ethx,
            sender,
            receiver
        );

        console.log("..................... Flow Info .....................");
        console.log("flowRate             :", uint256(int256(flowRate)));
        console.log("deposit              :", deposit);
        console.log("owedDeposit          :", owedDeposit);
        console.log("timestamp            :", timestamp);
    }

    function _computeFlowRate(
        uint256 taxRateBPS,
        uint256 price
    ) internal pure returns (int96) {
        uint256 duePerWeek = _taxDuePerWeek(taxRateBPS, price);

        return int96(int256(duePerWeek / 7 days));
    }

    function _taxDuePerWeek(
        uint256 taxRateBPS,
        uint256 price
    ) internal pure returns (uint256) {
        return (price * taxRateBPS) / MAX_BPS;
    }

    function _getAccount(uint256 pk, uint256 deal) internal returns (address) {
        address tester = vm.addr(pk);
        vm.deal(tester, deal);
        return tester;
    }

    function _grantAssetRole(address tokenContract) internal {
        vm.prank(deployer);
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("ASSET_ROLE"),
            tokenContract
        );
    }

    function _grantMaxFlowPermissions(
        ISuperToken x,
        address from,
        address to
    ) internal {
        vm.prank(from);
        sf.cfaV1Forwarder.grantPermissions(x, to);
    }

    function _mintAndUpgradeERC20(
        ISuperToken tokenX,
        address to,
        uint256 amount
    ) internal {
        TestToken token = TestToken(tokenX.getUnderlyingToken());

        token.mint(to, amount);

        vm.prank(to);
        dai.approve(address(tokenX), amount);

        vm.prank(to);
        daix.upgrade(amount);
    }

    function _upgradeETH(
        ISuperToken ethX,
        address to,
        uint256 amount
    ) internal {
        vm.prank(to);
        ISETH(address(ethX)).upgradeByETH{value: amount}();
    }
}
