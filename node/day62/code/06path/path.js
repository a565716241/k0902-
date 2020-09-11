const path=require('path');
const fs= require('fs');


//  __dirname 当前文件夹的路径
console.log(path.join(__dirname));   //E:\北大青鸟工作\k0902\day62\code\06path


let data=fs.readFileSync(path.join(__dirname,'./demo1.js'),'utf8')
console.log(data)

let data2=fs.readFileSync(path.join(__dirname,'../demo1.js'),'utf8')
console.log(data2)



//客户端发起请求到服务器  服务器返回数据(img/js /html) 給前端





// var  str='1.html';
// let exname=path.extname(str);


// console.log(exname);

//  let flag= exname.endsWith('.html');
//  if(flag) {
//      fs.readSync()
//  }else if(css) {

//  }else if(js){}
//  else if (img) {}
//  else if(txt)









