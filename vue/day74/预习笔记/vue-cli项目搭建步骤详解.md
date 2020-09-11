# vue-cli项目搭建步骤详解



#### 使用vue webpack 模板搭建项目步骤：

##### 1. 安装 node.js(npm)，因为会用到npm包管理工具下载项目依赖等

##### 2. 安装 webpack: npm install webpack -g

##### 3. 安装 vue-cli： npm install vue-cli –g

##### 4. 通过vue-cli，初始化vue项目： vue init webpack projectName(项目名)

##### 5. 进入到项目目录： cd projectName(项目名)

##### 6. 安装项目依赖： npm install

##### 7. 启动项目： npm run dev

------

#### vue-cli脚手架的优势：

1. 有一套成熟的vue项目架构设计,能够快速初始化一个Vue项目.
2. vue-cli是官方支持的一个脚手架，会随本版本进行迭代更新。
3. vue-cli提供了一套本地的node测试服务器，使用vue-cli自己提供的命令，就可以启动服务器。
4. 集成打包上线方案。

------

#### 安装流程详解

##### 1、nodejs的安装

- 在node.js中文官网正常下载安装node.js即可，没有什么特别需要注意的点（傻瓜式安装）。
- 在官网下载安装node.js后，就已经自带npm（包管理工具），不需要另外再进行安装npm了。
- 注意下载node.js版本尽量最新即可。
- 打开命令行工具（随便哪个文件夹），输入命令行 node -v，npm -v，如下图，如果出现相应的版本号，则说明安装成功。
  ![这里写图片描述](https://img-blog.csdn.net/20180725141222915?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l3MDB5dw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

##### 2、淘宝镜像的安装

- **cnpm（淘宝镜像）相关：**
  - 这是一个完整 npmjs.org 镜像，是用来同步npm上面的模块。
  - cnpm的同步频率为 10分钟 （新发布的模块有滞后性，同步是需要时间的，等不及的可以使用npm）。
  - 安装cnpm的原因：npm的服务器是外国的，所以有时候我们安装“模块”会很很慢很慢超级慢。
  - cnpm的作用：淘宝镜像将npm上面的模块同步到国内服务器，提高我们安装模块的时间。
  - 安装完淘宝镜像之后，cnpm和npm命令行皆可使用，二者并不冲突
- **安装方法：**
  - **打开命令行工具，输入命令行：**
    `$ npm install -g cnpm --registry=https://registry.npm.taobao.org`
  - **cnpm使用方法:**
    `$ cnpm install [name]`
    **ps：**安装模块的时候，将npm换成cnpm就行，国内很多coder都是使用cnpm的，个人建议大家都装一下，附上：淘宝镜像网址、

##### 3、 安装webpack

- 安装方法：打开命令行工具，输入命令行：
  `npm install webpack -g`
  **ps：**安装成功后输入webpack -v,如果出现相应的版本号，则说明安装成功。

###### 4、安装vue-cli脚手架构建工具

- 安装方法：全局安装，随便一个文件夹，输入命令行：
  `npm install vue-cli -g`
  **ps：**安装完成之后，输入命令行 **vue -V** 查看版本号，出现相应得到版本号即为成功
  ![这里写图片描述](https://img-blog.csdn.net/20180725142201466?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l3MDB5dw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

###### 5、通过vue-cli初始化项目

- 新建一个projectName（项目名）文件夹来放置项目，在新建文件夹的上一级文件夹右键打开命令行工具，输入命令行：

  ```
  vue init webpack projectName(项目名)
  ```

  ps：

  注：项目名不能大写，不能使用中文

  - 解释：这个命令的意思是初始化一个vue项目，其中webpack是构建工具，也就是整个项目是基于webpack的。其中projectName是整个项目文件夹的名称，这个文件夹会自动生成在你指定的目录中。

  - 以下是脚手架安装过程（安装步骤解析在图片下面）

  - ![1599737623083](C:\Users\jiely007\AppData\Roaming\Typora\typora-user-images\1599737623083.png)

    

    - vue-cli初始化项目选项配置详细解析

```
$ vue init webpack projectName--------------------- 安装vue-cli,初始化vue项目的命令
? Target directory exists. Continue? (Y/n) y---------------------找到了projectName这个目录是否要继续
? Target directory exists. Continue? Yes
? Project name (projectName)---------------------项目的名称（默认是文件夹的名称），ps：项目的名称不能有大写，不能有中文，否则会报错
? Project name projectName
? Project description (A Vue.js project)---------------------项目描述，可以自己写
? Project description A Vue.js project
? Author (OBKoro1)---------------------项目创建者
? Author OBKoro1 
? Vue build (Use arrow keys)--------------------选择打包方式，有两种方式（runtime和standalone），使用默认即可
? Vue build standalone
? Install vue-router? (Y/n) y--------------------是否安装路由，一般都要安装
? Install vue-router? Yes
? Use ESLint to lint your code? (Y/n) n---------------------是否启用eslint检测规则，这里个人建议选no，因为经常会各种代码报错，新手还是不安装好
? Use ESLint to lint your code? No
? Setup unit tests with Karma + Mocha? (Y/n)--------------------是否安装单元测试
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? (Y/n) y)--------------------是否安装e2e测试 
? Setup e2e tests with Nightwatch? Yes
123456789101112131415161718192021
```

现在projectName项目已经初步初始化完成了，里面也有一些文件，但是现在还不能成功运行。

###### 6、进入到项目目录： cd projectName(项目名)

###### 7、安装项目依赖。命令行： npm install。前面在项目初始化的时候，已经存在了package.json文件，直接使用npm install 安装项目所需要的依赖，否则项目不能正确运行。

到这里，我们已经成功使用vue-cli初始化了一个vue项目。

###### 8、 在projectName目录运行命令行npm run dev，启动服务，服务启动成功后浏览器会默认打开一个“欢迎页面”，如下图。

![这里写图片描述](https://img-blog.csdn.net/20180725144000476?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l3MDB5dw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
**注意：**这里是默认服务启动的是本地的8080端口，所以请确保你的8080端口不被别的程序所占用，当有其他vue项目运行的时候，可以使用ctrl+c来中断运行。