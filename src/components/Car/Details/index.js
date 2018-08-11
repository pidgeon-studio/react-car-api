import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CarDetails extends Component {
  render() {
    const {
      acceleration,
      cylinders,
      displacement,
      horsepower,
      mpg,
      weight,
      year
    } = this.props;

    return (
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>Acceleration:</td>
            <td>{ acceleration }</td>
          </tr>
          <tr>
            <td>Cylinders:</td>
            <td>{ cylinders }</td>
          </tr>
          <tr>
            <td>Displacement:</td>
            <td>{ displacement }</td>
          </tr>
          <tr>
            <td>Horsepower:</td>
            <td>{ horsepower }</td>
          </tr>
          <tr>
            <td>MPG:</td>
            <td>{ mpg }</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{ weight }</td>
          </tr>
          <tr>
            <td>Year:</td>
            <td>{ year }</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default CarDetails;