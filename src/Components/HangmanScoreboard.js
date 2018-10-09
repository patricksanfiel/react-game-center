import React from 'react';

const HangmanScoreboard = (props) => {
    return(
        <div id="hangman-scoreboard" className="row">
            <span id="incorrect-guesses-display" className="text col-6">Incorrect guesses: {props.playerIncorrectGuesses}</span>
            <span id="remaining-guesses-display" className="text col-6">Remaining Guesses: {props.remainingGuesses}</span>
        </div>
    )
}

export default HangmanScoreboard;