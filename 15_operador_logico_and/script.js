var idade = 16;
var nome = "Ermeson";

if(nome == "Ermeson" && idade == 16) {
    console.log("O Ermeson pode entrar na aula de esgrima");
} else {
    console.log("Este não é Ermeson")
}

if(1 == 1 && 3 > 2 && true) {
    console.log("Todas as condições estão verdadeiras");
}

if((1 == 1 && 3 > 3) && false) {
    console.log("Todas as condições estão verdadeiras");
} else if(nome === "Ermeson" && idade >= 14) {
    console.log("O Ermeson pode entrar na aula de dança");
}