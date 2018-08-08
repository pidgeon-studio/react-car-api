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

    axios.get('/api/cars.json')
      .then(response => {
        this.setState({
          cars: response.data
        })
      });

    this.renderCars = this.renderCars.bind(this);
  }

  renderCars() {
    return this.state.cars.map((c) => {
      return <Car key={c.id} name={c.name}/>
    });
  }

  render() {
    return (
      <div>
        { this.renderCars() }
      </div>
    );
  }
}
export default Cars;