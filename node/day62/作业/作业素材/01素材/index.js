const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, './test01.txt'), (err, data) => {
    //进行读取成功与否的判断
    console.log(data.toString())
    if (err) return false
        //如果读取成功 把读取到内容写入到index.html文件中
        // fs.appendFile('./index.html', 'data', 'utf-8', (err) => {
        //     if (err) throw err
        // })
})