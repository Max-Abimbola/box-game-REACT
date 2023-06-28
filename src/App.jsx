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
    if(stageNumber >= 10){
      setDimensions(3)
/*       setTime(3) */
    }
    if(stageNumber >= 11){
      setDimensions(4)
/*       setTime(5) */
    }
    if(stageNumber >= 12){
      setDimensions(5)
/*       setTime(6) */
    }
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
