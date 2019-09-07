// 入口文件
let servers = require("./server.js");
let router = require("./router.js");
let handle = require("./handle.js");

let routePathObj = {};
routePathObj["/"] = handle.home; //前面为路径，后面为对应的handle.js里的方法
routePathObj["/home"] = handle.home;
routePathObj["/review"] = handle.review;
routePathObj["/api/v1/boxs"] = handle.apiBoxs;

servers.startServer(router.router, routePathObj);