module.exports = {
    ip: (() =>{
        const os = require('os');
        const ifacse = os.networkInterfaces();
        const addresses = (() => {
            let arr = {};
            for (let prop in ifacse) {
                for (let prop2 of ifacse[prop]) {
                    if (prop2.family == 'IPv4') {
                        arr[prop] = prop2.address;
                    }
                }
            }
            return arr;
        })();
        return addresses;
    })(),
    showInterfaces() {
        console.log(this.ip);
    }
}

