document.querySelector('.backButton').onclick = () => {
    if(globals.sql.back.length != 0){
        const reqest = globals.sql.back.pop();
        getDataFromDB(reqest, 'back');
    }
}

document.querySelector('.forwardButton').onclick = () => {
    if(globals.sql.forvard.length != 0){
        const reqest = globals.sql.forvard.pop();
        getDataFromDB(reqest, 'forvard');
    }
}