/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.28",
  networks: {
    electronTestnet: {
      url: process.env.NEXT_PUBLIC_ELECTRON_TESTNET_RPC_URL  || "",
      accounts: process.env.NEXT_PUBLIC_PRIVATE_KEY ? [process.env.NEXT_PUBLIC_PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey:"https://blockexplorer.thesecurityteam.rocks/",
  },
};
