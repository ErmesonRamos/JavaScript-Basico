//Elemento Criado
var novoParagrafo = document.createElement('p');

console.log(novoParagrafo);

//Criar nó de texto
var texto = document.createTextNode('Esse é contéudo do paragráfo');

//Inserir nó de texto
novoParagrafo.appendChild(texto);

//Adicionar o novo paragrafo ao body
var body = document.querySelector('body');
body.appendChild(novoParagrafo);

//Inserir dentro de conteiner (div)
var container = document.querySelector('#container');
console.log(container);

var el = document.createElement('span');
el.appendChild(document.createTextNode('Texto em span'));
container.appendChild(el);

