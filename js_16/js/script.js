'use strict'

function loadData() {
  // Begin. Clear the result section. show/hide Result word
  var ul = document.getElementsByTagName('ul')[0];
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  // The solution isn't optimize. 
  // Optimize solution is to add <ul> section in renderData function, then remove it here. 
  // Not in loop but at once if it exists.

  var resultWord = document.getElementsByClassName('results-title')[0];  
  resultWord.style.display = 'none';
  if ( resultWord.firstElementChild ) {
    resultWord.removeChild(resultWord.firstElementChild);
  }
  // End of clearing result section 

  var queryString = document.getElementsByClassName('query-field')[0].value;

  if ( !queryString ) { 
    var resultWord = document.getElementsByClassName('results-title')[0];
    resultWord.style.display = 'block';

    if ( !resultWord.firstElementChild ) {
      var resultNoHits = document.createElement('p');
      resultNoHits.innerHTML = 'No hits'
      resultWord.appendChild(resultNoHits);
    }

    return; 
  }

  var xhr = new XMLHttpRequest();
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
  var resultWord = document.getElementsByClassName('results-title')[0];
  resultWord.style.display = 'block';
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
