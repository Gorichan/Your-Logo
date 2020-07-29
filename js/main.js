/* $(document).ready(function () {



    $('ul.menu a[href^="#"').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('ul.menu a[href^="#"').css({
            'color': '#212121'
        });
        $(this).css({
            'color': '#004bee'
        });
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0)
        $('#toTop').fadeIn();
        else
        $('#toTop').fadeOut();
    });
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    




}) */