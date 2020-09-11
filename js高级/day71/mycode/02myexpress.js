//1   可以启动一个服务器
//2   可以监听端口 
//3   可以实现基本路由
//4   可以实现get post 请求
const http = require('http')
const url = require('url')

class Application {
    constructor() {
        this.router = []
    }

    get(url, callback) {
        if (typeof url == 'string') {
            this.router.push({
                url: url,
                method: 'get',
                callback: callback
            })
        }
    }
    post(url, callback) {
        if (typeof url == 'string') {
            this.router.push({
                url: url,
                method: 'post',
                callback: callback
            })
        }
    }

    listen() {
        const server = http.createServer((req, res) => {
            let { pathname } = url.parse(req.url, true)
            for (var singroute of this.router) {
                let { url, method, callback } = singroute;
                if (pathname == url && req.method.toLowerCase() == method) {
                    callback(req, res)
                }
            }
        })
        server.listen(...arguments)
    }
}
module.exports = function createApp() {
    return new Application()
}







