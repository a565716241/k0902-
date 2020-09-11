const fs=require('fs')
const path=require('path')
const http=require('http')
const url=require('url')

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8')

    
    if(req.url=='/'||req.url=='/index') {
        fs.readFile(path.join(__dirname,'./static/index.html'),'utf8',fn)
    }else  if(req.url=='/list'){
          
        let  data={status:200,list:[{name:'zs'},{name:'老王'}]}
        res.write(JSON.stringify(data))
        res.end('我是list请求完成后end函数调用')
    }
})


server.listen(3000,()=>{
    console.log('3000端口运行了');
})




// function  fn(err,data) {
   
//         if(err) throw err
//         res.end(data)
//     }


