$(function (){

    $("input").hover(
        function(){
            $(this).next("div").show(700);
    }, 
        function(){
            $(this).next("div").hide(700);
    });

    $("button").on("click",function(event){
        event.preventDefault();
        $('label div').show(700);
    });

});