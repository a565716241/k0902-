const http = require('http');
http.createServer((req, res) => {
    res.end('hello 8000 端口启动')
}).listen(8000)