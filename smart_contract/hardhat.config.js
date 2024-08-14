require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/79wcxk9zzLAtqK1PLIh4UScEvzCd7Q6S',
      accounts: [process.env.ACCOUNT_CODE],
    },
  },
};