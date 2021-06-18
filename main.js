// Setting up the environment
const args = require('yargs').argv;
const helpers = require("./helpers.js");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const BigNumber = require('bignumber.js');
const opensea = require("opensea-js");
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;
const MnemonicWalletSubprovider = require("@0x/subproviders")
  .MnemonicWalletSubprovider;
const RPCSubprovider = require("web3-provider-engine/subproviders/rpc");
const Web3ProviderEngine = require("web3-provider-engine");


const extragas = args.extragas
const accountAddress = args.buyeraddy
const opensea_link = args.url
const MNEMONIC = args.mnemonic;
const NODE_API_KEY = args.infura;
const isInfura = !!args.infura;
const NETWORK = args.network;
const API_KEY = process.env.API_KEY || ""; // API key is optional but useful if you're doing a high volume of requests.

if (!MNEMONIC || !NODE_API_KEY || !NETWORK || !opensea_link || !accountAddress) {
  console.error(
    "Missing arguments"
  );
  return;
}

if (!args.startTimeUTC) {
  [hour,minute]=[0,0]
} else {
  hour = parseInt(args.startTimeUTC.replace(/:.*/, ""))
  minute = parseInt(args.startTimeUTC.replace(/.*:/, ""))
}

if (!args.extragas)
{
  extragas=0
}

const network =
  NETWORK === "mainnet" || NETWORK === "live" ? "mainnet" : "rinkeby";
const infuraRpcSubprovider = new RPCSubprovider({
  rpcUrl: isInfura
    ? "https://" + network + ".infura.io/v3/" + NODE_API_KEY
    : "https://eth-" + network + ".alchemyapi.io/v2/" + NODE_API_KEY,
});

const providerEngine = new HDWalletProvider({
  mnemonic: {
    phrase: MNEMONIC
  },
  providerOrUrl: "https://" + network + ".infura.io/v3/" + NODE_API_KEY
});

const seaport = new OpenSeaPort(
  providerEngine,
  {
    networkName:
      NETWORK === "mainnet" || NETWORK === "live"
        ? Network.Main
        : Network.Rinkeby,
    apiKey: API_KEY,
  },
  (arg) => console.log(arg)
);

// Environment setup done

seaport.gasPriceAddition = new BigNumber(extragas);  // add extra gas to current gas price
var [asset_contract_address, token_id] = helpers.parse_url(opensea_link) // extract asset contract address and token id from the opensea likn

async function main() {
  console.log("Launched");
	const order = await seaport.api.getOrder({   // Extracting order to fulfill
			asset_contract_address,
			token_id,
			side: 1 
  });

	const transactionHash = await seaport.fulfillOrder({ //Fulfilling order
        order,
        accountAddress,
	});
  console.log(transactionHash);
  return;

};

//Setting up a timeout
var now = new Date()
var t = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0, 10).getTime() 
currentTime = new Date().getTime()
timeo = t - Date.now();
setTimeout(main,Math.max(timeo,0))

