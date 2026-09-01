// Sistema de Likes nos cards
const likeButtons = document.querySelectorAll('.btn-like');

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const countSpan = button.querySelector('.like-count');
    let currentLikes = parseInt(countSpan.textContent);
    countSpan.textContent = currentLikes + 1;
  });
});

// Gerador de curiosidades aleatórias
const curiosidades = [
  "A água é a única substância na Terra encontrada naturalmente em três estados: líquido, sólido e gasoso.",
  "O leite de hipopótamo é rosa devido a dois ácidos únicos que o animal produz.",
  "Estima-se que mais de 2,25 bilhões de xícaras de café sejam consumidas no mundo todos os dias.",
  "A bebida energizante mais antiga registrada era uma mistura de água, mel e ervas usada na Roma Antiga.",
  "O suco de laranja natural pode mudar ligeiramente de sabor dependendo da época da colheita dos frutos."
];

const factDisplay = document.getElementById('fact-display');
const factBtn = document.getElementById('fact-btn');

factBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * curiosidades.length);
  factDisplay.textContent = `"${curiosidades[randomIndex]}"`;
});