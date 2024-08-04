//Criando elementos
var el = document.createElement('div');

//Adicionando classes
el.classList = 'div-criada';
console.log(el);

var container = document.querySelector('#container');

//Insirindo elemento filho
container.appendChild(el);
console.log(container);

//inserBefore - insere antes
var el2 = document.createElement('div');

//Adicionando classes
el2.classList = 'div-before';

var el3 = document.querySelector('#container .div-criada');
console.log(el3);

//Primeira valor será oq sera inserido e o segundo como referência para saber qual ele vai está a frente
container.insertBefore(el2, el3);


