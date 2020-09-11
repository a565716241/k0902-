const fs = require('fs')
const path = require('path')
const http = require('http')
const url = require('url')
const util = require('util')
let myread = util.promisify(fs.readFile);


const app = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    let methods = req.method.toLowerCase();
    // let mypathname = url.parse(req.url, true).pathname;
    // let myquery = url.parse(req.url, true).query;

    // let {mypathname,myquery}=url.parse(req.url,true).pathname;
    // console.log(url.parse(req.url,true))
    let { pathname: mypathname, query: myquery } = (url.parse(req.url, true))

    if (mypathname !== '/favicon.ico') {

        // console.log(methods)
        console.log(mypathname)
        console.log(myquery)

        if (methods == 'get') {
            if (mypathname == '/' || mypathname == '/index') {

                let myurl = path.join(__dirname, './index.html')
                let myres = await myread(myurl, 'utf8')
                res.end(myres)
            } else if (mypathname == '/list') {
                let dataJson = { status: 200, list: [{ name: 'zs' }, { name: 'zsf' }] }
                res.end(JSON.stringify(dataJson))


            } else if (mypathname == '/news') {
                if (myquery.username) {


                    let mydata = myquery.username + myquery.pwd
                    res.end(mydata)

                } else {
                    res.end('news')

                }

            }



        } else if (methods == 'post') {
            // console.log('post 请求')
            let postdata = '';
            req.on('data', (params) => {
                postdata += params
            })

            req.on('end', () => {
                console.log(postdata)
                res.write(postdata.toString())  //buffer 对象      

                // post 获取数据是一个异步 所以结束一定要在数据完成后写
                res.end('post结束了')
                //   res.end('结束')

            })

        }

      
    }

})

app.listen(3000, () => {
    console.log('3000运行了')
})

