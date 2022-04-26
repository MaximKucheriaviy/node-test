

function createTableFromData(data){
    const table = document.createElement('table');
    const names = Object.keys(data[0]);
    let tableRow = document.createElement('tr');
    for(let i = 0; i < names.length; i++){
        const header = document.createElement('th');
        header.textContent = names[i];
        tableRow.append(header);
    }
    table.append(tableRow);
    for(let i = 1; i < data.length; i++){
        tableRow = document.createElement('tr');
        for(let j = 0; j < names.length; j++){
            const text = document.createElement('td');
            text.textContent = data[i][names[j]]
            tableRow.append(text);
        }
        table.append(tableRow);
    }
    return table;
}