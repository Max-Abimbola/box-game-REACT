import { useState } from 'react'
import './App.css'
import Grid from './components/Grid.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid/>
    </>
  )
}

export default App
