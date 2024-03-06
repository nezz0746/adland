// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import "@thirdweb-dev/dynamic-contracts/src/interface/IExtension.sol";
import {TWProxy} from "contracts/infra/TWProxy.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";
import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import {WETH9} from "../../src/mocks/WETH9.sol";
import {DSTestFull} from "./DSTestFull.sol";

contract ListingBase is DSTestFull, IExtension {
    function _deployWETH() internal returns (WETH9 weth) {
        weth = new WETH9();
    }

    function _deployMarketplace(
        address weth
    ) internal returns (address marketplace) {
        (, address marketplaceDeployer, ) = vm.readCallers();

        Extension[] memory extensions = _setupExtensions(weth);

        address impl = address(
            new MarketplaceV3(
                MarketplaceV3.MarketplaceConstructorParams(
                    extensions,
                    address(0),
                    address(weth)
                )
            )
        );

        marketplace = address(
            new TWProxy(
                impl,
                abi.encodeCall(
                    MarketplaceV3.initialize,
                    (
                        marketplaceDeployer, // Default Admin
                        "",
                        new address[](0),
                        marketplaceDeployer, // Fee Recipient
                        0
                    )
                )
            )
        );
    }

    function _setupExtensions(
        address weth
    ) internal returns (Extension[] memory extensions) {
        extensions = new Extension[](1);

        // Deploy `DirectListings`
        address directListings = address(new DirectListingsLogic(weth));
        vm.label(directListings, "DirectListings_Extension");

        // Extension: DirectListingsLogic
        Extension memory extensionDirectListings;
        extensionDirectListings.metadata = ExtensionMetadata({
            name: "DirectListingsLogic",
            metadataURI: "ipfs://DirectListings",
            implementation: directListings
        });

        extensionDirectListings.functions = new ExtensionFunction[](13);
        extensionDirectListings.functions[0] = ExtensionFunction(
            DirectListingsLogic.totalListings.selector,
            "totalListings()"
        );
        extensionDirectListings.functions[1] = ExtensionFunction(
            DirectListingsLogic.isBuyerApprovedForListing.selector,
            "isBuyerApprovedForListing(uint256,address)"
        );
        extensionDirectListings.functions[2] = ExtensionFunction(
            DirectListingsLogic.isCurrencyApprovedForListing.selector,
            "isCurrencyApprovedForListing(uint256,address)"
        );
        extensionDirectListings.functions[3] = ExtensionFunction(
            DirectListingsLogic.currencyPriceForListing.selector,
            "currencyPriceForListing(uint256,address)"
        );
        extensionDirectListings.functions[4] = ExtensionFunction(
            DirectListingsLogic.createListing.selector,
            "createListing((address,uint256,uint256,address,uint256,uint256,uint128,uint128,bool))"
        );
        extensionDirectListings.functions[5] = ExtensionFunction(
            DirectListingsLogic.updateListing.selector,
            "updateListing(uint256,(address,uint256,uint256,address,uint256,uint256,uint128,uint128,bool))"
        );
        extensionDirectListings.functions[6] = ExtensionFunction(
            DirectListingsLogic.cancelListing.selector,
            "cancelListing(uint256)"
        );
        extensionDirectListings.functions[7] = ExtensionFunction(
            DirectListingsLogic.approveBuyerForListing.selector,
            "approveBuyerForListing(uint256,address,bool)"
        );
        extensionDirectListings.functions[8] = ExtensionFunction(
            DirectListingsLogic.approveCurrencyForListing.selector,
            "approveCurrencyForListing(uint256,address,uint256)"
        );
        extensionDirectListings.functions[9] = ExtensionFunction(
            DirectListingsLogic.buyFromListing.selector,
            "buyFromListing(uint256,address,uint256,address,uint256)"
        );
        extensionDirectListings.functions[10] = ExtensionFunction(
            DirectListingsLogic.getAllListings.selector,
            "getAllListings(uint256,uint256)"
        );
        extensionDirectListings.functions[11] = ExtensionFunction(
            DirectListingsLogic.getAllValidListings.selector,
            "getAllValidListings(uint256,uint256)"
        );
        extensionDirectListings.functions[12] = ExtensionFunction(
            DirectListingsLogic.getListing.selector,
            "getListing(uint256)"
        );

        extensions[0] = extensionDirectListings;
    }
}
