import { useState, useEffect } from 'react'
import './styles/App.css'
import Game from './components/Game'
import randomString from './helpers/randomString'

function App() {
  const [stageArray, setStageArray] = useState(randomString(1,null,null))

  const [stageNumber, setStageNumber] = useState(0)

  const [showComponent, setShowComponent] = useState(true)
  
  const [score, setScore] = useState(0)

  const isWon = () => {
    setStageNumber(stageNumber + 1)
    const body = document.getElementById('body');

/*     setStageArray(randomString(1,null,null)) */
  }

  const incrementScore = () => {
    setScore(score + 1)
  }


    return (
      <>
        {showComponent && <Game isWon={isWon} stageGrid={randomString(1,null,null)} key={stageNumber} score={score} incrementScore={incrementScore}/>}
      </>
    )
}

export default App
