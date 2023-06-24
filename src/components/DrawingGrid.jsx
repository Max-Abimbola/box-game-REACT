import { useState } from 'react'
import '../styles/DrawingGrid.css'

export default function DrawingGrid(props){

    const [gridArray, setGridArray] = useState(props.gridMatrix)
    const [mouseDown,setMouseDown] = useState(false)
    const [mouseUp, setMouseUp] = useState(false)

    const handleMouseDown = (e) => {
        e.preventDefault()

        setMouseDown(true)

        let row = parseInt(e.target.getAttribute('row'))
        let col = parseInt(e.target.getAttribute('col'))

        let gridArrayCopy = [...gridArray]

        gridArray[row][col] === 1 ? gridArrayCopy[row][col] = 0 : gridArrayCopy[row][col] = 1

        setGridArray(gridArrayCopy)
        props.setDrawingGrid(gridArrayCopy)



    }

    const handleMouseUp = (e) => {
        e.preventDefault()
        setMouseDown(false)
    }

    const handleMouseOver = (e) => {
        e.preventDefault()
        if(mouseDown){
            let row = parseInt(e.target.getAttribute('row'))
            let col = parseInt(e.target.getAttribute('col'))
    
            let gridArrayCopy = [...gridArray]
    
            gridArray[row][col] === 1 ? gridArrayCopy[row][col] = 0 : gridArrayCopy[row][col] = 1
    
            setGridArray(gridArrayCopy)
            props.setDrawingGrid(gridArrayCopy)
        }
    }
    return (

        <>
            <div className='drawing-grid-container'>
                {
                    gridArray.map((row, rowIndex) => (
                            row.map((col, colIndex) => (
                                <div
                                className={"grid-box " + "grid-box-drawing"}
                                row={rowIndex}
                                col={colIndex}
                                key={`${rowIndex}-${colIndex}`}
                                style={{
                                    backgroundColor: gridArray[rowIndex][colIndex] === 1 ? '#3C3AAB' : 'white',
                                    /* transition: 'background-color 0.3s ease' */
                                }}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onMouseOver={handleMouseOver}
                                >
                                </div>
                            ))
                    ))
                }
            </div>
        </>
    )
}
