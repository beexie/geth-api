let express = require('express')

let ZeroConfig = require('zero-config');

function start() {
    let app = express();
    let config = ZeroConfig(__dirname, {});

    let host = config.get('host');
    let port = config.get('port');
    app.listen(port, host, function onStart() {
        console.log(`Server listing on ${host}:${port}`);
    });
}

if (require.main === module) {
    start();
}