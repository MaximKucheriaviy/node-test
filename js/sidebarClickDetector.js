(() => {
    document.querySelector('.sidebar').onclick = (event) => {
        const target = event.target;
        switch(true){
            case target.classList.contains('sidebar__palnet-name'):
                // console.log(target.nextSibling.nodeName);
                target.nextSibling.classList.toggle('visually-hidden');
            break;
            case target.classList.contains('sidebar__devise-name'):
                const reqest = getDataFromDB(`SELECT * FROM merezha WHERE ADName = '${target.textContent}'`);
                reqest.then((resronse) => {
                    resronse.json().then((value) => {
                        creanteDevInfoPlate(value);
                    })
                })          
            break;
        }
    }
})()