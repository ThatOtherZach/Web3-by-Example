/*
A script that gets runs a function call in a smart contract on Ethereum. This script will probably not work on payable or not constant solidity functions. Use at your own risk. 

Currently this script is set up to call the "Ebola on Ethereum" smart contract. For more info on that see the repo here: https://github.com/ThatOtherZach/Ebola-on-Ethereum

For an explanation of this code, navigate to the wiki https://github.com/ThatOtherZach/Web3-by-Example/wiki/contract-function
*/

// Require Web3 Module
var Web3 = require('web3');

// Show web3 where it needs to look for the Ethereum node
web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/YOUR-API-TOKEN-HERE'));

// Write to the console the script will run shortly
console.log('Contract-ing Ebola.....');

// Define the ABI of the contract, used to return the desired values
var abi = [{"constant":true,"inputs":[],"name":"getEbola","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tipCreator","outputs":[{"name":"","type":"string"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];

// The Ethereum address of the smart contract
var addr = "0xe16f391e860420e65c659111c9e1601c0f8e2818";

// Build a new variable based on the web3 API including the ABI and address of the contract
var EbolaContract = new web3.eth.Contract(abi, addr);

// Put it all together in a call and return the result to the console
// FUNCTION can be "getEbola", "getInfo", "tipCreator" and "kill"
EbolaContract.methods.FUNCTION().call().then(console.log);
