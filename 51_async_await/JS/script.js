//sintaxe
/*
function primeiraFuncao() {
    return new Promise((resove) => {

        setTimeout(() => {
            console.log('Esperou isso aqui');
            resove();
        },1000)




    });
};

async function segundaFuncao() {
    console.log('Inicio');

    await primeiraFuncao();

    console.log('Terminou');
};

segundaFuncao();
*/
//pratica
function getUser() {
    return fetch(`https://reqres.in/api/users?id=${id}`).then((data) => data.json()).catch((err) => console.log(err))
    
};


async function showUserName(id) {
    try {
        const user = await getUser(id);
        console.log(`O nome do usuario é ${user.data.first_name}`);

    } catch (err){
        console.log(err);
    }


   
}

showUserName(3);