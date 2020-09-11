// 利用 Express 托管静态文件
const express=require('express')

const path=require('path')
const app=express()


// 基本写法
// app.use(express.static(path.join(__dirname,'public')))

//增加虚拟目录
app.use('/jiely',express.static(path.join(__dirname,'public')))




app.listen(3001,()=>{
    console.log('http://localhost:3001')
})
