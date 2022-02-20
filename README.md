# contract-factory
Factory that allows the deployment of other contracts into a specific address, using CREATE2.
You will also find a script that allows you to find a salt that will deploy your contract to a specific address.


**How to use:**
1. Deploy the factory contract to a network of your choice. You will find a template for goerli network deployment in the `hardhat-config.js` file;
2. Add the bytecode of the contract you want to deploy and the deployer address to the `findHash.js` script, and specify the condition you want the address to obey. Then, run `npx hardhat run scripts/findHash.js` - it will return an address that satisfies the conditions and the salt you should use to obtain it;
3. Call the `deploy(bytecode, salt)` function of the Factory you deployed on step 1 with the contract bytecode and salt as parameters.

**IMPORTANT DISCLAIMER:** I'm in no way a solidity expert - this code may be faulty. Use at your own risk.
