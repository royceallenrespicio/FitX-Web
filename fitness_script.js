$(document).ready(function () {
    $('.navbar a').on('click', function (e) {
        e.preventDefault();
        const target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 800);
    });

    $('#discover-features-button').on('click', function (e) {
        e.preventDefault();
        const target = $('#features');
        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 800);
    });

    let currentImageIndex = 0;
    const images = ['images/FitX-BG1.jpg', 'images/FitX-BG2.jpg', 'images/FitX-BG3.png'];

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        $('.hero').css('background-image', `url(${images[currentImageIndex]})`);
    }

    setInterval(changeImage, 3000);

    function checkFadeIn() {
        $('.fade-in').each(function () {
            const elementTop = $(this).offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom - 100) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', checkFadeIn);
    checkFadeIn();
});