import React from 'react';
import HangmanSpace from './HangmanSpace';

const HangmanRenderSpaces = (props) => {
    if (props.wordToGuess.length) {
        let wordToGuess = props.wordToGuess;
        let playerCorrectGuesses = props.playerCorrectGuesses;
        let id = 0;
        // Iterate through a variable set equal to the word to be guessed
        return wordToGuess.map(letter => {
          id++;
          //If the element at the current position matches a letter in the playerCorrectGuesses
          //array, the element's value will be rendered in a HangmanSpace component in this position.
          if (playerCorrectGuesses.indexOf(letter) > -1) {
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
      // If a word to be guessed has not yet been entered by a user
      else {
        return <p>No word entered yet</p>;
      }
}

export default HangmanRenderSpaces;