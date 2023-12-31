import {useEffect, useState} from 'react'
import loseGameUrl from '/src/assets/lose-game.gif'
import winGameUrl from '/src/assets/win-game.gif'
import '../styles/Tutorial.css'

export default function Tutorial(props){
    return(
        <>
            <h1 id='welcome-message'>WELCOME TO MATCHBOX!</h1>
            <div className='tutorial-message'>
                    <p id='tut-1'>The aim of the game is to... match the boxes.</p> 
                    <p id='tut-2'>You do this by clicking on the boxes in the bottom grid so they match the boxes in the top grid.</p>

                    <p id='tut-3'>Make sure you do it before the time runs out though or the game will end.</p>

                    <p id='tut-4'>Have fun!</p>
                    <p id='tut-5'>-M</p>
                    <img id='lose-game-img' src={loseGameUrl}></img>
                    <img id='win-game-img' src={winGameUrl}></img>
                    <button onClick={props.showTutorial} id='exit-button'>Menu</button>
            </div>

            

        </>
    )
}