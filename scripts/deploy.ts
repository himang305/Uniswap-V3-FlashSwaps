import { ethers } from "hardhat";
import { SWAP_ROUTER, uniswapv3factory, weth9, KYBER_ADDRESS } from "./address";

async function main() {
  const Contract = await ethers.getContractFactory("FlashSwaps");

  const contract = await Contract.deploy(
    SWAP_ROUTER, uniswapv3factory, ethers.utils.getAddress(weth9), KYBER_ADDRESS
  );

  console.log("Token deployed to:", contract.address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });