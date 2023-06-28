import { useState } from 'react'
import './styles/App.css'
import Game from './components/Game'
import Menu from './components/Menu'
/* import playSound from './helpers/playSound.jsx' */
import randomString from './helpers/randomString.js'


/* import soundFile from './assets/correct-answer-sound-1.wav' */


function App() {

/*   const [stageArray, setStageArray] = useState(randomString(1,null,null)) */

  const [stageNumber, setStageNumber] = useState(0)

  const [showGame, setShowGame] = useState(false)

  const [showMenu, setShowMenu] = useState(true)
  
  const [score, setScore] = useState(0)

  const [soundEnabled, setSoundEnabled] = useState(false)

  const [dimensions, setDimensions ] = useState(2)

  const [time, setTime] = useState (3000)

  const showGameCallback = () => {
    setShowGame(true)
    setShowMenu(false)
  }

  const isWon = () => {
    setStageNumber(stageNumber + 1)
    if(stageNumber >= 5/* 10 */){
      setDimensions(3)
      setTime(3000)
    }
    if(stageNumber >= 10/* 40 */){
      setDimensions(4)
      setTime(5000)
    }
    if(stageNumber >= 15/* 50 */){
      setDimensions(5)
      setTime(6000)
    }

    if(stageNumber >= 20/* 60 */){
      var randInt = Math.floor(Math.random() * (6-2)+2)

      if(randInt === 3){
        setTime(3)
      }
      else if(randInt === 4){
        setTime(5)
      }
      else {
        setTime(6)
      }
      setDimensions(randInt)
    }

  }

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled)
  }

  const incrementScore = () => {
    setScore(score + 1)
  }



    return (
      <>
        {showMenu && <Menu showGame={showGameCallback}/>}
        {showGame && <Game soundEnabled={soundEnabled} 
                          isWon={isWon} stageGrid={randomString(dimensions,null,null)}
                          key={stageNumber} 
                          score={score} 
                          incrementScore={incrementScore} 
                          dimensions={dimensions}
                          time={time}
        />}
        
      </>
    )
}

export default App
