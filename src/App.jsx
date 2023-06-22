import { useState } from 'react'
import './styles/App.css'
import Game from './components/Game'

function App() {
  const [stageArray, setStageArray] = useState([
    [
        [1,0,1],
        [0,1,1],
        [1,0,1]
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

  return (
    <>
      <Game stageArray={stageArray}/>
    </>
  )
}

export default App
