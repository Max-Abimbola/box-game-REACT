import { useState } from 'react'
import '../styles/Grid.css'

export default function Grid(props){
    const [gridArray, setGridArray] = useState([
        [1,0,1],
        [0,1,1],
        [1,0,1]
    ])

    const handleClick = (e) => {
        e.preventDefault()

        let row = parseInt(e.target.getAttribute('row'))
        let col = parseInt(e.target.getAttribute('col'))

        let gridArrayCopy = [...gridArray]

        gridArray[row][col] === 1 ? gridArrayCopy[row][col] = 0 : gridArrayCopy[row][col] = 1

        setGridArray(gridArrayCopy)
    }
    return (

        <>
            <div className='grid-container'>
                {
                    gridArray.map((row, rowIndex) => (
                            row.map((col, colIndex) => (
                                <div
                                className="grid-box"
                                row={rowIndex}
                                col={colIndex}
                                key={`${rowIndex}-${colIndex}`}
                                style={gridArray[rowIndex][colIndex] === 1 ? {backgroundColor:'#3C3AAB'} : {backgroundColor:'white'} }
                                onClick={handleClick}
                                >
                                </div>
                            ))
                    ))
                }
            </div>
        </>
    )
}
