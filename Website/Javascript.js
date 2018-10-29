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

var btnSorteer = document.querySelector('form h2');

function sorteerOpen(){
    var formulier = document.querySelector('fieldset button');
    formulier.style.display= 'block';
    formulier = document.querySelector('fieldset button:nth-child(2)');
    formulier.style.display= 'block';
}

btnSorteer.addEventListener('click', sorteerOpen);




var download = document.getElementById('download');

function verhaal_download(){
    var download_knop = document.getElementById('download');
    download_knop.parentNode.removeChild(download_knop);
    document.getElementById("loader").innerHTML = "<div class = loader></div>";
}

download.addEventListener('click', verhaal_download);




var like = document.getElementById('like');

function like_verhaal(){
    document.getElementById('like').src="/Images/like_vol.png";
}

like.addEventListener('click', like_verhaal);
