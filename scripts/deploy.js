const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);
    const ContractFactory = await ethers.getContractFactory("Factory");
    const Contract = await ContractFactory.deploy();

    console.log("Factory address:", Contract.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});