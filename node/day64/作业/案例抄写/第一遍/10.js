const express=require('express')

// 准备使用路由  
const  indexRouter=express.Router()

const  listRouter=express.Router()


const app=express()


// 把路由当中间件使用
app.use('/admin',indexRouter);

app.use('/admin',listRouter);



indexRouter.get('/index',(req,res)=>{
    res.send('index')
})


listRouter.get('/list',(req,res)=>{
    res.send('list')
})


app.listen(3000,()=>{
    console.log('3000 启动')
})