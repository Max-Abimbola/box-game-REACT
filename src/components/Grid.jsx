import { useState } from 'react'

export default function Grid(props){
    const [gridArray, setGridArray] = useState([
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ])

    return (

        <>
            <div className='grid-container'>
                {
                    gridArray.map((row, rowIndex) => (
                        <div key={rowIndex}>
                            {row.map((col, colIndex) => (
                                <div
                                key={`${rowIndex}-${colIndex}`}
                                >
                                This will be a box</div>
                            ))}
                        </div>
                    ))
                }
            </div>
        </>
    )
}
