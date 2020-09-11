const express=require('express')
const indexRouter=express.Router()

const base=require('../mongoose/connect')





//图标列表展示接口  get  
// indexRouter.get('/index',(req,res)=>{
//     base.find({}).then(result=>{
//           res.send(result)
//     }).catch(err=>{
//         console.log(err)
//     })


// })


// 更新高一级点的
 indexRouter.get('/index',   async (req,res)=>{
     try {
        let data=   await base.find({})
        res.send(data) 
   
     } catch (error) {
         res.send( {status:404,   message:error.message})
     }

 })

//删除图书 接口


indexRouter.get('/delete', async (req,res)=>{
    let {id}=req.query;

    try {
        //   console.log(id)
      let   result=  await   base.deleteOne({_id:id});

      //   console.log(result)
        if(result.ok==1) {
  
          res.send({
              status:200,
              message:'删除成功'
              })
  
        }
        
    } catch (error) {

        res.send({  msg:err.message,message:'删除失败'})
        
    }


})



//添加图书接口  post 

indexRouter.post('/addBook',  async (req,res)=>{
      let data= req.body;
    //   console.log(data);
  try {
    let  result=     await base.create(data);
    res.send( {status:200,
        message:'添加图书成功'
      });
  } catch (error) {
       res.send({ message:'添加图书失败' ,msg:err.message}
       )   
  }
   

})



//查询单个图书接口
// url: '/queryBook',

indexRouter.get('/queryBook',async (req,res)=>{
  let myid=req.query.id;

     let data=await base.findOne({_id:myid});
     console.log(data)
     res.send(data)
} )



//更新单个图书信息接口 
// /editBook

indexRouter.post('/editBook',async (req,res)=>{
    let {id, name,author,category,desc}=req.body
    // console.log(id)
    // console.log(name)
    // console.log(author)
    // console.log(category)
    // console.log(desc)
    try {
      let result=  await base.updateOne({_id:id},{name,author,category,desc})
      console.log(result);
      if(result.ok==1) {
        res.send({status:200,message:'修改图书成功'})
      }
    } catch (error) {
      res.send({msg:err.message,message:'修改图书失败'})
    }

})

module.exports=indexRouter

