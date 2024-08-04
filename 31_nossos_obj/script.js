const pessoa = {
    nome: 'Ermeson',
    idade: 17,
    falar: function() {
        console.log('Olá, tudo bem!');
    },
    soma: function(a, b) {
        return a + b;
    },
    andar: function() {
        console.log('Estou andando');
    }

}
console.log(pessoa.nome);

pessoa.falar();

console.log(pessoa.soma(5, 5));

pessoa.andar();