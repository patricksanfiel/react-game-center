import React from 'react';

const HangmanSpace = (props) => {
    return(
        <span className="letter-space white-text">{props.spaceValue}</span>
    )
}

export default HangmanSpace;