const express=require('express')

const indexRouter=express.Router()

const listRouter=express.Router()



const app=express()



app.use('/admin',indexRouter)

app.use('/news',listRouter)

indexRouter.get('/index',(req,res)=>{
    res.send('admin/index')
})

listRouter.get('/list',(req,res)=>{
    res.send('news/list')
})




app.listen(3000,()=>{
    console.log('3000 router')
})