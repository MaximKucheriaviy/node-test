setDevisePing = () => {
    let button = document.querySelector('.ping-button');
    button.onclick = () =>{
        let address = document.querySelector('.divise-address').textContent;
        let data = new FormData;
        data.append('NodeReqestType', 'ping');
        data.append('address', address);
        const promise = fetch("127.0.0.1", {
            method: 'POST',
            body: data
        })
        promise.then((response) => {
            response.json().then((value) => {
                const greenText = document.querySelector('.ping-window__text--green');
                const grayText = document.querySelector('.ping-window__text--greay');
                if(value.pingStatus === "true"){      
                    if(greenText.classList.contains('visually-hidden')){
                        greenText.classList.remove('visually-hidden');
                    }
                    if(!grayText.classList.contains('visually-hidden')){
                        grayText.classList.add('visually-hidden');
                    }
                }
                else{
                    if(!greenText.classList.contains('visually-hidden')){
                        greenText.classList.add('visually-hidden');
                    }
                    if(grayText.classList.contains('visually-hidden')){
                        grayText.classList.remove('visually-hidden');
                    }
                }
            })
        })
    }
}
setDevisePing();