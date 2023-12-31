
import { useState, useEffect } from 'react'
import './styles/App.css'
import Game from './components/Game'
import Menu from './components/Menu'
import ReactHowler from 'react-howler'
/* import playSound from './helpers/playSound.jsx' */
import randomString from './helpers/randomString.js'
import  { v4 as uuidv4} from 'uuid'
import selectUrl from './assets/select-sound.mp3'
import DisplayGrid from './components/DisplayGrid'
import Tutorial from './components/Tutorial'


/* import soundFile from './assets/correct-answer-sound-1.wav' */


function App() {

/*   const [stageArray, setStageArray] = useState(randomString(1,null,null)) */

  const [stageNumber, setStageNumber] = useState(0)



  const [showGame, setShowGame] = useState(false)

  const [showMenu, setShowMenu] = useState(true)

  const [showTutorial, setShowTutorial] = useState(false)
  
  const [score, setScore] = useState(0)

  const [soundEnabled, setSoundEnabled] = useState(false)

  const [dimensions, setDimensions ] = useState(2)

  const [time, setTime] = useState (1000)
  
  const [stageArray , setStageArray] = useState(randomString(dimensions,null,null))



  const showGameCallback = () => {
    setShowGame(true)
    setShowMenu(false)
  }

  const showTutorialCallback = () => {
    setShowMenu(!showMenu)
    setShowTutorial(!showTutorial)
/*     setShowMenu(false)
    setShowTutorial(true) */
    
  }

  const isWon = () => {
    setStageNumber(stageNumber + 1)

    if(10 >= score  >= 1){
      setTime(1500)
      setDimensions(2)
    }

    else if(score  >= 10){
      setTime(2000)
      setDimensions(3)
    }

    else if(score >= 30){
      setTime(3400)
      setDimensions(4)
    }

    if(score >= 40){
      var randInt = Math.floor(Math.random() * (5-2)+2)

      if(randInt === 2){
        setTime(1000)
        setDimensions(randInt)
      }
      else if(randInt === 3){
        setTime(2000)
        setDimensions(randInt)
      }
      else {
        setTime(3400)
        setDimensions(randInt)
      }
    }

  }


  const incrementScore = () => {
    setScore(score + 1)
  }
  const playAgain = () => {
    setStageNumber(stageNumber+1);
    setShowGame(true)
    setScore(0);
    setDimensions(2);
    setTime(1000);
    setStageArray(randomString(dimensions, null, null));
    const body = document.querySelector('body');
    body.style.backgroundColor = '#7B71B8';
  };

  const exit = () => {
    const body = document.querySelector('body')
    body.style.backgroundColor = ''
    body.style.backgroundColor = '#7B71B8';
    setScore(0)

    setShowGame(false)
    setShowMenu(true)
  }




    return (
      <>
        {showMenu && <Menu showGame={showGameCallback} showTutorial={showTutorialCallback}/>}
        {showGame && <Game soundEnabled={soundEnabled} 
                          isWon={isWon} 
                          stageGrid={randomString(dimensions,null,null)}
                          key={stageNumber /* key */} 
                          score={score} 
                          incrementScore={incrementScore} 
                          dimensions={dimensions}
                          time={time}
                          playAgain={playAgain}
                          exit={exit}
            
        />}
        {showTutorial && <Tutorial showTutorial={showTutorialCallback}/> }
        
      </>
    )
}

export default App
