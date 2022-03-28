import React from 'react'
import troll from '../images/troll.png'

export default function Navbar() {
    return (
        <nav>
            <div className="left">
            <img src={troll} alt="Troll Face"/>
            <h1>Meme Generator</h1>
            </div>
            <div className="right">
                <p>React Course - Project 3</p>
            </div>
        </nav>
    )
}
