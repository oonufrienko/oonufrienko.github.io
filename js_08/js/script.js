$(function (){

    $("input").hover(
        function(){
            $(this).next("div").removeClass( "hide-popup" );
    }, 
        function(){
            $(this).next("div").addClass( "hide-popup" );
    });

    $("button").on("click",function(){
        $('label div').removeClass( "hide-popup" );
    });

});