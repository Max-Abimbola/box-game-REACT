import { useState, useEffect } from 'react';
import '../styles/ResultScreen.css'


export default function ResultScreen(props){
    return (
        <div style={{animationDuration: `${props.time}s`}} className='result-screen-three-seconds' id='result-screen'>
        </div>
    )
}