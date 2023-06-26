import { useState, useEffect, useRef } from 'react'
import DrawingGrid from './DrawingGrid.jsx'
import DisplayGrid from './DisplayGrid.jsx'
import ResultScreen from './ResultScreen.jsx'

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

    const score = useRef(0)
    const [scoreDisplay, setScoreDisplay] = useState(0)



    useEffect(() => {
      if(timerIsActive){
        
        if (JSON.stringify(drawingGrid) === JSON.stringify(displayGrid) && timerIsActive) {
          
          setGameState('isWon');

          
          props.incrementScore()
  
  
          const body = document.getElementById('body');
          body.style.backgroundColor = '#65BF63';
  
          const backgroundTimer = document.getElementById('result-screen')
          backgroundTimer.style.display = 'none'
  
  
          const highlightedBoxes = document.querySelectorAll('.grid-box');
  
          highlightedBoxes.forEach((box) => {
          box.style.pointerEvents = 'none';
  
          if (box.style.backgroundColor === 'rgb(60, 58, 171)') {
              box.style.backgroundColor = 'green';
          }
  
          
          });
  
          const intervalId = setInterval(()=>{
              clearInterval(intervalId)
              body.style.backgroundColor = ''
              body.style.backgroundColor = '#7B71B8';

              props.isWon()

          },250);
          }

      }


    }, [drawingGrid, displayGrid, timerIsActive]);


    useEffect(() => {
        if (timerIsActive) {


          const intervalId = setInterval(() => {
            

            
            if (JSON.stringify(drawingGrid) !== JSON.stringify(displayGrid)) {
              clearInterval(timerId)
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
    
              
            }

            

            
          }, 3000);

          setTimerId(intervalId);
        }
    
/*         return () => {
 
            clearInterval(timerId);
        }; */
      }, [timerIsActive, drawingGrid, displayGrid]);
    




      return (
        <>

          <div
            id='game-container'
          >
            <ResultScreen/>
            <DisplayGrid gridMatrix={displayGrid} />
            <DrawingGrid
              gridMatrix={drawingGrid}
              setDrawingGrid={setDrawingGrid}
              setTimerIsActive={setTimerIsActive}
            />
            <h1 id='score-display'>{props.score}</h1>
          </div>
        </>
      );
    }