require("@nomiclabs/hardhat-ethers");

//Template for goerli deployment

const ACCOUNT_PK = "GOERLI_ACCOUNT_PK";

module.exports = {
  solidity: "0.8.7",
  networks: {
    goerli: {
      url: "GOERLI RPC",
      accounts: [`${ACCOUNT_PK}`]
    }
  }
};