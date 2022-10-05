let color1 = document.getElementsByClassName('color')[0];
let color2 = document.getElementsByClassName('color')[1];
let color3 = document.getElementsByClassName('color')[2];
let color4 = document.getElementsByClassName('color')[3];
let buttonChangeColor = document.getElementById('button-random-color');

function colorBlack (){
    color1.style.backgroundColor = 'black';
}

function randomColor () {
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;

    return `rgb(${r}, ${g}, ${b})`;
};


function OtherColors () {
    color2.style.backgroundColor = randomColor();
    color3.style.backgroundColor = randomColor();
    color4.style.backgroundColor = randomColor();
}

function creatTable() {
    let elementSectionTable = document.createElement('table');
    elementSectionTable.id = 'pixel-board';

    document.getElementsByTagName('main')[0].appendChild(elementSectionTable);

    for (let index = 0; index <= 4; index += 1) {
        let tableTr = document.createElement('tr');
        elementSectionTable.appendChild(tableTr);

        for (let index = 0; index <= 4; index += 1) {
            let tableTd = document.createElement('td');
            
            tableTd.className = 'pixel';
            tableTr.appendChild(tableTd);

        }
    }
}



// Chamando funções                                                                     
colorBlack();
OtherColors();
creatTable();                                                                                                                                                       