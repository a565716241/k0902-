$(function() {
    $('.tab-text').on('mouseover', function() {
        $(this).addClass('current').siblings().removeClass('current')

        var index = $(this).index()
            // $('.tab-body').eq(index).show().siblings().hide()
        if (index == 0) {
            $('.tab-body').eq(0).show()
            $('.tab-body').eq(1).hide()

        } else {
            $('.tab-body').eq(1).show()
            $('.tab-body').eq(0).hide()
        }
    })
    $('.nav_list>ul>li').on('mouseover', function() {
        $('.sencond-list-box').show()
        var index = $(this).index()
        $('.nav-second-list').eq(index).show().siblings().hide()
    })
    $('.nav_list>ul>li').on('mouseout', function() {
        $('.sencond-list-box').hide()
    })

    $('.arrow-left').on('click', function() {
        $('.banner>ul>li>a').eq(3).css({
            'zIndex': '2',
        })
    })
    $('.arrow-right').on('click', function() {
        alert(1)
    })
})