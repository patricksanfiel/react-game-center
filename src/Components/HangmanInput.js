import React from 'react';
import HangmanSetWordInput from './HangmanSetWordInput';
import HangmanGuessLetterInput from './HangmanGuessLetterInput';

const HangmanInput = (props) => {
        if (!props.toggleInput){
            return(
                <HangmanSetWordInput 
                    changed={ event => props.setWordChanged(event) }
                    clicked={ event => props.setWordClicked(event) }
                    quitButtonClicked={ event => props.quitButtonClicked(event) }
                />
            )
        } else {
            return(
                <HangmanGuessLetterInput 
                    changed={ event => props.guessLetterChanged(event) }
                    quitButtonClicked={ event => props.quitButtonClicked(event) }
                />
            )
        }
}

export default HangmanInput;