$(function() {
  
  var html = $('#test').html();
  var articles = [
      {
        title: 'Article 1',
        content: 'Quick tip: Embedding scripts in your page that have a unknown content-type (such is the case here – the browser doesn’t know how to execute a text/html script) are simply ignored by the browser – and by search engines and screenreaders.'
    },
      {
        title: 'Article 2',
        content: 'It’s a perfect cloaking device for sneaking templates into your page. I like to use this technique for quick-and-dirty cases where I just need a little template or two on the page and want something light and fast.'
    },
      {
        title: 'Article 3',
        content: 'and you would use it from script like so: <br \/><br \/> var results = document.getElementById("results"); <br \/> results.innerHTML = tmpl("item_tmpl", dataObject); <br \/>'
    }
  ];

  var content = tmpl(html, {
      data: articles
    });

  $('body').append(content);

});