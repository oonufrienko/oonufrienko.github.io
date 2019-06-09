'use strict'

function loadData() {
  // clear the result section. show/hide Result word
  var ul = document.getElementsByTagName('ul')[0];
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  //  I think that's solution is not optimize. Optimize solution is to add <ul> section in renderData function, then remove it. Not in loop but at once.
  var xhr = new XMLHttpRequest();
  var queryString = document.getElementsByClassName('query-field')[0].value;

  if ( !queryString ) { return; }

  var URL = 'https://pixabay.com/api?key=12682041-c02212121d8f52a952705a821&q=' + queryString + '&image_type=photo';

  xhr.open('GET', URL);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) { return; }

    if (xhr.status != 200) {
      // show the error. Remake it, to output in result section
      alert( xhr.status + ': ' + xhr.statusText );
    } else {
        var items = JSON.parse(xhr.responseText);
        renderData(items);
    }
  }
}

function renderData(items) {
  var resultSection = document.getElementsByClassName('search-results')[0];
  var list = resultSection.getElementsByTagName('ul')[0];

  items.hits.forEach(function(item) {
    var li = list.appendChild(document.createElement('li'));
    var img = document.createElement('img');
    img.src = item.previewURL;
    li.appendChild(img);
  });
}

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
