import { useState, useEffect } from 'react'
import DrawingGrid from './DrawingGrid.jsx'
import DisplayGrid from './DisplayGrid.jsx'
import '../styles/Game.css'

export default function Game(props){

    const initialDrawingGrid = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
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
            clearInterval(intervalId);
    
            if (
              JSON.stringify(drawingGrid) !== JSON.stringify(displayGrid) &&
              timerIsActive === true
            ) {
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
            }
          }, 5000);
          setTimerId(intervalId);
        }
    
        return () => {
          clearInterval(timerId);
        };
      }, [timerIsActive, drawingGrid, displayGrid]);
    
    useEffect(() => {
    if (
        JSON.stringify(drawingGrid) === JSON.stringify(displayGrid) &&
        timerIsActive === true
    ) {
        setGameState('isWon');

        props.isWon()

        const body = document.getElementById('body');
        body.style.backgroundColor = '#65BF63';

        const highlightedBoxes = document.querySelectorAll('.grid-box');

        highlightedBoxes.forEach((box) => {
        box.style.pointerEvents = 'none';
        if (box.style.backgroundColor === 'rgb(60, 58, 171)') {
            box.style.backgroundColor = 'green';
        }
        });

        console.log('YOU WIN');

    }
    }, [drawingGrid, displayGrid, timerIsActive]);


      return (
        <>
          <div
            className={
              gameState === 'isWon'
                ? 'winning-screen'
                : gameState === 'isLost'
                ? 'losing-screen'
                : null
            }
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