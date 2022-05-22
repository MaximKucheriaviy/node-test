const creanteDevInfoPlate = (content) => {
    let devInfoBlock = document.querySelector('.devise-inform');
    if(devInfoBlock){
        devInfoBlock.remove();
    }
    devInfoBlock = document.createElement('div');
    devInfoBlock.classList.add('devise-inform');
    document.querySelector('main').append(devInfoBlock);
    const html = `<ul class="devise-inform__content">
        <li class = "devise-inform__content-block">
            <h2>ADName</h2>
            <p>${content[0].ADName}</p>
        </li>
        <li class = "devise-inform__content-block">
            <h2>Address</h2>
            <p class = "divise-address">${content[0].Address1}</p>
        </li>
        <li class = "devise-inform__content-block">
            <h2>Checked</h2>
            <p>${content[0].Checked.substr(0, 10)}</p>
        </li>
    </ul>
    <div class="devise-inform__ping-sistem">
        <button type="button" class = "ping-button">Ping this device</button>
        <div class="ping-window">
            <p class = "ping-window__text ping-window__text--green visually-hidden">Device is online</p>
            <p class = "ping-window__text ping-window__text--greay visually-hidden">Device is offline</p>
        </div>
    </div>`
    devInfoBlock.innerHTML = html;
    setDevisePing();
}

/* <ul class="devise-inform__content">
                        <li class = "devise-inform__content-block">
                            <h2>ADName</h2>
                            <p>Some neame</p>
                        </li>
                        <li class = "devise-inform__content-block">
                            <h2>Address</h2>
                            <p>192.168.255.255</p>
                        </li>
                        <li class = "devise-inform__content-block">
                            <h2>Checked</h2>
                            <p>2022-05-22</p>
                        </li>
                    </ul>
                    <div class="devise-inform__ping-sistem">
                        <button type="button" class = "ping-button">Ping this device</button>
                        <div class="ping-window">
                            <p class = "ping-window__text ping-window__text--green">Device is online</p>
                        </div>
                    </div> */