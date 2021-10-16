const { artifacts } = require("hardhat/config");

require("@nomiclabs/hardhat-waffle");
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  paths:{
    artifacts:'./src/artifacts',
  },
  networks:{
    hardhat:{
      chainId: 1337,
    }
  }
};
