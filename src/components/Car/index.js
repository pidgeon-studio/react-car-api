import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CarDetails from './Details';

class Car extends Component {
  render() {
    const { car } = this.props;

    return (
      <div className="card car" style={{width: '18rem'}}>
        {/* https://loremflickr.com/320/240/${name}/all` retrieves elements slower */}

        <img className="card-img-top" src={`https://dummyimage.com/200x150/ccc/fff`} alt="Demo image"/>

        <div className="card-body">
          <h5 className="card-title" title={car.name}>{ car.name }</h5>

          <CarDetails car={ car } />

          <a href="#" className="btn btn-info">Edit</a>
        </div>
      </div>
    );
  }
}
export default Car;