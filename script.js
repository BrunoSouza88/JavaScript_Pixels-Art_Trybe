let elementMain = document.createElement('main');
document.body.appendChild(elementMain);

let elementH1 = document.createElement('h1');
elementH1.id = 'title';
elementH1.innerText = 'Paleta de Cores';
elementMain.appendChild(elementH1);

let elementSection = document.createElement('section');
elementSection.id = 'color-palette';
elementSection.style.display = 'flex';
elementMain.appendChild(elementSection);

for (let index = 0; index < 4; index +=1){
let colorOptions = document.createElement('div');

colorOptions.style.height = '80px';
colorOptions.style.width = '80px';
colorOptions.style.border = '1px solid black';
colorOptions.style.borderRadius = '75%';
colorOptions.style.margin = '10px';
colorOptions.className = 'color';
colorOptions.id = 'color-palette';
elementSection.appendChild(colorOptions);
}

let colorOne = document.getElementsByClassName('color')[0];
let colorTwo = document.getElementsByClassName('color')[1];
let colorThree = document.getElementsByClassName('color')[2];
let colorFour = document.getElementsByClassName('color')[3];

colorOne.style.backgroundColor = 'black';
colorTwo.style.backgroundColor = 'blue';
colorThree.style.backgroundColor = 'green';
colorFour.style.backgroundColor = 'red';