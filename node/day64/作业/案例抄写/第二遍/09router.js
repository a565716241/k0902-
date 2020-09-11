const express=require('express')

// 准备使用路由  
const route=express.Router()





const app=express()

app.use(route)



route.get('/admin',(req,res)=>{
  
    res.send('index2')
    
})

route.get('/admin',(req,res)=>{
  
    res.send('list2')

  
})



app.listen(3000,()=>{
    console.log('3000 启动')
})