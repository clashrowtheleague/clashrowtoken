// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { ClashRowToken } from "../typechain/ClashRowToken";

// //mumbai
// //poly
async function main() {
    var token: ClashRowToken;
    const ClashRowTokenFactory = await ethers.getContractFactory("ClashRowToken");
    token = await ClashRowTokenFactory.deploy();
    await token.deployed();

    console.log("deployed ClashRowToken : ", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

