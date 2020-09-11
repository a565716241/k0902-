const express=require('express')

const indexRouter=express.Router()

const mysheets=require('../mongoose/connect')

indexRouter.get('/index',  async (req,res)=>{
   
    // res.send({name:'zs',age:18})
    //发送数据库的数据
     let data= await mysheets.find({})
     res.send(data)
})




module.exports=indexRouter