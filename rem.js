$(function () {
    autoWidth();
    $(window).resize(function () {
        autoWidth();
    });

    function autoWidth() {
        $('html')[0].style.fontSize = $(window).width() / 640 * 200 + 'px';
    }
})