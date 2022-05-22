(()=>{
    getDataFromDB('SELECT * FROM planets').then((response) => {
        response.json().then((body) => {
            setDataToAsside(body);
        })
    });
})();