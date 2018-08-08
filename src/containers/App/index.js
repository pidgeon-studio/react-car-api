import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cars from '../Cars';
import Pagination from '../../components/Pagination';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
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
        meta: response.data.meta,
        objects: response.data.objects
      })
    });

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.getData = this.getData.bind(this);
  }

  handlePage(page) {
    console.log(page);
    const offset = (page - 1) * this.state.meta.limit;

    this.getData(`http://localhost/api/v1/car/?limit=50&offset=${offset}`);
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
    axios.get(url)
      .then(response => {
        this.setState({
          meta: response.data.meta,
          objects: response.data.objects
        })
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

        <Cars cars={this.state.objects}/>
      </div>
    );
  }
}
export default App;