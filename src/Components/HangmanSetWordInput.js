import React from 'react';

const HangmanSetWordInput = (props) => {
    return(
        <div id="selectWordDiv">
            <span id="set-word-header">Enter a word to guess</span>
            <input onChange={(event) => props.changed(event)}/>
            <div className="input-buttons-div">
                <button id="set-word-done" className="set-word-button hangman-input-button" onClick={ (event)=> props.clicked(event)}>Done</button>
                <button id="set-word-quit" className="set-word-button hangman-input-button" onClick={(event) => props.quitButtonClicked(event)}>Quit</button>
            </div>
        </div>
    )
}

export default HangmanSetWordInput;