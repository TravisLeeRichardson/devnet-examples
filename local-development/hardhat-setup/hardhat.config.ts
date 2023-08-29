import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as tdly from "@tenderly/hardhat-tenderly";
import * as dotenv from "dotenv";
dotenv.config();

tdly.setup(
  
    {
    automaticVerifications: false,
});



const config: HardhatUserConfig = {
    solidity: "0.8.18",
    defaultNetwork: "tenderly_devnet",
    networks: {
        tenderly: {
           // url: 'https://rpc.vnet.tenderly.co/devnet/my-first-devnet/8bbbff6c-6cc6-4dd1-9327-092471c44e36',
            url: 'https://rpc.vnet.tenderly.co/devnet/my-first-devnet/2c94cdf6-47e3-4a3a-ac89-ff2307edfd6d',
            chainId: 1
        }
    },
    tenderly: {
        username: "tlrichar", // tenderly username (or organization name)
        project: "project", // project name
        privateVerification: false // if true, contracts will be verified privately, if false, contracts will be verified publicly
    }
};

export default config;
