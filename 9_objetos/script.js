//Hoisting - içamento
var obj = {
    nome: 'Alessando',
    idade: 17,
    profissao: "programador",
    estadoTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);
console.log(obj.nome);
console.log(obj.profissao);

obj.nome = "Ermeson";
console.log("O meu nome é "+ obj.nome + " e trabalho com a " + obj.profissao);

obj.graduacao = true;
console.log(obj)

