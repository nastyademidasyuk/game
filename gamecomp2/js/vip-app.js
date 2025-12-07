import { vipCharacters } from './vip.js';

const vipContainer = document.getElementById('vip-container');

vipCharacters.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('character-card', 'vip'); // VIP стиль

  const img = document.createElement('img');
  img.src = item.icon;
  img.alt = item.name;

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.textContent = "Посмотреть предложение";


  overlay.addEventListener('click', () => {
    window.location.href = `vip-character.html?id=${item.id}`;
  });

  card.appendChild(img);
  card.appendChild(overlay);
  vipContainer.appendChild(card);
});
