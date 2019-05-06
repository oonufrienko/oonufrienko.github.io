'use strict'

$(function(){

  if (!localStorage.getItem('questions')) { return; }

    var questions = JSON.parse(localStorage.getItem('questions'));

    var html = $('#content-template').html();

    var tmpl = _.template(html);

    var content = tmpl(questions);
    
    $('.content').append(content);
    
    $('.btn').on('click', function(){
      var sectionNumber = -1;
      var answerNumber = -1;
      var results = {
        id: [ 'вы не отметили', 'вы не отметили', 'вы не отметили' ]
      };

      $( '.answers li input' ).each(function( index ) {
        if ($(this).prop('checked')) {
          sectionNumber = parseInt(index / questions.length);
          answerNumber = index - (sectionNumber * questions.length);

          if (questions[sectionNumber].answers[answerNumber].isCorrect) {
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
      $( '.answers li input' ).each(function( index ) {
        if ($(this).prop('checked')) {
          $(this).prop('checked', false);
        }
      });
    }

// localStorage.clear();

});