import { useState} from 'react'
import '../styles/Menu.css'

import matchUrl from '../assets/match-title.png'
import boxUrl from '../assets/box-title.png'
import playUrl from '../assets/play-button.png'
import tutorialUrl from '../assets/tutorial-button.png'

export default function Menu(props){
    return (
        <div className='menu-container'>
            <div className='title-container'>
                <div id='match-title'>
                    MATCHBOX
                </div>
            </div>
            <div className='buttons-container'>
                <div id='play-button' onClick={props.showGame}>PLAY</div>
                <div id='tutorial-button' onClick={props.showTutorial}>TUTORIAL</div>
{/*                 <div id='gamemodes-button'>GAMEMODES</div> */}
            </div>

        </div>
    )
}