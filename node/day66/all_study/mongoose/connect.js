const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1/playground')
.then(()=>{
    console.log('数据库链接成功')
})
.catch(err=>console.log(err,'链接失败'))



const mycourses=new mongoose.Schema({

    name:String,
    age:Number,
    hobbies:[String],
    email:String,
    password:String,

})

const mysheets=mongoose.model('mycourse',mycourses)


module.exports=mysheets

