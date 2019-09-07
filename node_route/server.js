let http = require("http");
let fs = require("fs");

function startServer() {
    let onRequest = function(request, response) {
        // request.url 路由路径
        if (request.url === "/" || request.url === "/home") {
            response.writeHead(200, { "Content-type": "text/html" });
            fs.createReadStream(__dirname + "/index.html").pipe(response);
        } else if (request.url === "/review") {
            response.writeHead(200, { "Content-type": "text/html" });
            fs.createReadStream(__dirname + "/review.html").pipe(response);
        } else if (request.url === "/api/v1/boxs") {
            response.writeHead(200, { "Content-type": "application/json" });
            let jsonObj = {
                name: 'zongtmao',
                work: 'web'
            }
            response.end(JSON.stringify(jsonObj));
        } else {
            response.writeHead(200, { "Content-type": "text/html" });
            fs.createReadStream(__dirname + "/404.html").pipe(response);
        }
    }

    let server = http.createServer(onRequest);
    server.listen(3400, '127.0.0.1');
}

exports.startServer = startServer;