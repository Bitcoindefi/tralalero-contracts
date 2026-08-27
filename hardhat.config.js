require("@nomicfoundation/hardhat-toolbox");

const { vars } = require("hardhat/config");

/**
 * Las dos cadenas EVM que soporta el proyecto.
 *
 * `passetHub` es Polkadot Asset Hub por su capa de compatibilidad EVM, que es
 * con lo que se venia trabajando. `bscTestnet` y `bsc` son BNB Chain, y entran
 * sin tocar los contratos porque los tres hablan EVM: lo unico que cambia es a
 * donde se despliega.
 *
 * PRIVATE_KEY se lee con `vars`, no del entorno: `npx hardhat vars set PRIVATE_KEY`.
 */
module.exports = {
  solidity: "0.8.28",
  networks: {
    passetHub: {
      url: "https://testnet-passet-hub-eth-rpc.polkadot.io",
      accounts: [vars.get("PRIVATE_KEY")],
      chainId: 420420422,
      gasPrice: 1000000000,
      gas: 5000000
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      accounts: [vars.get("PRIVATE_KEY")],
      chainId: 97
    },
    bsc: {
      url: "https://bsc-dataseed.bnbchain.org",
      accounts: [vars.get("PRIVATE_KEY")],
      chainId: 56
    }
  }
};
