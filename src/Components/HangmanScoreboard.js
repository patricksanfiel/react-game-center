import React from 'react';

const HangmanScoreboard = (props) => {
    return(
        <div id="hangman-scoreboard">
            <span id="incorrect-guesses-display">Incorrect guesses: {props.playerIncorrectGuesses}</span>
            <span id="remaining-guesses-display">Remaining Guesses: {props.remainingGuesses}</span>
        </div>
    )
}

export default HangmanScoreboard;