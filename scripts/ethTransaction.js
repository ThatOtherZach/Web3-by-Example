/*
A script that will sign and broadcast an ethereum transaction to the network, then shows the result in the console.

WARNING!
If executed this script will send ether, be sure the info is correct before you run this!
Alternatively you should use a test net with test ether first before running this on the main net.

For an explanation of this code, navigate to the wiki https://github.com/ThatOtherZach/Web3-by-Example/wiki/Send-Ether-Transaction
*/

// Add the web3 node module
var Web3 = require('web3');

// Show web3 where it needs to look for the Ethereum node.
web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/YOUR-API-TOKEN-HERE'));

// An extra module is required for this, use npm to install before running
var Tx = require('ethereumjs-tx');

// Used to sign the transaction. Obviously you SHOULD better secure this than just plain text
var privateKey = new Buffer('YOUR-PRIVATE-KEY-HERE', 'hex');

 // The reciviing address of the transaction
var receivingAddr = ('0x9Ff24857b990a8d036D0973d9a0825A76C2c8723');

// Value to be sent, converted to wei and then into a hex value
var txValue = web3.utils.numberToHex(web3.utils.toWei('0.1', 'ether'));

// Data to be sent in transaction, converted into a hex value. Normal tx's do not need this and use '0x' as default, but who wants to be normal?
var txData = web3.utils.asciiToHex('oh hai mark'); 

var rawTx = {
  nonce: '0x0', // Nonce is the times the address has transacted, should always be higher than the last nonce 0x0#
  gasPrice: '0x14f46b0400', // Normal is '0x14f46b0400' or 90 GWei
  gasLimit: '0x55f0', // Limit to be used by the transaction, default is '0x55f0' or 22000 GWei
  to: receivingAddr, // The receiving address of this transaction
  value: txValue, // The value we are sending '0x16345785d8a0000' which is 0.1 Ether
  data: txData // The data to be sent with transaction, '0x6f6820686169206d61726b' or 'oh hai mark' 
}

//console.log(rawTx); // This is used for testing to see if the rawTx was formmated created properly, comment out the code below to use.


var tx = new Tx(rawTx);
tx.sign(privateKey); // Here we sign the transaction with the private key

var serializedTx = tx.serialize(); // Clean things up a bit

console.log(serializedTx.toString('hex')); // Log the resulting raw transaction hex for debugging if it fails to send

web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')) // Broadcast the transaction to the network
.on('receipt', console.log); // When a receipt is issued, log it to the console
