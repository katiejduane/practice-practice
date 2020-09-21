import React from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import SimpleFormHooks from './SimpleFormHooks';
import SimpleFormInputHooks from './SimpleFormInputHook';
import Clicker from './Clicker';
import SWMovies from './StarWarsMovies';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterClass />
        <CounterHooks />
        <Toggler />
        <SimpleFormHooks />
        <SimpleFormInputHooks />
        <Clicker />
        <SWMovies />
      </header>
    </div>
  );
}

export default App;
