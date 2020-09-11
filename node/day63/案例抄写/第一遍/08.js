// let  fn=()=>{
//     console.log(1)
//     throw '错误';
//     return  '成功结果';
// }

// fn()   //    1   错误




// let  fn=()=>{
//     console.log(1)
//         // throw '错误';
//         return  '成功结果';
// }

// console.log(fn())    //1   成功结果





// async  异步   一个普通的函数如果加了async  就变成一个promise 

// let  fn=  async ()=>{
//     console.log(1)
//         // throw '错误';
//         return  '成功结果';
// }

// console.log(fn())      // 1   Promise { '成功结果' }






//  let  fn=  async ()=>{
//      console.log(1)
//          // throw '错误';
//          return  '成功结果';
//  }
// fn().then(res=>{
//     console.log(res)    //成功结果
// })




let  fn=  async ()=>{
    console.log(1)
        throw '错误';
        return  '成功结果';
        console.log('xxxx')
}
fn().then(res=>{
   console.log(res)    
}).catch(err=>{
    console.log(err)    //错误
})






