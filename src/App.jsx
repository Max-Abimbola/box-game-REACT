import { useState } from 'react'
import './styles/App.css'
import Game from './components/Game'
/* import playSound from './helpers/playSound.jsx' */
import randomString from './helpers/randomString.js'


/* import soundFile from './assets/correct-answer-sound-1.wav' */


function App() {

/*   const [stageArray, setStageArray] = useState(randomString(1,null,null)) */

  const [stageNumber, setStageNumber] = useState(0)

  const [showComponent, setShowComponent] = useState(true)
  
  const [score, setScore] = useState(0)

  const [soundEnabled, setSoundEnabled] = useState(false)

  const [dimensions, setDimensions ] = useState(2)

  const [time, setTime] = useState (3000)

  const isWon = () => {
    setStageNumber(stageNumber + 1)
/*     if(stageNumber >= 10){
      setDimensions(3)
      setTime(3000)
    }
    if(stageNumber >= 40){
      setDimensions(4)
      setTime(5000)
    }
    if(stageNumber >= 50){
      setDimensions(5)
      setTime(6000)
    } */

/*     if(stageNumber >= 1){
      setDimensions(Math.floor(Math.random() * (6-2)+2))
    } */
    const body = document.getElementById('body');

  }

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled)
  }

  const incrementScore = () => {
    setScore(score + 1)
  }



    return (
      <>
        <Game soundEnabled={soundEnabled} 
              isWon={isWon} stageGrid={randomString(dimensions,null,null)}
              key={stageNumber} 
              score={score} 
              incrementScore={incrementScore} 
              dimensions={dimensions}
              time={time}
        />
        
      </>
    )
}

export default App
