import { useState } from 'react'
import '../styles/DrawingGrid.css'

export default function DrawingGrid(props){

    const [gridArray, setGridArray] = useState(props.gridMatrix)

    const handleClick = (e) => {
        e.preventDefault()

        let row = parseInt(e.target.getAttribute('row'))
        let col = parseInt(e.target.getAttribute('col'))

        let gridArrayCopy = [...gridArray]

        gridArray[row][col] === 1 ? gridArrayCopy[row][col] = 0 : gridArrayCopy[row][col] = 1

        setGridArray(gridArrayCopy)
        props.setDrawingGrid(gridArrayCopy)
        props.onChange()
    }
    return (

        <>
            <div className='drawing-grid-container'>
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
