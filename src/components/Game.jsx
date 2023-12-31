import { useState, useEffect, useRef } from 'react'
import DrawingGrid from './DrawingGrid.jsx'
import DisplayGrid from './DisplayGrid.jsx'
import ResultScreen from './ResultScreen.jsx'
import ReactHowler from 'react-howler'
import playSound from '../helpers/playSound.jsx'
import '../styles/Game.css'

import correctUrl from '../assets/correct-answer-sound-2.wav'
import incorrectUrl from '../assets/incorrect-answer.wav'


export default function Game(props){
  const generateInitialDrawingGrid = (dimensions) => {
    let grid = []
      for(let row = 0; row < dimensions; row++){
          let row = []
          for(let col = 0; col < dimensions; col++){
              row.push(0)
          }
          grid.push(row)
      }
      return grid
  
  }

  const initialGrid = generateInitialDrawingGrid(props.dimensions)

 

    const [drawingGrid, setDrawingGrid] = useState(initialGrid);
    const [displayGrid, setDisplayGrid] = useState(props.stageGrid)
    const [gameState, setGameState] = useState('isRunning')
    const [timerId, setTimerId] = useState(null)
    const [winningSoundIsPlaying, setWinningSoundIsPlaying] = useState(false)
    const [losingSoundIsPlaying, setLosingSoundIsPlaying] = useState(false)

    const [dimensions, setDimensions ] = useState(props.dimensions)
    const [time, setTime] = useState(props.time)
    const [timerIsActive, setTimerIsActive] = useState(true)
    
    const [showButtons, setShowButtons] = useState(false)

    const winColorChange = () => {
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

      
      })
    }

    const losingColorChange = () => {
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


    useEffect(() => {
      const intervalId = setTimeout(() => {
        setTimerIsActive(false)

        console.log("Time's up")
      }, time);

      return () => {
        console.log('time')
        clearTimeout(intervalId)
      }
      
    }, [displayGrid])

    useEffect(() => {
           
        if ((JSON.stringify(drawingGrid) !== JSON.stringify(displayGrid)) && timerIsActive === false) {
          setGameState('isLost')
          setShowButtons(true)
          console.log('LOSER!')

          setLosingSoundIsPlaying(true)
          losingColorChange()
        }

        


    }, [displayGrid,drawingGrid,timerIsActive]);
  

    useEffect(() => {
        
        if ((JSON.stringify(drawingGrid) === JSON.stringify(displayGrid)) && timerIsActive === true) {
          setGameState('isWon');
          const body = document.querySelector('body')

          setWinningSoundIsPlaying(true)
          
          props.incrementScore()

          

          winColorChange()
  
          const intervalId = setInterval(()=>{
              clearInterval(intervalId)
              body.style.backgroundColor = ''
              body.style.backgroundColor = '#7B71B8';
              console.log('fdf')

              props.isWon()
      
              

          },400);

          return () => {
            clearInterval(intervalId)
            setTimerId(intervalId)
          }
          }

    }, [displayGrid,drawingGrid]);







      return (
        <>

          <div id='game-container'>
            <ReactHowler 
            src={correctUrl}
            playing={winningSoundIsPlaying}
            rate={1.5}/>

            <ReactHowler 
            src={incorrectUrl}
            playing={losingSoundIsPlaying}
            rate={1}/>



            <ResultScreen time={time/1000}/>
            <DisplayGrid gridMatrix={displayGrid} 
                         dimensions={dimensions} 
            />
            <DrawingGrid
              gridMatrix={drawingGrid}
              setDrawingGrid={setDrawingGrid}
              dimensions={dimensions}
            />
            
            <h1 id='score-display'>{props.score}</h1>
            <h1>{props.key}</h1>
            {
              showButtons && 
              <div className='control-buttons-container'>
                  <button id='play-again-button' onClick={props.playAgain} onTouchStart={props.playAgain} >Play Again</button>
                  <button id='exit-button' onClick={props.exit} onTouchStart={props.exit}>Exit</button>
              </div>
            }
          </div>
        </>
      );
    }