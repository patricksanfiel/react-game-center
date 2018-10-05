import React from 'react';
import HangmanSetWordInput from './HangmanSetWordInput';
import HangmanGuessLetterInput from './HangmanGuessLetterInput';

const HangmanInput = (props) => {
        if (!props.toggleInput){
            return(
                <HangmanSetWordInput 
                    changed={ event => props.setWordChanged(event) }
                    setDoneButtonClicked={ event => props.setDoneButtonClicked(event) }
                    setQuitButtonClicked={ event => props.quitButtonClicked(event) }
                />
            )
        } else {
            return(
                <HangmanGuessLetterInput 
                    changed={ event => props.guessLetterChanged(event) }
                    guessQuitButtonClicked={ event => props.guessQuitButtonClicked(event) }
                />
            )
        }
}

export default HangmanInput;