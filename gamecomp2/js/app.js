import { mythicalCharacters } from './mythical.js';
import { legendaryCharacters } from './legendary.js';
import { rareCharacters } from './rare.js';
import { vipCharacters } from './vip.js';


const containers = {
  mythical: document.getElementById('mythical-container'),
  legendary: document.getElementById('legendary-container'),
  rare: document.getElementById('rare-container'),
  vip: document.getElementById('vip-container'),
};


function createCards(characters, container, isVip = false) {
  container.innerHTML = ''; // очищаем перед добавлением
  characters.forEach(character => {
    const card = document.createElement('div');
    card.classList.add('character-card');
    if (isVip) card.classList.add('vip');

    const img = document.createElement('img');
    img.src = character.icon;
    img.alt = character.name;
    if (isVip) img.classList.add('vip-img');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.textContent = isVip ? "Посмотреть предложение" : "Просмотреть персонажа";
    if (isVip) overlay.classList.add('vip-overlay');

    overlay.addEventListener('click', () => {
      if (isVip) {
        window.location.href = `vip.html?id=${character.id}`;
      } else {
        window.location.href = `character.html?id=${character.id}`;
      }
    });

    card.appendChild(img);
    card.appendChild(overlay);
    container.appendChild(card);
  });
}


createCards(mythicalCharacters, containers.mythical);
createCards(legendaryCharacters, containers.legendary);
createCards(rareCharacters, containers.rare);
createCards(vipCharacters, containers.vip, true);
