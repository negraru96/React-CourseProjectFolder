import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  };

inputChangedHandler = (event) => {
  this.setState({userInput: event.target.value});
}

deleteCharHandler = (index) => {
  const char = this.state.userInput.split('');
  char.splice(index, 1);
  const updated = char.join('');
  this.setState({userInput: updated});
}
render() {
  const charList = this.state.userInput.split('').map((char, index) => {
    return <Char
    character={char}
    key={index}
    click={() => this.deleteCharHandler(index)}/>;
  });
return (
<div className="App">
  <h1>React App</h1>
  <p>Input</p>
  <input
  type="text"
  onChange={this.inputChangedHandler}
  value={this.state.userInput} />
  <p>{this.state.userInput}</p>
  <Validation inputLength={this.state.userInput.length}/>
  {charList}
</div>
);
}
}
export default App;
