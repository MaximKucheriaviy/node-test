module.exports = (data = "") => {
    let result = {};
    let index;
    do {
        index = data.indexOf('Content-Disposition: form-data; name="');
        if (index == -1) break;
        data = data.slice(index + 38);
        let name = data.slice(0, data.indexOf('"'));

        data = data.slice(data.indexOf('\n') + 1);
        data = data.slice(data.indexOf('\n') + 1);

        let atribute = data.slice(0, data.indexOf('\n'));
        result[name] = atribute.slice(0, atribute.indexOf('\r'));
    } while (index != -1);
    return result;
}

