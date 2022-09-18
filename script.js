let hamburguer = document.getElementById('hamburguer');
let navUL = document.getElementById('nav-ul');

hamburguer.addEventListener('click', function() {
    navUL.classList.toggle('show')
})

let coverOverlay = document.getElementById('cover-overlay');
let hoverText = document.getElementById('hover-text')

coverOverlay.addEventListener('hover', function(){
    hoverText.style.display == 'block'
})

$('#mailto').click(function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    window.open(url);
});