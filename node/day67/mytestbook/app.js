const express=require('express')
const  path=require('path')

const bodyParser=require('body-parser')
const app=express()


//引入连接数据库 

const indexRouter = require('./router/index')

//1 挂着静态资源

app.use(express.static(path.join(__dirname,'public')))
//2 解析post 请求  参数 
app.use(bodyParser.urlencoded({extended:false}))



app.use(indexRouter)


app.listen(8080,()=>{
    console.log('8080 start')
})