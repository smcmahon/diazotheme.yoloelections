/* JavaScript for the 'ICustomTheme' Plone browser layer */

/*jslint white:false, onevar:true, undef:true, nomen:true, eqeqeq:true, plusplus:true, bitwise:true, regexp:true, newcap:true, immed:true, strict:false, browser:true */
/*global jQuery:false, document:false, window:false, location:false */

jQuery(function ($) {
    var nav_viz = false;

    $('#navicon').click(function () {
        if (nav_viz) {
            $('#portal-column-content').attr('class', 'cell width-16 position-0');
            $('#portal-column-one').hide();
        } else {
            $('#portal-column-content').attr('class', 'cell width-12 position-5');
            $('#portal-column-one').show();
        }
        nav_viz = ! nav_viz;
    });
});