import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Michael', age: 29 },
      { name: 'Mikayla', age: 26 },
      { name: 'Mya', age: 7 },
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Mikayla', age: 27 },
        { name: 'Mya Cozart', age: 8 },
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Michael', age: 30 },
        { name: event.target.value, age: 27 },
        { name: 'Mya Cozart', age: 8 },
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid purple',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.switchNameHandler.bind(this, 'Cozartacus')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'Mike')}
          />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} >My hobbies: Photography</Person>
        <Person
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          />
      </div>
    );
  }
}

export default App;

