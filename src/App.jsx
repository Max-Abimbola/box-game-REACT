import { useState, useEffect } from 'react'
import './styles/App.css'
import Game from './components/Game'

function App() {
  const [stageArray, setStageArray] = useState([
    [
        [1,0,0],
        [0,0,0],
        [0,0,0]
    ],
    [
        [0,0,1],
        [0,0,1],
        [1,0,1]
    ],
    [
        [0,0,1],
        [0,1,0],
        [0,0,0]
    ]
  ])

  const [stageNumber, setStageNumber] = useState(0)

  const [showComponent, setShowComponent] = useState(true)

  const isWon = () => {
    console.log('wtf?')
    setStageNumber(stageNumber + 1)
    const gameContainer = document.getElementById('game-container')
    const body = document.getElementById('body');
    body.style.backgroundColor = ''
    body.style.backgroundColor = '#7B71B8';
  }

    return (
      <>
        {showComponent && <Game isWon={isWon} stageGrid={stageArray[stageNumber]} key={stageNumber}/>}
      </>
    )
}

export default App
