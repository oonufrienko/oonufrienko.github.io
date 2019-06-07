'use strict'

$(function() {

  $('.btn-search').on('click', function() {
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
      .done(function( data ) {
        // console.log(data);
        if (parseInt(data.totalHits) > 0) {
          // var items = [];
          var results = {
            items: []
          };
          $.each(data.hits, function( i, hit ) { 
            // console.log(hit.previewURL);
            results.items.push( "<img src='" + hit.previewURL + "'>" );
          });
          // debugger;
          var html = $('#content-template').html();
          var tmpl = _.template(html);
          var content = tmpl(results);
          // var content = tmpl({'items':['1','3','2']});
          
          $('.results-title').show();
          $('.search-results').append(content);
        }
        else {
          $('.results-title').show();
          $('.results-title').after('<p>No hits</p>');
        }
      });
    
    });

});