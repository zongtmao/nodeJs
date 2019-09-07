// 各个路由方法状态机
let fs = require("fs");

function home(response) {
    response.writeHead(200, { "Content-type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(response);
}

function review(response) {
    response.writeHead(200, { "Content-type": "text/html" });
    fs.createReadStream(__dirname + "/review.html").pipe(response);
}

function apiBoxs(response, params) {
    response.writeHead(200, { "Content-type": "application/json" });
    // let jsonObj = {
    //     name: 'zongtmao',
    //     work: 'web'
    // }
    response.end(JSON.stringify(params));
}

module.exports = {
    home,
    review,
    apiBoxs,
}