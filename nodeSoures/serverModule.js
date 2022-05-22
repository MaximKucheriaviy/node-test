const http = require('http')
const fs = require('file-system');
const path = require('path');
const mime = require('mime-types');
const formDataParser = require('./formDataPerser');
const dbData = require('./mysqlGet.js');
const ping = require('ping');

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
    else if (req.method == "POST") {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let r = formDataParser(body);
            switch(r.NodeReqestType){
                case 'mysql':
                    let p = dbData.getDataFromDB(r.sql);
                        p.then(() => {
                        body = "";
                        // console.log(dbData.DBresponse)
                        res.end(JSON.stringify(dbData.DBresponse));
                        dbData.DBresponse = new Array;
                    })
                break;
                case 'ping':
                    const obj = {};
                    console.log(`Pinging ${r.address}`);
                    ping.sys.probe(r.address, (isAlive) => {
                        if(isAlive){
                            obj.pingStatus = "true";
                        }
                        else{
                            obj.pingStatus = "false";
                        }
                        res.end(JSON.stringify(obj));
                    })
                break;
            }           
        });
    }
})

module.exports = {
    startServer(port, address){
        server.listen(port, address, (error) =>{
            if(error){
                throw(error);
            }
            else{
                console.log(`Seerver run on port ${port}`)
                console.log("connect to it ad " + `http://${address}:${port}/`)
            }
        })
    }
}