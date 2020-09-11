const express=require('express')
const listRouter=express.Router();

listRouter.get('/list',(req,res)=>{
    res.send('/news/list')
})

module.exports=listRouter