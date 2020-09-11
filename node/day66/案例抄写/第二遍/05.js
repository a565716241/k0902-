const express=require('express')
const app=express()
const path=require('path')




//设置 用哪个模板引擎
// 第一个参数art  也是设置模板
app.engine('art',require('express-art-template'))


// views 固定写法  要渲染的模板引擎的路径
app.set( 'views',  path.join(__dirname,'myviews'))


//设置默认渲染的模板引擎的后缀名
// view engine 固定写法
app.set('view engine', 'art' )



app.get('/index',(req,res)=>{
    // render('第一个参数是myviews 下面的文件的名字','第二个参数是数据')
    res.render('index',{
         name:'index'
    })
})


app.get('/list',(req,res)=>{
    res.render('list',{
         name:'list',
         age:100,
         list:['苹果','梨子','哈密瓜']
    })
})


// app.get('/list',(req,res)=>{
//     aa.find(xxx).then(res=>{
//         res.json(res)
//     })
// })





app.listen(3002,()=>{
    console.log('3002 ')
})

