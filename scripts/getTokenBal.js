/*
A script that gets the token balance of an address using the address and the token contract address, then shows the result in the console.

This script will only get the tokens from the contract we specify, be sure your queried address has tokens from the contract you specify.

For an explanation of this code, navigate to the wiki https://github.com/ThatOtherZach/Web3-by-Example/wiki/Get-Token-Balance
*/

// Add the web3 node module
var Web3 = require('web3');

// Show web3 where it needs to look for the Ethereum node
web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/YOUR-API-TOKEN-HERE'));

// Write to the console the script will run shortly
console.log('Getting contract tokens balance.....');

// Define the address to search witin, one with tokens from the contract preferably
var addr = ('YOUR-ADDRESS-WITH-TOKENS');

// Get the address, log it in the console
console.log("Address: " + addr);

// Token contract address, used call the token balance of the address in question
var contractAddr = ('TOKEN-CONTRACT-ADDRESS');

// Get the address ready for the call, substring removes the '0x', as its not required
var tknAddress = (addr).substring(2);

// '0x70a08231' is the contract 'balanceOf()' ERC20 token function in hex. A zero buffer is required and then we add the previously defined address with tokens
var contractData = ('0x70a08231000000000000000000000000' + tknAddress);

// Now we call the token contract with the variables from above, response will be a big number string 
web3.eth.call({
    to: contractAddr, // Contract address, used call the token balance of the address in question
    data: contractData // Combination of contractData and tknAddress, required to call the balance of an address 
    }, function(err, result) {
	if (result) { 
		var tokens = web3.utils.toBN(result).toString(); // Convert the result to a usable number string
		console.log('Tokens Owned: ' + web3.utils.fromWei(tokens, 'ether')); // Change the string to be in Ether not Wei, and show it in the console
	}
	else {
		console.log(err); // Dump errors here
	}
});
