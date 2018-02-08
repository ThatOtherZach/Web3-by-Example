# Web3 By Example
Node.js with Web3 javascript example scripts for getting basic information (transactions, balances, ether, and tokens) from the Ethereum blockchain.

## What Is?
I'm not a developer. However I wanted to learn how to write code that interacts with the Ethereum blockchain, being one of the more interesting blockchain projects I figured it would be a good place to learn how to use the infamous "blockchain" in a website or just in the console using some javascript.

This proved to be quite the challenge, as previously stated I'm not a developer. Googling found some good examples, but a lot of what I ended up with was more or less code I wrote. Now that being said, any professional ~~might~~ will notice my code isn't perfect. Originally I was going to make a Medium article with all this, but having someone help or rather fix errors would be WAY easier on Github... So here we are.

## Set Up
I used a Ubuntu server to test these, you will need either a similiar setup or you can use your own machine. Once your system is ready, you will need to install the following:

- [Node.js (8.7.0 or later)](https://nodejs.org/en/)
- [Web3 Module (1.0.0)](https://github.com/ethereum/web3.js/)
- [ethereumjs-tx (1.3.3)](https://github.com/ethereumjs/ethereumjs-tx), required for [Send Ether Transaction](https://github.com/ThatOtherZach/Web3-by-Example/wiki/Send-Ether-Transaction)
- [Geth (1.7.1 or later)](https://github.com/ethereum/go-ethereum/wiki/geth) *OPTIONAL* 

You can use npm to install Node and Web3. Geth will require a little extra TLC, so I suggest you instead get an [Infura API](https://infura.io/) token to use, its free and you'll get full access to the Ethereum blockchain without actually running your own node.

It is also a fantastic idea to have the Web3 documentation open so you can get more information on functions and other things that may be useful; you can find that here: http://web3js.readthedocs.io/en/1.0/getting-started.

One finial note, if you start playing around with ether (aka money) it would be a wise idea to lock down your local wallet and your system in general. Crypto is fun, but it can also be a total sh!t show especially if you're operating on an unsecure computer. Just a heads up... Don't say I didn't warn you.

## Running Scripts
I'm going to assume you know at least the basics of what Ethereum is and what terms like "Address", "transaction hash/ID", and what "ERC-20 tokens" means. If not, you may want to read up on that before anything else. I've left placeholder text in place of where you will need real Ethereum value(s); you can either use your own or just grab a random one from a block explorer like [etherscan.io](http://etherscan.io/).

To execute you simply use the console in run ```node example-script.js``` and the results will be printed in the console.

In addition each script has a [github repo wiki page](https://github.com/ThatOtherZach/Web3-by-Example/wiki). In there you'll find an explanation of whats happening, this was done so the really noobish among us (myself included) can see what exactly is happening.

## Additional Notes
Web3 1.0.0 is at the time of this edit, beta. I actually have no idea why I installed the beta version, probably an error on my part. That being said, it does work so while it may not be ideal for production it should suit the needs of someone who wants to learn and run a few scripts. 

I wanted to make a website with these and have the results show up on the page, but that turned out to be too much effort plus my javascript abilities were not up the task. 

Again, I'm not a developer. If there is something wrong with what I coded/wrote here, please call me out on it and or request to change it. I would like this repo to serve as an eductional resource that will help other newbies learn more about Ethereum, and the only way that's going to happen is with help from more competent developers.

Ĝis Poste.
