import { useState, useEffect } from 'react'
import './styles/App.css'
import Game from './components/Game'
/* import playSound from './helpers/playSound.jsx' */
import randomString from './helpers/randomString.js'


/* import soundFile from './assets/correct-answer-sound-1.wav' */


function App() {

  const [stageArray, setStageArray] = useState(randomString(1,null,null))

  const [stageNumber, setStageNumber] = useState(0)

  const [showComponent, setShowComponent] = useState(true)
  
  const [score, setScore] = useState(0)

  const isWon = () => {
    setStageNumber(stageNumber + 1)
/*     playSound() */
    const body = document.getElementById('body');

  }

  const incrementScore = () => {
    setScore(score + 1)
  }

/*   const playSound = () => {
    howl.play()
  } */

    return (
      <>
        {showComponent && <Game isWon={isWon} stageGrid={randomString(1,null,null)} key={stageNumber} score={score} incrementScore={incrementScore}/>}
        
      </>
    )
}

export default App
