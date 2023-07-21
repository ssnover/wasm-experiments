const fs = require('fs');
const bytes = fs.readFileSync(__dirname + '/hello-world.wasm');

let hello_world = null; // function to be set later
let start_string_index = 100;
let memory = new WebAssembly.Memory({ initial: 1 });

let wasm_imports = {
    env: {
        buffer: memory,
        start_string: start_string_index,
        print_string: function (str_len) {
            const bytes = new Uint8Array(memory.buffer, start_string_index, str_len);
            const log_string = new TextDecoder('utf8').decode(bytes);
            console.log(log_string);
        }
    }
}

WebAssembly.instantiate(new Uint8Array(bytes), wasm_imports)
    .then(obj => {
        ({ helloworld: hello_world } = obj.instance.exports);
        hello_world();
    });
