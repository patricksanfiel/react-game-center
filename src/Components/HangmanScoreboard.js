import React from 'react';

const HangmanScoreboard = (props) => {
    return(
        <div id="hangman-scoreboard">
            <h3>Incorrect guesses: {props.playerIncorrectGuesses}</h3>
            <h3>Remaining Guesses: {props.remainingGuesses}</h3>
        </div>
    )
}

export default HangmanScoreboard;