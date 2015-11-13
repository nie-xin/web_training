var listAjax = (function() {
  var _url, _btn;

  var _getURL = function(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(xhr.statusText));
        }
      };

      xhr.onerror = function() {
        reject(new Error(xhr.statusText));
      };

      xhr.open('GET', url, true);
      xhr.send();
    });
  };

  var _toggleButtonActive = function(isActive) {
    if (!isActive) {
      _btn.disabled = !isActive;
      _btn.classList.add('loading');
      _btn.innerHTML = 'Loading...';
    } else {
      _btn.disabled = isActive;
      _btn.classList.remove('loading');
      _btn.innerHTML = 'Show films that have Luke Skywalker';
    }
  };

  var _displayFilmList = function() {
    _toggleButtonActive(false);

    var promise = _getURL(_url);
    promise.then(function(response) {
      var films = JSON.parse(response).films;
      var promises = films.map(function(filmUrl) {
        return _getURL(filmUrl).then(JSON.parse);
      });

      Promise.all(promises).then(function(filmList) {
        _toggleButtonActive(true);
        _render(filmList);
      });
    }).catch(function(error) {
      console.log(error);
    });
  };


  var _render = function(list) {
    var listContainer = document.querySelector('.list');

    var listFragment = list.reduce(function(fragment, item) {
      var li = document.createElement('li');
      li.className = 'list-item';
      var txt = document.createTextNode(item.title);
      li.appendChild(txt);
      fragment.appendChild(li);

      return fragment;
    }, document.createDocumentFragment());

    listContainer.appendChild(listFragment);
  };

  var init = function(url) {
    _url = url;
    _btn = document.querySelector('.button');
    _btn.addEventListener('click', _displayFilmList);
  };

  return {
    init: init
  };
})();

listAjax.init('http://swapi.co/api/people/1/?format=json');
