import React, { Component } from "react";
import "../assets/stylesheets/Hangman.css";
import HangmanCanvas from "./HangmanCanvas";
import HangmanRenderSpaces from "./HangmanRenderSpaces";
import HangmanInput from "./HangmanInput";
import HangmanScoreboard from "./HangmanScoreboard";

class Hangman extends Component {
  state = {
    wordToGuess: [],
    playerCorrectGuesses: [],
    playerIncorrectGuesses: [],
    remainingGuesses: 6,
    gameOn: true,
    gameWon: false,
    showCanvas: true,
    toggleInput: false
  };

  componentDidUpdate() {
    this.checkProgress();
  }

  playGame() {
    if (this.state.gameOn) {
      return (
        <div>
          <div id="player-feedback-div">
            <HangmanScoreboard
              playerIncorrectGuesses={this.state.playerIncorrectGuesses}
              remainingGuesses={this.state.remainingGuesses}
            />
            <HangmanCanvas
              remainingGuesses={this.state.remainingGuesses}
              gameOn={this.state.gameOn}
              showCanvas={this.state.showCanvas}
            />
          </div>
          <div id="display-guess-word">
            <HangmanRenderSpaces
              wordToGuess={this.state.wordToGuess}
              playerCorrectGuesses={this.state.playerCorrectGuesses}
            />
          </div>
          <HangmanInput
            setWordChanged={event => this.setGuessWord(event)}
            setWordClicked={event => {
              this.toggleInput(event);
              this.setState({ showCanvas: true });
            }}
            quitButtonClicked={event => {
              this.setState({ gameOn: false, showCanvas: false });
            }}
            toggleInput={this.state.toggleInput}
            guessLetterChanged={event => this.guessLetter(event)}
          />
        </div>
      );
    } else if (this.state.gameWon) {
      return <h1>You win</h1>;
    } else {
      return (
        <div>
          <h1>Game Over</h1>
          <button onClick={event => this.restartGame(event)}>
            Play Again?
          </button>
        </div>
      );
    }
  }

  // As the user types in the input element, wordToGuess is updated.
  // When the user clicks the Done button under the input field, the field is hidden
  // To prevent accidental updating
  setGuessWord(event) {
    let wordToGuess = event.target.value;
    wordToGuess = wordToGuess.split("");
    this.setState({ wordToGuess: wordToGuess });
  }

  // Method used to set the hideInput state property
  toggleInput(event) {
    let toggleInput = !this.state.toggleInput;
    if (this.state.toggleInput) {
      this.restartGame();
    } else {
      this.setState({ toggleInput: toggleInput });
    }
  }

  // Everytime a user enters a letter into the Guess A Letter input, this method is triggered
  guessLetter(event) {
    // Store user input to a variable
    let letter = event.target.value;
    // Store state values that will be involved in checking against the user input
    let wordToGuess = this.state.wordToGuess;
    let playerCorrectGuesses = [...this.state.playerCorrectGuesses];
    let playerIncorrectGuesses = [...this.state.playerIncorrectGuesses];
    // remainingGuesses will be used to trigger a game over if it ever reaches zero
    let remainingGuesses = this.state.remainingGuesses;
    // indexOf returns an element's index in an array or a -1 if the element does not exist in the array
    // If the current guess is not included in the array of the player's past correct guesses and
    // is included in the array of the word to be guessed, add the current guess to the array of correct guesses
    if (
      playerCorrectGuesses.indexOf(letter) === -1 &&
      wordToGuess.indexOf(letter) > -1
    ) {
      for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === letter) {
          playerCorrectGuesses.push(letter);
        }
      }
      this.setState({ playerCorrectGuesses: playerCorrectGuesses });
    }
    // Otherwise, the remainingGuesses counter will be decreased by one and the guess will be
    // added to an array of incorrect guesses
    else if (
      playerIncorrectGuesses.indexOf(letter) === -1 &&
      playerCorrectGuesses.indexOf(letter) === -1
    ) {
      remainingGuesses -= 1;
      playerIncorrectGuesses.push(letter);
      this.setState({
        playerIncorrectGuesses: playerIncorrectGuesses,
        remainingGuesses: remainingGuesses
      });
    }
    // After each input event, the input element's value is reset to null
    event.target.value = null;
  }

  checkProgress() {
    let remainingGuesses = this.state.remainingGuesses;
    let gameWon = this.state.gameWon;
    let wordToGuess = this.state.wordToGuess;
    let playerCorrectGuesses = this.state.playerCorrectGuesses;
    if (
      wordToGuess.length === playerCorrectGuesses.length &&
      wordToGuess.length >= 1 &&
      gameWon === false
    ) {
      gameWon = true;
    //   console.log(gameWon);
      this.setState({ remainingGuesses: 6, gameOn: false, gameWon: gameWon });
    } else if (remainingGuesses < 1) {
      this.setState({ remainingGuesses: 6, gameOn: false });
    }
  }

  restartGame(event) {
    let resetArray = [];
    this.setState({
      wordToGuess: resetArray,
      playerCorrectGuesses: resetArray,
      playerIncorrectGuesses: resetArray,
      gameOn: true,
      gameWon: false,
      toggleInput: false,
      showCanvas: true,
      remainingGuesses: 6
    });
  }

  render() {
    return <div>{this.playGame()}</div>;
  }
}

export default Hangman;
