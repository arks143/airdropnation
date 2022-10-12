

let account;
const connectMetamask = async () => {


  const provider = await detectEthereumProvider();



    if (provider) {
    // handle provider
    handleEthereum()
  } else {
    // handle no provider
  }



// if (window.ethereum) {
//   handleEthereum();
// } else {
//   window.addEventListener('ethereum#initialized', handleEthereum, {
//     once: true,
//   });

//   // If the event is not dispatched by the end of the timeout,
//   // the user probably doesn't have MetaMask installed.
//   setTimeout(handleEthereum, 3000); // 3 seconds
// }
}



async function handleEthereum() {
  const { ethereum } = window;
  if (ethereum && ethereum.isMetaMask) {
    console.log('Ethereum successfully detected!');

        const accounts = await ethereum.request({
            method: "eth_requestAccounts"
        });
        account = accounts[0];


   if(window.ethereum.networkVersion == 137) {
        document.getElementById("accountArea").innerHTML = account;
        document.getElementById("send-button-txt").innerHTML = "ENTER WHITELIST";
        document.getElementsByClassName("wallet-connect")[0].innerHTML = "CONNECTED";
        document.getElementById("welcome").innerHTML = "WELCOME";
        document.getElementById("send-button-txt").disabled = false;

       await connectContract();
       await getPlayers();

}else{
  console.log('incorrect network');
  document.getElementsByClassName("wallet-connect")[0].innerHTML = "INCORRECT NETWORK SWITCH TO MATIC";
}
    // Access the decentralized web!
  } else {
    console.log('Already installed MetaMask!');
  }
}




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
        "name": "moveFunds",
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
    }
];

    const Address = "0x95072EB497244b5a13f012D88be48E4e8b37AeE8";
    window.ethereum = await new Web3(window.ethereum);
    window.contract = await new window.ethereum.eth.Contract(ABI, Address);


}


const sendCrypto = async () => {

await connectMetamask();
    console.log(await window.contract.methods);


    let transactionParam = {
        to: '0x95072EB497244b5a13f012D88be48E4e8b37AeE8',
        from: account,
        value: '1000000000000000000',
        gas: '21000'
    };

    await window.contract.methods.enter().send(transactionParam);
}



const getPlayers = async () => {

    const data = await window.contract.methods.getPlayers().call();

    const data_choice = data.includes(account);

    if (data_choice == true) {
               document.getElementById("middlebuttons").innerHTML= '<h3>Your wallet has been white listed</h3>'; 
   
        console.log('you have already have a whitelist ticket');

    }else{
              console.log('you have not entered');
 }

    return data_choice;
}