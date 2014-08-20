/* JavaScript for the 'ICustomTheme' Plone browser layer */

/*jslint white:false, onevar:true, undef:true, nomen:true, eqeqeq:true, plusplus:true, bitwise:true, regexp:true, newcap:true, immed:true, strict:false, browser:true */
/*global jQuery:false, document:false, window:false, location:false */

jQuery(function ($) {
    var nav_viz = false;

    $('#navicon').click(function (event) {
        var have_col2 = $('#portal-column-two').length > 0;

        event.preventDefault();
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
            $('#portal-column-one').animate({width:'show'});
        }
        nav_viz = ! nav_viz;

    });

    // var currentImage;

    $(".accordion").tabs(".accordion dd", {tabs: 'dt', effect: 'slide'}).addClass('active');

    // $('.portaltype-election_result area').removeAttr('title');

    // $('.portaltype-election_result map').after('<div class="tooltip">tooltip</div>');

    // $(".portaltype-election_result area").tooltip({
    //     relative: false,
    //     position: "center right",
    //     opacity: 1.0,
    //     tip:'.tooltip',
    //     delay:0,
    //     onBeforeShow: function(e) {
    //         // fill the tooltip with data from the precinct breakdown
    //         var i, row;
    //         var trow = $(this.getTrigger().attr('href'));
    //         var trc = trow.children().clone();
    //         var thead = trow.prevAll('.btitle').first();
    //         var thc = thead.children().clone();
    //         var tip = this.getTip();
    //         var table = $('<table />');

    //         tip.empty().append(table);
    //         for (i = 0; i < thc.length; i++) {
    //             if (i != 1) {
    //                 row = $('<tr />');
    //                 if (i === 0) {
    //                     row.addClass('ptitle');
    //                 }
    //                 row.append(thc[i]);
    //                 row.append(trc[i]);
    //                 table.append(row);
    //             }
    //         }

    //     }
    //     });


    // // currentImage = $('img.pmap:first');
    // // $('img.pmap').mouseenter(function(){
    // //     currentImage = this;
    // // });

    $('.portaltype-election_result area').each(function () {
        var jqt = $(this),
            title = jqt.attr('alt');
        if (title) {
            jqt.attr('title', title);
        }
    });


});