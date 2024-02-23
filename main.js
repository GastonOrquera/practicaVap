let hamburger = document.querySelector('.hamburger');

let nav = document.querySelector('nav');

let navLinks = document.querySelectorAll('nav a');

let conteinerRedes = document.querySelector('.conteinerRedes');

let redesNav = document.querySelectorAll('.conteinerRedes i');

hamburger.addEventListener('click', function () {

    nav.classList.toggle('active');

    conteinerRedes.classList.toggle('active');

    // redesNav.forEach(function (redes) {

    //     redes.classList.toggle('active');
    // });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
        });
    });

});