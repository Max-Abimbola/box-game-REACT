import { useState, useEffect } from 'react';
import './styles/App.css';
import Game from './components/Game';
import randomString from './helpers/randomString.js';

function App() {
  const [stageNumber, setStageNumber] = useState(0);
  const [showComponent, setShowComponent] = useState(true);
  const [score, setScore] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const isWon = () => {
    setStageNumber(stageNumber + 1);
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const initializeAudioContext = () => {
    const audioContext = new AudioContext();
    // Use the audioContext as needed
  };

  useEffect(() => {
    // Initialize the audio context after the first user gesture
    initializeAudioContext();
  }, []);

  return (
    <>
      <button id="toggle-sound-button" onClick={toggleSound}>
        {soundEnabled ? 'Sound Enabled' : 'Sound Disabled'}
      </button>
      <Game
        soundEnabled={soundEnabled}
        isWon={isWon}
        stageGrid={[[1, 0, 0], [0, 0, 0], [0, 0, 0]]}
        key={stageNumber}
        score={score}
        incrementScore={incrementScore}
      />
    </>
  );
}

export default App;