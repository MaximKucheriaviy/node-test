(() => {
    document.querySelector('.sidebar').onclick = (event) => {
        const target = event.target;
        switch(true){
            case target.classList.contains('sidebar__palnet-name'):
                // console.log(target.nextSibling.nodeName);
                target.nextSibling.classList.toggle('visually-hidden');
            break;
        }
    }
})()