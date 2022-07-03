$('.dynmic').mouseover(function() {
    $('.cursor').css({
        left: '64px',
        width: '50px'
    })
})
$('.tou').mouseover(function() {
    $('.cursor').css({
        left: '132px',
        width: '50px'
    })
})
$('.list').mouseover(function() {
    $('.cursor').css({
        left: '198px',
        width: '93px'
    })
})
$('.love').mouseover(function() {
    $('.cursor').css({
        left: '305px',
        width: '50px'
    })
})
$('.ding').mouseover(function() {
    $('.cursor').css({
        left: '376px',
        width: '50px'
    })
})
$('.set').mouseover(function() {
    $('.cursor').css({
        left: '438px',
        width: '50px'
    })
})
$('.home').mouseover(function() {
    $('.cursor').css({
        left: '0px',
        width: '50px'
    })
})
$('.t1').click(function() {
    $('.t1').css({
        borderBottom: '2px solid #00a1d6',
    })
    $('.t2').css({
        borderBottom: 'none',
    })
})
$('.t2').click(function() {
    $('.t2').css({
        borderBottom: '2px solid #00a1d6',
    })
    $('.t1').css({
        borderBottom: 'none',
    })
})
$('.l1').click(function() {
    $('.be_cursor_box').css({
        transform: 'translateX(0px)',
    })
})
$('.l2').click(function() {
    $('.be_cursor_box').css({
        transform: 'translateX(63px)',
    })
})
$('.l3').click(function() {
    $('.be_cursor_box').css({
        transform: 'translateX(126px)',
    })
})
$('.asideimg').click(function() {
    $('.asideimg').css({
        transform: 'translateY(-1000px)',
        backgroundPosition: '-466px -40px'
    })
})

$(window).scroll(function() {
    var scollH = $(window).scrollTop();
    console.log(scollH);
    if (scollH > 0) {
        $('.asideimg').css({
            backgroundPosition: ' -40px -40px',
            transform: 'translateY(0px)',
        });



    }


})

$(window).scroll(function() {
    var scollH = $(window).scrollTop();
    console.log(scollH);
    if (scollH > 350) {
        $('.navop').css({
            display: 'flex'
        })
    } else {
        $('.navop').css({
            display: 'none'
        })
    }


})