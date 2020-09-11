// 1 第一步 引入   
const express=require('express')
// 2 第二步 调用 express  方法  
const  app=express();

// 中间就是正常逻辑处理  发请请求  以及数据响应 

app.get('/index',(req,res)=>{
     res.send('啥都可以写  json  而且 还带有 end 服务器结束的功能  ')

    // res.end('也可以使用原生的end的方法 但是end只能传递字符串')
})

app.get('/list',(req,res)=>{
    
    res.send({'name':'zs',age:18})

})

// 3  第三步监听端口 
app.listen(3000,()=>{
    console.log('3000端口启动了')
})