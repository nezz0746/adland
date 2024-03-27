// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

interface IAdStrategy {
    function name() external view returns (uint256);

    function uri(uint256 listingId) external view returns (string memory);
}
