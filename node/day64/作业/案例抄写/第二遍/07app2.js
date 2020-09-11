const express=require('express')
const app=express();



// 全局中间件

app.use((req,res,next)=>{
    res.send("现在在维护中....")

    // next()
})

//另一种中间件    
app.use('/index',(req,res,next)=>{
    // res.send('我是index的中间件')
    next()
})

app.use('/list',(req,res,next)=>{
    // res.send('我是list的中间件')
    next()
})

app.get('/index',(req,res)=>{
    res.send('index')
})


app.get('/list',(req,res)=>{
    res.send('list')
})


app.listen(3000,()=>{
    console.log('xxxx')
})