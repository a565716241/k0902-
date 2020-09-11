// 第一步 引入 第三方的包
const express = require('express')
const path = require('path')
const fs = require('fs')



// 第二步调用express 
const app = express()


// 处理中间的逻辑 请求与响应

// 请求之前触发的事情 


let  flag=false;

//全局中间件 所有的代码必须先走这里
app.use((req,res,next)=>{
    
// req  请求 
// res  响应的信息 
// next  能不能往下来
 
  if(!flag) {
    res.send('你还没登录 不能看index页面')
  }else {
       next()   //接着往下走
  }  


})


app.get('/index', (req, res) => {
    fs.readFile(path.join(__dirname, './package.json'), 'utf8', (err, data) => {
        if (err) throw err
        res.send(data)
    })



})



// app.get('/list', (req, res) => {
//   try {
//     let data = fs.readFileSync(path.join(__dirname, './1.txt' ),'utf8')
//     console.log(data.toString())
//     res.send(data.toString())
//   } catch (error) {
//       res.send(error.message)  
//   }
// })



app.get('/list',(req,res)=>{
    res.send('list 页面')
})





// 第三步 监听端口
app.listen(3000, () => {
    console.log('start')
})



