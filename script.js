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
};

let color1 = document.getElementsByClassName('color')[0];
let color2 = document.getElementsByClassName('color')[1];
let color3 = document.getElementsByClassName('color')[2];
let color4 = document.getElementsByClassName('color')[3];

function randomColor (){
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;

    return `rgb(${r}, ${g}, ${b})`;
};


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
});

let elementSectionBoard1 = document.createElement('section');
elementSectionBoard1.id = 'pixel-board'
elementMain.appendChild(elementSectionBoard1);
elementSectionBoard1.style.display = 'flex';

for (let index = 0; index <= 4; index +=1){
    let board = document.createElement('div');
    elementSectionBoard1.appendChild(board);
    board.style.height = '40px';
    board.style.width = '40px';
    board.style.border = '1px solid black';
    board.style.margin = '10px';
    board.className = 'pixel';
};

let elementSectionBoard2 = document.createElement('section');
elementSectionBoard2.id = 'pixel-board'
elementMain.appendChild(elementSectionBoard2);
elementSectionBoard2.style.display = 'flex';

for (let index = 0; index <=4; index += 1){
    let board2 = document.createElement('div');
    elementSectionBoard2.appendChild(board2);
    board2.style.height = '40px';
    board2.style.width = '40px';
    board2.style.border = '1px solid black';
    board2.style.margin = '10px';
    board2.className = 'pixel';
}

let elementSectionBoard3 = document.createElement('section');
elementSectionBoard3.id = 'pixel-board'
elementMain.appendChild(elementSectionBoard3);
elementSectionBoard3.style.display = 'flex';

for (let index = 0; index <=4; index += 1){
    let board3 = document.createElement('div');
    elementSectionBoard3.appendChild(board3);
    board3.style.height = '40px';
    board3.style.width = '40px';
    board3.style.border = '1px solid black';
    board3.style.margin = '10px';
    board3.className = 'pixel';
}

let elementSectionBoard4 = document.createElement('section');
elementSectionBoard4.id = 'pixel-board'
elementMain.appendChild(elementSectionBoard4);
elementSectionBoard4.style.display = 'flex';

for (let index = 0; index <=4; index += 1){
    let board4 = document.createElement('div');
    elementSectionBoard4.appendChild(board4);
    board4.style.height = '40px';
    board4.style.width = '40px';
    board4.style.border = '1px solid black';
    board4.style.margin = '10px';
    board4.className = 'pixel';
}

let elementSectionBoard5 = document.createElement('section');
elementSectionBoard5.id = 'pixel-board'
elementMain.appendChild(elementSectionBoard5);
elementSectionBoard5.style.display = 'flex';

for (let index = 0; index <=4; index += 1){
    let board5 = document.createElement('div');
    elementSectionBoard5.appendChild(board5);
    board5.style.height = '40px';
    board5.style.width = '40px';
    board5.style.border = '1px solid black';
    board5.style.margin = '10px';
    board5.className = 'pixel';
}