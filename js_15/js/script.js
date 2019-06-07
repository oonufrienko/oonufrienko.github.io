'use strict'

$(function() {

  function renderData( data ) {
    if (parseInt(data.totalHits) > 0) {
      var results = {
        items: []
      };
      $.each(data.hits, function( i, hit ) { 
        results.items.push( "<img src='" + hit.previewURL + "'>" );
      });
      var html = $('#content-template').html();
      var tmpl = _.template(html);
      var content = tmpl(results);
      
      $('.results-title').show();
      $('.search-results').append(content);
    }
    else {
      $('.results-title').show();
      $('.results-title').after('<p>No hits</p>');
    }
  }

  function queryHandler() {
    var queryString = $('.query-field').val();
    $('.results-title').hide();
    $('p').remove(":contains('No hits')");
    $('.search-results ul').remove();

    if ( !queryString ) { 

      $('.results-title').show();
      $('.results-title').after('<p>No hits</p>'); 

      return; 
    }
      
    var URL = 'https://pixabay.com/api?key=12682041-c02212121d8f52a952705a821&q=' + queryString + '&image_type=photo';

    $.ajax({
        url: URL
      })
      .done( function (data) {renderData(data);} );
  }

  $('.btn-search').on('click', queryHandler);
  $('.query-field').on('keypress', function(e) {
    if(e.which === 13) {
      queryHandler();
    }
});

});