// evento mouseover
var title = document.querySelector('#title');


title.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

// evento mouseout
title.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'white';
});

var subtitle = document.querySelector('.subtitle');


subtitle.addEventListener('mouseover', function() {

    var legenda = document.querySelector('#legenda');
    legenda.classList.remove('hide');
    console.log(legenda)

});

subtitle.addEventListener('mouseout', function() {

    var legenda = document.querySelector('#legenda');
    legenda.classList.add('hide');
    console.log(legenda)

});