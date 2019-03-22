$(function(){

  if (localStorage.getItem('sectionQA')) {

    var sectionQA = localStorage.getItem('sectionQA');

    var html = $("#content-template").html();

    var tmpl = _.template(html);

    var content = tmpl(sectionQA);

    $('.content').append(content);
  }

localStorage.clear();

});