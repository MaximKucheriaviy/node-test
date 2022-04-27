function createTableFromData(data){
    const table = document.createElement('div');

    table.classList.add('table');
    const names = Object.keys(data[0]);
    for(let i = 0; i < names.length; i++){
        let card = document.createElement('div');
        card.classList.add('card')
        const header = document.createElement('h3');
        const text = document.createElement('p');
        header.textContent = names[i];
        text.textContent = data[0][names[i]];
        card.append(header);
        card.append(text);
        table.append(card);
    }
    
    // table.classList.add('clicable-table');
    // tableClicker(table);
    return table;
}