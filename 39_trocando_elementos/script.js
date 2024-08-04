//Criar o elemento
var el = document.createElement('h3');

//Criando uma classe para omeu elemento
el.classList = 'testando-classe';

//Adicionar texto ao elemento
var texto = document.createTextNode('Esse é o texto do h3');

//Inserir o texto ao elemento
el.appendChild(texto);
console.log(el);

//Selecionar o elemento que eu quero trocado
var title = document.querySelector('#title');
console.log(title)

//Selecionar o pai do el
var pai = title.parentNode;

//Trocar os elementos
pai.replaceChild(el, title);




