let http = require("http");
let fs = require("fs");

function startServer(router, routePathObj) {
    let onRequest = function(request, response) {
        // request.url 路由路径
        router(request.url, routePathObj, response);
    }

    let server = http.createServer(onRequest);
    server.listen(3400, '127.0.0.1');
}

exports.startServer = startServer;