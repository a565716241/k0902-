const express=require('express')
const app=express()

app.get('/index',(req,res)=>{
    // console.log('index')
    res.send("index")
})


app.get('/list',(req,res)=>{
    // console.log('list')
    res.send("index")
})






app.listen(3000,()=>{
    console.log('3000 start')
})










