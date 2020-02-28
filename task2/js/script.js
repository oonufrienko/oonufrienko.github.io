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
  if (resultWord.firstElementChild) {
    resultWord.removeChild(resultWord.firstElementChild);
  }
  // End of clearing result section 

  var queryString = document.getElementsByClassName('query-field')[0].value;

  if (!queryString) {
    toggleVisibilityNoHitsSection();
    return; 
  }

  var xhr = new XMLHttpRequest();
  var URL = 'https://api.unsplash.com/search/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0&page=1&query=' + queryString + '&per_page=20'

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
  
  if (items.total < 1) { 
    toggleVisibilityNoHitsSection();
    return; 
  }

  items.results.forEach(function(item) {
    var li = list.appendChild(document.createElement('li'));
    var img = document.createElement('img');
    img.src = item.urls.thumb;
    li.appendChild(img);
  });
  var resultWord = document.getElementsByClassName('results-title')[0];
  resultWord.style.display = 'block';
}

function toggleVisibilityNoHitsSection() {
  var resultWord = document.getElementsByClassName('results-title')[0];
  resultWord.style.display = 'block';

  if (!resultWord.firstElementChild) {
    var resultNoHits = document.createElement('p');
    resultNoHits.innerHTML = 'No hits'
    resultWord.appendChild(resultNoHits);
  }
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
