// var arr=[1,2,3];
// arr.forEach(function(item,index){
//     console.log(item)
// })









// //设计思想
// function each ( array, callback ) {
//   //判断一下第一个是不是数组
     
//      callback&&callback(arr[i],i)

//     }






//是不是数组 判断是不是伪数组
function isArrayLike ( array ) {
        
    var length = array && array.length;

    return typeof length === 'number' && length >= 0;

}

function myeach ( array, callback ) {
    if ( isArrayLike( array ) ) {
        // 使用 for 循环
        for ( var i= 0; i < array.length; i++ ) {
            callback && callback( i, array[ i ] );
        }
    } else {
        // 使用 for-in 循环
        for ( var k in array ) {
            callback && callback( k , array[ k ] );
        }
    }
}


// var arr=[10,20,30];

// var  btns=document.querySelectorAll('button')  //伪数组

myeach({name:'zs'},(i,item)=>{
    // console.log(i)
    console.log(item)
})