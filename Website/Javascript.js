/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var hamburger = document.querySelector('nav li');

function MenuOpenen() {
    var nav = document.querySelector('nav li:nth-child(2)');
    nav.style.display = 'block';
    nav = document.querySelector('nav li:nth-child(3)');
    nav.style.display = 'block';
    nav = document.querySelector('nav li:nth-child(4)');
    nav.style.display = 'block';
    nav = document.querySelector('nav li:nth-child(5)');
    nav.style.display = 'block';
    nav = document.querySelector('nav li:nth-child(6)');
    nav.style.display = 'block';
}

hamburger.addEventListener('click', MenuOpenen);
