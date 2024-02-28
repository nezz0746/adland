// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {console} from "forge-std/Script.sol";
import {Counter} from "../src/Counter.sol";
import {BaseScript} from "./Base.s.sol";

contract CounterScript is BaseScript {
    function deploySepolia() public broadcastOn(DeployementChain.Sepolia) {
        Counter counter = new Counter();

        _saveDeployment(address(counter), "Counter");
    }
}
