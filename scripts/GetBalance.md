# Get Balance
A simple script that defines an address, gets the balance of it and then converts it to Ether before showing the result in the console.

For this example we're going to use [the script located here](https://github.com/TXTCLASS/Web3byExample/blob/master/scripts/GetBalance.js).

## Whats Happening Here? 
```javascript
var Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/YOUR-API-TOKEN-HERE'));
```

First we grab the Web3 module, this is required to run anything thats from the web3 library. Then we show Web3 where to look
for a connection to Ethereum. You will need to swap the place holder text with your API token before running this.

---

```javascript
console.log('Getting Ethereum address info.....');

var addr = ('ETHEREUM-ADDRESS-HERE');

console.log('Address:', addr);
```

Now the first console.log isn't really necessary, but it looks nice in the console. Following that we define a variable addr as the Ethereum
address. Now you don't need to do this, but should it makes the code later on a little easier to read.

Plus I was told it was good practice to write easily editable code, and while this ins't exactly a trading engine, it makes life easier for noobs like myself.
Following that we just write the address in the console with the text "Address" beside it. Again not neccast, but it make it look pretty.

---

```javascript
web3.eth.getBalance(addr, function (error, result) {
	if (!error)
		console.log('Ether:', web3.utils.fromWei(result,'ether')); 
	else
		console.log('Huston we have a promblem: ', error);
});
```

Now the fun begins... We tell web3 to get the balance of the address and then return either an error or a result. The result by default will
be in Wei, a 19 digit number. This is the lowest and most percise way to measure Ethereums token of value. To convert it into the more
common denomination everyone likes (Ether), we can use fromWei and then specify what we want back, in this case its 'ether'. Once thats
all said and done we write it to the console and call it a day.

And thats it. If you run the script you should get something like this:

```
Address: YOUR-ADDRESS-HERE
Ether: X.xxxxxxxxxxxxxxxxxx
```

## Going Further
That long decimal isn't exaclty pretty, try shortening it! Or if you're feeling really adventerous you can try to use another API to
get the current fiat rate of Ether and multiply the balance and that will give you the dollar value of the address!
