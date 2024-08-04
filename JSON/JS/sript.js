const objs = [
   
    {
        "nome": "Ermeson",
        "idade": 17,
        "esta_trabalhando": false,
        "hobbies": ["Academia", "Xadrez", "Programar"],
    
        "detalhes_profissao": {
            "cargo": "Desenvolver Full-Stack"
        }
    },

      
    {
        "nome": "Matheus",
        "idade": 30,
        "esta_trabalhando": true,
        "hobbies": ["Programador", "Corre", "Ler"],
    
        "detalhes_profissao": {
            "cargo": "Desenvolver Full-Stack"
        }
    }
]


//JSON

//Converter objeto para JSON
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

//Converter JSON para objeto
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

//Ultilizando o método map
objData.map((pessoa) => {
    console.log(pessoa.nome)

});