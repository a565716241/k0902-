
function getMsg(callback) {
    console.log('开始');
    setTimeout(() => {
        callback && callback({
            msg: '我是回调函数执行后的结果'
        })
    }, 2000)
}

// 方式一
// getMsg((data)=>{
//     console.log(data)
// })

// 方式二
//  getMsg(fn)
// function fn(data) {
// console.log('xxxx')

// console.log(data);  
// }


// 方式三
getMsg()




// $.ajax({
//     success:function(res) {
//         console.log(res)
//     }
// })




//     function  success (res) {
//         console.log(res)
//     }

//     success()





