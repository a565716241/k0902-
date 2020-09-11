const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/playground',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
.then(()=>{console.log('连接成功')})
.catch(err=>{
    console.log(err,'连接失败')
})      

//创建集合规则 
const  jiely2=new  mongoose.Schema({
    name:String,
    age:Number,
    hobbies:[String],
    date:{type:Date,default:Date.now}
})
//使用创建集合规则进行表名创建 
const mysheets=mongoose.model('mysheet',jiely2)
//创建表里面具体的数据
const  myuser=new mysheets({
    name:'zs',
    age:100,
    hobbies:['游泳','健身','吃火锅']
})
//把创建的数据进行保存 
myuser.save();









