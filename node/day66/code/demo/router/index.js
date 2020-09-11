const express=require('express')
const indexRouter=express.Router();

indexRouter.get('/index',(req,res)=>{
    res.send('/admin/index')
})

module.exports=indexRouter