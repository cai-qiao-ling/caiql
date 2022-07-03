$('.arrow_right').click(function() {
    $('.items').css({
        transform: 'translateX(-1180px)'
    })
})
$('.arrow_left').click(function() {
    $('.items').css({
        transform: 'translateX(0px)'
    })
})

$(window).scroll(function() {
    var scollH = $(window).scrollTop();
    console.log(scollH);
    if (scollH > 50) {
        $('.m_header').css({
            backgroundColor: '#fff',
        })
        $('.h-gameicon').find("path").css({
            fill: '#0094ff'
        })
        $('.m_header').find("span").css({
            color: '#000'
        })
    } else {
        $('.m_header').css({
            backgroundColor: 'transparent',
        })
        $('.h-gameicon').find("path").css({
            fill: '#fff'
        })
        $('.m_header').find("span").css({
            color: '#fff'
        })
    }


})