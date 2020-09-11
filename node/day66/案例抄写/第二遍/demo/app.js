const express=require('express')

const app=express()


const indexRouter=require("./router/index")

const listRouter=require("./router/list")

app.use('/admin',indexRouter)

app.use('/news',listRouter)




app.listen(3000,()=>{
    console.log('3000 start')
})










