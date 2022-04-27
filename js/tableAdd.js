function showTable(table){
    let container = document.querySelector('.table-container');
    let chid = container.childNodes;
    if(chid){
        for(let i = 0; i < chid.length; i++){
            chid[i].remove();
        }
    }
    container.append(table);
}