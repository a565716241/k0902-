const express=require('express')
const app=express()

// 逻辑处理 请求 与响应 
app.get('/index',(req,res)=>{
    res.send('index')
})

app.get('/list',(req,res)=>{
    res.send('list')
})



app.listen(3000,()=>{
    console.log('3000')
})
