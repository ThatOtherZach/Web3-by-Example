/*
A script that returns some filtered events from an Ethereum smart contract.

Your contract will require a solidity event and it will need to be triggered at least once before you run the script.

For an explanation of this code, navigate to the wiki https://github.com/ThatOtherZach/Web3-by-Example/wiki/Getting-Smart-Contract-Events
*/

// Add the web3 node module
var Web3 = require('web3');

// Show web3 where it needs to look for the Ethereum node.
web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/YOUR-API-TOKEN-HERE'));

// The address we want to search by.
var addr = "ADDRESS-HERE";

// Show the Hash in the console.
console.log('Events by Address: ' + addr);

// Define the contract ABI
var abi = [{"constant":true,"inputs":[],"name":"getgreeting","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_msg","type":"bytes32"}],"name":"greet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_greeting","type":"bytes32"}],"name":"Event1","type":"event"}]

// Define the contract ABI and Address
var contract = new web3.eth.Contract(abi, '0x38979119752B1891ae9B5cD6986285eA3190AE38');

// Fun console text, you can ignore this.
console.log('-----------------------------------');
console.log('Matching Smart Contract Events');
console.log('-----------------------------------');

// Search the contract events for the hash in the event logs and show matching events.
contract.getPastEvents('Event1', {
	filter: {_from: addr},
	fromBlock: 0,
	toBlock: 'latest'
	}, function(error, events){
		//console.log(events);
		for (i=0; i<events.length; i++) {
			var eventObj = events[i];
			console.log('Address: ' + eventObj.returnValues._from);
			console.log('Greeting: ' + web3.utils.hexToAscii(eventObj.returnValues._greeting));
		}
});
