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

### Example
node main.js --network="mainnet" --extragas=260 --buyeraddy="0xa3dC6a49C6DFbd963ee270447adb8ad43d540890" --infura="<apikey>" --url="https://opensea.io/assets/0xec9c519d49856fd2f8133a0741b4dbe002ce211b/2197" --mnemonic="december hedgehog income today portion acquire betray spring cry wheel practice coyote rebel gas climb" startTimeUTC="9:21"
