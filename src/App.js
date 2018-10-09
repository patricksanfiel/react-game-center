import React, { Component } from 'react';
import Hangman from './Components/Hangman';
import Sandbox from './Components/Sandbox';
import HangmanFetchWords from './Components/HangmanFetchWords';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hangman/>
        {/* Testing purposes only */}
        {/* <Sandbox /> */}
        {/* <HangmanFetchWords /> */}
        {/* Remove before prod */}
      </div>
    );
  }
}

export default App;
