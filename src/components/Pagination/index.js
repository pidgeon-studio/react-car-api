import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Pagination extends Component {
  constructor() {
    super();

    this.renderNumbers = this.renderNumbers.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
  }

  renderNumbers() {
    const { totalCount, limit } = this.props;
    const totalPages = parseInt(totalCount / limit) + 1; // meh

    if( isNaN(totalPages) ) {
      return;
    }

    return [...Array(totalPages)].map((e, key) => key + 1).map((e) => {
      return (<li key={e} className="page-item">
        <a className="page-link" href="#" onClick={() => { this.props.handlePage(e) }}>{ e }</a>
      </li>);
    })
  }

  isDisabled(content) {
    if( content ) {
      return '';
    } else {
      return 'disabled';
    }
  }

  render() {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${this.isDisabled(this.props.hasPrevious)}`}>
            <a className="page-link" href="#" onClick={this.props.handlePrevious}>Previous</a>
          </li>

          { this.renderNumbers() }

          <li className={`page-item ${this.isDisabled(this.props.hasNext)}`}>
            <a className="page-link" href="#" onClick={this.props.handleNext}>Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  handlePage: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired
};

export default Pagination;