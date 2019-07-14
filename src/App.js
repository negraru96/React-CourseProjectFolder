import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
   persons: [
      { id: 'ght2', name: 'Timothy', age: 27 },
      { id: 'ale1', name: 'Jim', age: 29 },
      { id: 'fjo9', name:'Thomas', age: 19},
      { id: 'kef2', name:'Chanelle', age: 24},
    ],
  otherState: 'another value',
  showPersons: false
};

nameChangedHandler = (event, id ) => {
  const personIndex = this.state.persons.findIndex(per => {
    return per.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  // const person = Object.assign({}, this.state.persons[personIndex])

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

this.setState( {persons: persons});
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow} );
}

render () {
const style = {
  backgroundColor: 'green',
  color: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
};

let persons = null;

if (this.state.showPersons) {
  persons = (
      <div>
      {this.state.persons.map((person, index) => {
        return <Person
        click={() => this.deletePersonHandler(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.nameChangedHandler(event, person.id)} />
      })}
      </div>
  );
  style.backgroundColor ='red';
}

  const assignedClasses =[];
  if (this.state.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (this.state.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

return (
<div className={classes.App}>
  <h1>React App</h1>
  <p className={assignedClasses.join(' ')}>Modify Information</p>
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
