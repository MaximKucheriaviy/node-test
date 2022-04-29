function createTableFromData(data, ID){
    const table = document.createElement('div');

    table.classList.add('table');
    const names = Object.keys(data[0]);
    for(let i = 0; i < names.length; i++){
        let card = document.createElement('div');
        card.classList.add('card')
        const header = document.createElement('h3');
        let text;
        if(names[i] == 'Preview'){
            text = document.createElement('img');
            console.log(ID);
            text.src = `./img/${ID}`;
        }
        else{
            text = document.createElement('p');
            text.textContent = data[0][names[i]];
        }
        header.textContent = names[i];
        card.append(header);
        card.append(text);
        table.append(card);
    }
    
    // table.classList.add('clicable-table');
    // tableClicker(table);
    return table;
}