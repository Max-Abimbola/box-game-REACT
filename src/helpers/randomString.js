

const randomString = function (dimensions, difficulty/*TODO: Add difficulty parameter to make them harder*/  ){
    let grid = []
    for(let row = 0; row < 3; row++){
        let row = []
        for(let col = 0; col < 3; col++){
            row.push(Math.round(Math.random()))
        }
        grid.push(row)
    }
    console.log('grid: ',grid)
    return grid

}
export default randomString