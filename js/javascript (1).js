const backToTopButton = document.getElementById("back-to-top");

// Monitora a rolagem da página
window.onscroll = function() {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block"; // Mostra a seta
    } else {
        backToTopButton.style.display = "none";  // Oculta a seta
    }
};

// Volta ao topo quando a seta é clicada
backToTopButton.onclick = function(e) {
    e.preventDefault(); // Evita comportamento padrão do link
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolagem suave
};