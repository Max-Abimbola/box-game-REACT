

const randomString = function (dimensions, difficulty/*TODO: Add difficulty parameter to make them harder*/  ){
    let grid = []
    for(let row = 0; row < dimensions; row++){
        let row = []
        for(let col = 0; col < dimensions; col++){
            row.push(Math.round(Math.random()))
        }
        grid.push(row)
    }
    return grid

}
export default randomString