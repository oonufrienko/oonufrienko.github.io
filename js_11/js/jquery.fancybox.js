(function($){

    $.fn.fancybox = function () {
      
      var $link = this;
      var $body = $('body');
      var $overlay;
      var $modal;
      
      function showModal(e) {
        var href = $link.attr('href');
        $overlay = $('<div class="fancybox-overlay">');
        $modal = $('<div class="fancybox-modal"><img src="' + href + '"></div>');

        e.preventDefault();

        $body.append($overlay);
        $body.append($modal);
        
        $overlay.one('click', hideModal);

      };

      function hideModal() {
            
        $overlay.remove();
        $modal.remove();
      };

      $link.on('click', showModal);

      return this;
    }


})(jQuery);