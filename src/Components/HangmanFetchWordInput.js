import React from 'react';

const HangmanFetchWordInput = (props) => {
    return (
        <div id="fetch-word-input">
            <button onClick={(event) => props.getDogs(event)}>Get dogs</button>
            <button onClick={(event) => props.getCountry(event)}>Get Country</button>
            <button onClick={(event)=> props.getPokemon(event)}>Get Pokemon</button>
        </div>
    )
}



export default HangmanFetchWordInput