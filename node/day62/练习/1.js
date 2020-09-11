async function fn1() {
    return 1
}
async function fn2() {
    return 2
}
async function fn3() {
    return 3
}

// fn1().then(res1 => {
//     console.log(res1)
//     return fn2()
// }).then(res2 => {
//     console.log(res2)
//     return fn3()
// }).then(res3 => {
//     console.log(res3)
// }).catch(err => {
//     console.log(err)
// })
//promise 异步 await  代码写起来肯定是同步  必须是从上往下走  但是代码执行起来肯定是异步
// await  等待后续的代码一定需要等待前面的代码执行完才会执行 但是底层是异步
// await  不能单独使用 async 可以  await 必须配合 async
// await 只能处理 promise 成功的结果 resolve的返回值

async function run() {
    let res1 = await fn1()
    let res2 = await fn2()
    let res3 = await fn3()
        // let p4 = new Promise((resolve, reject) => {
        //     resolve('成功')
        // })
    console.log(res1, res2, res3)
        // p4.then(res => {
        //     console.log(res)
        // })

    let res4 = await Promise.resolve('成功')
    console.log(res4)
        // let res5 = await Promise.reject('失败')
        // console.log(res5)
}

run()