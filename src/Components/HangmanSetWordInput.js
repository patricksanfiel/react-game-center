import React from 'react';

const HangmanSetWordInput = (props) => {
    return(
        <div id="selectWordDiv">
            <h1>Enter a word to guess</h1>
            <input onChange={(event) => props.changed(event)}/>
            <button onClick={ (event)=> props.clicked(event)}>Done</button>
        </div>
    )
}

export default HangmanSetWordInput;