'use strict'

$(function(){

  if (localStorage.getItem('sectionQA')) {

    var sectionQA = localStorage.getItem('sectionQA');

    var html = $('#content-template').html();

    var tmpl = _.template(html);
    var content = tmpl(sectionQA);
    
    $('.content').append(content);
    
    $('.btn').on('click', function(){
      var correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'));
      var n = 3;
      var sectionNumber = -1;
      var correctAnswer = -1;
      var results = {
        id: [ 'вы не отметили', 'вы не отметили', 'вы не отметили' ]
      };

      $( '.answers li input' ).each(function( index ) {
        if ($(this).prop('checked')) {
          sectionNumber = parseInt(index / n);
          correctAnswer = index - (sectionNumber * n);
          if (correctAnswers.answerId[sectionNumber] === correctAnswer) {
            results.id[sectionNumber] = 'верно';
          } else {
            results.id[sectionNumber] = 'не верно';
          }
        }
      });

      showModal(results);

      $('.result-modal .btn-close').on('click', function () {
        hideModal();
      });

    });


    function showModal(result_obj) {

      $('.content').after('<div class="overlay"></div>');
      $('.overlay').after('<div class="result-modal"></div>');

      var htmlAnswerTemplate = $('#answers').html();

      var tmplFunction = _.template(htmlAnswerTemplate);

      var resultModalHTML = tmplFunction(result_obj);

      $('.result-modal').append(resultModalHTML);

      $('.result-modal').show();

    }

    function hideModal() {
      $('div').remove('.overlay');
      $('div').remove('.result-modal');
    }

}

// localStorage.clear();

});