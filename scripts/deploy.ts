// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { CrashRowToken } from "../typechain/CrashRowToken";

async function main() {
    var token: CrashRowToken;
    const CrashRowTokenFactory = await ethers.getContractFactory("CrashRowToken");
    token = await CrashRowTokenFactory.deploy();
    await token.deployed();

    console.log("deployed CrashRowToken : ", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
