// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {ERC6551Registry} from "erc6551/ERC6551Registry.sol";
import {AccountProxy} from "tokenbound/AccountProxy.sol";

struct AccountCreatorConfig {
    ERC6551Registry registry;
    address implementation;
    address accountProxy;
}

contract ERC6551AccountCreator {
    AccountCreatorConfig internal _config;
    bytes32 internal constant _SALT = bytes32("");

    constructor(AccountCreatorConfig memory config) {
        _config = config;
    }

    function _createAccount(
        uint256 chainId,
        address tokenContract,
        uint256 tokenId
    ) internal returns (address accountAddress) {
        accountAddress = _config.registry.createAccount(
            _config.implementation,
            _SALT,
            chainId,
            tokenContract,
            tokenId
        );
    }

    function _getAccount(
        uint256 chainId,
        address tokenContract,
        uint256 tokenId
    ) internal view returns (address accountAddress) {
        accountAddress = _config.registry.account(
            _config.implementation,
            _SALT,
            chainId,
            tokenContract,
            tokenId
        );
    }
}
