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
    $('.scrolly').scrolly();
})(jQuery);

// add toggle for the contact form section
document.getElementById("toggleForm").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("contactForm").classList.toggle("open");
});