(function(){

  var aaa = document.getElementById('js-aaa'),
      bbb = document.getElementById('js-bbb'),
      ccc = document.getElementById('js-ccc');

  aaa.addEventListener('click', jumpToArea, false);
  bbb.addEventListener('click', jumpToArea, false);
  ccc.addEventListener('click', jumpToArea, false);

  function jumpToArea(event) {
    var to = event.target.getAttribute('data-jump-to');

    location.hash = '';
    location.hash = to;
  }

}());
