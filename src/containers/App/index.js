import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cars from '../Cars';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Cars/>
      </div>
    );
  }
}
export default App;