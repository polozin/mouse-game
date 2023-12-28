const COUNT_CELLS = 23;
const DEFAULT_VALUE = 0;
const CELL_VALUE = 1;
const COUNT_HOLES = 6;

let cells = Array(COUNT_CELLS).fill(DEFAULT_VALUE);
const rootElement = document.querySelector('#cells-box');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function initCells() {
    rootElement.innerHTML = '';
    const holsPositions = [];
    for (let i = 0; i < COUNT_HOLES; i++) {
        let position = getRandomInt(0, COUNT_CELLS);
        if (cells[position] === 0 && holsPositions.includes(position) === false) {
            holsPositions.push(position);
        } else {
            i--;
        }
    }
    console.log("holsPositions", holsPositions);
    cells = Array(COUNT_CELLS).fill(DEFAULT_VALUE);

    for (let i = 0; i < cells.length; i++) {
        let cellElement = document.createElement('div');
        let className = 'cell';
        if (holsPositions.includes(i) === true) {
            className = 'hole';
            cells[i] = CELL_VALUE;
        }
        cellElement.setAttribute('class', className);
        rootElement.appendChild(cellElement);
    }
}

function test() {
    const content = document.querySelector('.content');
    console.log(`content height  ${content.clientHeight}`);
    let arr = [];
}

const startButton = document.querySelector('.btn-start');
startButton.addEventListener('click', (e) => {
    initCells();
})

function fillHole(holeObject) {

}