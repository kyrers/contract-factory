// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.8.7;

/// @title Deploy a contract to a specific address
/// @author kyrers
/// @notice You can use this contract to deploy a contract at a specific address by passing it the correct salt
/// @dev These could be modified to be contract independent
contract Factory {
    bytes contractBytecode = "BYTECODE_OF_THE_CONTRACT_YOU_WANT_TO_DEPLOY";
    
    /// @notice Deploy a contract using CREATE2
    /// @dev There are ways to make this factory less dependent on hardcoded values. We could also return the address if we want to.
    /// @param salt The value needed to deploy the contract with the specified bytecode to the address you want
    function deploy(uint256 salt) public {
        bytes memory bytecode = contractBytecode;
        address addr;

        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), salt)

            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }
    }
}