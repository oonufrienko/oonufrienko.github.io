'use strict'

$(function(){

  if (localStorage.getItem('sectionQA')) {

    var sectionQA = localStorage.getItem('sectionQA');

    var html = $("#content-template").html();

    var tmpl = _.template(html);

    var content = tmpl(sectionQA);

    $('.content').append(content);

    $('.btn').on('click', function(){
      debugger;
      // read the correct answers from the localStorage
        var correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'));
        var n = 3;
        var sectionNumber = -1;
        var correctAnswer = -1;
        var result = {
          0: undefined,
          1: undefined,
          2: undefined
        };

        $( '.answers li input' ).each(function( index ) {
          if ($(this).prop('checked')) {
            debugger;
            console.log( 'index =', index );
            sectionNumber = parseInt(index / n);
            correctAnswer = index - (sectionNumber * n);
            if (correctAnswers.answerId[sectionNumber] === correctAnswer) {
              result[sectionNumber] = true;
            } else {
              result[sectionNumber] = false;
            }
          }
        });

        showModal(result);

    });


    function showModal() {
      
    }

}





// localStorage.clear();

});