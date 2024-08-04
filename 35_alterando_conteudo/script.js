//Selecionar o elemento.
var title = document.querySelector('#title');

console.log(title);

//innerHTML.
title.innerHTML = 'Testando novo texto alterado';


//textCont -> mais ultilizado, recomendado e performatico.
var subtitle = document.querySelector('.subtitle');

console.log(subtitle);

subtitle.textContent = 'Testando o textContent';