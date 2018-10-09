import React from 'react';

const HangmanGuessLetterInput = ( props ) => {
    return(
        <div id="guess-div" className="row">
            <span className="text" id="guess-letter-prompt">Type a letter to guess:</span>
            <div id="guess-div-input">
                <input onChange = { (event) => props.changed(event)} id="guess-letter-input"/>
                <button id="guess-letter-quit" className="guess-letter-button hangman-input-button text" onClick = { event => props.guessQuitButtonClicked(event)}>
                    Quit
                </button>
            </div>
        </div>
    )
}

export default HangmanGuessLetterInput;