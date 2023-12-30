const COUNT_CELLS = 28;
const TYPE_CELL = 0;
const TYPE_HOLE = 1;
const COUNT_HOLES = 6;
const MAXIMUM_INCREMENT = 10000;
let cells =  initArrayCells();
let holsPositions = [];
const rootElement = document.querySelector('#cells-box');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function initCells() {
    rootElement.innerHTML = '';
    holsPositions = [];
    for (let i = 0, increment = 0; i < COUNT_HOLES; i++, increment++) {
        let position = getRandomInt(0, COUNT_CELLS);
        if (cells[position].type === 0 && holsPositions.includes(position) === false) {
            holsPositions.push(position);
        } else {
            i--;
        }
        if( increment > MAXIMUM_INCREMENT){
            throw new Error('Local Error: Overflow Increment ');
        }
    }

    cells = initArrayCells();

    for (let i = 0; i < cells.length; i++) {
        let cellElement = document.createElement('div');
        let className = 'cell';
        if (holsPositions.includes(i) === true) {
            className = 'hole';
            cells[i].type = TYPE_HOLE;
        }
        cellElement.setAttribute('class', className);
        rootElement.appendChild(cellElement);
        cells[i].offset.left = cellElement.offsetLeft;
        cells[i].offset.top = cellElement.offsetTop;
       // console.log('offset', "left", cellElement.offsetLeft, "top", cellElement.offsetTop);
    }
    let flyElement = document.createElement('img');
    flyElement.src = '../assets/images/fly.png';
    flyElement.offsetTop = cells[0].offset.top;
    flyElement.offsetLeft = cells[0].offsetLeft;
    flyElement.setAttribute('class', 'fly');
    rootElement.appendChild(flyElement);

}
function initArrayCells() {
    return Array(COUNT_CELLS).fill({type: TYPE_CELL, offset: {left: 0, top: 0}});
}



const startButton = document.querySelector('.btn-start');
startButton.addEventListener('click', (e) => {
    initCells();
});

