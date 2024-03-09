// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import "@thirdweb-dev/dynamic-contracts/src/interface/IExtension.sol";
import {TWProxy} from "contracts/infra/TWProxy.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";
import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import {WETH9} from "../../src/mocks/WETH9.sol";
import {DSTestFull} from "./DSTestFull.sol";
import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperToken} from "@superfluid-finance/ethereum-contracts/contracts/superfluid/SuperToken.sol";
import {FlowSender} from "./FlowSender.t.sol";
import {SuperfluidFrameworkDeployer, SuperfluidFrameworkDeploymentSteps} from "@superfluid-finance/ethereum-contracts/contracts/utils/SuperfluidFrameworkDeployer.sol";
import {TestToken} from "@superfluid-finance/ethereum-contracts/contracts/utils/TestToken.sol";
import {ConstantFlowAgreementV1} from "@superfluid-finance/ethereum-contracts/contracts/agreements/ConstantFlowAgreementV1.sol";
import {ISETH} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/tokens/ISETH.sol";
import {MockERC20} from "../mocks/MockERC20.sol";
import {AdCommonOwnership} from "../../src/ListingFactory.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {ERC1820RegistryCompiled} from "@superfluid-finance/ethereum-contracts/contracts/libs/ERC1820RegistryCompiled.sol";

contract ListingBase is DSTestFull, IExtension {
    address wethSepolia = 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9;
    address cfav1Sepolia = 0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef;
    address daixSepolia = 0x9Ce2062b085A2268E8d769fFC040f6692315fd2c;
    address ethXSepolia = 0x30a6933Ca9230361972E413a15dC8114c952414e;

    SuperfluidFrameworkDeploymentSteps.Framework sf;
    WETH9 public weth;
    DirectListingsLogic public marketplace;
    AdCommonOwnership public adCommons;
    address internal deployer = vm.addr(420);
    address internal beneficiary = vm.addr(421);
    uint256 initialPrice = 0.1 ether;

    TestToken public dai;
    ISuperToken public daix;
    ISuperToken public ethx;
    ConstantFlowAgreementV1 public cfa;

    function setUp() public {
        vm.etch(ERC1820RegistryCompiled.at, ERC1820RegistryCompiled.bin);

        vm.createSelectFork("sepolia");

        _deployWETH();
        _deployStreamingUtils();

        vm.startPrank(deployer);

        marketplace = DirectListingsLogic(_deployMarketplace(address(weth)));

        vm.label(address(marketplace), "marketplace");

        adCommons = new AdCommonOwnership(address(marketplace));

        _grantTaxManagerRole(deployer);

        marketplace.setTokenX(CurrencyTransferLib.NATIVE_TOKEN, address(ethx));
        marketplace.setTokenX(address(dai), address(daix));

        MarketplaceV3(payable(address(marketplace))).revokeRole(
            keccak256("LISTER_ROLE"),
            address(0)
        );
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("LISTER_ROLE"),
            address(adCommons)
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

    function _deployWETH() internal {
        if (block.chainid == 11155111) {
            weth = WETH9(payable(wethSepolia));
        } else {
            weth = new WETH9();
        }
    }

    function _deployStreamingUtils() internal {
        if (block.chainid == 11155111) {
            cfa = ConstantFlowAgreementV1(cfav1Sepolia);
            daix = ISuperToken(daixSepolia);
            dai = TestToken(daix.getUnderlyingToken());
            ethx = ISuperToken(ethXSepolia);
        } else {
            SuperfluidFrameworkDeployer sfDeployer = new SuperfluidFrameworkDeployer();
            sfDeployer.deployTestFramework();
            sf = sfDeployer.getFramework();

            (dai, daix) = sfDeployer.deployWrapperSuperToken(
                "Fake DAI",
                "DAI",
                18,
                1000000e18,
                deployer
            );

            ethx = sfDeployer.deployNativeAssetSuperToken(
                "Native Ether X",
                "ETHx"
            );
        }
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

        extensionDirectListings.functions = new ExtensionFunction[](14);
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
            "createListing((address,uint256,uint256,address,uint256,address,uint256,uint128,uint128,bool))"
        );
        extensionDirectListings.functions[5] = ExtensionFunction(
            DirectListingsLogic.updateListing.selector,
            "updateListing(uint256,(address,uint256,uint256,address,uint256,address,uint256,uint128,uint128,bool))"
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

        extensionDirectListings.functions[13] = ExtensionFunction(
            DirectListingsLogic.setTokenX.selector,
            "setTokenX(address,address)"
        );

        extensions[0] = extensionDirectListings;
    }

    function _grantTaxManagerRole(address to) internal {
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("TAX_MANAGER_ROLE"),
            to
        );
    }
}
