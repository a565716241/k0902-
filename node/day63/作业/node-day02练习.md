# 每日作业-Node.js第二天

### 训练案例1

#### 训练描述

创建一个node服务器,当用户在浏览器中输入 http://127.0.0.1:8888的时候 可以把作业素材文件中的index页面展现给用户

并且要求保证css样式 不出问题  button点击事件能够触发



#### 训练提示

​	注意 当页面中引用了css js 文件时 客户端访问网站时 每引一个都会算作一次请求

​	使用mime获取读取文件的类型



#### 操作步骤

1. 使用http模块创建服务器
2. 使用url获取请求中的路径
3. 使用path模块来操作文件路径
4. 使用fs模块来读取文件内容



js代码

```javascript
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

const app = http.createServer();

app.on('request', (req, res) => {
	// 获取用户的请求路径
	let pathname = url.parse(req.url).pathname;
    
	pathname = pathname == '/' ? '/index.html' : pathname;
    console.log(pathname)
	// 将用户的请求路径转换为实际的服务器硬盘路径
	let realPath = path.join(__dirname,pathname);

	let type = mime.getType(realPath)

	// 读取文件
	fs.readFile(realPath, (error, result) => {
		// 如果文件读取失败
		if (error != null) {
			res.writeHead(404, {
				'content-type': 'text/html;charset=utf8'
			})
			res.end('文件读取失败');
			return;
		}

		res.writeHead(200, {
			'content-type': type
		})

		res.end(result);
	});
});

app.listen(8888);
console.log('服务器启动成功')
```





### 训练案例2

####训练描述

按顺序打印 “1”---->"2" ----->"3" ------>“完毕”

#### 训练提示

​	不能一次性输出必须使用setTimeout

​	每一次输出的时间间隔必须都不一致，不能间隔固定的时间输出

​	可以使用promise 

​	也可以使用异步函数

#### 操作步骤

js代码Promise实现方式

```javascript

sleep(500).then(()=>{
    console.log(1)
    return sleep(800)
} )
.then(()=>{
    console.log(2)
    return sleep(1100)
})
.then(()=>{
    console.log(3)
    return sleep(1500)
})
.then(()=>{
    console.log('完毕')
})

function sleep(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },time)
    })
}
```



异步函数实现方法

```javascript
async function run() {
    await sleep(500)
    console.log(1)
    await sleep(800)
    console.log(2)
    await sleep(1200)
    console.log(3)
    await sleep(1600)
    console.log('完毕')
}

function sleep(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },time)
    })
}

run()
```

