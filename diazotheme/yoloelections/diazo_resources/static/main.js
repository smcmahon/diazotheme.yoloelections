/* JavaScript for the 'ICustomTheme' Plone browser layer */

/*jslint white:false, onevar:true, undef:true, nomen:true, eqeqeq:true, plusplus:true, bitwise:true, regexp:true, newcap:true, immed:true, strict:false, browser:true */
/*global jQuery:false, document:false, window:false, location:false */

jQuery(function ($) {
    var nav_viz = false;

    $('#navicon').click(function () {
        var have_col2 = $('#portal-column-two').length > 0;

        if (nav_viz) {
            $('#portal-column-one').hide();
            if (have_col2) {
                $('#portal-column-content').attr('class', 'cell width-12 position-0');
            } else {
                $('#portal-column-content').attr('class', 'cell width-16 position-0');
            }
        } else {
            if (have_col2) {
                $('#portal-column-content').attr('class', 'cell width-8 position-4');
            } else {
                $('#portal-column-content').attr('class', 'cell width-12 position-4');
            }
            $('#portal-column-one').animate({width:'toggle'});
        }
        nav_viz = ! nav_viz;
    });
});