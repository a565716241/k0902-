const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/playground')
.then(()=>{
    console.log('链接成功')
})
.catch(err=>{console.log(err+'链接失败')})



// mycourses
//创建集合规则 

// name
// :
// "张三"
// age
// :
// 20
// hobbies
// :
// Array
// email
// :
// "zhangsan@itcast.cn"
// password
// :
// "123456"
const cousers=  new  mongoose. Schema({
    name:String,
    age:{
        type:Number,
        max:10000,
        min:0,
        required:true,
        message:'定义格式不符合规则'
    },
    hobbies:[String],
    email:String,
    password:String

})


  const    Mycousers=mongoose.model('mycourse',cousers)


//查询

//   Mycousers.find({}).then(res=>{
//     console.log(res)
// })




module.exports=Mycousers;