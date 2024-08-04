//splice = é usado para modificar o conteúdo de um array adicionando o novo valor no meio do array arr.splice(indice que eu quero colocar, se eu vou deletar o elemento que estava nesse local, valor adicionado);.
var arr = [1,2,3,4,5];
arr.splice(2, 0, 666);
console.log(arr);

arr.splice(2,1);
console.log(arr);

//indexOf = Ele acha o indice de um elemento dentro de uma array.
console.log(arr.indexOf(3));

//join = transforma arrays em strings.
var arr2 = ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma'];
console.log(arr2);
console.log(arr2.join(" "));

//reverse = é utilizado para inverter a ordem dos elementos de um array. 
console.log(arr2.reverse());