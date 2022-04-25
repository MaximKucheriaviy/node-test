var mysql = require('mysql');

let dbData = {
  res: new Array,
  getDataFromDB(req){
    var con = mysql.createConnection({
      host: `127.0.0.1`,
      user: "nodeUser",
      database: "db",
      password: "mts53435343A!"  
    });
    const q = new Promise((resolve, reject) =>{
      con.query(req, (err, result) =>{
        if(err) throw err;
    
        for(let elem in result){
          this.res.push(result[elem]);
        }
        resolve();
      })
    })
    con.end((err) =>{
      if(err) throw err;
      console.log("Connection closed");
    })
    return q;
  }
}

module.exports = dbData;






