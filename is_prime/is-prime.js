const fs = require('fs')
const bytes = fs.readFileSync(__dirname + '/is-prime.wasm');
const value = parseInt(process.argv[2]);

WebAssembly.instantiate(new Uint8Array(bytes))
    .then(obj => {
        if (!!obj.instance.exports.is_prime(value)) {
            console.log(`${value} is prime!`);
        }
        else {
            console.log(`${value} is NOT prime`);
        }
    });