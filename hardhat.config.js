require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {}, // Default Hardhat network
  },
  paths: {
    sources: "./contracts",      // Solidity contracts location
    tests: "./test",            // Test files location
    cache: "./cache",
    artifacts: "./artifacts",    // Compiled contracts location
  },
  mocha: {
    timeout: 20000, // Set test timeout to 20 seconds
  },
};

//polygonAmoy