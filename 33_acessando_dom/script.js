//.getElementsByTagName('tags')[indice] existe um colletion dentro dele porque ele esperava que houvesse mais tags.
var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);
var lis = document.getElementsByTagName('li');
console.log(lis);

//.getElementById('id') aqui o elemento é pegado apartir no id colocado no HTML.
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

//.getElementsByClassName('class') aqui o elemento é pegado apartir da class existe um colletion dentro dele porque ele esperava que houvesse mais elementos.
var item = document.getElementsByClassName('item');
console.log(item);
