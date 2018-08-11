import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CarEdit extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text"
                 className="form-control form-control-sm"
                 id="name"
                 placeholder="name"
                 value={this.props.car.name}
                 onChange={(e) => this.props.handleAttrChange(e.target.value, 'name')}/>
        </div>

        <div className="form-group">
          <label htmlFor="acceleration">Acceleration</label>
          <input type="number"
                 className="form-control form-control-sm"
                 id="acceleration"
                 placeholder="Acceleration"
                 value={this.props.car.acceleration}
                 onChange={(e) => this.props.handleAttrChange(e.target.value, 'acceleration')}/>
        </div>

        <div className="form-group">
          <label htmlFor="cylinders">Cylinders</label>
          <select className="form-control form-control-sm"
                  id="cylinders"
                  value={this.props.car.cylinders}
                  onChange={(e) => this.props.handleAttrChange(e.target.value, 'cylinders')}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="displacement">Displacement</label>
          <input type="number"
                 className="form-control form-control-sm"
                 id="displacement"
                 placeholder="Displacement"
                 value={this.props.car.displacement}
                 onChange={(e) => this.props.handleAttrChange(e.target.value, 'displacement')}/>
        </div>

        <div className="form-group">
          <label htmlFor="horsepower">Horsepower</label>
          <input type="number"
                 className="form-control form-control-sm"
                 id="horsepower"
                 placeholder="Horsepower"
                 value={this.props.car.horsepower}
                 onChange={(e) => this.props.handleAttrChange(e.target.value, 'horsepower')}/>
        </div>

        <div className="form-group">
          <label htmlFor="mpg">MPG</label>
          <input type="number"
                 className="form-control form-control-sm"
                 id="mpg"
                 placeholder="MPG"
                 value={this.props.car.mpg}
                 onChange={(e) => this.props.handleAttrChange(e.target.value, 'mpg')}/>
        </div>

        <div className="form-group">
          <label htmlFor="weight">Weight</label>
          <input type="number"
                 className="form-control form-control-sm"
                 id="weight"
                 placeholder="Weight"
                 value={this.props.car.weight}
                 onChange={(e) => this.props.handleAttrChange(e.target.value, 'weight')}/>
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input type="number"
                 className="form-control form-control-sm"
                 id="year"
                 placeholder="Year"
                 value={this.props.car.year}
                 onChange={(e) => this.props.handleAttrChange(e.target.value, 'year')}/>
        </div>
      </form>
    );
  }
}
export default CarEdit;