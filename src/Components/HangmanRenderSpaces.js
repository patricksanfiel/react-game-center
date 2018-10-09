import React from 'react';
import HangmanSpace from './HangmanSpace';

const HangmanRenderSpaces = (props) => {
    if (props.wordToGuess.length>1) {
        let wordToGuess = props.wordToGuess;
        let playerCorrectGuesses = props.playerCorrectGuesses;
        let id = 0;
        return wordToGuess.map(letter => {
          id++;
          //If the element at the current position matches a letter in the playerCorrectGuesses
          //array, the element's value will be rendered in a HangmanSpace component in this position.
          if (playerCorrectGuesses.indexOf(letter) > -1 || letter === " ") {
            return <HangmanSpace spaceValue={letter} key={id} />;
          }
          // If the element at the current position does not match any letter in the
          // playerCorrectGuesses array(meaning it has not yet been guessed by the user)
          // A span element containing a blank space will be rendered in its place
          else {
            return (
              <HangmanSpace spaceValue="_" key={id} />
            );
          }
        });
      }
      // If a word to be guessed has not yet been entered by a user, they will be prompted to
      // Choose or enter one
      else {
        return <p id="render-spaces-enter-word-prompt" className="white-text">Please choose a category or enter a word or phrase consisting of two or more letters</p>;
      }
}

export default HangmanRenderSpaces;