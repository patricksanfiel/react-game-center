import React, { Component } from "react";
import "../assets/stylesheets/Hangman.css";
import HangmanCanvas from "./HangmanCanvas";
import HangmanRenderSpaces from "./HangmanRenderSpaces";
import HangmanInput from "./HangmanInput";
import HangmanScoreboard from "./HangmanScoreboard";
import axios from "axios";

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
        <div className="hangman-overlay-div">
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
            getDogs={event => this.getDogBreed(event)}
            getCountry={event => this.getCountryName(event)}
            getPokemon={event => this.getPokemon(event)}
            setDoneButtonClicked={event => {
              this.toggleInput(event);
              this.checkWordLength(event);
              this.setState({ showCanvas: true });
            }}
            guessQuitButtonClicked={event => {
              this.setState({ gameOn: false, showCanvas: false });
            }}
            toggleInput={this.state.toggleInput}
            guessLetterChanged={event => this.guessLetter(event)}
          />
        </div>
      );
    } else if (this.state.gameWon) {
      return (
        <div className="hangman-overlay-div">
          <div id="you-win-header" className="row">
            <h1 className="col-12 white-text" id="you-win-display">
              You win
            </h1>
          </div>
          <div id="you-win-buttons" className="row">
            <button
              onClick={event => this.restartGame(event)}
              className="text col-3 play-again-button black-border yellow-box-shadow"
              id="you-win-play-again"
            >
              Play Again
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="hangman-overlay-div" id="game-over-screen">
          <div id="game-over-header" className="row">
            <h1 id="game-over-text" className="col-12 text">
              Game Over
            </h1>
          </div>
          <div className="row">
            <span id="game-over-word-reveal" className="col-12 white-text">
              The word was <strong>{this.state.wordToGuess}</strong>
            </span>
          </div>
          <div id="game-over-button-div" className="row">
            <button
              onClick={event => this.restartGame(event)}
              id="game-over-button"
              className="col-3 text black-border"
            >
              Play Again?
            </button>
          </div>
        </div>
      );
    }
  }

  // Toggles between the HangmanSetWordInput and the HangmanGuessLetterInput components
  toggleInput(event) {
    let toggleInput = !this.state.toggleInput;
    if (this.state.toggleInput) {
      this.restartGame();
    } else {
      this.setState({ toggleInput: toggleInput });
    }
  }

  // Pulling guess words from API

  // "Random Dog Breed" button
  getDogBreed() {
    this.toggleInput();
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(res => res.data)
      .then(data => data.message)
      .then(message => {
        let dogArray = Object.keys(message);
        let range = dogArray.length - 1;
        let randomIndex = Math.floor(Math.random() * range);
        let wordToGuess = dogArray[randomIndex].split("");
        let playerCorrectGuesses = this.state.playerCorrectGuesses;
        let spacebar = wordToGuess.includes(" ");
        if (playerCorrectGuesses.length === 0 && spacebar) {
          playerCorrectGuesses.push(" ");
        }
        this.setState({
          wordToGuess: wordToGuess
        });
      });
  }

  // "Random Country" button
  getCountryName() {
    this.toggleInput();
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => res.data)
      .then(data => {
        let countryArray = data;
        let range = countryArray.length;
        let randomIndex = Math.floor(Math.random() * range);
        let wordToGuess = countryArray[randomIndex];
        let playerCorrectGuesses = this.state.playerCorrectGuesses;
        wordToGuess = wordToGuess.name.toLowerCase().split("");
        let spacebar = wordToGuess.includes(" ");
        if (playerCorrectGuesses.length === 0 && spacebar) {
          playerCorrectGuesses.push(" ");
        }
        this.setState({
          wordToGuess: wordToGuess,
          playerCorrectGuesses: playerCorrectGuesses
        });
      });
  }

  // "Random Pokemon" button
  getPokemon() {
    this.toggleInput();
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species/")
      .then(res => res.data)
      .then(data => data.results)
      .then(results => {
        let pokemonArray = results;
        let range = pokemonArray.length;
        let randomIndex = Math.floor(Math.random() * range);
        let wordToGuess = pokemonArray[randomIndex];
        let playerCorrectGuesses = this.state.playerCorrectGuesses;
        wordToGuess = wordToGuess.name.toLowerCase().split("");
        let spacebar = wordToGuess.includes(" ");
        if (playerCorrectGuesses.length === 0 && spacebar) {
          playerCorrectGuesses.push(" ");
        }
        this.setState({
          wordToGuess: wordToGuess,
          playerCorrectGuesses: playerCorrectGuesses
        });
      });
  }

  // Runs every time a user enters a character into the HangmanGuessLetterInput input element
  setGuessWord(event) {
    let wordToGuess = event.target.value
      .toString()
      .toLowerCase()
      .split("");
    console.log(event.target.value[wordToGuess.length - 1]);
    let alphabet = "abcdefghijklmnopqrstuvwxyz ".split("");
    let playerCorrectGuesses = this.state.playerCorrectGuesses;
    for (let i = 0; i < wordToGuess.length; i++) {
      if (!alphabet.includes(wordToGuess[i])) {
        alert("Please enter letters only");
        wordToGuess.pop();
        event.target.value = wordToGuess.join("");
        return (wordToGuess = null);
      }
    }
    let spacebar = wordToGuess.includes(" ");
    let leftParentheses = wordToGuess.includes("(");
    let rightParentheses = wordToGuess.includes(")");
    let hyphen = wordToGuess.includes("-");
    let period = wordToGuess.includes(".");
    let comma = wordToGuess.includes(",");
    let apostrophe = wordToGuess.includes("'");
    if (playerCorrectGuesses.length === 0 && spacebar) {
      playerCorrectGuesses.push(" ");
    }
    if (leftParentheses) {
      playerCorrectGuesses.push("(");
    }
    if (rightParentheses) {
      playerCorrectGuesses.push(")");
    }
    if (hyphen) {
      playerCorrectGuesses.push("-");
    }
    if (period) {
      playerCorrectGuesses.push(".");
    }
    if (comma) {
      playerCorrectGuesses.push(",");
    }
    if (apostrophe) {
      playerCorrectGuesses.push("'");
    }
    if (wordToGuess && wordToGuess.length >= 1) {
      this.setState({
        wordToGuess: wordToGuess,
        playerCorrectGuesses: playerCorrectGuesses
      });
    } else {
      alert("Please only enter letters");
    }
  }

  // Runs when a user enters a word into the HangmanSetWordInput input element. Minimum length of 2
  checkWordLength() {
    let wordToGuess = this.state.wordToGuess;
    if (wordToGuess.length === 1) {
      this.setState({ toggleInput: false });
    }
  }

  // Everytime a user enters a letter into the HangmanGuessLetterInput input, this method is triggered
  guessLetter(event) {
    let letter = event.target.value.toString().toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let isALetter = alphabet.includes(letter);
    let wordToGuess = this.state.wordToGuess;
    let playerCorrectGuesses = [...this.state.playerCorrectGuesses];
    let playerIncorrectGuesses = [...this.state.playerIncorrectGuesses];
    let remainingGuesses = this.state.remainingGuesses;
    // If the current guess is not included in the array of the player's past correct guesses and
    // is included in the array of the word to be guessed, add the current guess to the array of correct guesses
    if (!isALetter) {
      alert("Please only enter letters");
    } else if (letter === " ") {
      playerCorrectGuesses.push(letter);
    } else if (
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

  // Runs every time the Hangman component updates
  checkProgress() {
    let remainingGuesses = this.state.remainingGuesses;
    let gameWon = this.state.gameWon;
    let wordToGuess = this.state.wordToGuess;
    wordToGuess = [...new Set(wordToGuess)];
    let playerCorrectGuesses = this.state.playerCorrectGuesses;
    playerCorrectGuesses = [...new Set(playerCorrectGuesses)];
    if (
      wordToGuess.length === playerCorrectGuesses.length &&
      wordToGuess.length > 1 &&
      gameWon === false
    ) {
      gameWon = true;
      this.setState({ remainingGuesses: 6, gameOn: false, gameWon: gameWon });
    } else if (remainingGuesses < 1) {
      this.setState({ remainingGuesses: 6, gameOn: false });
    }
  }

  // Resets all state properties to their default values. Triggered by the play again button in the playGame method
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
