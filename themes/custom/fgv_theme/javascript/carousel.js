(function ($) {
    Drupal.behaviors.carousel = {
        attach: function (context) {
            const banner = $(".css-banner-home", context);

            if (banner.length != 0) {
                banner.find(".view-content").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: $(".carousel-prev"),
                    nextArrow: $(".carousel-next"),
                    autoplay: true,
                    autoplaySpeed: 3000,
                });
            }
        }
    }
})(jQuery);