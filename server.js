var http=require('http');
var url=require('url');

function start(route,handle){
    function onRequest(request,response){
        //request对象包含很多数据，我们需要提取url 以及其他参数
        //需要辅助nodejs的url模块和querystring模块
        //此处的pathname应该是8080 后面的
        var pathname=url.parse(request.url).pathname;
        // console.log("Request for"+pathname+"received");

        route(handle,pathname);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end('Hello world \n');
    };
    http.createServer(onRequest).listen(8080);
    console.log("Server has started");
};
exports.start=start;
