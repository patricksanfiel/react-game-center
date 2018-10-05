import React from 'react';

const HangmanGuessLetterInput = ( props ) => {
    return(
        <div id="guessDiv">
            <h1>Type a letter to guess:</h1>
            <input onChange = { (event) => props.changed(event)}/>
            <button className="guess-letter-button hangman-input-button"onClick = { event => props.quitButtonClicked(event)}>Quit</button>
        </div>
    )
}

export default HangmanGuessLetterInput;