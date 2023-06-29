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


/* import soundFile from './assets/correct-answer-sound-1.wav' */


function App() {

/*   const [stageArray, setStageArray] = useState(randomString(1,null,null)) */

  const [stageNumber, setStageNumber] = useState(0)



  const [showGame, setShowGame] = useState(false)

  const [showMenu, setShowMenu] = useState(true)
  
  const [score, setScore] = useState(0)

  const [soundEnabled, setSoundEnabled] = useState(false)

  const [dimensions, setDimensions ] = useState(2)

  const [time, setTime] = useState (300)
  
  const [stageArray , setStageArray] = useState(randomString(dimensions,null,null))

  const [resetGame, setResetGame ] = useState(false)


  const showGameCallback = () => {
    setShowGame(true)
    setShowMenu(false)
  }

  const isWon = () => {
    setStageNumber(stageNumber + 1)
    
/*     if(stageNumber >= 5){
      setDimensions(3)
      setTime(3000)
    }
    if(stageNumber >= 10){
      setDimensions(4)
      setTime(5000)
    } */

    if(stageNumber >= 1){
      var randInt = Math.floor(Math.random() * (5-2)+2)

      if(randInt === 2){
        setTime(2000)
        setDimensions(randInt)
      }
      else if(randInt === 3){
        setTime(3000)
        setDimensions(randInt)
      }
      else {
        setTime(5000)
        setDimensions(randInt)
      }
    }

  }

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled)
  }

  const incrementScore = () => {
    setScore(score + 1)
  }
  const playAgain = () => {
    setResetGame(true);
  };

  useEffect(() => {
    if (resetGame) {
      console.log('SOIFNISONFINSOFISFHIOSIFHOSIHFIOSH')
      setStageNumber(1);
      setScore(0);
      setSoundEnabled(true);
      setDimensions(2);
      setTime(3000);
      setStageArray(randomString(dimensions, null, null));
      const body = document.querySelector('body');
      body.style.backgroundColor = '#7B71B8';
      setResetGame(false);
    }
  }, [resetGame]);



    return (
      <>
        {showMenu && <Menu showGame={showGameCallback}/>}
        {showGame && <Game soundEnabled={soundEnabled} 
                          isWon={isWon} stageGrid={randomString(dimensions,null,null)}
                          key={uuidv4()} 
                          score={score} 
                          incrementScore={incrementScore} 
                          dimensions={dimensions}
                          time={time}
                          playAgain={playAgain}
                          timer={true}
            
        />}
        
      </>
    )
}

export default App
