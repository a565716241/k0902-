const express=require('express')
const indexRouter=express.Router()



indexRouter.get('/index',(req,res)=>{
    res.send('/admin/index')
})


//直接这样导出
module.exports=indexRouter


