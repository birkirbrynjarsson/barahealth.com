jQuery(document).ready(function () {

    jQuery(function () {
        jQuery(".link-product, .small-link-product")
            .find("span")
            .hide()
            .end()
            .hover(function () {
                jQuery(this).find("span").stop(true, true).fadeIn();
            }, function () {
                jQuery(this).find("span").stop(true, true).fadeOut();
            });
    });

});