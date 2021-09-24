
const ExampleCoin = artifacts.require("Example-Coin");

module.exports = async function (deployer, network, accounts) {
  // deployment steps
  await deployer.deploy(ExampleCoin);
};