let http = require("http");
let fs = require("fs");
let url = require("url");
let querystring = require("querystring"); // 将post参数字符串处理成json库

function startServer(router, routePathObj) {
    let onRequest = function(request, response) {
        // request.url 路由路径 url.parse只要URL问号前面的内容
        let pathname = url.parse(request.url).pathname;

        // 处理post与get请求
        let data = "";
        request.on("error", function(err) {
            console.log(err);
        }).on("data", function(chunk) {
            // 如果data定义为数组时，可以优化为：data.push(chunk);
            data += chunk;
        }).on("end", function() {
            if (request.method === "POST") {
                if (data.length > 1e6) {
                    request.connection.destroy(); //post请求数据量过大时，销毁请求
                }
                // data为数组时，data的值拼接 data = Buffer.concat(data).toString()
                router(pathname, routePathObj, response, querystring.parse(data));
            } else {
                // 处理get 参数
                let params = url.parse(request.url, true).query;
                router(pathname, routePathObj, response, params);
            }
        });
    }

    let server = http.createServer(onRequest);
    server.listen(3400, '127.0.0.1');
}

exports.startServer = startServer;