// Código para rolar a página até o topo (já existente)
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

// Novo código para o botão "Clique aqui para saber mais"
const showMessageButton = document.getElementById("show-message-button");
const message = document.getElementById("message");

// Função para mostrar a mensagem quando o botão for clicado
showMessageButton.onclick = function() {
    message.style.display = "block";  // Exibe a mensagem
    showMessageButton.style.display = "none";  // Oculta o botão após o clique
};


