import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
   persons: [
      { name: 'Timothy', age: 27 },
      { name: 'Jim', age: 29 },
    ],
  otherState: 'another value',
  showPersons: false
};

switchNameHandler = (newName) => {
//console.log('Was clicked!');
// this.state.persons[0].name = "Theodore";
this.setState( {
  persons: [
    { name: newName, age: 28 },
    { name: 'Jim', age: 29 },
  ]
})
}

nameChangedHandler = (event) => {
this.setState( {
  persons: [
    { name: 'Timothy', age: 28 },
    { name: event.target.value, age: 29 },
  ]
})
}

togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow} );
}

render () {
const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
};

let persons = null;

if (this.state.showPersons) {
  persons = (
      <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}>I like Sushi!</Person>
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Theo!')}
        changed={this.nameChangedHandler}>My Hobbies: Swimming</Person>
      </div>
  );
}

return (
<div className="App">
  <h1>React App</h1>
  <p>Modify Information</p>
  <button
  style={style}
  onClick={this.togglePersonsHandler}>Toggle Persons</button>
  {persons}
</div>
);
//return React.createElement('div', {className: 'App'}, React.createElement('div', null, React.createElement('h1', null, 'Does this work?')));
}
}
export default App;
