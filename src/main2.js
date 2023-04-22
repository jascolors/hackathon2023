// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

export default function AppTest() {
  //var my_name = "John";
  //var s = `hello ${my_name}, how are you doing`;
  //console.log(s); // prints hello John, how are you doing
  var targetOfGreeting = "world";

  const config = {
    apiKey: "RKPEa3nLF6suW5-SQLyrGgDvpOff3EMv",
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);

  const main = async () => {
    // Wallet address
    const address = "0x4e4c0107a5d24c1a53c70816d23527c55dfec50f";

    // Get all NFTs
    const nfts = await alchemy.nft.getNftsForOwner(address);

    // Parse output
    const numNfts = nfts["totalCount"];
    const nftList = nfts["ownedNfts"];

    console.log(`Total NFTs owned by ${address}: ${numNfts} \n`);

    let i = 1;

    for (let nft of nftList) {
      console.log(`${i}. ${nft.title}`);
      i++;
    }
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

  return (
    <div className="App">
      <h1>Hello Eth.id Dev</h1>
      <h2>Start editing to see some magic happen! </h2>
      <h3>hi {targetOfGreeting}</h3>
    </div>
  );
}
