import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import '@typechain/hardhat'
import "solidity-coverage"

import "./tasks/accounts";
import "./tasks/balance";
import "./tasks/block-number";


module.exports = {
  solidity: "0.7.6",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_MAINNET_RPC_URL,
        blockNumber: 12975788
      }
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/GzhHKBA48KMWNZbEuVJ779lk_TodVEU0",
      accounts: ["32f1385ea2afdc0243b0e57aee55c455e06a581158b72809e34a0e95262e5684"]
    },
    mainnet: {
      url: "https://eth-mainnet.alchemyapi.io/v2/osivXP7RHryl6EpYYxmaud8SR_NXOF9v",
      accounts: ["32f1385ea2afdc0243b0e57aee55c455e06a581158b72809e34a0e95262e5684"]
    }
  },
  mocha: {
    timeout: 200000
  }
};