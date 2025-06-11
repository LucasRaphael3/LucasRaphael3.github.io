document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação que começam com '#'
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function smoothScroll(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        
        const targetId = this.getAttribute('href'); // Pega o id do alvo (ex: '#projetos')
        const targetSection = document.querySelector(targetId); // Seleciona a seção alvo
        
        // Rola a página suavemente até a seção
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Alinha o topo da seção com o topo da tela
        });
    }

    // Adiciona o evento de clique a cada link da navegação
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

// 1. Selecionar os elementos HTML que vamos manipular
const blackholeBtn = document.getElementById('blackhole-btn');
const blackhole = document.getElementById('blackhole');
const videoContainer = document.getElementById('video-container');
const easterEggVideo = document.getElementById('easter-egg-video');
const closeVideoBtn = document.getElementById('close-video-btn');
const elementsToSuck = document.querySelectorAll('.glass-card, #habilidades li, .profile-pic, h2, header'); // Incluí o header

// 2. Criar a função que dispara o efeito
function startSurpriseEffect() {
    // Esconder o botão
    blackholeBtn.style.display = 'none';

    // Mostrar o buraco negro
    blackhole.style.display = 'block';

    // Para cada elemento, adicionar a classe para ser puxado
    elementsToSuck.forEach(element => {
        const randomX = (Math.random() - 0.5) * 200 + 'px';
        const randomY = (Math.random() - 0.5) * 200 + 'px';
        element.style.setProperty('--random-x', randomX);
        element.style.setProperty('--random-y', randomY);
        element.classList.add('sucked-in');
    });

    // 3. Agendar a aparição do vídeo
    setTimeout(() => {
        blackhole.style.display = 'none'; // Esconde o buraco negro
        videoContainer.style.display = 'flex'; // Mostra o container do vídeo
        easterEggVideo.style.display = 'block'; // Exibe o vídeo
        closeVideoBtn.style.display = 'block'; // Mostra o botão de fechar
        easterEggVideo.play(); // Inicia o vídeo
    }, 2000);
}

// 4. Função para fechar o vídeo
function closeVideo() {
    videoContainer.style.display = 'none';
    easterEggVideo.pause();
    easterEggVideo.currentTime = 0; // Reinicia o vídeo para a próxima vez
    blackholeBtn.style.display = 'block'; // Mostra o botão novamente (opcional)
    elementsToSuck.forEach(element => {
        element.classList.remove('sucked-in'); // Remove a classe para os elementos voltarem (opcional)
        element.style.transform = ''; // Reseta a transformação (opcional)
        element.style.opacity = ''; // Reseta a opacidade (opcional)
    });
}

// 5. Adicionar os 'ouvintes' de clique
blackholeBtn.addEventListener('click', startSurpriseEffect);
closeVideoBtn.addEventListener('click', closeVideo)
});