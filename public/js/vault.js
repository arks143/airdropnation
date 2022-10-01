let account;
const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({
            method: "eth_requestAccounts"
        });
        account = accounts[0];
        document.getElementById("accountArea").innerHTML = account;
        document.getElementById("send-button-txt").innerHTML = "ENTER WHITELIST";

        document.getElementsByClassName("wallet-connect")[0].innerHTML = "CONNECTED";
        document.getElementById("welcome").innerHTML = "WELCOME";
        document.getElementById("send-button-txt").disabled = false;

       await connectContract();
       await getPlayers();




    }
}


const connectContract = async () => {
    const ABI = [{
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "enter",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalance",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPlayers",
            "outputs": [{
                "internalType": "address payable[]",
                "name": "",
                "type": "address[]"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
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
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "players",
            "outputs": [{
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    const Address = "0xAb40bF65645d1a45149429b62820efc403264851";
    window.ethereum = await new Web3(window.ethereum);
    window.contract = await new window.ethereum.eth.Contract(ABI, Address);




}


const sendCrypto = async () => {

    console.log(await window.contract.methods);

    let transactionParam = {
        to: '0xAb40bF65645d1a45149429b62820efc403264851',
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