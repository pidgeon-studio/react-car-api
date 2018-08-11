import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CarDetails extends Component {
  render() {
    const { car } = this.props;

    return (
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>Acceleration:</td>
            <td>{ car.acceleration }</td>
          </tr>
          <tr>
            <td>Cylinders:</td>
            <td>{ car.cylinders }</td>
          </tr>
          <tr>
            <td>Displacement:</td>
            <td>{ car.displacement }</td>
          </tr>
          <tr>
            <td>Horsepower:</td>
            <td>{ car.horsepower }</td>
          </tr>
          <tr>
            <td>MPG:</td>
            <td>{ car.mpg }</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{ car.weight }</td>
          </tr>
          <tr>
            <td>Year:</td>
            <td>{ car.year }</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default CarDetails;