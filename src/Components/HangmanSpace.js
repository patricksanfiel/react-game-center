import React from 'react';

const HangmanSpace = (props) => {
    return(
        <span className="letter-space">{props.spaceValue}</span>
    )
}

export default HangmanSpace;