---
layout: post
status: publish
published: true
title: Setting up an Ethereum Miner on Azure
categories:
- Development
- Cryptocurrency
---

Using the cloud to mine cryptocurrency is literally the worst way to go about it. You'll pay through the nose for the hardware. However, should you just want to be experimenting without getting into hardware, here are the simple steps to get up an running mining [Ethereum](https://www.ethereum.org/) on [Microsoft Azure's N Series](https://azure.microsoft.com/en-us/pricing/details/virtual-machines/series/) virtual machines.

If you haven't already, you'll need to create an Ethereum Wallet. One way of doing this is with the official [Mist app](https://github.com/ethereum/mist).

Once you're VM is up an running, you can install the dependencies.

```bash
sudo add-apt-repository ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum geth
sudo apt-get install nvidia-cuda-dev nvidia-cuda-toolkit nvidia-nsight
```

Download the latest release of the [Claymore Miner](https://github.com/nanopool/Claymore-Dual-Miner/releases). The easiest way to configure pools and start script is using the quick start guide on [Nanopool](https://nanopool.org/).

From my experiment, I saw around 95%-90% loss in value from money spent on the VM to Ethereum produced from mining. It was fun to get a better grip on what's going on though.

For the foreseeable future, I'll be sticking to letting the professional to the mining for me at [Genesis Mining](https://www.genesis-mining.com/a/1077991). Use Code `xIPjC9` for 3% off.

Other wallet services that you might find useful are [Coinbase](https://www.coinbase.com/join/592732c0f0da04054fc01566) and [Poloniex](https://poloniex.com/).
