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
          <Car id={c.id}
               name={c.name}
               acceleration={c.acceleration}
               cylinders={c.cylinders}
               displacement={c.displacement}
               horsepower={c.horsepower}
               mpg={c.mpg}
               resource_uri={c.resource_uri}
               weight={c.weight}
               year={c.year} />
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