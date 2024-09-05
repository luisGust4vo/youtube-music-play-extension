
function tryClickPlayButton() {
    const playButton = document.querySelector('ytmusic-play-button-renderer');

    if (playButton) { // Verifica se o botão está visível
        console.log("Botão de play encontrado e visível, clicando...");
        playButton.click(); // Tenta clicar no botão de play
    } else {
        console.log("Botão de play não encontrado ou não está visível.");
    }
}

// Executa a função ao carregar a página
window.addEventListener('load', tryClickPlayButton);

