//Criar o elemento
var title = document.querySelector('#title');

//Inserindo atributos
title.setAttribute('class', 'testando-atributo');
console.log(title);

//Criar elemento
var btn = document.querySelector('#btn');

//Inserindo atriibuto
btn.setAttribute('disabled', 'disabled');


//Criar elemento
var subtitle = document.querySelector('.subtitle');

//Inserindo atriibuto
subtitle.setAttribute('id', 'titulo-2');
console.log(subtitle);

//Remover atributos
var lista = document.querySelector('#lista');

//Removendo atriibuto
lista.removeAttribute('id');
console.log(lista);



