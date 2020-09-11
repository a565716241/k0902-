let middlefn1 = function (options) {
    return function (req, res, next) {
        if (options.a == 1) {
            //    next()
            res.send('没登录1')
        } else {
            //    req.name='登录了1'
            next()
            //    next('登录了1')

        }



    }
}

let middlefn2 = function (options) {
    return function (req, res, next) {
        if (options.b == 1) {
            //    next()
            res.send('没登录2')
        } else {
            next('登录了2')

        }
    }
}

// module.exports={
//     middlefn1:middlefn1,
//     middlefn2:middlefn2
// }

module.exports = {
    middlefn1,
    middlefn2
}