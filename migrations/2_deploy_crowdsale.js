const RogueCoin = artifacts.require("./RogueCoin.sol");

module.exports = function(deployer) {
    const _name = "RogueCoin";
    const _symbol = "RT";
    const _decimals = "18";
  deployer.deploy(RogueCoin, _name, _symbol, _decimals);
};