const fs = require('fs')
// fs.readFile('./1.txt', 'utf8', (err, data) => {
//     console.log(data)
// })


// promise   解决地狱回调的问题

let p1 = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.txt', 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

let p2 = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./2.txt', 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


let p3 = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./3.txt', 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


p1()
    .then(res1 => {
        console.log(res1)
        return p2()
    })
    .then(res2 => {
        console.log(res2)
        return p3()
    })
    .then(res3 => {
        console.log(res3)

    })
    .catch(err => {
        console.log(err)
    })

