import { useState, useEffect } from 'react'
import DrawingGrid from './DrawingGrid.jsx'
import DisplayGrid from './DisplayGrid.jsx'

export default function Game(){
    const [drawingGrid, setDrawingGrid] = useState([
        [1,0,1],
        [0,1,1],
        [1,0,1]

    ]);
    const [displayGrid, setDisplayGrid] = useState([
        [1,0,1],
        [0,1,1],
        [1,0,1]
    ])

    const [isWon, setIsWon] = useState(false)

    useEffect(() => {
        setIsWon(JSON.stringify(drawingGrid) === JSON.stringify(displayGrid))

    }, [drawingGrid, displayGrid])


    return (
        <>
            <DisplayGrid gridMatrix={displayGrid}/>
            <DrawingGrid gridMatrix={drawingGrid} setDrawingGrid={setDrawingGrid}/>
            

        </>
    )
}