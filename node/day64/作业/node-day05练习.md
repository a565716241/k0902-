# 每日作业-Node.js第五天

### 训练案例-学生档案管理案例

#### 训练描述

 利用今天学习的Express框架 去改造第四天的学生档案管理案例

 要求:

1. 使用express 搭建node服务器
2. 使用express.Router创建路由
3. 使用express-art-template模板引擎
4. 使用express.static 进行静态资源托管



#### 训练提示

​	只需要修改app.js 与路由模块 index.js 中的代码即可 数据访问模块不需要修改

​	可参考作业素材写好的代码

​	使用res.render返回渲染的模板页面

​	使用res.redirect来重定向页面



#### 操作步骤

- 1.建立项目文件夹并生成项目描述文件
- 2.创建网站服务器实现客户端和服务器端通信
- 3.连接数据库并根据需求设计学员信息表
- 4.创建路由并实现页面模板呈递
- 5.实现静态资源访问
- 6.实现学生信息添加功能
- 7.实现学生信息展示功能


app.js代码

```javascript
// app.js
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






```

路由模块index.js代码

```javascript

// 引入router模块
// 这是定义了一个路由模块，专门负责创建路由对象，并挂载路由规则
const express = require('express')

// 调用 express.Router() 方法，创建路由对象
const router = express.Router()
// 引入日期格式化模块
const dateFormat = require('dateformat')
// 学生信息集合
const Student = require('../model/user');

// 呈递学生档案信息页面
router.get('/', (req, res) => {
	res.render('index', {})
})

// 呈递学生档案信息列表页面
router.get('/list', (req, res) => {
	// 查询学生信息
	Student.find().then((result) => {
		// 转换数据格式
		result = JSON.parse(JSON.stringify(result))
		// 转换时间格式
		result.forEach((i)=>{
			i.enterDate = dateFormat(i.enterDate,'yyyy-mm-dd')
		})
		res.render('list', { students: result })
	})

})
// 实现学生信息添加功能路由
router.post('/add', (req, res) => {
	Student.create(req.body)
		.then((doc) => {
			// url重定向
			res.redirect('/list')
		})

});

module.exports = router;
```



