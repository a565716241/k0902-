const express=require('express')
const  middle=require('./05导出中间件.js')


const app=express()

app.use(middle.middlefn1({a:2}))

app.use(middle.middlefn2({b:2}))




app.get('/index',(req,res)=>{
    res.send('index')
})


app.listen(3000,()=>{
    console.log('start')
})