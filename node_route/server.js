let http = require("http");
let fs = require("fs");
let url = require("url");

function startServer(router, routePathObj) {
    let onRequest = function(request, response) {
        // request.url 路由路径 url.parse只要URL问号前面的内容
        let pathname = url.parse(request.url).pathname;

        // 处理get 参数
        let params = url.parse(request.url, true).query;
        router(pathname, routePathObj, response, params);
    }

    let server = http.createServer(onRequest);
    server.listen(3400, '127.0.0.1');
}

exports.startServer = startServer;