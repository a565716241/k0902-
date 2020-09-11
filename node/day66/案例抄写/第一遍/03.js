const express=require('express')

const app=express()
//采用第三方插件 
//   第一步安装 body-parser
// body-parser
//第二步引入 body-parser  

const bodyParser=require('body-parser')

//第三步使用 bodyParser 
// extended:false   表示采用queryString 方法进行解析 post请求的参数   官方推荐这个
// extended:true   表示采用 qs  方法进行解析post请求的参数 
app.use(bodyParser.urlencoded({extended:false}))


app.post('/add',(req,res)=>{
    // console.log('index')
    // res.send("add")
    // 获取post请求过来的参数    req.body
    res.send(req.body)
})


app.listen(3000,()=>{
    console.log('3000 start  post')
})










