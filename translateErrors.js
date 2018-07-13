//scrape the HTML of my website
var english = document.querySelector('#errores').innerText

// var div = document.createElement("div");
// div.innerHTML = english;
// var toTranslate = div.textContent || div.innerText || "";

//translate HTML to Spanish
var translate = require('yandex-translate')('trnsl.1.1.20180713T174214Z.722a29048266f000.c8dd76ff07009b1845726f4e9f4b9af9bf3ed7a5');
var red = 'red ' + english
translate.translate(red, { to: 'es' }, function(err, res) {
  //append Spanish HTML to page to display errors
  $('#errores').html('')
  $('#errores').text(res.text[0].substring(8))
});
