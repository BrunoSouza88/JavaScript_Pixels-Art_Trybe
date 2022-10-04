let elementMain = document.createElement('main');
document.body.appendChild(elementMain);

let elementH1 = document.createElement('h1');
elementH1.id = 'title';
elementH1.innerText = 'Paleta de Cores';
elementMain.appendChild(elementH1);

let elementSection = document.createElement('section');
elementSection.id = 'color-palette';
elementMain.appendChild(elementSection);