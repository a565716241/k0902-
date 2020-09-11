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
const collectCourse=new mongoose.Schema({
    name:String,
    age:Number,
    author:String,
    hobbies:[String],
    isflag:Boolean,
    date: { type: Date, default: Date.now },  // default 表示默认值  Date.now表示当前时间
})

// 使用创建表的规则 进行表(集合创建)
// const  myjiely=mongoose.model('数据表的名字',定义的表的规则)
const myjiely=mongoose.model('Myjiely',collectCourse)
//创建表数据/添加表数据
// myjiely.create({
//     name:'李李大爷',
//     age:299,
//     author:'星宿老怪',
//     hobbies:['坐轿子','放毒'],
//     isflag:false,
// }).then(res=>{
//     console.log(res)
// })

// updateOne  更改一个值  第一个对象 确定要改的人   第二个对象更改后的值

// myjiely.updateOne({name:'王五'},{name:'王呜呜',age:10000,email:'xxxx@qq.com'}).then(res=>{
//     console.log(res)
// })

//更改多个 
// myjiely.updateMany({},{name:'隔壁浪姐',age:35,hobbies:['唱歌','跳舞','rap']}).then(res=>{
//     console.log(res)
// })

//删除一个
// myjiely.findOneAndDelete({_id:'5c09f2d9aeb04b22f846096b'}).then(res=>{
//     console.log(res)
// })

//删除多个
myjiely.deleteMany({}).then(res=>{
    console.log(res)
})




