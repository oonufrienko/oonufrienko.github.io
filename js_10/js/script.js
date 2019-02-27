$(function(){
   
    // 
    var something = $('li.has-submenu').hover( function() {

        $('ul.submenu > li').slideDown("fast");
        $(this).children().toggleClass('changed');
        // debugger;
        // var a = $(this);
        // .children()
        // $(this).off('mouseleave');
        // 
        var domElement = $( this ).get(0);
        $( "span:first" ).text( "Hovered on - " + domElement.nodeName );

    }, function() {
    
        // var t = $(this);
        // debugger;
        var domElement = $( this ).get(0);
        $( "span:first" ).text( "Hovered out - " + domElement.nodeName );
        $('ul.submenu > li').slideUp("fast");
        $(this).children().toggleClass('changed');
        // children().
    });
    var i = 7;

});