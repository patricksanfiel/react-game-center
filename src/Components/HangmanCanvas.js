import React, { Component } from "react";
import HangmanSpace from "./HangmanSpace";
import HangmanInput from "./HangmanInput";
import HangmanScoreboard from "./HangmanScoreboard";

class HangmanCanvas extends Component {
  state = {
    wordToGuess: [],
    playerCorrectGuesses: [],
    playerIncorrectGuesses: [],
    remainingGuesses: 6,
    gameOn: true,
    toggleInput: false
  };

  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }

  playGame() {
    let remainingGuesses = this.state.remainingGuesses;
    if (remainingGuesses < 1) {
      this.setState({ remainingGuesses: 6, gameOn: false });
    }
    if (this.state.gameOn) {
      return (
        <div>
          <canvas id="hangman-canvas" />
          {this.renderSpaces()}
          <HangmanInput
            guessWordChanged={event => this.setGuessWord(event)}
            clicked={event => this.toggleInput(event)}
            hideInput={this.state.toggleInput}
            guessLetterChanged={event => this.guessLetter(event)}
          />
          <HangmanScoreboard
            playerIncorrectGuesses={this.state.playerIncorrectGuesses}
            remainingGuesses={this.state.remainingGuesses}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Game Over</h1>
          <button onClick={event => this.restartGame(event)}>Try Again</button>
        </div>
      );
    }
  }
  restartGame(event) {
    let resetArray = [];
    this.setState({
      wordToGuess: resetArray,
      playerCorrectGuesses: resetArray,
      playerIncorrectGuesses: resetArray,
      gameOn: true,
      toggleInput: false,
      remainingGuesses: 6
    });
  }
  updateCanvas() {
    let myCanvas = document.getElementById("hangman-canvas");
    if (myCanvas) {
      let context = myCanvas.getContext("2d");
      context.fillStyle = "black";
      context.fillRect(0, 0, 800, 500);
      // Gallows Floor
      context.strokeStyle = "white";
      context.moveTo(100, 80);
      context.lineTo(150, 80);
      context.stroke();
      // Gallows Pole
      context.moveTo(125, 80);
      context.lineTo(125, 15);
      context.stroke();
      // Rope
      context.moveTo(125, 15);
      context.lineTo(150, 35);
      context.stroke();
      if (this.state.remainingGuesses < 6) {
        // Head
        context.beginPath();
        context.arc(150, 40, 5, 0, 2 * Math.PI);
        context.stroke();
      }
      if (this.state.remainingGuesses < 5) {
        // Torso
        context.moveTo(150, 45);
        context.lineTo(150, 60);
        context.stroke();
      }
      if (this.state.remainingGuesses < 4) {
        // Left Arm
        context.moveTo(150, 45);
        context.lineTo(142, 52);
        context.stroke();
      }
      if (this.state.remainingGuesses < 3) {
        // Right Arm
        context.moveTo(150, 45);
        context.lineTo(158, 52);
        context.stroke();
      }
      if (this.state.remainingGuesses < 2) {
        // Left Leg
        context.moveTo(150, 60);
        context.lineTo(142, 67);
        context.stroke();
      }
      if (this.state.remainingGuesses < 1) {
        // Right Leg
        context.moveTo(150, 60);
        context.lineTo(158, 67);
        context.stroke();
      }
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

  // Method which renders either blank spaces, or
  // correctly guessed letters corresponding to the word to be guessed
  renderSpaces() {
    if (this.state.wordToGuess.length) {
      let wordToGuess = this.state.wordToGuess;
      let playerCorrectGuesses = this.state.playerCorrectGuesses;
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
            <HangmanSpace className="letter-space" spaceValue="_" key={id} />
          );
        }
      });
    }
    // If a word to be guessed has not yet been entered by a user
    else {
      return <p>Please enter a word and click "done"</p>;
    }
  }
  render() {
    return <div>{this.playGame()}</div>;
  }
}

export default HangmanCanvas;
