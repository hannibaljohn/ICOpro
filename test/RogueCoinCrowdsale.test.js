import ether from './helpers/ether';

const BigNumber = web3.BigNumber;

require('chai')
.use(require('chai-bignumber')(BigNumber))
.should();

const RogueCoin = artifacts.require('RogueCoin');
const RogueCoinCrowdsale = artifacts.require('RogueCoinCrowdsale');

contract('RogueCoinCrowdsale', function([_, wallet, investor1, investor2]) {
    
    beforeEach(async function () {
        //token Config
        this.name = "RogueCoin";
        this.symbol = "RT";
        this.decimals = 18;

        //deploy Token
        this.token = await RogueCoin.new(
            this.name, 
            this.symbol, 
            this.decimals
            );

            // Crowdsale config 
            this.rate= 500;
            this.wallet = wallet;
           
            this.crowdsale = await RogueCoinCrowdsale.new (
               this.rate,
               this.wallet,
               this.token.address
        );
        // transfer token ownership to crowdsale
        await this.token.transferOwnership(this.crowdsale.address);
    });
        describe('crowdsale', function() {
        it('tracks the rate', async function () {
            const rate = await this.crowdsale.rate();
            rate.should.be.bignumber.equal(this.rate);

     });
        it('tracks the wallet', async function () {
            const wallet = await this.crowdsale.wallet();
            wallet.should.equal(this.wallet);
     });
        it('tracks the token', async function (){
            const token = await this.crowdsale.token();
            token.should.equal(this.token.address);
        });
    });
        describe('accepting payments', function() {
            it('should accept payments', async function () {
                const value = ether(1);
                await this.crowdsale.sendTransaction({ value: value, from: investor1 })
            });
       });

});