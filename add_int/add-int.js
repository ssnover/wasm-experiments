const fs = require('fs');
const bytes = fs.readFileSync(__dirname + '/add-int.wasm');
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

WebAssembly.instantiate(new Uint8Array(bytes))
    .then(obj => {
        let sum = obj.instance.exports.add_int(a, b);
        console.log(`${a} + ${b} = ${sum}`);
    });
