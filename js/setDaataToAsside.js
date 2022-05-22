setDataToAsside = (data, mode = 'clear') => {
    const sidebar = document.querySelector('.sidebar');
    if(mode === 'clear'){
        const list = document.createElement('ul');
        const itemsArr = [];
        for(const value of data){
            const item = document.createElement('li');
            const text = document.createElement('p');
            text.textContent = value.Name;
            text.classList.add('sidebar__palnet-name');
            item.append(text);
            list.append(item);
            const devReq = {
                item,
                devlist: getDataFromDB(`SELECT ADName FROM merezha WHERE PlanetID = '${value.ID}'`)
            }
            itemsArr.push(devReq);
        }
        for(const i of itemsArr){
            i.devlist.then((response) => {
                response.json().then((value) =>{
                    const deviceList = document.createElement('ul');
                    for(const j of value){
                        console.log(j.ADName);
                        const deviceList__Item = document.createElement('li');
                        const deviceList__Text = document.createElement('p');
                        deviceList__Text.textContent = j.ADName;
                        deviceList__Item.append(deviceList__Text);
                        deviceList.append(deviceList__Item);
                    }
                    i.item.append(deviceList);
                })
            })
        }
        sidebar.append(list);
        
    }
}