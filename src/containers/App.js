import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
   persons: [
      { id: 'ght2', name: 'Timothy', age: 27 },
      { id: 'ale1', name: 'Jim', age: 29 },
      { id: 'fjo9', name:'Thomas', age: 19},
      { id: 'kef2', name:'Chanelle', age: 24},
      { id: 'kjf2', name:'Shaunice', age: 26},
      { id: 'kkg9', name:'Ara', age: 30},
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
let persons = null;

if (this.state.showPersons) {
  persons =
      <Person
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>;
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
  <Cockpit
    title={this.props.appTitle}
    showPersons={this.state.showPersons}
    persons={this.state.persons}
    clicked={this.togglePersonsHandler} />
  {persons}
</div>
);
//return React.createElement('div', {className: 'App'}, React.createElement('div', null, React.createElement('h1', null, 'Does this work?')));
}
}

export default App;
