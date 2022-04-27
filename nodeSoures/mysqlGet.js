var mysql = require('mysql');

let dbData = {
  DBresponse: new Array,
  getDataFromDB(req){
    var con = mysql.createConnection({
      host: `127.0.0.1`,
      user: "nodeUser",
      database: "mus",
      password: "mts53435343A!"  
    });
    const q = new Promise((resolve, reject) =>{
      con.query(req, (err, result) =>{
        if(err) throw err;
    
        for(let elem in result){
          this.DBresponse.push(result[elem]);
        }
        resolve();
      })
    })
    con.end((err) =>{
      if(err) throw err;
      console.log(`SQLreqest: ${req}`);
    })
    return q;
  }
}

module.exports = dbData;






