// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC6551AccountCreator, AccountCreatorConfig} from "./ERC6551AccountCreator.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract AdBeneficiary is ERC6551AccountCreator, ERC721, Ownable {
    uint256 internal beneficiaries;

    constructor(
        AccountCreatorConfig memory accountConfig
    ) ERC721("AdBeneficiary", "AB") ERC6551AccountCreator(accountConfig) {
        beneficiaries = 1;
    }

    function createBeneficiary(
        address recipient
    ) external onlyOwner returns (address beneficiary) {
        uint256 benefId = beneficiaries;

        _safeMint(recipient, benefId);

        beneficiary = _createAccount(block.chainid, address(this), benefId);

        beneficiaries++;
    }
}
