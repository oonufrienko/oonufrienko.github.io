'use strict'

document.addEventListener("DOMContentLoaded", function () {

  var searchButton = document.getElementsByClassName('btn-search')[0];
  searchButton.addEventListener('click', loadData);

  var searchField = document.getElementsByClassName('query-field')[0];
  searchField.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      loadData();
    }
  });

});
