const   fs = require('fs')
const  util=require('util');
const  myreadFile=util.promisify(fs.readFile);  //fs.readFile  可以写任何的方法
// console.log(myreadFile)
let run=async ()=>{
    let res1=  await  myreadFile('./1.txt' ,'utf8') 
    let res2=  await  myreadFile('./2.txt' ,'utf8') 
    let res3=  await  myreadFile('./3.txt' ,'utf8') 
    console.log(res1,res2,res3)
  }
  
  run().catch(err=>{
      console.log(err)
  })
  



// fs.readFile('./1.txt', 'utf8', (err, data) => {
//     console.log(data)
// })

// promise   解决地狱回调的问题

// 1 把读取文件这个异步方法变成promise 对象 
// 2 async +await 处理promise 的结果
// es5
//   async  function  run () {

//   }
   
// es6



