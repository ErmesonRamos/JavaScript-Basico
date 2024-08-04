//ParseFloat = Ele vai passar um número para que ele possa ter casas decimais
console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));

//ParseInt = Ele vai passar um número para que ele possa ter casas inteiras
console.log(parseInt('10'));
console.log(parseInt(16.96));

//toFixed = Ele vai limitar as casas decimais de um número
console.log(23.998.toFixed(3));


//isNan = Esse metódo é ultilizado para saber se tem um número
console.log(isNaN("Teste"));
console.log(isNaN(12));
console.log(isNaN('12'));

//MAX_VALUE e MIN_VALUE = São ultilizados para mim saber o número maximo e minimo que JavaScript suporta
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);