import React from 'react';

const HangmanSetWordInput = (props) => {
    return(
        <div id="select-word-div" className="row">
            <div id="choose-category-div" className = "col-6">
                <span id="choose-category-header" className="select-word-subheader text yellow-box-shadow">Choose a category</span>
                <div id="choose-category-buttons">
                    <button onClick={(event) => props.getDogs(event)} className="category-button text black-border yellow-box-shadow">Random Dog Breed</button>
                    <button onClick={(event) => props.getCountry(event)} className="category-button text black-border yellow-box-shadow">Random Country</button>
                    <button onClick={(event)=> props.getPokemon(event)} className="category-button text black-border yellow-box-shadow">Random Pokemon</button>
                </div>
            </div>
            <div id="enter-word-div" className="col-6">
                <span id="set-word-header" className="select-word-subheader text black-border">Enter a word to guess using only letters</span>
                <div id="enter-word-body">
                <input onChange={(event) => props.changed(event)} id="set-word-input" className="white-text yellow-box-shadow"/>
                <div className="input-buttons-div">
                    <button id="set-word-done" className="set-word-button hangman-input-button text black-border yellow-box-shadow" onClick={ (event)=> props.setDoneButtonClicked(event)}>Done</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HangmanSetWordInput;