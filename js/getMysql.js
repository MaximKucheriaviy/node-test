document.querySelector('.reqButton').onclick = () =>{
    let tableData;
    let p = new Promise((resolve, reqect) =>{
        let data = new FormData;
        data.append('NodeReqestType', 'mysql');
        data.append('sql', 'SELECT * FROM users');
        xhr = new XMLHttpRequest;
        xhr.open("POST", "localhost");
        xhr.send(data);
        xhr.onload = () =>{
            tableData = JSON.parse(xhr.response);
            resolve();
        }
    })
    p.then(() =>{
        document.body.append(createTableFromData(tableData));
    })
}
