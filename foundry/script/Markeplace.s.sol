// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {console} from "forge-std/Script.sol";
import {WETH9} from "../src/mocks/WETH9.sol";
import {BaseScript} from "./Base.s.sol";
import {TWProxy} from "contracts/infra/TWProxy.sol";
import {AdCommonOwnership} from "../src/AdCommonOwnership.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";
import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import "@thirdweb-dev/dynamic-contracts/src/interface/IExtension.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {TestToken} from "@superfluid-finance/ethereum-contracts/contracts/utils/TestToken.sol";
import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

interface IPaymaster {
    function deposit() external payable;
}

contract MarketplaceScript is BaseScript, IExtension {
    /// @dev utils
    WETH9 public weth;
    ISuperToken daix;
    ISuperToken ethx;
    address cfav1;

    address wethSepolia = 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9;
    address daixSepolia = 0x9Ce2062b085A2268E8d769fFC040f6692315fd2c;
    address ethXSepolia = 0x30a6933Ca9230361972E413a15dC8114c952414e;
    address cfav1Sepolia = 0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef;

    address wethOptimismSepolia = 0x74A4A85C611679B73F402B36c0F84A7D2CcdFDa3;
    address daixOptimismSepolia = 0xD6FAF98BeFA647403cc56bDB598690660D5257d2;
    address ethXOptimismSepolia = 0x0043d7c85C8b96a49A72A92C0B48CdC4720437d7;
    address cfav1OptimismSepolia = 0x8a3170AdbC67233196371226141736E4151e7C26;

    function _initialize() internal {
        if (currentChain == DeployementChain.Sepolia) {
            weth = WETH9(payable(wethSepolia));
            daix = ISuperToken(daixSepolia);
            ethx = ISuperToken(ethXSepolia);
            cfav1 = cfav1Sepolia;
        } else if (currentChain == DeployementChain.OptimismSepolia) {
            weth = WETH9(payable(wethOptimismSepolia));
            daix = ISuperToken(daixOptimismSepolia);
            ethx = ISuperToken(ethXOptimismSepolia);
            cfav1 = cfav1OptimismSepolia;
        }
    }

    function deposit() public broadcastOn(DeployementChain.OptimismSepolia) {
        IPaymaster(0xe3dc822D77f8cA7ac74c30B0dfFEA9FcDCAAA321).deposit{
            value: 0.2 ether
        }();
    }

    function deployLocal() public broadcastOn(DeployementChain.Anvil) {
        weth = new WETH9();

        (, address deployer, ) = vm.readCallers();

        DirectListingsLogic marketplace = _deployMarketplace(deployer);

        _saveDeployment(address(marketplace), "DirectListingsLogic");
    }

    function deployTestnet()
        public
        broadcastOn(DeployementChain.OptimismSepolia)
    {
        _initialize();

        (, address deployer, ) = vm.readCallers();

        DirectListingsLogic marketplace = _deployMarketplace(deployer);

        _saveDeployment(address(marketplace), "DirectListingsLogic");

        AdCommonOwnership adCommons = new AdCommonOwnership(
            address(marketplace)
        );

        _saveDeployment(address(adCommons), "AdCommonOwnership");

        console.log("Sender:grantRoleTo: ", deployer);
        _grantTaxManagerRole(address(marketplace), deployer);

        TestToken dai = TestToken(daix.getUnderlyingToken());

        _saveDeployment(address(ethx), "ETHx");
        _saveDeployment(address(daix), "DAIx");

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

        // Create sample ad group
        adCommons.createAdGroup(
            deployer,
            CurrencyTransferLib.NATIVE_TOKEN,
            0.001 ether,
            120,
            5
        );
    }

    function _deployMarketplace(
        address deployer
    ) public returns (DirectListingsLogic) {
        Extension[] memory extensions = _setupExtensions();

        address impl = address(
            new MarketplaceV3(
                MarketplaceV3.MarketplaceConstructorParams(
                    extensions,
                    address(0),
                    address(weth)
                )
            )
        );

        address marketplace = address(
            new TWProxy(
                impl,
                abi.encodeCall(
                    MarketplaceV3.initialize,
                    (deployer, "", new address[](0), deployer, 0)
                )
            )
        );

        return DirectListingsLogic(marketplace);
    }

    function _setupExtensions()
        internal
        returns (Extension[] memory extensions)
    {
        extensions = new Extension[](1);

        // Deploy `DirectListings`
        address directListings = address(
            new DirectListingsLogic(address(weth))
        );

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

    function _grantTaxManagerRole(address marketplace, address to) internal {
        MarketplaceV3(payable(marketplace)).grantRole(
            keccak256("TAX_MANAGER_ROLE"),
            to
        );
    }
}
