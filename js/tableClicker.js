function tableClicker(table = document.createElement('table')){
    table.onclick = (event) =>{
        target = event.target;
        // alert(target.nodeName);
        // alert(target.getAttribute('sql'));
        if(target.getAttribute('sql') != "no") {
            getDataFromDB(target.getAttribute('sql'))
        };
    }
}