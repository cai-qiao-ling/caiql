var i = 0;
var count = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count5 = 0;
// 点击切换弹幕效果
$('.danmuIcon').click(function() {
        i++;

        var don = document.getElementById("don");
        var doff = document.getElementById("doff");
        if (i % 2 != 0) {
            $('#don').addClass('off');
            $('#don').removeClass('on');
            $('#doff').addClass('on');
            $('#doff').removeClass('off');
        } else {
            $('#don').addClass('on');
            $('#don').removeClass('off');
            $('#doff').addClass('off');
            $('#doff').removeClass('on');
        }
        console.log(i);


    })
    // 点击展开弹幕
$('.hidden1').click(function() {
    count++;
    if (count % 2 != 0) {
        $('#open1').css("display", "none");
        $('#hid1').css("display", "block");
        $('.h1').css("display", "flex");

    } else {
        $('#open1').css("display", "block");
        $('#hid1').css("display", "none");
        $('.h1').css("display", "none");
    }
    console.log(count);


})
$('.hidden2').click(function() {
    count1++;
    if (count1 % 2 != 0) {
        $('#open2').css("display", "none");
        $('#hid2').css("display", "block");
        $('.h2').css("display", "flex");

    } else {
        $('#open2').css("display", "block");
        $('#hid2').css("display", "none");
        $('.h2').css("display", "none");
    }
    console.log(count1);


})
$('.hidden3').click(function() {
    count2++;
    if (count2 % 2 != 0) {
        $('#open3').css("display", "none");
        $('#hid3').css("display", "block");
        $('.h3').css("display", "flex");

    } else {
        $('#open3').css("display", "block");
        $('#hid3').css("display", "none");
        $('.h3').css("display", "none");
    }
    console.log(count2);


})
$('.hidden4').click(function() {
    count5++;
    if (count5 % 2 != 0) {
        $('#open4').css("display", "none");
        $('#hid4').css("display", "block");
        $('.h4').css("display", "flex");

    } else {
        $('#open4').css("display", "block");
        $('#hid4').css("display", "none");
        $('.h4').css("display", "none");
    }
    console.log(count5);


})
$('#switch').click(function() {
    count3++;
    if (count3 % 2 != 0) {

        $('#switch_ball').css("left", "33px");
        $('#switch').css("background-color", "#00aeec");


    } else {

        $('#switch_ball').css("left", "2px");
        $('#switch').css("background-color", "#71757b");
    }
    console.log(count3);


})
$('.page1').click(function() {
    $('.page1').css({
        backgroundColor: '#fff',
    })
    $('.page2').css({
        backgroundColor: 'transparent',
    })
    $('.playing2').css({
        display: 'none'
    })
    $('.playing1').css({
        display: 'block'
    })
})
$('.page2').click(function() {
    $('.page2').css({
        backgroundColor: '#fff',
    })
    $('.page1').css({
        backgroundColor: 'transparent',
    })
    $('.playing1').css({
        display: 'none'
    })
    $('.playing2').css({
        display: 'block'
    })
})

$(window).scroll(function() {
    var scollH = $(window).scrollTop();
    console.log(scollH);
    if (scollH == 0) {
        $('#wrap1').css("opacity", "0");
        $('#wrap2').css("display", "none");


    } else {
        $('#wrap1').css("opacity", "1");
        $('#wrap2').css("display", "flex");

    }
    if (scollH > 1000) {
        $('#myRelay').css({
            display: 'flex',


        })
    } else {
        $('#myRelay').css({
            display: 'none'

        })
    }

})