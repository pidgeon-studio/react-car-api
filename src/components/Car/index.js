import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Car extends Component {
  render() {
    const { name } = this.props;

    console.log(name);

    return (
      <div>
        <h1>{ name }</h1>
      </div>
    );
  }
}
export default Car;