import React from 'react';
import HangmanSetWordInput from './HangmanSetWordInput';
import HangmanGuessLetterInput from './HangmanGuessLetterInput';

const HangmanInput = (props) => {
        if (!props.hideInput){
            return(
                <HangmanSetWordInput 
                    changed={ event => props.guessWordChanged(event) }
                    clicked={ event => props.clicked(event) }
                />
            )
        } else {
            return(
                <HangmanGuessLetterInput 
                    changed={ event => props.guessLetterChanged(event) }
                    clicked={ event => props.clicked(event) }
                />
            )
        }
}

export default HangmanInput;