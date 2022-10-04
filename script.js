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

let color1 = document.getElementsByClassName('color')[0];
let color2 = document.getElementsByClassName('color')[1];
let color3 = document.getElementsByClassName('color')[2];
let color4 = document.getElementsByClassName('color')[3];

function randomColor (){
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;

    return `rgb(${r}, ${g}, ${b})`;
}


color1.style.backgroundColor = 'black';
color2.style.backgroundColor = randomColor();
color3.style.backgroundColor = randomColor();
color4.style.backgroundColor = randomColor();

let elementSectionButton = document.createElement('section');
elementMain.appendChild(elementSectionButton);

let elementButton = document.createElement('button');
elementButton.id = 'button-random-color';
elementSectionButton.appendChild(elementButton);
elementButton.style.height = '60px';
elementButton.style.width = '100px';
elementButton.style.borderRadius = '10%'
elementButton.innerText = 'Cores aleatórias';

elementButton.addEventListener ('click', function(){
    document.location.reload();
})


