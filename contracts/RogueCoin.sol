pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol";


contract RogueCoin is ERC20Mintable, ERC20Detailed , ERC20Pausable{
    constructor(string _name, string _symbol, uint8 _decimals) 
    ERC20Detailed(_name, _symbol, _decimals)
    public 
    {
    }
}