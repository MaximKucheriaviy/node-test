function setDataAtribute(name, item){
    if(name == 'Tables_in_db'){
        item.setAttribute('sql', `SELECT * FROM ${item.textContent}`);
    }
    else{
        item.setAttribute('sql', `no`);
    }
}