/*
A simple script that defines an address, gets the balance of it and then converts it to Ether before showing the result in the console.

For an explanation of this code, navigate to the wiki https://github.com/ThatOtherZach/Web3-by-Example/wiki/Get-Balance
*/

// Require the web3 node module.
var Web3 = require('web3');

// Show Web3 where it needs to look for a connection to Ethereum.
web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/YOUR-API-TOKEN-HERE'));

// Write to the console the script will run shortly.
console.log('Getting Ethereum address info.....');

// Define the address to search witin.
var addr = ('ETHEREUM-ADDRESS-HERE');

// Show the address in the console.
console.log('Address:', addr);

// Use Wb3 to get the balance of the address, convert it and then show it in the console.
web3.eth.getBalance(addr, function (error, result) {
	if (!error)
		console.log('Ether:', web3.utils.fromWei(result,'ether')); // Show the ether balance after converting it from Wei
	else
		console.log('Huston we have a promblem: ', error); // Should dump errors here
});
