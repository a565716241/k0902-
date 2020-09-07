$('#header-btn').mouseover(function() {
    // alert(1)
    $('.header-search-list').css({
        display: 'block'
    })
    $('.header-search-list>div').mouseover(function() {
        $(this).css({
            backgroundColor: ''
        })
        $(this).addClass('current').siblings().removeClass('current')
    })


})

$('.header-search-list').mouseout(function() {
    // alert(1)
    $('.header-search-list').css({
        display: 'none'
    })
})

$('.nav-box-left>div').mouseover(function() {
    $(this).addClass('current2').siblings().removeClass('current2')
    var index = $(this).index()
    console.log(index)
    console.log(this)

    // $(this).children().css({
    //     backgroundPosition: ' '
    // })

    $(this).children().children().css({
        backgroundPosition: '0' + '-' + parseInt(index * 22) + 'px'
    })
})
$('.nav-box-left>div').mouseout(function() {
    $(this).removeClass('current2')
    var index = $(this).index()
    $(this).children().children().css({
        backgroundPosition: '-' + '23' + 'px' + ' ' + '-' + parseInt(index * 22) + 'px'
    })
})


var myIndex = 0; //小圆点初始的索引默认值为0
var count = 0 //初始化值     定义箭头点击的时候的初始化小圆点的值
var cirlceNum = 0 //初始化值   定义小圆点跟随变化值

var boxWidth = $('.nav-box-center').outerWidth()

var new_clone_li = $('.banner>li').eq(0).clone()
$('.banner').append(new_clone_li)
    //点击右边箭头实现滚动
$('.arrow-right').click(function() {
    //  alert(1)
    var leng = $('.banner>li').length


    if (count == leng - 1) {
        count = 0;

        //  $('ul').animate({  left:0},500)
        $('.banner').css({ 'left': 0 })



    }
    count++;
    var leftWidth = -count * boxWidth

    $('.banner').animate({ left: leftWidth }, 500)


})
$('.slider > li').eq(0).addClass('current3')

//点击左边箭头滚动
$('.arrow-left').click(function() {
    //  alert(1)
    var leng = $('.banner>li').length


    if (count == 0) {
        count = leng - 1;

        //  $('ul').animate({  left:0},500)
        $('.banner').css({ 'left': -count * boxWidth })



    }
    count--;
    var leftWidth = -count * boxWidth
    console.log(leftWidth)

    $('.banner').animate({ left: leftWidth }, 500)
})

$('.slider>li').click(function() {
    $(this).addClass('current3').siblings('.slider>li').removeClass('current3')

    //给每个小圆点动态生成自定义属性
    myIndex = $(this).index()
        //判断当前是哪个小圆点高亮
    count = myIndex;
    cirlceNum = myIndex
    var leftWidth = -myIndex * boxWidth

    $('.banner').animate({ left: leftWidth }, 500)


})



var timerId = setInterval(function() {
    //具体怎么移动图片（从左往右）
    $('.arrow-right').click() //调用执行右箭头的点击事件
        // input.focus()


}, 2000)



function changeImg(index) {
    $('.slider>li').each(function(index, ele) {
        console.log($('.slider>li'))
        $('.slider>li').addClass('current3').siblings().removeClass('current3')
        $('.slider>li').eq(index).addClass('current3').siblings().removeClass('current3')

        // ol_lis[index].className = 'current'
    })


}