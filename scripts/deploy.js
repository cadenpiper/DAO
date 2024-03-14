const hre = require("hardhat");

async function main() {
  const NAME = 'Dapp University'
  const SYMBOL = 'DAPP'
  const MAX_SUPPLY = '1000000'

  const Token = await hre.ethers.getContractFactory('Token')
  let token = await Token.deploy(NAME, SYMBOL, MAX_SUPPLY)

  await token.deployed()
  console.log(`\nToken deployed to: ${token.address}\n`)

  const DAO = await ethers.getContractFactory('DAO')
  let dao = await DAO.deploy(token.address, '500000000000000000000001')
  await dao.deployed()

  console.log(`DAO deployed to: ${dao.address}\n`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
