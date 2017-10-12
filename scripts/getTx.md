# Get A Transaction
A script that gets the transaction info from a transaction hash/ID, then shows the result in the console.

For this example we're going to use [the script located here](https://github.com/TXTCLASS/Web3byExample/blob/master/scripts/getTx.js).

## Whats Happening Here? 
```javascript
var Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/YOUR-API-TOKEN-HERE'));
```

First we grab the Web3 module, this is required to run anything thats from the web3 library. Then we show Web3 where to look
for a connection to Ethereum. You will need to swap the place holder text with your API token before running this.

```javascript
var ethTx = ('TRANSACION-HASH-HERE');

web3.eth.getTransaction(ethTx, function(err, result) { 
	if (!err) {
		console.log('From Address: ' + result.from); 
		console.log('To Address: ' + result.to); 
		console.log('Ether Transacted: ' + (web3.utils.fromWei(result.value, 'ether')));
	}
	else {
		console.log('Error!', err);
	}
});
```

We first define a transaction hash as ```ethTx```, not neccessary, but it helps keep things clean. Next we use ```getTransaction``` using the previously defined transaction hash and expect a "err" or "result" (side note: a part of feels that error is likley not correct, but the script will run regardless). 

Then we just grab the value we want marked by ```result.from``` for example and thier corresponding value.

And thats it. If you run the script you should get something like this:

```
From Address: SENDERS-ADDRESS-HERE
To Address: RECEIVERS-ADDRESS-HERE
Ether Transacted: X.xxxxxxxxxxxxxxxxxx
```

### The Alternative
You may have noticed on the script there is also an alternative verison of the above without the values being logged. If you uncomment it and run the script you'll get the full transction object which will include all the transaction values. You don't need to have errors and results either for that, it just makes it easier to find out what when wrong.

## Going Further
Some transactions may have encoded data in the input area, try and decode some of it! 
