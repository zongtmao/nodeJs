let http = require("http");
let fs = require("fs");

function startServer() {
    let onRequest = function(request, response) {
        response.writeHead(200, {
            "Content-type": "text/html"
        });

        let myReadStream = fs.createReadStream(__dirname + "/index.html");
        myReadStream.pipe(response);
    }

    let server = http.createServer(onRequest);
    server.listen(3400, '127.0.0.1');
}

exports.startServer = startServer;