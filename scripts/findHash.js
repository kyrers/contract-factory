//BASED ON: https://hackernoon.com/using-ethereums-create2-nw2137q7

const eth = require('ethereumjs-util')

// 0xff ++ deployingAddress
var deployerAddress = "0xffDEPLOYERADDRESS";

// Hash of the bytecode - calculated with eth.keccak256():
var bytecode = eth.keccakFromHexString("BYTECODE_OF_THE_CONTRACT_TO_DEPLOY".toString('hex'), 256).toString('hex');

//i is the value of the salt we are checking
for (var i = 0; i < 72057594037927936; i++) {
   // 1. Convert i to hex, and it pad to 32 bytes:
   var saltToBytes = i.toString(16).padStart(64, '0');

   // 2. Concatenate this between the other 2 strings
   var concatString = deployerAddress.concat(saltToBytes).concat(bytecode);

   // 3. Hash the resulting string
   var address = eth.keccakFromHexString(concatString.toString('hex'), 256).toString('hex');

   // 4. Remove 12 bytes and check if the result startswith/endswith/contains whatever you want
   if (address.substr(24).startsWith('whatever')) {
      console.log(address.substring(24));
      console.log(i);
      break
   }
}