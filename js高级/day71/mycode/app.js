const myexpress=require('./02myexpress');


console.log(myexpress)
const app=myexpress()


app.get('/index',(req,res)=>{
    res.end('inex')
})

app.get('/list',(req,res)=>{
    res.end('list')
})

app.post('/post',(req,res)=>{
    res.end('post')
})

app.post('/index',(req,res)=>{
    res.end('post')
})

app.listen(3001,()=>{
    console.log('30001')
})