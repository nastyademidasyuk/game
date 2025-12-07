import { mythicalCharacters } from './mythical.js';
import { legendaryCharacters } from './legendary.js';
import { rareCharacters } from './rare.js';
import { vipCharacters } from './vip.js';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));


  const allCharacters = [
    ...mythicalCharacters,
    ...legendaryCharacters,
    ...rareCharacters,
    ...vipCharacters
  ];

  const character = allCharacters.find(c => c.id === id);

  const imgEl = document.getElementById('character-image');
  const nameEl = document.getElementById('character-name');
  const descEl = document.getElementById('character-description');

  if (character) {
    imgEl.src = character.fullImage;
    imgEl.alt = character.name;
    nameEl.textContent = character.name;
    descEl.textContent = character.description;


    if (vipCharacters.includes(character)) {
      imgEl.classList.add('vip-character');
      nameEl.classList.add('vip-character');
      descEl.classList.add('vip-character');
    }
  } else {
    nameEl.textContent = "Персонаж не найден";
    descEl.textContent = "";
    imgEl.style.display = "none";
  }
});
