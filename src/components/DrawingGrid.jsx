import { useState, useEffect } from 'react'
import '../styles/DrawingGrid.css'

export default function DrawingGrid(props){

    const [gridArray, setGridArray] = useState(props.gridMatrix)
    const [mouseDown,setMouseDown] = useState(false)

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


    const handleTouchStart = (e) => {
        e.preventDefault()
        console.log('touch start',e)

        setMouseDown(true)

        let row = parseInt(e.target.getAttribute('row'))
        let col = parseInt(e.target.getAttribute('col'))

        let gridArrayCopy = [...gridArray]

        gridArray[row][col] === 1 ? gridArrayCopy[row][col] = 0 : gridArrayCopy[row][col] = 1

        setGridArray(gridArrayCopy)
        props.setDrawingGrid(gridArrayCopy)

    }


    const handleTouchEnd = (e) => {
        e.preventDefault()
        setMouseDown(false)
    }

    const handleTouchMove = (e) => {
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


    useEffect(() => {
        document.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)
        
/*      document.addEventListener('touchmove', handleTouchMove)
        document.addEventListener('touchstart', handleTouchStart)
        document.addEventListener('touchend', handleTouchEnd) */
        return () => {
            document.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)

/*          document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchstart', handleTouchStart)
            document.removeEventListener('touchend', handleTouchEnd) */
        }
    }, [mouseDown])
    
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
                                }}
                                >
                                </div>
                            ))
                    ))
                }
            </div>
        </>
    )
}
