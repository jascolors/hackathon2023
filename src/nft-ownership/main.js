// Example code from alchemy:
//Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "RKPEa3nLF6suW5-SQLyrGgDvpOff3EMv",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner("elanhapern.eth");
  // Print NFTs
  console.log(nfts);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
