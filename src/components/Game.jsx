import { useState, useEffect, useRef } from 'react'
import DrawingGrid from './DrawingGrid.jsx'
import DisplayGrid from './DisplayGrid.jsx'
import ResultScreen from './ResultScreen.jsx'
import ReactHowler from 'react-howler'
import playSound from '../helpers/playSound.jsx'
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
    const [winningSoundIsPlaying, setWinningSoundIsPlaying] = useState(false)
    const [losingSoundIsPlaying, setLosingSoundIsPlaying] = useState(false)

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
        

        
        if (JSON.stringify(drawingGrid) !== JSON.stringify(displayGrid)) {
      


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

        

        
      }, 300000);

      return () => {
        clearTimeout(intervalId)
        setTimerId(intervalId)
      }

      ;

  
/*         return () => {

          clearInterval(timerId);
      }; */
    }, []);
  

    useEffect(() => {
      if(timerIsActive){

        

        
        if (JSON.stringify(drawingGrid) === JSON.stringify(displayGrid) && timerIsActive) {
          setGameState('isWon');

          
          props.incrementScore()

          setWinningSoundIsPlaying(true)
  
  
/*           const body = document.getElementById('body');
          body.style.backgroundColor = '#65BF63';
  
          const backgroundTimer = document.getElementById('result-screen')
          backgroundTimer.style.display = 'none'
  
  
          const highlightedBoxes = document.querySelectorAll('.grid-box');
  
          highlightedBoxes.forEach((box) => {
          box.style.pointerEvents = 'none';
  
          if (box.style.backgroundColor === 'rgb(60, 58, 171)') {
              box.style.backgroundColor = 'green';
          }
  
          
          }); */

          winColorChange()
  
          const intervalId = setInterval(()=>{
              clearInterval(intervalId)
              body.style.backgroundColor = ''
              body.style.backgroundColor = '#7B71B8';

              props.isWon()
              return
              

          },400);

          return () => {
            clearTimeout(intervalId)
            setTimerId(intervalId)
          }
          }

          

      }

      


    }, [drawingGrid]);







      return (
        <>
{/*           <ReactHowler 
          src='src\assets\correct-answer-sound-1.wav'
          
          
          playing={true}/> */}

          <div id='game-container'>
            <ReactHowler 
            /* src='src\assets\correct-answer-sound-1.wav' */
            src='src/assets/correct-answer-sound-2.wav'
            playing={winningSoundIsPlaying}
            rate={1.5}/>
            <ReactHowler 
            /* src='src\assets\correct-answer-sound-1.wav' */
            src='src/assets/incorrect-answer.wav'
            playing={losingSoundIsPlaying}
            rate={1}/>
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