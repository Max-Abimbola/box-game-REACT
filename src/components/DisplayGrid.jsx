import { useState } from 'react'
import '../styles/DisplayGrid.css'

export default function DisplayGrid(props){

    const [gridArray, setGridArray] = useState(props.gridMatrix)

    return (
        <>
            <div
            style={{gridTemplateRows: `repeat(${props.dimensions},1fr)`,
            gridTemplateColumns: `repeat(${props.dimensions},1fr)`}}
            className='display-grid-container'>
                {
                    gridArray.map((row, rowIndex) => (
                            row.map((col, colIndex) => (
                                <div
                                className="grid-box"
                                row={rowIndex}
                                col={colIndex}
                                key={`${rowIndex}-${colIndex}`}
                                style={gridArray[rowIndex][colIndex] === 1 ? {backgroundColor:'#3C3AAB'} : {backgroundColor:'white'} }
                                >
                                </div>
                            ))
                    ))
                }
            </div>
        </>
    )
}
