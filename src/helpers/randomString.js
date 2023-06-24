

const randomString = function (n,dimensions, difficulty/*TODO: Add difficulty parameter to make them harder*/  ){
    let gridArray = []
    for(let grids = 0 ; grids < n; grids++ ){
        let grid = []
        for(let row = 0; row < 3; row++){
            let row = []
            for(let col = 0; col < 3; col++){
                row.push(Math.round(Math.random()))
            }
            grid.push(row)
        }
        gridArray.push(grid)
    }
    return gridArray

}

export default randomString