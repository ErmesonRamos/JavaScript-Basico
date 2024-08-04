//Array
var lista = ['laranja', 'Maça', 'Pera', 'Jaca', 'Limão'];
//Minha tag ul sendo criada
var listaUl = document.createElement('ul');
//Criando uma variavel para receber o body
var body = document.getElementsByTagName('body');
//Exibir o nosso primeiro elemento do body
console.log(body[0]);
//Aqui é inserido o nosso elemento ul dentro do html
body[0].appendChild(listaUl);
//Criado uma variavel para receber o nosso elemento ul criado por listaUl
var listaNoBody = document.getElementsByTagName('ul');
//Exibir o nosso elemento ul no console.log
console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {
    //Minha tag li sendo criada
    var liFor = document.createElement('li');
    //O método .createTextNode() é usado para criar um novo nó de texto que pode ser anexado a um elemento no DOM
    var textoLi = document.createTextNode(lista[i]);
    //Aqui é inserido o textoLi como forma de tag li imprimindo cada resultado que está dentro da nossa textoLi que foi inserido os valores que estavam dentro do nosso array
    liFor.appendChild(textoLi);
    //Aqui é imprimido tudo dentro do nosso documento
    listaNoBody[0].appendChild(liFor);
}