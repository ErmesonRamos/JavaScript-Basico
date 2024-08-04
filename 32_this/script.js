var teste = 5;
console.log(this.teste);
console.log(teste);

const pessoa = {
    nome: 'Ermeson',
    idade: 17,
    falar: function() {
        console.log('Olá, tudo bem!');
    },
    dizerNome: function() {
        console.log('Meu nome é ' + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return 'Sr. ' + this.nome + ' prazer em conhecer-lo!';
    },

}
pessoa.dizerNome();


console.log(pessoa.idade);
pessoa.aniversario();
pessoa.aniversario();
console.log(pessoa.idade);

console.log(pessoa.saudacao());

