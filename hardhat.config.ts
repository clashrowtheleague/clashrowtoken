import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
    solidity: "0.8.4",
    networks: {
        bscTestnet: {
            url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
            accounts: JSON.parse(process.env.privatekeys === undefined ? "[]" : process.env.privatekeys),
        },
        bsc: {
            url: `https://bsc-dataseed.binance.org/`,
            accounts: JSON.parse(process.env.privatekeys_main === undefined ? "[]" : process.env.privatekeys_main),
        },
        mumbai: {
            url: `https://matic-mumbai.chainstacklabs.com`, //`https://rpc-mumbai.matic.today`, //
            accounts: JSON.parse(process.env.privatekeys === undefined ? "[]" : process.env.privatekeys),
        },
        poly: {
            url: `https://polygon-rpc.com/`,
            accounts: JSON.parse(process.env.privatekeys_main === undefined ? "[]" : process.env.privatekeys_main),
        },
        baobab: {
            url: "http://172.30.1.191:8551/v1/klaytn/",
            accounts: JSON.parse(process.env.privatekeys === undefined ? "[]" : process.env.privatekeys),
            gasPrice: 250000000000,
        },
        cypress: {
            url: "http://121.133.119.92:8551/v1/klaytn/",
            // url: "https://public-node-api.klaytnapi.com/v1/cypress",
            accounts: JSON.parse(process.env.privatekeys_main === undefined ? "[]" : process.env.privatekeys_main),
            gasPrice: 250000000000,
        },
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: "USD",
    },
    etherscan: {
        apiKey: process.env.POLYSCANAPIKEY,
    },
};

export default config;
