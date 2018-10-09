import React from 'react';

const HangmanSetWordInput = (props) => {
    return(
        <div id="select-word-div" className="row">
            <div id="choose-category-div" className = "col-6">
                <span id="choose-category-header" className="select-word-subheader text">Choose a category</span>
                <div id="choose-category-buttons">
                    <button onClick={(event) => props.getDogs(event)} className="category-button text">Get dogs</button>
                    <button onClick={(event) => props.getCountry(event)} className="category-button text">Get Country</button>
                    <button onClick={(event)=> props.getPokemon(event)} className="category-button text">Get Pokemon</button>
                </div>
            </div>
            <div id="enter-word-div" className="col-6">
                <span id="set-word-header" className="select-word-subheader text">Enter a word to guess using only letters</span>
                <div id="enter-word-body">
                <input onChange={(event) => props.changed(event)} id="set-word-input"/>
                <div className="input-buttons-div">
                    <button id="set-word-done" className="set-word-button hangman-input-button text" onClick={ (event)=> props.setDoneButtonClicked(event)}>Done</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HangmanSetWordInput;