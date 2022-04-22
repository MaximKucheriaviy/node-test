const os = require('os');
const readline = require('readline');
const http = require('http')
const ifacse = os.networkInterfaces();
const port = 3000;
const fs = require('file-system');
const path = require('path');
const mime = require('mime-types');

const server = http.createServer((req, res) => {
    let filePath;
    if(req.method == "GET"){
        if(req.url == '/'){
            filePath = path.join('./index.html');
        }
        else{
            filePath = (`.${req.url}`);
        }
        fs.readFile(filePath, (err, data)=>{
            if(err){
                console.log(err);
                res.end();
            }
            else{
                res.setHeader('Content-Type', mime.lookup(path.parse(filePath).ext));
                res.write(data);
                res.end();
            }
        })
    }
})

const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

const addresses = () => {
    let arr = {};
    for (let prop in ifacse) {
        for (let prop2 of ifacse[prop]) {
            if (prop2.family == 'IPv4') {
                arr[prop] = prop2.address;
            }
        }
    }
    return arr;
}

console.log(addresses());
let address = addresses();

rl.question('Choose interface? ', (answer) => {
    
    server.listen(port, address[answer], (error) =>{
    if(error){
        throw(error);
    }
    else{
        console.log(`Seerver run on port ${port}`)
        console.log("connect to it ad " + `http://${address[answer]}:${port}/`)
    }
})
    rl.close();
});





