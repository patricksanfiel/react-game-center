import React from 'react';

const HangmanGuessLetterInput = ( props ) => {
    return(
        <div id="guessDiv">
            <h1>Type a letter to guess:</h1>
            <input onChange = { (event) => props.changed(event)}/>
            <button onClick = { event => props.clicked(event)}>Restart</button>
        </div>
    )
}

export default HangmanGuessLetterInput;