'use strict'

$(function() {

  function renderData( data ) {
    if (parseInt(data.total) > 0) {
      var results = {
        items: []
      };
      $.each(data.results, function( i, hit ) { 
        results.items.push( "<img src='" + hit.urls.thumb + "'>" );
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

    var URL = 'https://api.unsplash.com/search/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0&page=1&query=' + queryString + '&per_page=20'

    $.ajax({
      url: URL
    }).done( function (data) {renderData(data);} );
  }

  $('.btn-search').on('click', queryHandler);
  $('.query-field').on('keypress', function(e) {
    if(e.which === 13) {
      queryHandler();
    }
  });

});