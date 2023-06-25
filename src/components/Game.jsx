import { useState, useEffect } from 'react'
import DrawingGrid from './DrawingGrid.jsx'
import DisplayGrid from './DisplayGrid.jsx'
import '../styles/Game.css'

export default function Game(props){

    const initialDrawingGrid = [
            [0,0,0],
            [0,0,0],
            [0,0,0],

      ];

    const [stageNumber, setStageNumber] = useState(0)
    const [drawingGrid, setDrawingGrid] = useState(initialDrawingGrid);
    const [displayGrid, setDisplayGrid] = useState(props.stageGrid)
    const [gameState, setGameState] = useState('isRunning')
    const [timerIsActive, setTimerIsActive] = useState(true)
    const [timerId, setTimerId] = useState(null)


    useEffect(() => {
        if (timerIsActive) {


          const intervalId = setInterval(() => {

            
            if (JSON.stringify(drawingGrid) !== JSON.stringify(displayGrid)) {
              setGameState('isLost');
    
              const body = document.getElementById('body');
              body.style.backgroundColor = '#AE6767';
    
              const highlightedBoxes = document.querySelectorAll('.grid-box');
    
              highlightedBoxes.forEach((box) => {
                box.style.pointerEvents = 'none';
                if (box.style.backgroundColor === 'rgb(60, 58, 171)') {
                  box.style.backgroundColor = '#962525';
                }
              });
    
              console.log('YOU LOSE');
              clearInterval(timerId)
            }
          }, 5000);
          setTimerId(intervalId);
        }
    
        return () => {
          clearInterval(timerId);
        };
      }, [timerIsActive, drawingGrid, displayGrid]);
    
    useEffect(() => {
        if (JSON.stringify(drawingGrid) === JSON.stringify(displayGrid) && timerIsActive) {
        setGameState('isWon');

        const body = document.getElementById('body');
        body.style.backgroundColor = '#65BF63';

        const highlightedBoxes = document.querySelectorAll('.grid-box');

        highlightedBoxes.forEach((box) => {
        box.style.pointerEvents = 'none';

        if (box.style.backgroundColor === 'rgb(60, 58, 171)') {
            box.style.backgroundColor = 'green';
        }

        
        });

        const intervalId = setInterval(()=>{
            clearInterval(intervalId)
            props.isWon()
        },500);
        }

5
    }, [drawingGrid, displayGrid, timerIsActive]);



      return (
        <>
        
          <div
            id='game-container'
          >
            

            <DisplayGrid gridMatrix={displayGrid} />
            <DrawingGrid
              gridMatrix={drawingGrid}
              setDrawingGrid={setDrawingGrid}
              setTimerIsActive={setTimerIsActive}
            />
          </div>
        </>
      );
    }