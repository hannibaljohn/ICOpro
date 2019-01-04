const BigNumber = web3.Bignumber;

const RogueCoin = artifacts.require('RogueCoin');

require('chai')
.use(require('chai-bignumber')(BigNumber))
.should();

contract('RogueCoin', accounts => {
    const _name = 'Rogue Coin';
    const _symbol = 'RT';
    const _decimals = 18;

    beforeEach(async function() {
        this.token = await RogueCoin.new('Rogue Coin', 'RT', 18);
    })

    describe('token attributes',function () {
        it('has the correct name', async function (){
            const name = await this.token.name();
            name.should.equal(_name);
         });
         it('has the correct symbol', async function (){
            const symbol = await this.token.symbol();
            symbol.should.equal(_symbol);
     });
        it('has the correct decimals', async function(){
        const decimals = await this.token.decimals();
        decimals.should.be.bignumber.equal(_decimals);
     });

    });

});