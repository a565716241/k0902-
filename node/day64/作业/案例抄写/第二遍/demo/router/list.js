const express=require('express')

// 准备使用路由  

// const  listRouter=express.Router()

// 直接导出
  const  listRouter=express.Router()



listRouter.get('/list',(req,res)=>{
    res.send('list')
})



module.exports={
    listRouter
}
