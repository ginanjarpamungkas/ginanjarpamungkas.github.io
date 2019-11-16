window.console = window.console || (function() {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function() {};
    return c;
})();
jQuery(document).ready(function() {
    var styles = ' \
    <div class="switcher__color-inner"> \
    <span>Color Schemes <a href="#"></a></span> \
    <div class="content"> \
    <div class="switcher__color-box"> \
    <ul class="color_schemes"> \
    <li><a id="color-1" class="styleswitch color-1"></a></li> \
    <li><a id="color-8" class="styleswitch color-8"></a></li> \
    <li><a id="color-2" class="styleswitch color-2"></a></li> \
    <li><a id="color-3" class="styleswitch color-3"></a></li> \
    <li><a id="color-4" class="styleswitch color-4"></a></li> \
    <li><a id="color-7" class="styleswitch color-7"></a></li> \
    <li><a id="color-5" class="styleswitch color-5"></a></li> \
    <li><a id="color-9" class="styleswitch color-9"></a></li> \
    <li><a id="color-6" class="styleswitch color-6"></a></li> \
    </ul> </div> \
    </div> \
    ';
    jQuery(".switcher__color").prepend(styles);
});
jQuery(document).ready(function() {
    var cookieName = 'color-1';
    function changeLayout(layout) {
        jQuery.cookie(cookieName, layout);
        jQuery('head link[id=skins]').attr('href', 'static/css/' + layout + '.css');
    }
    if (jQuery.cookie(cookieName)) {
        changeLayout(jQuery.cookie(cookieName));
    }
    jQuery("#color-1").click(function() {
        changeLayout('color-1');
    });
    jQuery("#color-2").click(function() {
        changeLayout('color-2');
    });
    jQuery("#color-3").click(function() {
        changeLayout('color-3');
    });
    jQuery("#color-4").click(function() {
        changeLayout('color-4');
    });
    jQuery("#color-5").click(function() {
        changeLayout('color-5');
    });
    jQuery("#color-6").click(function() {
        changeLayout('color-6');
    });
    jQuery("#color-7").click(function() {
        changeLayout('color-7');
    });
    jQuery("#color-8").click(function() {
        changeLayout('color-8');
    });
    jQuery("#color-9").click(function() {
        changeLayout('color-9');
    });
});
jQuery(document).ready(function() {
    jQuery('.switcher__color').animate({
        left: '-200px'
    });
    jQuery('.switcher__color span a').click(function(e) {
        e.preventDefault();
        var div = jQuery('.switcher__color');
        if (div.css('left') === '-200px') {
            jQuery('.switcher__color').animate({
                left: '0px'
            });
        } else {
            jQuery('.switcher__color').animate({
                left: '-200px'
            });
        }
    })
});