const express=require('express')
const app=express()


//获取get  请求 传递过来的参数  req.params  
app.get('/index/:id',(req,res)=>{
   
    console.log(req.params);

    // res.send('index'+req.params.id)
    res.send(req.params)
    
})


app.get('/list/:id/:name',(req,res)=>{
    // console.log('list')
    
   res.send(req.params)
})



//http://localhost:3000/news?name=zs&age=19  这种传递过来的参数 获取方式 req.query
app.get('/news',(req,res)=>{
    // res.send('news')
    res.send(req.query)
})




app.listen(3000,()=>{
    console.log('3000 start')
})










