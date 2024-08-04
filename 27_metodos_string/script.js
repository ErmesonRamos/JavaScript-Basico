//length = Vai me dar o comprimento ou quantidade de caracteres que  uma string possui
var nome = "Ermeson";
console.log(nome.length); // 7

var obj = "bola";
console.log(obj.length); 

//indexOf = usado para encontrar a posição da primeira ocorrência de uma substring dentro de uma string principal. Obs. espaço dentro de uma frase conta como caractere
console.log(nome[0]);

var frase = "O rato roeu a roupa do rei de roma";
console.log(frase.indexOf("roeu"));

//slice = Ele vai remover uma parte da frase ele não altera a variavel original
var roeu = frase.slice(7, 11)
console.log(roeu); // roeu

//replace = Ele troca uma frase por uma nova frase
var novaFrase = frase.replace("roeu", "fudeu com");
console.log(novaFrase); // O rato se fudeu a roupa do rei de roma