document.querySelector('.cubmit-button').onclick = function(event){
    event.preventDefault();
    let form = document.forms.gf;
    let fd = new FormData(form);
    getDataFromDB(`SELECT * FROM Exp WHERE ID = '${fd.get('code')}'`, fd.get('code'));
}
document.querySelector('.forvard-button').onclick = () => {
    getDataFromDB(`SELECT * FROM Exp WHERE Kod = '${Number(globals.currentID) + 1}'`);
}
document.querySelector('.back-button').onclick = () => {
    getDataFromDB(`SELECT * FROM Exp WHERE Kod = '${Number(globals.currentID) - 1}'`);
}