const holeHeight = 12;
const holeWidth = 10;
const holeLineShift = 0.2;
const startButton = document.querySelector('.btn-start');
startButton.addEventListener('click', (e) =>{
    let holeObject = document.querySelector('.hole');
    fillHole(holeObject);
})
function fillHole(holeObject) {
    let lineWidth = holeWidth;
    for (let i = holeHeight; i > 0; i--) {
        const line = document.createElement('span');
        line.setAttribute('class', 'hole-line');
        line.setAttribute('style', `width: ${lineWidth}vw`);
        lineWidth -= holeLineShift;
        holeObject.appendChild(line);
    }
}

function test() {
    const content = document.querySelector('.content');
    console.log(`content height  ${content.clientHeight}`);
    let arr = [];
}