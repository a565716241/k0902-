const express=require('express')
const app=express()


app.get('/index',(req,res)=>{
    res.end('index')
})

app.get('/list',(req,res)=>{
    res.end('list')
})

app.listen(3000,()=>{
    console.log('3000')
})