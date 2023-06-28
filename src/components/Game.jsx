import { useState, useEffect, useRef } from 'react'
import DrawingGrid from './DrawingGrid.jsx'
import DisplayGrid from './DisplayGrid.jsx'
import ResultScreen from './ResultScreen.jsx'
import ReactHowler from 'react-howler'
import playSound from '../helpers/playSound.jsx'
import '../styles/Game.css'

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

 

    const [stageNumber, setStageNumber] = useState(0)
    const [drawingGrid, setDrawingGrid] = useState(initialGrid);
    const [displayGrid, setDisplayGrid] = useState(props.stageGrid)
    const [gameState, setGameState] = useState('isRunning')
    const [timerId, setTimerId] = useState(null)
    const [winningSoundIsPlaying, setWinningSoundIsPlaying] = useState(false)
    const [losingSoundIsPlaying, setLosingSoundIsPlaying] = useState(false)
    const [dimensions, setDimensions ] = useState(props.dimensions)
    const [time, setTime] = useState(props.time)
    const [timerIsActive, setTimerIsActive] = useState(true)

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

    useEffect(() => {
      const intervalId = setTimeout(() => {
        setTimerIsActive(false)
        console.log('wtf')
      }, time);

      return () => {
        clearTimeout(intervalId)
        setTimerId(intervalId)
      }
      
    }, [displayGrid])

    useEffect(() => {
           
        if (JSON.stringify(drawingGrid) !== JSON.stringify(displayGrid) && timerIsActive === false) {
      


          setLosingSoundIsPlaying(true)

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

        


    }, [drawingGrid]);
  

    useEffect(() => {
        
        if (JSON.stringify(drawingGrid) === JSON.stringify(displayGrid) && timerIsActive === true) {
          setGameState('isWon');

          
          props.incrementScore()

          setWinningSoundIsPlaying(true)

          winColorChange()
  
          const intervalId = setInterval(()=>{
              clearInterval(intervalId)
              body.style.backgroundColor = ''
              body.style.backgroundColor = '#7B71B8';

              props.isWon()
      
              

          },400);

          return () => {
            clearTimeout(intervalId)
            setTimerId(intervalId)
          }
          }

    }, [drawingGrid]);







      return (
        <>

          <div id='game-container'>
            <ReactHowler 
            /* src='src\assets\correct-answer-sound-1.wav' */
            src='src/assets/correct-answer-sound-2.wav'
/*             src='https://github.com/Max-Abimbola/box-game-REACT/blob/master/src/assets/correct-answer-sound-2.wav' */
            playing={winningSoundIsPlaying}
            rate={1.5}/>
            <ReactHowler 
            /* src='src\assets\correct-answer-sound-1.wav' */
            src='src/assets/incorrect-answer.wav'
           /*  src='https://github.com/Max-Abimbola/box-game-REACT/blob/master/src/assets/incorrect-answer.wav' */
            playing={losingSoundIsPlaying}
            rate={1}/>
            <ResultScreen time={time/1000}/>
            <DisplayGrid gridMatrix={displayGrid} dimensions={dimensions}/>
            <DrawingGrid
              gridMatrix={drawingGrid}
              setDrawingGrid={setDrawingGrid}
              dimensions={dimensions}
            />
            
            <h1 id='score-display'>{props.score}</h1>
          </div>
        </>
      );
    }