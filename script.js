$(function () {
let fontStyleLinks = $('.fontStyleLink');
let fontSizeLinks = $('.fontSizeLink');

$('.fontStyleBurger').click(function () {
    $('.fontStyleMenu, .fontStyleBurger').toggleClass('active');
})

$('.fontSizeBurger').click(function () {
    $('.fontSizeMenu, .fontSizeBurger').toggleClass('active');
})




$('.fontStyleLink').each(function (index, element) {

    $(element).click(() => {
        text = $(this).text();
        $('p').css({
            fontFamily: text
        });
        $('.fontStyleMenu, .fontStyleBurger').toggleClass('active');
    })



    })

    
    $('.fontSizeLink').each(function (index, element) {
        $(element).click(() => {
            size = $(this).text();
            $('p').css({
                fontSize: size
            });
            $('.fontSizeMenu, .fontSizeBurger').toggleClass('active');
        })



})














})











