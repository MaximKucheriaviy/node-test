getDataFromDB = (querry, mode = "") => {
    if(mode == "") {
        // новый запрос
        if(globals.sql.current != ""){
            globals.sql.back.push(globals.sql.current);
        }
        globals.sql.forvard.length = 0;
        globals.sql.current = querry;
    }
    else if(mode == "back"){
        if(globals.sql.current != ""){
            globals.sql.forvard.push(globals.sql.current);
        }
        globals.sql.current = querry;
    }
    else if(mode == "forvard"){
        if(globals.sql.current != ""){
            globals.sql.back.push(globals.sql.current);
        }
        globals.sql.current = querry;
    }
    let tableData;
    let p = new Promise((resolve, reqect) =>{
        let data = new FormData;
        data.append('NodeReqestType', 'mysql');
        data.append('sql', querry);
        xhr = new XMLHttpRequest;
        xhr.open("POST", "");
        xhr.send(data);
        xhr.onload = () =>{
            tableData = JSON.parse(xhr.response);
            resolve();
        }
    })
    p.then(() =>{
        showTable(createTableFromData(tableData));
        console.log(globals.sql.forvard)
    })
}

getDataFromDB("SHOW TABLES");