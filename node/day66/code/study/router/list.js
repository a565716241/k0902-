const express=require('express')
const listRouter=express.Router();

const Mycousers = require('../mongoose/connect');




listRouter.get('/list',   async (req,res)=>{
    console.log(req.query)

    // Mycousers.find({}).then(res=>{
    //         console.log(res)
        
    //      })
  let  dataList   =await Mycousers.find()
  console.log(dataList)
  res.send(dataList)

        
    
    

})


module.exports=listRouter