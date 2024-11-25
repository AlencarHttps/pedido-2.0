// Botões
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const message = document.getElementById('message');

// Resposta ao clicar em "Sim"
yesButton.addEventListener('click', () => {
  message.style.display = 'block';
  message.innerText = 'Que ótimo vida, vamos se casar 1:23 💖 !';
});

// Tornar o "Não" impossível de clicar
noButton.addEventListener('mouseover', () => {
  const x = Math.random() * window.innerWidth * 0.6; // Limitado para não sair da tela
  const y = Math.random() * window.innerHeight * 0.6;

  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});
