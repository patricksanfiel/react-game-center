(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(43)},22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(16),r=n.n(o),i=(n(22),n(2)),l=n(3),u=n(5),c=n(4),d=n(6),m=n(7),g=(n(23),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentDidUpdate",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var e=this,t=document.getElementById("hangman-canvas");if(t){var n=t.getContext("2d");n.fillStyle="#d8a200",n.fillRect(0,0,500,250),n.strokeStyle="white",n.moveTo(125,105),n.lineTo(175,105),n.stroke(),n.moveTo(135,105),n.lineTo(135,40),n.stroke(),n.moveTo(125,45),n.lineTo(160,45),n.stroke(),n.moveTo(150,45),n.lineTo(150,65),n.stroke();return[void(e.props.remainingGuesses<1&&(n.moveTo(150,90),n.lineTo(158,97),n.stroke())),void(e.props.remainingGuesses<2&&(n.moveTo(150,90),n.lineTo(142,97),n.stroke())),void(e.props.remainingGuesses<3&&(n.moveTo(150,75),n.lineTo(158,82),n.stroke())),void(e.props.remainingGuesses<4&&(n.moveTo(150,75),n.lineTo(142,82),n.stroke())),void(e.props.remainingGuesses<5&&(n.moveTo(150,75),n.lineTo(150,90),n.stroke())),void(e.props.remainingGuesses<6&&(n.beginPath(),n.arc(150,70,5,0,2*Math.PI),n.stroke()))]}}},{key:"render",value:function(){return!0===this.props.showCanvas?s.a.createElement("canvas",{id:"hangman-canvas"}):s.a.createElement("canvas",{id:"empty-canvas"})}}]),t}(a.Component)),h=function(e){return s.a.createElement("span",{className:"letter-space white-text"},e.spaceValue)},p=function(e){if(e.wordToGuess.length>1){var t=e.wordToGuess,n=e.playerCorrectGuesses,a=0;return t.map(function(e){return a++,n.indexOf(e)>-1||" "===e?s.a.createElement(h,{spaceValue:e,key:a}):s.a.createElement(h,{spaceValue:"_",key:a})})}return s.a.createElement("p",{id:"render-spaces-enter-word-prompt",className:"white-text"},"Please choose a category or enter a word or phrase consisting of two or more letters")},v=function(e){return s.a.createElement("div",{id:"select-word-div",className:"row"},s.a.createElement("div",{id:"choose-category-div",className:"col-6"},s.a.createElement("span",{id:"choose-category-header",className:"select-word-subheader text yellow-box-shadow"},"Choose a category"),s.a.createElement("div",{id:"choose-category-buttons"},s.a.createElement("button",{onClick:function(t){return e.getDogs(t)},className:"category-button text black-border yellow-box-shadow"},"Random Dog Breed"),s.a.createElement("button",{onClick:function(t){return e.getCountry(t)},className:"category-button text black-border yellow-box-shadow"},"Random Country"),s.a.createElement("button",{onClick:function(t){return e.getPokemon(t)},className:"category-button text black-border yellow-box-shadow"},"Random Pokemon"))),s.a.createElement("div",{id:"enter-word-div",className:"col-6"},s.a.createElement("span",{id:"set-word-header",className:"select-word-subheader text black-border"},"Enter a word to guess using only letters"),s.a.createElement("div",{id:"enter-word-body"},s.a.createElement("input",{onChange:function(t){return e.changed(t)},id:"set-word-input",className:"white-text yellow-box-shadow"}),s.a.createElement("div",{className:"input-buttons-div"},s.a.createElement("button",{id:"set-word-done",className:"set-word-button hangman-input-button text black-border yellow-box-shadow",onClick:function(t){return e.setDoneButtonClicked(t)}},"Done")))))},y=function(e){return s.a.createElement("div",{id:"guess-div",className:"row black-border yellow-box-shadow"},s.a.createElement("span",{className:"text black-border yellow-box-shadow",id:"guess-letter-prompt"},"Type a letter to guess:"),s.a.createElement("div",{id:"guess-div-input"},s.a.createElement("input",{onChange:function(t){return e.changed(t)},id:"guess-letter-input",className:"white-text yellow-box-shadow"}),s.a.createElement("button",{id:"guess-letter-quit",className:"guess-letter-button hangman-input-button text black-border yellow-box-shadow",onClick:function(t){return e.guessQuitButtonClicked(t)}},"Quit")))},w=function(e){return e.toggleInput?s.a.createElement(y,{changed:function(t){return e.guessLetterChanged(t)},guessQuitButtonClicked:function(t){return e.guessQuitButtonClicked(t)}}):s.a.createElement(v,{changed:function(t){return e.setWordChanged(t)},setDoneButtonClicked:function(t){return e.setDoneButtonClicked(t)},setQuitButtonClicked:function(t){return e.quitButtonClicked(t)},getDogs:function(t){return e.getDogs(t)},getCountry:function(t){return e.getCountry(t)},getPokemon:function(t){return e.getPokemon(t)}})},f=function(e){return s.a.createElement("div",{id:"hangman-scoreboard",className:"row"},s.a.createElement("span",{id:"incorrect-guesses-display",className:"text col-6 black-border yellow-box-shadow"},"Incorrect guesses: ",e.playerIncorrectGuesses),s.a.createElement("span",{id:"remaining-guesses-display",className:"text col-6 black-border yellow-box-shadow"},"Remaining Guesses: ",e.remainingGuesses))},b=n(8),k=n.n(b),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={wordToGuess:[],playerCorrectGuesses:[],playerIncorrectGuesses:[],remainingGuesses:6,gameOn:!0,gameWon:!1,showCanvas:!0,toggleInput:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.checkProgress()}},{key:"playGame",value:function(){var e=this;return this.state.gameOn?s.a.createElement("div",{className:"hangman-overlay-div"},s.a.createElement("div",{id:"player-feedback-div"},s.a.createElement(f,{playerIncorrectGuesses:this.state.playerIncorrectGuesses,remainingGuesses:this.state.remainingGuesses}),s.a.createElement(g,{remainingGuesses:this.state.remainingGuesses,gameOn:this.state.gameOn,showCanvas:this.state.showCanvas})),s.a.createElement("div",{id:"display-guess-word"},s.a.createElement(p,{wordToGuess:this.state.wordToGuess,playerCorrectGuesses:this.state.playerCorrectGuesses})),s.a.createElement(w,{setWordChanged:function(t){return e.setGuessWord(t)},getDogs:function(t){return e.getDogBreed(t)},getCountry:function(t){return e.getCountryName(t)},getPokemon:function(t){return e.getPokemon(t)},setDoneButtonClicked:function(t){e.toggleInput(t),e.checkWordLength(t),e.setState({showCanvas:!0})},guessQuitButtonClicked:function(t){e.setState({gameOn:!1,showCanvas:!1})},toggleInput:this.state.toggleInput,guessLetterChanged:function(t){return e.guessLetter(t)}})):this.state.gameWon?s.a.createElement("div",{className:"hangman-overlay-div"},s.a.createElement("div",{id:"you-win-header",className:"row"},s.a.createElement("h1",{className:"col-12 white-text",id:"you-win-display"},"You win")),s.a.createElement("div",{id:"you-win-buttons",className:"row"},s.a.createElement("button",{onClick:function(t){return e.restartGame(t)},className:"text col-3 play-again-button black-border yellow-box-shadow",id:"you-win-play-again"},"Play Again"))):s.a.createElement("div",{className:"hangman-overlay-div",id:"game-over-screen"},s.a.createElement("div",{id:"game-over-header",className:"row"},s.a.createElement("h1",{id:"game-over-text",className:"col-12 text"},"Game Over")),s.a.createElement("div",{className:"row"},s.a.createElement("span",{id:"game-over-word-reveal",className:"col-12 white-text"},"The word was ",s.a.createElement("strong",null,this.state.wordToGuess))),s.a.createElement("div",{id:"game-over-button-div",className:"row"},s.a.createElement("button",{onClick:function(t){return e.restartGame(t)},id:"game-over-button",className:"col-3 text black-border"},"Play Again?")))}},{key:"toggleInput",value:function(e){var t=!this.state.toggleInput;this.state.toggleInput?this.restartGame():this.setState({toggleInput:t})}},{key:"getDogBreed",value:function(){var e=this;this.toggleInput(),k.a.get("https://dog.ceo/api/breeds/list/all").then(function(e){return e.data}).then(function(e){return e.message}).then(function(t){var n=Object.keys(t),a=n.length-1,s=n[Math.floor(Math.random()*a)].split(""),o=e.state.playerCorrectGuesses,r=s.includes(" ");0===o.length&&r&&o.push(" "),e.setState({wordToGuess:s})})}},{key:"getCountryName",value:function(){var e=this;this.toggleInput(),k.a.get("https://restcountries.eu/rest/v2/all").then(function(e){return e.data}).then(function(t){var n=t,a=n.length,s=n[Math.floor(Math.random()*a)],o=e.state.playerCorrectGuesses,r=(s=s.name.toLowerCase().split("")).includes(" ");0===o.length&&r&&o.push(" "),e.setState({wordToGuess:s,playerCorrectGuesses:o})})}},{key:"getPokemon",value:function(){var e=this;this.toggleInput(),k.a.get("https://pokeapi.co/api/v2/pokemon-species/").then(function(e){return e.data}).then(function(e){return e.results}).then(function(t){var n=t,a=n.length,s=n[Math.floor(Math.random()*a)],o=e.state.playerCorrectGuesses,r=(s=s.name.toLowerCase().split("")).includes(" ");0===o.length&&r&&o.push(" "),e.setState({wordToGuess:s,playerCorrectGuesses:o})})}},{key:"setGuessWord",value:function(e){var t=e.target.value.toString().toLowerCase().split("");console.log(e.target.value[t.length-1]);for(var n="abcdefghijklmnopqrstuvwxyz ".split(""),a=this.state.playerCorrectGuesses,s=0;s<t.length;s++)if(!n.includes(t[s]))return alert("Please enter letters only"),t.pop(),e.target.value=t.join(""),null;var o=t.includes(" "),r=t.includes("("),i=t.includes(")"),l=t.includes("-"),u=t.includes("."),c=t.includes(","),d=t.includes("'");0===a.length&&o&&a.push(" "),r&&a.push("("),i&&a.push(")"),l&&a.push("-"),u&&a.push("."),c&&a.push(","),d&&a.push("'"),t&&t.length>=1?this.setState({wordToGuess:t,playerCorrectGuesses:a}):alert("Please only enter letters")}},{key:"checkWordLength",value:function(){1===this.state.wordToGuess.length&&this.setState({toggleInput:!1})}},{key:"guessLetter",value:function(e){var t=e.target.value.toString().toLowerCase(),n="abcdefghijklmnopqrstuvwxyz".split("").includes(t),a=this.state.wordToGuess,s=Object(m.a)(this.state.playerCorrectGuesses),o=Object(m.a)(this.state.playerIncorrectGuesses),r=this.state.remainingGuesses;if(n)if(" "===t)s.push(t);else if(-1===s.indexOf(t)&&a.indexOf(t)>-1){for(var i=0;i<a.length;i++)a[i]===t&&s.push(t);this.setState({playerCorrectGuesses:s})}else-1===o.indexOf(t)&&-1===s.indexOf(t)&&(r-=1,o.push(t),this.setState({playerIncorrectGuesses:o,remainingGuesses:r}));else alert("Please only enter letters");e.target.value=null}},{key:"checkProgress",value:function(){var e=this.state.remainingGuesses,t=this.state.gameWon,n=this.state.wordToGuess;n=Object(m.a)(new Set(n));var a=this.state.playerCorrectGuesses;a=Object(m.a)(new Set(a)),n.length===a.length&&n.length>1&&!1===t?(t=!0,this.setState({remainingGuesses:6,gameOn:!1,gameWon:t})):e<1&&this.setState({remainingGuesses:6,gameOn:!1})}},{key:"restartGame",value:function(e){var t=[];this.setState({wordToGuess:t,playerCorrectGuesses:t,playerIncorrectGuesses:t,gameOn:!0,gameWon:!1,toggleInput:!1,showCanvas:!0,remainingGuesses:6})}},{key:"render",value:function(){return s.a.createElement("div",null,this.playGame())}}]),t}(a.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(C,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.47370577.chunk.js.map