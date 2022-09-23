/*!
 * Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project


// // Initialize Web3
// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
//     //console.log('hello world');
// } else {
//     web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
// }




// // Set Account
// web3.eth.defaultAccount = web3.eth.accounts[0];

// // Set Contract Abi
// var contractAbi = [{
//         "inputs": [],
//         "name": "pickWinner",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     },
//     {
//         "stateMutability": "payable",
//         "type": "receive"
//     },
//     {
//         "inputs": [],
//         "name": "admin",
//         "outputs": [{
//             "internalType": "address",
//             "name": "",
//             "type": "address"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "getBalance",
//         "outputs": [{
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "getBalancecontract",
//         "outputs": [{
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "getPlayers",
//         "outputs": [{
//             "internalType": "address payable[]",
//             "name": "",
//             "type": "address[]"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [{
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//         }],
//         "name": "players",
//         "outputs": [{
//             "internalType": "address payable",
//             "name": "",
//             "type": "address"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     }
// ];

// var contractToken = [{
//         "inputs": [],
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     },
//     {
//         "anonymous": false,
//         "inputs": [{
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "owner",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "spender",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Approval",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [{
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "previousOwner",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "newOwner",
//                 "type": "address"
//             }
//         ],
//         "name": "OwnershipTransferred",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [{
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "from",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "to",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Transfer",
//         "type": "event"
//     },
//     {
//         "inputs": [{
//                 "internalType": "address",
//                 "name": "owner",
//                 "type": "address"
//             },
//             {
//                 "internalType": "address",
//                 "name": "spender",
//                 "type": "address"
//             }
//         ],
//         "name": "allowance",
//         "outputs": [{
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [{
//                 "internalType": "address",
//                 "name": "spender",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "amount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "approve",
//         "outputs": [{
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//         }],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [{
//             "internalType": "address",
//             "name": "account",
//             "type": "address"
//         }],
//         "name": "balanceOf",
//         "outputs": [{
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "decimals",
//         "outputs": [{
//             "internalType": "uint8",
//             "name": "",
//             "type": "uint8"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [{
//                 "internalType": "address",
//                 "name": "spender",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "subtractedValue",
//                 "type": "uint256"
//             }
//         ],
//         "name": "decreaseAllowance",
//         "outputs": [{
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//         }],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [{
//                 "internalType": "address",
//                 "name": "spender",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "addedValue",
//                 "type": "uint256"
//             }
//         ],
//         "name": "increaseAllowance",
//         "outputs": [{
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//         }],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [{
//                 "internalType": "address",
//                 "name": "to",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "amount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "mint",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "name",
//         "outputs": [{
//             "internalType": "string",
//             "name": "",
//             "type": "string"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "owner",
//         "outputs": [{
//             "internalType": "address",
//             "name": "",
//             "type": "address"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "renounceOwnership",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "symbol",
//         "outputs": [{
//             "internalType": "string",
//             "name": "",
//             "type": "string"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "totalSupply",
//         "outputs": [{
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//         }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [{
//                 "internalType": "address",
//                 "name": "to",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "amount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "transfer",
//         "outputs": [{
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//         }],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [{
//                 "internalType": "address",
//                 "name": "from",
//                 "type": "address"
//             },
//             {
//                 "internalType": "address",
//                 "name": "to",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "amount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "transferFrom",
//         "outputs": [{
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//         }],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [{
//             "internalType": "address",
//             "name": "newOwner",
//             "type": "address"
//         }],
//         "name": "transferOwnership",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }
// ];


// var contract_vault = [
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Approval",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "from",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Transfer",
//     "type": "event"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "owner",
//         "type": "address"
//       },
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       }
//     ],
//     "name": "allowance",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "approve",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "account",
//         "type": "address"
//       }
//     ],
//     "name": "balanceOf",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "totalSupply",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "transfer",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "from",
//         "type": "address"
//       },
//       {
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "transferFrom",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }
// ];



// // Add Your Contract ABI here!!!
// const init = async () => {
//   // Set Contract Address
// var contractAddress = '0xEfA4B0A2d0BE450283C1bc99425d6ca4a0DdFD7F'; // Add Your Contract address here!!!
// var vault_address = '0x616d0Bc4E25819572726e726aFB7D0938A45E41C';

// // Set the Contract
// var contract = web3.eth.contract(contractAbi).at(contractAddress);
// var vault_contract = web3.eth.contract(contract_vault).at(vault_address);


// // await contract_token.balanceOf(vault_contract.address, function(err, result) {
// //   if (err) {
// //     console.log(err)
// //   } else {
// //     console.log(web3.utils.fromWei(result, "ether") + " ETH")
// //   }
// // });
// // Set call results
// var lottery_contract_address = contract.address;

// await contract.getPlayers.call(function(error, result){
//     if(!error){
// //JSON.stringify(result);  
// var player_count = 0; 


//     var separateList = '<ul>'
//     result.forEach(function(value) {
//         separateList += '<li>' + value + '</li>';
//         player_count ++;
//     });
//     separateList += '</ul>';
//     document.querySelector(".commaSeparated").innerHTML = separateList;
//     document.querySelector(".player_count").innerHTML ='Current Players ' + player_count;

//     }else{
//     console.error(error);
//     }   
// });

// getBalance();
// getContractaddress();

// // var theUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
// // httpGet(theUrl);
// function getContractaddress() {
//     //get contract address  
//     var address_text = 'Contract address: ';
//     var address_text_render = address_text + lottery_contract_address;
//     $('.contract_address').html(address_text_render);
// }


// function getBalance() {
//     var wei, balance
//     // address = document.getElementById("address").value
//     try {
//         web3.eth.getBalance(contractAddress, function(error, wei) {
//             if (!error) {
//                 var balance = web3.fromWei(wei, 'ether');
//                 document.getElementById("eth_balance").innerHTML = "Contract Balance " + balance + " ETH";
//             }
//         });
//     } catch (err) {
//         document.getElementById("eth_balance").innerHTML = err;
//     }
// }




// // $("#text").
// //   on("blur", function () {
// //     makeCode();
// //   }).
// //   on("keydown", function (e) {
// //     if (e.keyCode == 13) {
// //       makeCode();
// //     }
// //   });


// function httpGet(theUrl)
// {
  
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
// //console.log(xmlHttp.responseText);

// console.log(JSON.parse(xmlHttp.responseText));

// document.getElementById("qr_code").innerHTML = xmlHttp.responseText;

//     return xmlHttp.responseText;
// }


// // function ContractVaultAddress() {

// // contract_token.approve(vault_address,'100');

// //     var wei, balance
// //     try {
// //         web3.eth.getBalance(vault_address, function(error, wei) {
// //             if (!error) {
// //                 var balance = web3.fromWei(wei, 'ether');
// //                 console.log(balance);
// //             }
// //         });
// //     } catch (err) {
// //         console.log(err);

// //     }

// // }

// }

// init();
// countdown_timer();


//  function copyText() {

//     navigator.clipboard.writeText('0xEfA4B0A2d0BE450283C1bc99425d6ca4a0DdFD7F');

//     /* Alert the copied text */
//     alert("Copied the text: " + '0xEfA4B0A2d0BE450283C1bc99425d6ca4a0DdFD7F');
// }

// function countdown_timer(){
// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "EXPIRED";
//   }
// }, 1000);
// }




