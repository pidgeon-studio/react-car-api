import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Pagination extends Component {
  constructor() {
    super();

    this.renderNumbers = this.renderNumbers.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
  }

  handleNext() {
    const { handleNext } = this.props;

    handleNext();
  }

  handlePrevious() {
    const { handlePrevious } = this.props;

    handlePrevious();
  }

  handlePage(page) {
    const { handlePage } = this.props;

    handlePage(page);
  }

  renderNumbers() {
    const { totalCount, limit } = this.props;
    const totalPages = parseInt(totalCount / limit); // meh

    if( isNaN(totalPages) ) {
      return;
    }

    return [...Array(totalPages)].map((e, key) => key + 1).map((e) => {
      return (<li key={e} className="page-item">
        <a className="page-link" href="#" onClick={() => { this.handlePage(e) }}>{ e }</a>
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
            <a className="page-link" href="#" onClick={this.handlePrevious}>Previous</a>
          </li>

          { this.renderNumbers() }

          <li className={`page-item ${this.isDisabled(this.props.hasNext)}`}>
            <a className="page-link" href="#" onClick={this.handleNext}>Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Pagination;