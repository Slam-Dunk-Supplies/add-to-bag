/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

const faker = require('faker');

class AddToBagModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'none',
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(event) {
    event.preventDefault();
    this.setState({
      show: 'none',
    });
  }

  showModal(event) {
    event.preventDefault();
    this.setState({
      show: 'block',
    });
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={this.showModal}
          className="addtobag-modal-button"
        >
          ADD TO BAG &rarr;
        </button>
        <div
          id="myModal"
          onClick={this.closeModal}
          onKeyPress={this.closeModal}
          className="modal"
          style={{ display: show }}
        />
        <div
          className="modal-content bag-view"
          style={{ display: show }}
        >
          <button
            type="button"
            onClick={this.closeModal}
            className="close"
          >
            &times;
          </button>
          <h1> SUCCESSFULLY ADDED TO BAG! </h1>
          <div className="product">
            item name
          </div>
          <div className="summary">
            <h4>
              YOUR BAG
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default AddToBagModal;
