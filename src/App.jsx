import { useState, useEffect } from 'react'
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

  const isWon = () => {
    setStageNumber(stageNumber + 1)
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
      <div>

      </div>

        <Game soundEnabled={soundEnabled} isWon={isWon} stageGrid={[[1,0,0],[0,0,0],[0,0,0]]/* randomString(1,null,null) */} key={stageNumber} score={score} incrementScore={incrementScore}/>
        
      </>
    )
}

export default App
