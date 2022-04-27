getDataFromDB = (querry) => {
    // if(!backward) globals.sql.back.push(querry);
    let tableData;
    let p = new Promise((resolve, reqect) =>{
        let data = new FormData;
        data.append('NodeReqestType', 'mysql');
        data.append('sql', querry);
        xhr = new XMLHttpRequest;
        xhr.open("POST", "localhost");
        xhr.send(data);
        xhr.onload = () =>{
            tableData = JSON.parse(xhr.response);
            resolve();
        }
    })
    p.then(() =>{
        showTable(createTableFromData(tableData));
    })
}

// getDataFromDB("SHOW TABLES");