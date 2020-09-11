
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