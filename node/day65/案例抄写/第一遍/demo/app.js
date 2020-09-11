const  express=require('express')

const app=express()



const  listRouter=require('./router/list')


const indexRouter=require('./router/index')


app.use('/admin',indexRouter)

app.use('/news',listRouter)

app.listen(3001,()=>{
    console.log('3001  模块化')
})