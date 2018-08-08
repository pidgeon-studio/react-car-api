import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Car extends Component {
  render() {
    const {
      acceleration,
      cylinders,
      displacement,
      horsepower,
      id,
      mpg,
      name,
      resource_uri,
      weight,
      year
    } = this.props;

    return (
      <div className="card car" style={{width: '18rem'}}>
        {/* <img className="card-img-top" src=".../100px180/" alt="Card image cap"> */}
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}
export default Car;