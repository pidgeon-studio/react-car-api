import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Car from '../../components/Car';

class Cars extends Component {
  constructor() {
    super();

    this.renderCars = this.renderCars.bind(this);
  }

  renderCars() {
    const { cars } = this.props;

    return cars.map((c) => {
      return (
        <div key={c.id} className="col-md-3 col-sm-3">
          <Car name={c.name}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row">
        { this.renderCars() }
      </div>
    );
  }
}
export default Cars;