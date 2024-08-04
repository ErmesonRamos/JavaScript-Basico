var idade = 15;
var nome = "Pedro";

if(nome == "Ermeson" || idade > 14) {
    console.log("Pode entrar na festa!");
} else {
    console.log("Não pode entrar na festa!");
}

if(nome == "Ermeson" && (30 > 20 || 10 == 10)) {
    console.log("Testando");
} else {
    console.log("Teste não passou");
}