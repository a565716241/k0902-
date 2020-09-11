
const  express=require('express');

const path=require("path");
const listRouter = require('./router/list');

const app=express();

//导出数据库函数 


app.use(express.static(path.join(__dirname,'public')))


app.use(listRouter)







app.listen(3000,()=>{
    console.log('3000  all')
})


