//BASED ON: https://hackernoon.com/using-ethereums-create2-nw2137q7
const { ethers } = require("hardhat");

// 0xff ++ deployingAddress
var deployerAddress = "0xff_DEPLOYER_ADDRESS";

// Hash of the bytecode - calculated with eth.keccak256():
var bytecode = ethers.utils.keccak256("0x_YOUR_CONTRACT_BYTECODE");

//i is the value of the salt we are checking
for (var i = 0; i < 72057594037927936; i++) {
   console.log("CHECKING: ", i);
   console.log("------------");
   // 1. Convert i to hex, and it pad to 32 bytes:
   var saltToBytes = i.toString(16).padStart(64, '0');

   // 2. Concatenate this between the other 2 strings. Also, remove 0x from the bytcode
   var concatString = deployerAddress.concat(saltToBytes).concat(bytecode.substr(2));

   // 3. Hash the resulting string
   var address = ethers.utils.keccak256(concatString);

   // 4. Remove 14 bytes and check if the result startswith/endswith/includes whatever you want
   if (address.substr(26).includes('whatever')) {
      console.log("ADDRESS: ", address.substring(26));
      console.log("SALT: ", i);
      break
   }
}