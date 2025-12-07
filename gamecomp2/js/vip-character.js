import { vipCharacters } from './vip.js';

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));


const character = vipCharacters.find(c => c.id === id);


if (character) {
  const imageEl = document.getElementById('character-image');
  const nameEl = document.getElementById('character-name');
  const descEl = document.getElementById('character-description');

  imageEl.src = character.icon;
  imageEl.alt = character.name;
  nameEl.textContent = character.name;
  descEl.textContent = character.description;
} else {
  document.getElementById('character-name').textContent = "Предложение не найдено";
  document.getElementById('character-description').textContent = "";
  document.getElementById('character-image').style.display = "none";
}
