// 在mongoose 里面 所有的都是promise
// 第一步引入 mongoose
const mongoose=require('mongoose')
//第二步准备连接    playground  如果没有就自己创建 如果有直接找这个数据库
mongoose.connect('mongodb://localhost/playground',{
    
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(()=>{
    console.log('数据库连接成功')})
.catch(err=>{
    console.log(err,'数据库连接失败')})

//创建集合规则 
// const collectCourse=new mongoose.Schema({
//     name:String,
//     age:Number,
//     author:String,
//     hobbies:[String],
//     isflag:Boolean,
//     date: { type: Date, default: Date.now },  // default 表示默认值  Date.now表示当前时间
// })




// required: true 必传字段
// minlength：3 字符串最小长度
// maxlength: 20 字符串最大长度
// min: 2 数值最小为2
// max: 100 数值最大为100
// enum: ['html', 'css', 'javascript', 'node.js']
// trim: true 去除字符串两边的空格
// validate: 自定义验证器
// default: 默认值
const collectCourse=new mongoose.Schema({
   name:{
       type:String,
       minlength:4,
       maxlength:10,
       required:true,
       message:'name 传入的值不符合验证规则',
      


   },
   age:{
    type:Number,
    max:100,
    min:0,
    required:true,
    message:'age 传入的值不符合验证规则'
    

},

category :{
    type:String,
    enum:['html','javascript','node.js','php'],
    message:'分类名称要在一定的范围内才可以'
},
    
 
 
    hobbies:{
        type:Array,
        
    },
    isflag:Boolean,
    date: { type: Date, default: Date.now },  // default 表示默认值  Date.now表示当前时间

    author:{
        type:String,
        validate:{
            //validator 自定义校验规则函数  v  可以随便写
            validator:v=>{
                // 返回布尔值
				// true 验证成功
				// false 验证失败
				// v 要验证的值
                return v&&v.length>4
            }
            ,
            	// 自定义错误信息
            message:' author 传入的值不符合验证规则'
        },
    }
})

// 使用创建表的规则 进行表(集合创建)
// const  myjiely=mongoose.model('数据表的名字',定义的表的规则)
const myjiely=mongoose.model('Myjiely',collectCourse)
// 创建表数据/添加表数据
myjiely.create({
    name:'李李大爷',
    age:19,
    author:'星宿老怪去死吧',
    hobbies:['招摇','杀肉盘'],
    category:'node.js',
    isflag:false,
}).then(res=>{
    console.log(res)
}).catch(err=>{
    // console.log(err.errors);
    let  myerr=err.errors;
    for(key in myerr  ) {
        console.log(myerr[key]['message'])
    }

})






