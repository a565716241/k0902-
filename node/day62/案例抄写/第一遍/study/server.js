const http = require('http')
const fs = require('fs')
const path = require('path')

const myurl = require('url');

const server = http.createServer((req, res) => {
    // const.log(req.url);
    let reqUrl = req.url;
    let { pathname, query } = myurl.parse(req.url, true);

    console.log(query)

    console.log(pathname)

    // console.log(query.username)

    if (reqUrl == '/' || reqUrl == '/index.html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')

        fs.readFile(path.join(__dirname, './index.html'), 'utf8', (err, data) => {
            if (err) throw err
            res.end(data);
        })


    } else if (reqUrl == '/css/base.css') {
        res.setHeader('Content-Type', 'text/css;charset=utf-8')
        try {
            let data = fs.readFileSync(path.join(__dirname, './css/base.css'), 'utf8')
            res.end(data)
        } catch (error) {
            console.log('读取文件出错')
            console.log(error)
        }
    } else if (reqUrl == '/js/tool.js') {
        res.setHeader('Content-Type', 'application/x-javascript;charset=utf-8')

        fs.readFile(path.join(__dirname, './js/tool.js'), 'utf8', (err, data) => {
            if (err) throw err
            res.end(data);
        })
    } else if (reqUrl == '/img/1.jpg') {
        res.setHeader('Content-Type', 'image/jpeg;charset=utf-8')

        fs.readFile(path.join(__dirname, './img/1.jpg'), (err, data) => {
            if (err) throw err
            console.log(data)
            res.end(data);
        })
    } else if (pathname = '/list' || pathname == '/favicon.ico') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')

        var data = { status: 200, list: [{ name: 'zs' }, { pwd: 'zsf' }] }

        res.end(JSON.stringify(data))
    } else {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')

        res.end('我不知道你要找什么类型的文件 想好了再来吧')
    }
})
server.listen(8888, () => {
    console.log('http://localhost:8888')
})