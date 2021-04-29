let originalGrid = createOriginalGrid(100);
function checkNeighborCells(currentGrid, currentRow, currentColumn) {

    let neighbors = []
    const topRow = currentRow - 1
    const downRow = currentRow + 1
    const leftColumn = currentColumn - 1
    const rightColumn = currentColumn + 1

    let topCell = 0
    let topRightCell = 0
    let topLefttCell = 0
    let downCell = 0
    let downRightCell = 0
    let downLefttCell = 0
    if (topRow >= 0) {
        topCell = currentGrid[topRow][currentColumn]
        topRightCell = currentGrid[topRow][rightColumn]
        topLefttCell = currentGrid[topRow][leftColumn]
        neighbors.push(topCell, topRightCell, topLefttCell)
    }
    if (downRow < currentGrid.length) {
        downCell = currentGrid[downRow][currentColumn]
        downRightCell = currentGrid[downRow][rightColumn]
        downLefttCell = currentGrid[downRow][leftColumn]
        neighbors.push(downCell, downRightCell, downLefttCell)
    }

    const leftCell = currentGrid[currentRow][leftColumn]
    const rightCell = currentGrid[currentRow][rightColumn]
    neighbors.push(leftCell, rightCell)
    return neighbors;
}

function checkCellStatus(cellStatus, cellNeighbors) {
    switch (cellStatus) {
        case 0:
            if (cellNeighbors === 3) {
                cellStatus = 1;
            } else {
                cellStatus = 0;
            }
            break;
        case 1:
            if (cellNeighbors === 2 || cellNeighbors === 3) {
                cellStatus = 1
            } else 
                cellStatus = 0
            
    }
    return cellStatus
}

function checkNeighbors(neighborsArray) {
    const cellNeighbors = neighborsArray.filter(x => x === 1)
    const currentCellNeighbors = cellNeighbors.length
    return currentCellNeighbors
}
function getNextGridState(currentGrid) {
    let newState = [];
    for (array in currentGrid) {
        let copyArray = [... currentGrid[array]]
        newState.push(copyArray)
    }
    for (let row = 0; row < currentGrid.length; row++) {
        for (let column = 0; column < currentGrid[row].length; column++) {

            const neighborCells = checkNeighborCells(currentGrid, row, column)
            const cellNeigbors = checkNeighbors(neighborCells)
            const newStatus = checkCellStatus(currentGrid[row][column], cellNeigbors)

            newState[row][column] = newStatus
        }
    }
    paintCurrentStatus(newState)
    originalGrid = newState
    return newState
}


function createOriginalGrid(size) {
    let grid = []
    for (let i = 0; i < size; i++) {
        grid[i] = new Array;
        for (let j = 0; j < size; j++) 
            grid[i].push(0)
        
    }
    return grid
}

function paintBoard(grid) {
    const board = document.querySelector('.board')
    for (let row = 0; row < grid.length; row++) {
        const newRow = document.createElement('div')
        newRow.className = 'row'
        board.append(newRow)
        for (let column = 0; column < grid[row].length; column++) {
            const newCell = document.createElement('div')
            newCell.className = 'cell'
            newCell.id = `cell${row}--${column}`
            newRow.append(newCell)
        }
    }
}

paintOnClick = function (TwoDArray) {
    for (let row = 0; row < TwoDArray.length; row++) {
        for (let column = 0; column < TwoDArray[row].length; column++) {
            const cell = document.getElementById(`cell${row}--${column}`)
            cell.onclick = function () {
                TwoDArray[row][column] = 1;
                cell.classList.add('alive')
            }
        }
    }
}

function paintCurrentStatus(grid) {
    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[row].length; column++) {
            const currentCell = document.querySelector(`#cell${row}--${column}`)
            grid[row][column] === 1 ? currentCell.classList.add('alive') : currentCell.classList.remove('alive')
        }
    }
}

function toPaint() {
    getNextGridState(originalGrid)
}
let interval1
function startPlaying() {
    interval1 = setInterval(toPaint, 250)
}

function stopPlaying() {
    clearInterval(interval1)
}


function randomizer(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const randomNumber = Math.random();
            let value;
            if (randomNumber < 0.8) {
                value = 0
            } else {
                value = 1
            } grid[i][j] = value
        }
    }
    originalGrid = grid
    paintCurrentStatus(grid)
}

function clearGrid(grid) {
    grid = createOriginalGrid(100);
    paintCurrentStatus(grid)
    originalGrid = grid
}



    


