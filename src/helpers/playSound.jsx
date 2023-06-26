import react from 'react'
import ReactHowler from 'react-howler'

/* import Sound from 'react-sound';
import soundFile from '../assets/correct-answer-sound-1.wav'

const playSound = () => {
    return <Sound url={soundFile} playStatus={Sound.status.PLAYING}/>
}

export default playSound */


const playSound = () => {
    return (
        <ReactHowler 
        src='src\assets\correct-answer-sound-1.wav'
        playing={true}/>
    )
}

export default playSound