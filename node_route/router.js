// 模块化管理路由
let fs = require("fs");

function router(pathName, routePathObj, response) {
    if (typeof routePathObj[pathName] === "function") {
        routePathObj[pathName](response);
    } else {
        // 如果都没有的话，显示404页面
        response.writeHead(200, { "Content-type": "text/html" });
        fs.createReadStream(__dirname + "/404.html").pipe(response);
    }
}

module.exports.router = router;