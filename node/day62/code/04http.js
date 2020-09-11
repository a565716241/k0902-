const http=require("http");  // 创建服务器的方法

// http.createServer('第一个参数请求配置选项','第二个参数是返回值得配置选项')
// 返回值就创建一个服务
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url=='/news') {
        var  data={status:200,list:[{name:'zs'},{name:'lisi'},{name:'隔壁老王'}]};
          
        res.end(JSON.stringify(data));
    }else {  
        res.write('hello node')
    }
})

server.listen(3001,()=>{
    console.log('监听3001端口启动了...')
})