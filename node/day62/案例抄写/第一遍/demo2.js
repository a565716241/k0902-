// fs 操作文件
const fs=require('fs');  //引用文件系统模块
// fs.readFile('读取文件的路径','配置编码格式可以不写','回调函数(第一参数是读取失败,读取成功后的返回值)')

// let fs={
//     read:()=>{},
//     wirte:()=>{},
//     append:()=>{}
// }

// fs.read()

// function read1(){

// }

// let os={
//     read:()=>{}
// }

// os.read()

// function read2(){

// }

// //异步读取
// fs.readFile('./demo1.js',(err,data)=>{
//     if(err){
//         throw err
//     }

//     if(err)  throw err;
//     console.log(data);
//     console.log(data.toString())
// })

//第二种方法  异步读取
let res='hello';
fs.readFile('./demo1.js','utf-8',(err,data)=>{
    if(err)throw err
    console.log(data)
    res=data;
})
console.log('我是异步读取文件后的代码'+res)