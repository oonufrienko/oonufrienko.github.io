$(function() {

    var $tabs = $('.tabs ul li');
    $('.tabs ul li:first').addClass('active');

    $tabs.on('click', function(e){
        var $tabItem = $('.active');
        $tabItem.removeClass( "active" );

        var $tabName = $(this).text();

        if ( $tabName === "Zebras") {
            $('div.content-zebra').addClass('active');
        } else if ( $tabName === "Elephant") {
            $('div.content-elephant').addClass('active');
        } else {
            $('div.content-rhino').addClass('active');
        }

        $(this).addClass('active');

    });

});
