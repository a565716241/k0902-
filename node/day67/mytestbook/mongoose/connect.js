const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost/playground')
.then(()=>{
    console.log('连接成功')
})
.catch(err=>{
    console.log(err,'连接失败')
})

//创建表的集合 

    //     name: '零四',
   //     author: 'jiely',
   //     category: 'wenxue',
   //     desc: '牛逼',

const  collections=new mongoose.Schema({
    name:String,
    author:String,
    category:String,
    desc:String
})
//使用创建的集合规则进行表的创建 
const  base=mongoose.model('mytestbook',collections)



// var obj={
//     name:'红楼梦',
//     author:'曹雪芹',
//     category:'文学',
//     desc:'一个封建王朝的缩影'}

// function  addData(options) {
//     base.create(options)
//     .then(res=>{
//         console.log(res)
//     }).catch(err=>{
//         console.log(err)
//     })
// }

// for(var i=0;i<10;i++) {
//     addData(obj)
// }



module.exports=base


