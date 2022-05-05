function createTableFromData(data, ID){
    const table = document.createElement('div');
    const imageThumb = document.createElement('div');
    const textThumb = document.createElement('div');
    const image = document.createElement('img');
    table.classList.add('table');
    const names = Object.keys(data[0]);
    for(let i = 0; i < names.length; i++){
        let card = document.createElement('div');
        card.classList.add('card')
        const header = document.createElement('h3');
        let text;
        if(names[i] == 'Preview'){
            console.log(ID);
            image.src = `./img/${data[0][names[i]]}`;
            continue;
        }
        else if(names[i] === 'INС_Date'){
            text = document.createElement('p');
            const content = data[0][names[i]];
            text.textContent = content.substr(0, 10);
            if(names[i] == "Kod"){
                globals.currentID = data[0][names[i]];
                console.log(globals.currentID);
            }
        }
        else{
            text = document.createElement('p');
            text.textContent = data[0][names[i]];
            if(names[i] == "Kod"){
                globals.currentID = data[0][names[i]];
                console.log(globals.currentID);
            }
        }
        header.textContent = names[i];
        card.append(header);
        card.append(text);
        textThumb.append(card);
        imageThumb.append(image);
        textThumb.classList.add("text-thumb")
        imageThumb.classList.add("image-thumb")
        table.append(textThumb)
        table.append(imageThumb);
    }
    
    // table.classList.add('clicable-table');
    // tableClicker(table);
    return table;
}