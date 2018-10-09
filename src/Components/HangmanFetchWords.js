import React, { Component } from 'react';
import axios from 'axios';


class HangmanFetchWords extends Component{
    state = {
        currentWord: null
    }

    componentDidMount(){
        this.getDogBreed()
    }

    getDogBreed(){
        axios.get("https://dog.ceo/api/breeds/list/all")
        .then(res => res.data)
        .then(data => data.message)
        .then(message => {
            let dogArray = Object.keys(message)
            let range = dogArray.length-1
            let randomIndex = Math.floor(Math.random()*range)
            let currentWord = dogArray[randomIndex]
            console.log(currentWord)
            this.setState({
                currentWord: currentWord
            })
        })
    }
    
    render(){
        return(
            <div>
                <p>{this.state.currentWord}</p>
            </div>
        )
    }
}

export default HangmanFetchWords;