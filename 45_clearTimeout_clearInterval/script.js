//clearTimeout(variavel atribuida ao setTimeout) na pratíca
let x = 0;

const myTimer = setTimeout(function() {
    console.log('O x é 0');
}, 1500);

x = 5;

if(x > 0) {
    clearTimeout(myTimer);
    console.log('O x passou de 0');
};

//clearInterval(variavel atribuida ao setInterval) na prática
const myInterval = setInterval(function() {
    console.log('Imprimindo intervalo!');
},1500);

setTimeout(function() {

    console.log('Não precisamos mas repetir');
    clearInterval(myInterval);

},1500);
