/*
A script that gets some basic info on a function in a smart contract on the Ethereum blockchain, then shows the result in the console.

This script will only get info from the contract we specify, be sure your queried address has public readable (call) functions.

For an explanation of this code, navigate to the wiki https://github.com/ThatOtherZach/Web3-by-Example/wiki/Get-Contract-Info
*/

// Require the Web3 Module
var Web3 = require('web3');

// Show Web3 where it needs to look for the Ethereum node
web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/YOUR-API-TOKEN-HERE'));

// Write to the console the script will run shortly
console.log('Calling Contract.....');

// Define the ABI of the contract, used to return the desired values
var abi = ABI-JSON-INTERFACE;

// Define the Ethereum address of the smart contract
var addr = "CONTRACT-ADDRESS";

// Build a new variable based on the Web3 API including the ABI and address of the contract
var Contract = new web3.eth.Contract(abi, addr);

// Put it all together in a call and return the result to the console
// FUNCTION must the name of the function you want to call.
Contract.methods.FUNCTION().call().then(console.log);
