const express = require('express'); //Import the express dependency
const app = express();
// app.use(express.urlencode());          //Instantiate an express app, the main work horse of this server
const port = 3100; //Save the port number where your server will be listening
const axios = require('axios');
let response = null;





app.use(express.static('public',{extensions:['html']}));
app.use(express.static('public/css',{extensions:['css']}));
app.use(express.static('public/js',{extensions:['js']}));
app.use(express.static('public/assets',{extensions:['pdf']}));



// //Idiomatic expression in express to route and respond to a client request
// app.get('/', (req, res) => { //get requests to the root ("/") will route here
//     res.sendFile('/public/index.html', {
//         root: __dirname
//     }); //server responds by sending the index.html file to the client's browser
//     //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
// });
// app.get('/js/index.js', (req, res) => { //get requests to the root ("/") will route here
//     res.sendFile('/public/js/scripts.js', {
//         root: __dirname
//     }); //server responds by sending the index.html file to the client's browser
//     //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
// });

// app.get('/css/styles.css', (req, res) => { //get requests to the root ("/") will route here
//     res.sendFile('/public/css/styles.css', {
//         root: __dirname
//     }); //server responds by sending the index.html file to the client's browser
//     //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
// });



app.listen(port, () => { //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});