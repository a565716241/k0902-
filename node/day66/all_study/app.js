// 1 初始化一个包 
// 2  安装第3方的插件    express   body-parser    mongoose  
//3   搭建服务器 

const  express=require('express')
//引入path  
const path=require('path')

const app=express()

const indexRouter=require('./router/index')
// 实现静态资源挂载  
app.use(express.static(path.join(__dirname,'public')))



// console.log('-------------------------------')
// // test
// // app.get('/index',(req,res)=>{
// //     // console.log(re)
// //     res.send('index')
// // })
// console.log('-------------------------------')


app.use(indexRouter)










app.listen(8080,()=>{
    console.log('8080 start')
})