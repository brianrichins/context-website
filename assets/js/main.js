(function($) {
    const $window = $(window),
        $body = $('body');

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 10);
    });

    // Scrolly - smooth transition to clicked anchor tags
    $('.scrolly').scrolly({speed: 500});
})(jQuery);