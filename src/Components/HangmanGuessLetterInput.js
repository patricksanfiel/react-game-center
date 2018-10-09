import React from 'react';

const HangmanGuessLetterInput = ( props ) => {
    return(
        <div id="guess-div" className="row black-border yellow-box-shadow">
            <span className="text black-border yellow-box-shadow" id="guess-letter-prompt">Type a letter to guess:</span>
            <div id="guess-div-input">
                <input onChange = { (event) => props.changed(event)} id="guess-letter-input" className="white-text yellow-box-shadow"/>
                <button id="guess-letter-quit" className="guess-letter-button hangman-input-button text black-border yellow-box-shadow" onClick = { event => props.guessQuitButtonClicked(event)}>
                    Quit
                </button>
            </div>
        </div>
    )
}

export default HangmanGuessLetterInput;