仿写一个简版Express体

```javascript
// npm i express
const express = require("express");
const app = express();
app.get("/", (req, res) => {
res.end("Hello World");
});
app.get("/users", (req, res) => {
res.end(JSON.stringify([{ name: "tom", age: 20 }]));
});
app.listen(3000, () => {
console.log("Example app listen at 3000");
});
```







```javascript

const http = require('http')
const url = require('url')
const router = []
class Application {
    get(path, handler) {
        if (typeof path === 'string') {
            router.push({
                path,
                method: 'get',
                handler
            })
        }
    }
    listen() {
        const server = http.createServer((req, res) => {
            const { pathname } = url.parse(req.url, true)
            for (const route of router) {
                const { path, method, handler } = route
                if (pathname == path && req.method.toLowerCase() == method) {
                    return handler(req, res)
                }
            }


        })
        server.listen(...arguments)
    }
}
module.exports = function createApplication() {
    return new Application()
}

```

选择器封装

```javascript

function select ( selector,node ) {
    node = node || document;
    var arr = [];
    arr.push.apply( arr, node.querySelectorAll( selector ) );
    return arr;
}
```







封装一个each 方法

```javascript
  function isArrayLike ( array ) {
        
        var length = array && array.length;

        return typeof length === 'number' && length >= 0;

    }
    
    function each ( array, callback ) {
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
```



最终版  

```javascript
 function isArrayLike ( array ) {
        
        var length = array && array.length;

        return typeof length === 'number' && length >= 0;

    }
    
    function each ( array, callback ) {
        var i, k;
        if ( isArrayLike( array ) ) {
            // 使用 for 循环
            for ( i= 0; i < array.length; i++ ) {
                if( callback.call( array[ i ], i, array[ i ] ) === false ) break;
                // if( callback.apply( array[ i ],[ i, array[ i ]] ) === false ) break;
            }
        } else {
            // 使用 for-in 循环
            for ( k in array ) {
                if( callback.call( array[ i ], k , array[ k ] ) === false ) break;
            }
        }
        return array; 
    }

```



封装map  

```javascript
  function isArrayLike ( array ) {
        
        var length = array && array.length;

        return typeof length === 'number' && length >= 0;

    }
    
    function map ( array, callback ) {
        var i, k,
            res = [],
            tmp;
        if ( isArrayLike( array ) ) {
            // 使用 for 循环
            for ( i= 0; i < array.length; i++ ) {
                tmp = callback( array[ i ], i );
                if ( tmp !== undefined ) {
                    res.push( tmp );
                }
            }
        } else {
            // 使用 for-in 循环
            for ( k in array ) {
                tmp = callback( array[ k ], k );
                if ( tmp !== undefined ) {
                    res.push( tmp );
                }
            }
        }
        return res; 
    }


    var arr = [ 1,2,3,4,5,6,7,8,9,0];

    var array = map( arr, function ( v ) {
        if ( v % 2 == 0 ) {
            return v;
        }
    });

    console.log( array );

```





案例 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
        <input type="checkbox"> 测试数据<br>
        <input type="checkbox"> 测试数据<br>
        <input type="checkbox"> 测试数据<br>
        <input type="checkbox"> 测试数据<br>
        <input type="checkbox"> 测试数据<br>
        <input type="checkbox"> 测试数据<br>
        <input type="checkbox"> 测试数据<br>
        <input type="checkbox"> 测试数据<br>
    </div>
    <hr>
    <input type="button" value="全选" id="selectAll">
    <input type="button" value="全不选" id="noSelect">
    <input type="button" value="反选" id="select">
</body>
<script>
    function isArrayLike ( array ) {
        
        var length = array && array.length;

        return typeof length === 'number' && length >= 0;

    }
    
    function each ( array, callback ) {
        var i, k;
        if ( isArrayLike( array ) ) {
            // 使用 for 循环
            for ( i= 0; i < array.length; i++ ) {
                if( callback.call( array[ i ], i, array[ i ] ) === false ) break;
            }
        } else {
            // 使用 for-in 循环
            for ( k in array ) {
                if( callback.call( array[ i ], k , array[ k ] ) === false ) break;
            }
        }
        return array; 
    }


     function jiely( selector ) {
        var arr = { length: 0 };
        // 获取元素
        var list = document.querySelectorAll( selector );

        // 将 list 中的元素加入到 arr 中
        [].push.apply( arr, list );

        // 增加方法
        arr.each = function ( callback ) {
            each( arr, callback );
        };
        return arr;
    }


    // 代码
    jiely( '#selectAll' )[ 0 ].onclick = function () {
        jiely( 'div > input' ).each(function () {
            this.checked = true;
        });
    };
    jiely( '#noSelect' )[ 0 ].onclick = function () {
        jiely( 'div > input' ).each(function () {
            this.checked = false;
        });
    };
    jiely( '#select' )[ 0 ].onclick = function () {
        jiely( 'div > input' ).each(function () {
            this.checked = !this.checked;
        });
    };
</script>
</html>
```







css操作封装 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

    <div>aaa</div>
    <div>bbb</div>
    <div>ccc</div>
    <script>
        //   $('div').css('color','red')

        (function (global) {
            global.$ = global.jQuery = jQuery

            function jQuery(selector) {
                return new F(selector)
            }

            function F(selector) {
                var domments = document.querySelectorAll(selector)
                this.elements = domments
            }

            F.prototype.css = function (name, val) {
                for (var i = 0; i < this.elements.length; i++) {
                    this.elements[i].style[name] = val
                }
            }





        })(window)

        $('div').css('color', 'red')

        
        $('div').css('background', 'green')

         $('div').css('fontSize', '50px')
    </script>
</body>

</html>
```

