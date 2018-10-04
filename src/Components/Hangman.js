import React, { Component } from 'react';
import "../assets/stylesheets/Hangman.css";
import HangmanCanvas from './HangmanCanvas';

class Hangman extends Component{
    render(){
        return(
            <div>
                <HangmanCanvas />
            </div>
        )
    }
}

export default Hangman;