import React, { Component } from "react";
import Pokedex from './Containers/Pokedex/Pokedex';
import Color from './Containers/Color/Color';
import TodoList from './Containers/TodoList/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Pokedex />
        <Color />
        <TodoList />
      </div>
    )
  }
}


export default App;
