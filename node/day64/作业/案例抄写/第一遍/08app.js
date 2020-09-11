const express=require('express')
const app=express();

// 全局中间件

app.use((req,res,next)=>{
    req.name='success'
    // res.send("现在在维护中....")

    next()
})

//另一种中间件    
app.use('/index',(req,res,next)=>{

    req.index='index  success'
    // res.send(req.name+'我是index的中间件')
    // res.send('我是index的中间件')
    next()
})

app.use('/list',(req,res,next)=>{

    // res.send(req.name+'我是list的中间件')

    req.list='list  success'
   
    next()
})


    //   express 没有write 这个方法


app.get('/index',(req,res)=>{

 res.send(req.name+req.index+'send')

})


app.get('/list',(req,res)=>{


    res.send(req.name+req.list+'list')

})


app.listen(3000,()=>{
    console.log('xxxx')
})