# opensea-sniper-bot

## Installation
```
git clone https://github.com/clovisjohn/opensea-sniper-bot.git
cd ./opensea-sniper-bot
npm install
```
## Usage
You can also run this script by using `node main.js --<args>`

### Arguments
- wallet_mnemonic: The mnemonic for the wallet to use. *Enter seed phrase words surrounded by quotes* Example: `$plunderbot -wallet_mnemonic "witch collapse practice feed shame open despair creek road again ice least" ...` You can get one of these by creating ethereum accounts with metamask, myethereumwallet, or some other service.
- mnemonic : The mnemonic of the wallet to use. Classic derivation path (trustwallet, metamask,etc)
- network : network to use. Only two options ("rinkeby" for testnet, "mainnet" for etherreum mainnet)
- infura : your infura api key ( https://ethereumico.io/knowledge-base/infura-api-key-guide/)
- buyeraddy : the ethereum address linked to the mnemonic above
- url : The link of the opensea asset you want to buy
- extragas : amount in gwei that will be added to the current gas price for the txn ( txn_gas_price = current_gas_price + extra_gas_price). Default is 0
- startTimeUTC: The UTC time at which the asset should be bought ( format hh:mm). Default is immediate buy


!node main.js --network="mainnet" --extragas=260 --buyeraddy="0x41dd8bf4a5003fb9F91c56824ED802aC3C755eD2" --infura="81e29f26b36d418fb1c01cc9f4ca0e95" --url="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/36029168491152931027693842290665742481307336212923911654892719901392609738753" --mnemonic="dumb master hotel since reunion tired grace crazy blind marine valley report fantasy matrix legend" startTimeUTC="9:21"
