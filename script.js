const startButton = document.querySelector('#start');
startButton.onclick = () => { drawGrid(getSideLengthFromUser()); }

function drawGrid(sideLength) {
    const container = document.querySelector('#container');
    container.replaceChildren();
    container.setAttribute('id', 'container');

    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength + 1; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', `${i}:${j}`);
            cell.classList.add('cell');
            container.appendChild(cell);
        }
    }
    const cellsToHide = document.querySelectorAll(`.cell:nth-child(${sideLength + 1}n+1)`);
    for (let i = 0; i < cellsToHide.length; i++) {
        cellsToHide[i].classList.remove('cell');
        cellsToHide[i].classList.add('hide');
    }

    const cells = document.querySelectorAll('.cell');
    const cellStyle = getComputedStyle(cells);
    const sideL
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', () => {
            cells[i].style.backgroundColor = 'aqua';
        })
    }
}

function getSideLengthFromUser() {
    var answer = prompt('Enter square`s side length:');
    while (!/^[0-9]+$/.test(answer)) {
        alert("You did not enter a number.");
        answer = prompt('Enter square`s side length:');
    }
    return parseInt(answer);
}
