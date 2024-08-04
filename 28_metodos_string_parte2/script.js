//toLowerCase e toUpperCase = Deixa o texto em caixa baixa e caixa alta
var frase = 'Está é a frase que vamos manipular';
console.log(frase.toLowerCase());

var fraseCaixaAlta = frase.toUpperCase();
console.log(fraseCaixaAlta);

//trim = em JavaScript é usado principalmente para remover espaços em branco do início e do final de uma string. 
var nome = '                 Ermeson            ';
console.log(nome);
console.log(nome.trim());

//split =  é usado para dividir uma string em um array de substrings, com base em um separador especificado. 
console.log(frase.split(' '));

var tag = 'PHP. JavaScipt, HTML, CSS';
console.log(tag.split(','));

//lastIndexOf =  é usado para encontrar a última ocorrência de um elemento dentro de um array ou de uma substring dentro de uma string.
var fraseDois = 'Eu quero a última frase desta frase teste';
console.log(fraseDois.lastIndexOf('teste'));