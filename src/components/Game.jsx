import { useState, useEffect } from 'react'
import DrawingGrid from './DrawingGrid.jsx'
import DisplayGrid from './DisplayGrid.jsx'
import '../styles/Game.css'

export default function Game(){
    const [drawingGrid, setDrawingGrid] = useState([
        [1,0,0],
        [0,1,1],
        [1,0,1]

    ]);
    const [displayGrid, setDisplayGrid] = useState([
        [1,0,1],
        [0,1,1],
        [1,0,1]
    ])

    const [gameState, setGamestate] = useState('isRunning')
    const [timerIsActive, setTimerIsActive] = useState(true)


    useEffect(() => {
        
        if(timerIsActive){
            var timer = setTimeout(() => {
                console.log('times up!')
                setTimerIsActive(false)
            },3000)
        }

        if((JSON.stringify(drawingGrid) === JSON.stringify(displayGrid)) && timerIsActive === true){
            setGamestate('isWon')

            const body = document.getElementById('body')
            body.style.backgroundColor = '#65BF63'

            const highlghtedBoxes = document.querySelectorAll('.grid-box')

            highlghtedBoxes.forEach((box)=>{
                console.log(box.style.backgroundColor)
                if(box.style.backgroundColor === 'rgb(60, 58, 171)'){
                    box.style.backgroundColor = 'green'
                }
            })

            setTimerIsActive(false)
            
        }

        else if((JSON.stringify(drawingGrid) !== JSON.stringify(displayGrid)) && timerIsActive === false){
            setGamestate('isLost')

            const body = document.getElementById('body')
            body.style.backgroundColor = '#AE6767'

            const highlghtedBoxes = document.querySelectorAll('.grid-box')

            highlghtedBoxes.forEach((box)=>{
                console.log(box.style.backgroundColor)
                if(box.style.backgroundColor === 'rgb(60, 58, 171)'){
                    box.style.backgroundColor = '#962525'
                }
            })
        }
        
        return () => {
            clearTimeout(timer)
        }

    }, [drawingGrid, displayGrid, timerIsActive])


    return (
        <>
            <div className={gameState === 'isWon' ? 'winning-screen' : gameState === 'isLost' ? 'losing-screen' : null}>
                <DisplayGrid gridMatrix={displayGrid}/>
                <DrawingGrid gridMatrix={drawingGrid} setDrawingGrid={setDrawingGrid}/>
            </div>
        </>
    )
}