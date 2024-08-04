//keydown
document.addEventListener('keydown', function(event) {
    console.log(event.key);
    if (event.key === 'Enter') {
       console.log('Voçê apertou Enter');
    };
});

//keyup 
document.addEventListener('keyup', function(event) {
    if(event.key === 'Enter') {
        console.log('Soltou o Enter');
    };
});