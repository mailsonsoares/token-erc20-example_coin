
const ExampleCoin = artifacts.require("ExampleCoin");

module.exports = async function (deployer, network, accounts) {
  // deployment steps
  await deployer.deploy(ExampleCoin);
};