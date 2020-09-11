const fs = require('fs')

// fs.readFile('./1.txt', 'utf8', (err, data) => {
//     console.log(data)
// })

// promise   解决地狱回调的问题
let p1 = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

p1('./1.txt')
.then(res1 => {
    console.log(res1)
    return p1('./2.txt')})
.then(res2 => {
    console.log(res2)
    return p1('./3.txt')})
.then(res3 => {
    console.log(res3)})
.catch(err => {
    console.log(err)
})





