let originalGrid = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]
let grid2 = [
    [0,0,0,0],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0],
   
]

let grid3 = [
    [0,0,0,1],
    [0,0,1,0],
    [0,0,1,0],
    [0,0,0,0], 
]
    

function checkNeighborCells(currentGrid, currentRow, currentColumn ){
    
        let neighbors = []
        const topRow = currentRow -1
        const downRow = currentRow +1
        const leftColumn = currentColumn -1
        const rightColumn = currentColumn +1
        
        let topCell = 0
        let topRightCell = 0
        let topLefttCell = 0
        let downCell = 0
        let downRightCell = 0
        let downLefttCell = 0
        if(topRow >= 0){
            topCell = currentGrid[topRow][currentColumn]
            topRightCell = currentGrid[topRow][rightColumn]
            topLefttCell = currentGrid[topRow][leftColumn]
            neighbors.push(topCell, topRightCell, topLefttCell)
        }
        if(downRow < currentGrid.length){
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

function checkCellStatus(cellStatus, cellNeighbors){
    switch(cellStatus){
        case 0:
            if(cellNeighbors === 3){
                cellStatus = 1;
            }else{
                cellStatus = 0;
            }
            break;
        case 1:
            if(cellNeighbors === 2 || cellNeighbors === 3){
                cellStatus = 1
            }else cellStatus = 0
    }
    return cellStatus
}

function checkNeighbors(neighborsArray){
    const cellNeighbors = neighborsArray.filter(x=> x===1)
    const currentCellNeighbors = cellNeighbors.length
    return currentCellNeighbors
}
function getNextGridState(currentGrid){
    let newState = [];
            for (array in currentGrid){
                let copyArray = [...currentGrid[array]]
                newState.push(copyArray)
            }
    for(let row = 0; row<currentGrid.length; row++){
        for(let column = 0; column<currentGrid[row].length; column++){
            
            const neighborCells = checkNeighborCells(currentGrid, row, column)
            const cellNeigbors = checkNeighbors(neighborCells)
            const newStatus = checkCellStatus(currentGrid[row][column], cellNeigbors)

            newState[row][column] = newStatus
            }
    }
    return newState
}



describe('Given a function getNextGridState',()=>{
    describe('When originalGrid is passed as an argument',()=>{
        test('it should return [ [0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0], [0,0,1,0,0], [0,0,0,0,0]]',()=>{
            let expectedOutput = 
            [[0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0]]
            expect(getNextGridState(originalGrid)).toEqual(expectedOutput)
        })
    })
    describe('When grid2 is passed as an argument', ()=>{
        test('It should return same array', ()=>{
            expect(getNextGridState(grid2)).toEqual(grid2)
  
        })
    })
    describe('When grid3 is passed as an argument', ()=>{
        test('It should return newGrid', ()=>{
            let newGrid = [
                [0,0,0,0],
                [0,0,1,1],
                [0,0,0,0],
                [0,0,0,0], 
            ]
            expect(getNextGridState(grid3)).toEqual(newGrid)
        })
    })

})

describe('Given a function check cellStatus', ()=>{
    describe('When 1, 3 are passed as argument', ()=>{
        test('it should return 1', ()=>{
            expect(checkCellStatus(1,3)).toBe(1)
        })
    })
    describe('When 0, 3 are passed as argument', ()=>{
        test('It should return 1', ()=>{
            expect(checkCellStatus(0,3)).toBe(1)
        })
    })
})

describe('Given a function check neighbors',()=>{
    describe('When [0,1,0,1,0,1,0] is passed as an argument',()=>{
        test('Should retrun 3', ()=>{
            expect(checkNeighbors([0,1,0,1,0,1,0])).toBe(3)
        })
    })
})

describe('Given a function checkCellNeighbors', ()=>{
    describe('When arguments are grid, 2, 1',()=>{
        test('Should return [0,0,0,1,1,1,0,0]', ()=>{
            expect(checkNeighborCells(originalGrid,1,2)).toEqual([0,0,0,1,1,1,0,0])
        })
    })
})


