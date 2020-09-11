const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
 // 配置body-parser模块
app.use(bodyParser.urlencoded({ extended: false }));

// 1. 使用 app.engine() 方法自定义模板引擎
app.engine('html', require('express-art-template'))
// 2. 使用 app.set('view engine', '指定模板引擎名称') 来配置项目中用到的模板引擎
app.set('view engine', 'html')
// 3. 配置模板页面的存放路径
app.set('views', path.join(__dirname,'./views'))

app.use('/css',express.static('./public/css'))

const router = require('./route/index')
app.use(router)
// 数据库连接
require('./model/connect');

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3001, function() {
  console.log('Express server running at http://127.0.0.1:3001')
})





