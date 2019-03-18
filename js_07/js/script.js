$(function() {

    var $tabs = $('.tabs ul li');
    var $tabContent = $('div.content');
    $tabs.eq(0).addClass('active');
    $tabContent.eq(0).addClass('active');
  
    $tabs.on('click', function(e){
      $tabs.removeClass('active');
      $tabContent.removeClass('active');
  
      var activeNumber = $tabs.index($(this));
  
      $tabs.eq(activeNumber).addClass('active');
      $tabContent.eq(activeNumber).addClass('active');
         
  
      });
  
  });
  