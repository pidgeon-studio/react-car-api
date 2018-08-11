import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Car from '../../components/Car';
import Modal from '../../commons/Modal';
import axios from 'axios';
import CarEdit from '../../components/Car/Edit';
import PropTypes from 'prop-types';

class Cars extends Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false,
      editCar: {}
    };

    this.renderCars = this.renderCars.bind(this);
    this.editCar = this.editCar.bind(this);
    this.submit = this.submit.bind(this);
    this.close = this.close.bind(this);
    this.handleAttrChange = this.handleAttrChange.bind(this);
  }

  renderCars() {
    const { cars } = this.props;

    return cars.map((c) => {
      return (
        <div key={c.id} className="col-md-3 col-sm-3">
          <Car car={c} editCar={this.editCar}/>
        </div>
      );
    });
  }

  editCar(c) {
    axios.get(`http://localhost${c.resource_uri}`).then(response => {
      this.setState({
        editCar: response.data,
        isModalOpen: true
      })
    })
  }

  submit() {
    const updatedCar = {
      id: this.state.editCar.id
    };

    axios.put(`http://localhost${this.state.editCar.resource_uri}`,
    this.state.editCar).then(response => {
      this.setState({
        isModalOpen: false,
        editCar: {}
      }, () => {
        const c = {
          ...updatedCar,
          ...response.data
        };

        this.props.onUpdateCar(c);
      });
    })
    console.log('submited');
  }

  close() {
    this.setState({
      isModalOpen: false
    });
  }

  handleAttrChange(value, attr) {
    this.setState({
      ...this.state,
      editCar: {
        ...this.state.editCar,
        [attr]: value
      }
    });
  }

  render() {
    return (
      <div className="row">
        { this.renderCars() }

        <Modal title="Edit car" isOpen={this.state.isModalOpen} close={this.close}>
          <CarEdit key="body" car={this.state.editCar} handleAttrChange={this.handleAttrChange}/>

          <button key="close"
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.close}>Close</button>

          <button key="submit"
                  type="button"
                  className="btn btn-primary"
                  onClick={this.submit}>Save changes</button>
        </Modal>
      </div>
    );
  }
}

Cars.propTypes = {
  cars: PropTypes.array.isRequired,
  onUpdateCar: PropTypes.func.isRequired
};

export default Cars;