document.querySelector('.reqButton').onclick = () =>{
    let data = new FormData;
    data.append('NodeReqestType', 'mysql');
    xhr = new XMLHttpRequest;
    xhr.open("POST", "127. 0. 0. 1:3000", false);

    xhr.send(data);

    xhr.responseType = 'text';
    xhr.onload = () =>{
        alert(xhr.response);
    }
}
