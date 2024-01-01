const COUNT_CELLS = 28;
const TYPE_CELL = 0;
const TYPE_HOLE = 1;
const COUNT_HOLES = 6;
const MAXIMUM_INCREMENT = 10000;
let cells =  initArrayCells();
let holsPositions = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function initCells() {
    const rootElement = document.querySelector('#cells-box');
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
        cells[i].offsetLeft = cellElement.offsetLeft;
        cells[i].offsetTop = cellElement.offsetTop;
       // console.log('offset', "left", cellElement.offsetLeft, "top", cellElement.offsetTop);
    }
    let flyElement = document.createElement('img');
    flyElement.src = '../assets/images/fly.png';
    flyElement.offsetTop = cells[0].offsetTop;
    flyElement.offsetLeft = cells[0].offsetLeft;
    flyElement.setAttribute('class', 'fly');
    rootElement.appendChild(flyElement);

}
function initArrayCells() {

    return  Array(COUNT_CELLS).fill().map( ()=> {  return {
        type: 0,
        offsetLeft: 0,
        offsetTop:0
    } });


}



const startButton = document.querySelector('.btn-start');
startButton.addEventListener('click', (e) => {
    initCells();
});

