const readline = require('readline');
const netInterfases = require('./nodeSoures/get-IP');
const server = require('./nodeSoures/serverModule');




const { stdin: input, stdout: output } = require('process');
const { add } = require('nodemon/lib/rules');
const rl = readline.createInterface({ input, output });
const port = 3000;



netInterfases.showInterfaces();
let address = netInterfases.ip;

rl.question('Choose interface? ', (answer) => {
    server.startServer(port, address[answer])
    rl.close();
});





