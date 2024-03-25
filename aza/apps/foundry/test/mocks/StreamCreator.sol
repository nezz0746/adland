// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

contract StreamCreator {
    using SuperTokenV1Library for ISuperToken;

    function createStream(
        address currencyX,
        address sender,
        address receiver,
        int96 flowRate
    ) external {
        ISuperToken(currencyX).createFlowFrom(sender, receiver, flowRate);
    }
}
