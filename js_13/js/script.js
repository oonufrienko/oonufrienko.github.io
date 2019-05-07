'use strict'

$(function() {

  if ( !localStorage.getItem('questions') ) { return; }

  var questions = JSON.parse( localStorage.getItem('questions') );
  var html = $('#content-template').html();
  var tmpl = _.template(html);
  var content = tmpl(questions);
    
  $('.content').append(content);
    
  $('.btn').on('click', function() {
    showModal( defineResults('.answers li input') );

    $('.result-modal .btn-close').on('click', function () {
      hideModal();
    });

  });
    
  function defineResults(listElementSelector) {
    var sectionNumber = -1;
    var answerIndex = -1;
    var resultObj = {
      answer: [ 'вы не отметили', 'вы не отметили', 'вы не отметили' ]
    };
  
    $( listElementSelector ).each(function( liIndex ) {
      if ( $(this).prop('checked') ) {
        sectionNumber = parseInt(liIndex / questions.length);
        answerIndex = liIndex - (sectionNumber * questions.length);
  
        resultObj.answer[sectionNumber] = questions[sectionNumber].answers[answerIndex].isCorrect
        ? 'верно'
        : 'не верно';
        
      }
    });

    return resultObj;
  }

  function showModal(resultObj) {
    $('.content').after('<div class="overlay"></div>');
    $('.overlay').after('<div class="result-modal"></div>');

    var htmlAnswerTemplate = $('#answers').html();
    var tmplFunction = _.template(htmlAnswerTemplate);
    var resultModalHTML = tmplFunction(resultObj);

    $('.result-modal').append(resultModalHTML);
    $('.result-modal').show();
  }

  function hideModal() {
    $('div').remove('.overlay');
    $('div').remove('.result-modal');
    $( '.answers li input' ).each(function( liIndex ) {
      if ($(this).prop('checked')) {
        $(this).prop('checked', false);
      }
    });
  }

});