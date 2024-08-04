//length = é a propriedade que vai dar a quantidade de elementos dentro de uma array.
var arr = [1,2,3,4,5,6];
console.log(arr.length);

//push = adiciona um ou mais elementos ao final de um array
arr.push(7);
arr.push('Quaquer coisa!');
console.log(arr);

//pop = remove o último elemento de um array
arr.pop();
console.log(arr);

//unshift = adiciona um ou mais elementos no início de um array
arr.unshift(0);
console.log(arr);

//shift = remove o primeiro elemento de um array
arr.shift();
console.log(arr);

// Acessar o ultimo elemento
console.log(arr[arr.length - 1]);

//isArray = verificar se um elemento realmente é um array
console.log(Array.isArray(arr));