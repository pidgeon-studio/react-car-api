import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Car from '../../components/Car';

class Cars extends Component {

  constructor() {
    super();

    this.state = {
      cars: []
    };

    axios.get('http://localhost/api/v1/car/?format=json')
      .then(response => {
        this.setState({
          cars: response.data.objects
        })
      });

    this.renderCars = this.renderCars.bind(this);
  }

  renderCars() {
    return this.state.cars.map((c) => {
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