const express=require('express')

const app=express()


const indexRouter=require('./router/index').indexRouter

const listRouter=require('./router/list').listRouter


// console.log(indexRouter)
// console.log(listRouter)

app.use('/admin',indexRouter);

app.use('/news',listRouter);







app.listen(3000,()=>{
    console.log('3000 启动')
})