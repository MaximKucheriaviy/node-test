getDataFromDB = (querry, type = "defalut") => {
    let data = new FormData;
    data.append('NodeReqestType', 'mysql');
    data.append('sql', querry);
    return promise = fetch("127.0.0.1", {
        method: 'POST',
        body: data
    })
}