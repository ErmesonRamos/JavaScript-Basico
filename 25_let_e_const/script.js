let x = 5;

const y = 7;

console.log('Const: ' + y); // 20

x = 12;

console.log(x); // 12

if(true) {
    let x = 20;

    console.log(x); // 20

    const y = 50;

    console.log('Const if: ' + y); // 50
}


if(20 > 10) {
    const y = 100;

    console.log('Const do segundo if: ' + y); // 100
}


for(let x = 1; x < 10; x++) {
    console.log(x); // 0-9
}




