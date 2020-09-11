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


//查询数据库Myjiely 里面的数据
// myjiely.find().then(res=>{
//     console.log(res)
// })


//查询某一条数据  根据 名字去查  如果名字相同 匹配第一个查到的
// myjiely.findOne({name:'zs'}).then(res=>{
//     console.log(res)
// })

//排序查询 升序
// myjiely.find().sort('age').then(res=>{
//     console.log(res)
// })

//排序查询 降序
// myjiely.find().sort('-age').then(res=>{
//     console.log(res)
// })

//范围查询  age 大于 20 小于100
// myjiely.find({age:{$gt:20,$lt:100}}).then(res=>{
//     console.log(res)
// })


//限制条数 limit(数字)
// myjiely.find({age:{$gt:20,$lt:100}}).limit(2).then(res=>{
//     console.log(res)
// })


//范围查询
// myjiely.find({hobbies:{$in:['放毒']}}).then(res=>{
//     console.log(res)
// })



//展示结果不全部展示
// select()

//   -_id  不显示id 
// myjiely.find({hobbies:{$in:['放毒']}}).select('name author -_id').then(res=>{
//     console.log(res)
// })

//   升序排列 前面2条跳过 限制3条 
myjiely.find().sort('age').skip(2).limit(3).then(res=>{
    console.log(res)
})






