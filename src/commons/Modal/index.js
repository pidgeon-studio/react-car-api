import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  getComponent(key) {
    return this.props.children.filter((c) => {
      return c.key === key;
    });
  }

  renderModal() {
    return (
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                { this.props.title }

                <button type="button" className="close" onClick={this.props.close}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </h5>
            </div>
            <div className="modal-body">
              { this.getComponent('body') }
            </div>
            <div className="modal-footer">
              { this.getComponent('close') }

              { this.getComponent('submit') }
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.props.isOpen ? this.renderModal() : null;
  }
}

Modal.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};

export default Modal;