import React, { Component } from 'react'
import Display from './components/Display'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calculator">
         <Display value="0"/>
          <div className="operatorButtons">
          </div>
          <div className="numberButtons">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
