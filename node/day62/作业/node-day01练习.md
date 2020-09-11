# 每日作业-Node.js第一天

### 训练案例1

#### 训练描述

在   ‘作业素材’  文件夹中有两个文件，“text01.txt”和“index.html”

读取text01.txt中的内容,写入到index.html中

要求：

​    （1）：使用今天学习的fs模块完成文件读取与写入

​    （2）：使用pah模块操作路径

#### 训练提示

1、创建一个js文件来执行读写操作

2、先引入fs模块与path模块

3、注意写入的操作要写在读取操作的回调函数内部



#### 操作步骤

js代码

```javascript
const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname,'路径'),(err,data)=>{
  	//进行读取成功与否的判断
  	if(err) return false
  	//如果读取成功 把读取到内容写入到index.html文件中
  	…
})
```







