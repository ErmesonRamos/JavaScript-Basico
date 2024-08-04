//Inserir click
var btn = document.querySelector('#btn');

console.log(btn);

//elemento.addEventListener('tipo de evento', callback)
btn.addEventListener('click', function() {
    console.log('Botão clicado!');

    console.log(this);

    this.style.color = 'red';
});

var body = document.querySelector('body');

body.addEventListener('click', function() {

    console.log('Clicou no corpo!');

    let title = document.querySelector('#title');
    title.style.display = 'none';
    
});

// double click
var subtitle = document.querySelector('.subtitle');

subtitle.addEventListener('dblclick', function() {
    console.log('Subtítulo clicado duas vezes!');
});