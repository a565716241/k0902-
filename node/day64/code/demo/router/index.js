const express=require('express')

// 准备使用路由  

 const   indexRouter=express.Router()

indexRouter.get('/index',(req,res)=>{
    res.send('index')
})

module.exports={
    indexRouter
}







