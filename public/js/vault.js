//   //1- connect metamask
        let account;
        const connectMetamask = async () => {
            if(window.ethereum !== "undefined") {
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
                account = accounts[0];


								var length = 8;
								var myTruncatedString = account.substring(0,length);

                document.getElementById("accountArea").innerHTML = 'Wallet Connected '+myTruncatedString+'....';
								document.getElementsByClassName('wallet-connect')[0].innerHTML = 'connected';
              
            }
        }

        //2- connect to smart contract
        const connectContract = async () => {
            const ABI = [
	{
		"inputs": [],
		"name": "enter",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRandomNumber",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "payWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pickWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "randomness",
				"type": "uint256"
			}
		],
		"name": "rawFulfillRandomness",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPlayers",
		"outputs": [
			{
				"internalType": "address payable[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "lottery",
				"type": "uint256"
			}
		],
		"name": "getWinnerByLottery",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lotteryHistory",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lotteryId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "players",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "randomResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
            ];

            const Address = "0x96b9CC4D906FAAa321Ae471Cdd7616d708A12ED9";
            window.ethereum= await new Web3(window.ethereum);
            window.contract = await new window.ethereum.eth.Contract( ABI, Address); 
            document.getElementById("contractArea").innerHTML = "connected to smart contract";
            console.log(window.contract);
        }

        //3-read data from smart contract
        const readContract = async () => {

			console.log(await window.contract.methods.getBalance().call());

            const data = await window.contract.methods.getBalance().call();
            document.getElementById("dataArea").innerHTML = data;
        }


        const getPlayers = async () => {

			console.log(await window.contract.methods.getPlayers().call());

            const data = await window.contract.methods.getPlayers().call();
            document.getElementById("players").innerHTML = data;
        }








 document.getElementById('connect-button').addEventListener('click', event => { 
        let button = event.target;
        window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
          account = accounts[0];
          console.log(account);
          button.textContent = account;

          ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
            console.log(result);
            let wei = parseInt(result,16);
            let balance = wei / (10**18);
            console.log(balance + " ETH");
          });
        });
      });

      // if(window.ethereum.networkVersion == 10) {
        document.getElementById('send-button').addEventListener('click', event =>{
          let transactionParam = {
            to: '0x96b9CC4D906FAAa321Ae471Cdd7616d708A12ED9',
            from: account,
            value: '0x38D7EA4C68000'
          };
          
          window.ethereum.request({method: 'eth_sendTransaction', params:[transactionParam]}).then(txhash => {
            console.log(txhash);
            checkTransactionconfirmation(txhash).then(r => alert(r));
          });
        });
      // }
      function checkTransactionconfirmation(txhash) {

        let checkTransactionLoop = () => {
          return window.ethereum.request({method:'eth_getTransactionReceipt',params:[txhash]}).then(r => {
            if(r !=null) return 'confirmed';
            else return checkTransactionLoop();
          });
        };

        return checkTransactionLoop();
      }
