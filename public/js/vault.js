
        let account;
        const connectMetamask = async () => {
            if(window.ethereum !== "undefined") {
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
                account = accounts[0];
                document.getElementById("accountArea").innerHTML = account;
                document.getElementById("send-button").innerHTML = "ENTER WHITELIST";
               
                document.getElementsByClassName("wallet-connect")[0].innerHTML="CONNECTED";
                document.getElementById("welcome").innerHTML="WELCOME";
                document.getElementById("send-button").disabled = false;
                

            }
        }

      // if(window.ethereum.networkVersion == 10) {
        document.getElementById('send-button').addEventListener('click', event =>{
          let transactionParam = {
            to: '0xEdc8698f15305F215F8196133401C072d2B298D7',
            from: account,
            value: '71AFD498D0000',
         gas: '21000',
          };
          
          ethereum.request({method: 'eth_sendTransaction', params:[transactionParam]}).then(txhash => {
            console.log(txhash);
            checkTransactionconfirmation(txhash).then(r => alert(r));
          });
        });
      // }
      function checkTransactionconfirmation(txhash) {

        let checkTransactionLoop = () => {
          return ethereum.request({method:'eth_getTransactionReceipt',params:[txhash]}).then(r => {
            if(r !=null) return 'confirmed';
            else return checkTransactionLoop();
          });
        };

        return checkTransactionLoop();
      }