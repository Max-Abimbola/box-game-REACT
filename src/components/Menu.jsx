import { useState} from 'react'
import '../styles/Menu.css'
export default function Menu(props){
    return (
        <div className='menu-container'>
            <div className='title-container'>
                <div id='match-title-container'>
                    <img id='match-title' src="src\assets\match-title.png" alt="match-title"/>
                </div>
                <div id='box-title-container'>
                    <img id='box-title' src="src\assets\box-title.png" alt="box-title" />
                </div>
            </div>
            <div className='buttons-container'>
                <div id='play-button-container'><img onClick={props.showGame} id='play-button' src="src\assets\play-button.png" alt="play-button"/></div>
                <div id='tutorial-button-container'><img id='tutorial-button' src="src\assets\tutorial-button.png" alt="tutorial-button" srcset="" /></div>
            </div>

        </div>
    )
}