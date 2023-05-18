const color1 = document.getElementsByClassName('color')[0];
const color2 = document.getElementsByClassName('color')[1];
const color3 = document.getElementsByClassName('color')[2];
const color4 = document.getElementsByClassName('color')[3];

function randomColor() {
  const r = Math.random() * 256;
  const g = Math.random() * 256;
  const b = Math.random() * 256;

  return `rgb(${r}, ${g}, ${b})`;
}

function otherColors() {
  color1.style.backgroundColor = 'black';
  color2.style.backgroundColor = randomColor();
  color3.style.backgroundColor = randomColor();
  color4.style.backgroundColor = randomColor();
}

const saveLocalstorage = () => {
  localStorage.setItem('colorPalette', JSON.stringify(otherColors.toString()));
};

function creatTable() {
  const elementSectionTable = document.createElement('table');
  elementSectionTable.id = 'pixel-board';

  document.getElementsByTagName('main')[0].appendChild(elementSectionTable);

  for (let index = 0; index <= 4; index += 1) {
    const tableTr = document.createElement('tr');
    elementSectionTable.appendChild(tableTr);

    for (let index1 = 0; index1 <= 4; index1 += 1) {
      const tableTd = document.createElement('td');

      tableTd.className = 'pixel';
      tableTr.appendChild(tableTd);
    }
  }
}

function selectColor() {
  const colorSelected = document.getElementsByClassName('color');
  colorSelected.className = ' selected';
}

function addClassSelected(event) {
  const elementSelcted = document.getElementsByClassName('selected')[0];
  elementSelcted.classList.remove('selected');
  event.target.classList.add('selected');
}

color1.addEventListener('click', addClassSelected);
color2.addEventListener('click', addClassSelected);
color3.addEventListener('click', addClassSelected);
color4.addEventListener('click', addClassSelected);

function holdColor() {
  const setNewColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
  return setNewColor;
}

function coloring() {
  const squarePixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < squarePixels.length; index += 1) {
    squarePixels[index].addEventListener('click', () => {
      squarePixels[index].style.backgroundColor = holdColor();
    });
  }
}

function clearBoard() {
  const clearBoard1 = document.getElementsByClassName('pixel');
  for (let index = 0; index < clearBoard1.length; index += 1) {
    clearBoard1[index].style.backgroundColor = 'white';
  }
}

// Chamando funções
otherColors();
saveLocalstorage();
creatTable();
selectColor();
coloring();
clearBoard();
