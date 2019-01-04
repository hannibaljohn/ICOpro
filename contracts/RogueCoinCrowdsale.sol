pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";

contract RogueCoinCrowdsale is Crowdsale {
    constructor(
        uint256 _rate, 
        address _wallet, 
        IERC20 _token
        ) 
    Crowdsale(_rate, _wallet, _token)
    public 
    {

    }
}