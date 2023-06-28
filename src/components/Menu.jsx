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
                <div id='match-title-container'>
                    <img id='match-title' src={matchUrl} alt="match-title"/>
                </div>
                <div id='box-title-container'>
                    <img id='box-title' src={boxUrl} alt="box-title" />
                </div>
            </div>
            <div className='buttons-container'>
                <div id='play-button-container'><img onClick={props.showGame} id='play-button' src={playUrl} alt="play-button"/></div>
                <div id='tutorial-button-container'><img id='tutorial-button' src={tutorialUrl} alt="tutorial-button"  /></div>
            </div>

        </div>
    )
}