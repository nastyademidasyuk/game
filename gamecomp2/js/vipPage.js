import { vipCharacters } from './vip.js';


const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));


const character = vipCharacters.find(c => c.id === id);

if (character) {
  document.getElementById('vip-image').src = character.icon;
  document.getElementById('vip-image').alt = character.name;
  document.getElementById('vip-name').textContent = character.name;
  document.getElementById('vip-description').textContent = character.description;
} else {
  document.getElementById('vip-name').textContent = "Предложение не найдено";
  document.getElementById('vip-description').textContent = "";
  document.getElementById('vip-image').style.display = "none";
}
