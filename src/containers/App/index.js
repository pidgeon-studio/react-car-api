import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cars from '../Cars';
import Loading from '../../commons/Loading';
import Pagination from '../../components/Pagination';
import axios from 'axios';
import PropTypes from 'prop-types';

const LoadingCars = Loading(Cars);

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      meta: {
        limit: 0,
        next: null,
        offset: 0,
        previous: null,
        total_count: 0
      },
      objects: []
    }

    axios.get('http://localhost/api/v1/car/?limit=50&offset=0&format=json')
    .then(response => {
      this.setState({
        isLoading: false,
        meta: response.data.meta,
        objects: response.data.objects
      })
    });

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.getData = this.getData.bind(this);
    this.onUpdateCar = this.onUpdateCar.bind(this);
  }

  handlePage(page) {
    const offset = (page - 1) * this.state.meta.limit;

    this.getData(`http://localhost/api/v1/car/?limit=50&offset=${offset}&format=json`);
  }

  handleNext() {
    if ( this.state.meta.next ) {
      this.getData(`http://localhost${this.state.meta.next}`);
    }
  }

  handlePrevious() {
    if( this.state.meta.previous ) {
      this.getData(`http://localhost${this.state.meta.previous}`);
    }
  }

  getData(url) {
    this.setState({
      isLoading: true
    }, () => {
      axios.get(url)
        .then(response => {
          this.setState({
            isLoading:false,
            meta: response.data.meta,
            objects: response.data.objects
          })
        });
    })
  }

  onUpdateCar(car) {
    const objects = this.state.objects.map((o) => {
      if (o.id === car.id) {
        return car;
      } else {
        return o;
      }
    });

    this.setState({
      objects
    });
  }

  render() {
    return (
      <div className="container">
        <Pagination totalCount={this.state.meta.total_count}
                    limit={this.state.meta.limit}
                    handlePage={this.handlePage}
                    handleNext={this.handleNext}
                    handlePrevious={this.handlePrevious}
                    hasNext={this.state.meta.next}
                    hasPrevious={this.state.meta.previous}/>

        <LoadingCars cars={this.state.objects}
                     isLoading={this.state.isLoading}
                     onUpdateCar={this.onUpdateCar}/>


        <Pagination totalCount={this.state.meta.total_count}
                    limit={this.state.meta.limit}
                    handlePage={this.handlePage}
                    handleNext={this.handleNext}
                    handlePrevious={this.handlePrevious}
                    hasNext={this.state.meta.next}
                    hasPrevious={this.state.meta.previous}/>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string
};

export default App;