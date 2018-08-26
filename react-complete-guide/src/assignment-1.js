import React, { Component } from 'react';
import './App.css';

const ValidationComponent = (props) => {
    const decision = props.userinput.length > 5
        ? 'Text long enough' : 'Text too short';
    return (
        <p>{decision}</p>
    )
}

const CharComponent = (props) => {
    return (
        <li onClick={props.click}>{props.letter}</li>
    )
}

class ListAssignment extends Component {
  state = {
    userInput: ''
  }

  handleChangeEvent = (event) => {
    this.setState({
        userInput: event.target.value
    });
  }
    
  deleteLetterEvent = (index) => {
      const uInput = this.state.userInput.split('');
      uInput.splice(index, 1);
      this.setState({
          userInput: uInput.join('')
      });
  }

  render() {
      let characters = null;
      
      if (this.state.userInput.length) {
          let uInput = this.state.userInput;

          characters = (
              <ul>
                  {uInput.split("").map((letter, index) => {
                      return <CharComponent
                          key={index}
                          letter={letter}
                          click={() => this.deleteLetterEvent(index)}
                      />
                  })}
              </ul>
          )
      }
      
    return (
        <div className="App">
            <input onChange={(event) => this.handleChangeEvent(event)} type="text" value={this.state.userInput} />
            <p>Length of the entered string: {this.state.userInput.length}</p>
            <ValidationComponent userinput={this.state.userInput} />
            {characters}
        </div>
    );
  }
}

export default ListAssignment;
