import React, {Component} from 'react';
import axios from 'axios';
class Sandbox extends Component {
    state = {dogsArray:[]}
    componentDidMount(){
        this.getDogs()
    }
    componentDidUpdate(){
        console.log(this.state.dogsArray)
    }

    getDogs() {
        axios.get("https://dog.ceo/api/breeds/list/all")
        .then(res => res.data)
        .then(data => data.message)
        .then(message => {
            let dogArray = Object.keys(message)
            console.log(this.state.dogsArray)
            this.setState({dogsArray: dogArray})
        })
    }
    
    render(){
    return (
        <div>
            
        </div>
        )
}


}
export default Sandbox;