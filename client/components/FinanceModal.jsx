/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';

const faker = require('faker');

class FinanceModal extends React.Component {
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
          className="modal-button"
        >
          PAY OVER TIME IN INTEREST-FREE INSTALLMENTS WITH AFFIRM, KLARNA OR AFTERPAY
        </button>
        <div
          id="myModal"
          onClick={this.closeModal}
          onKeyPress={this.closeModal}
          className="modal"
          style={{ display: show }}
        />
        <div
          className="modal-content"
          style={{ display: show }}
        >
          <button
            type="button"
            onClick={this.closeModal}
            className="close"
          >
            &times;
          </button>
          <h1> PAYING IN INSTALLMENTS </h1>
          <p>
            {faker.lorem.paragraph()}
          </p>
          <p>
            {faker.lorem.paragraphs()}
          </p>
          <p>
            {faker.lorem.paragraph()}
          </p>
          <p>
            {faker.lorem.paragraph()}
          </p>
        </div>
      </div>
    );
  }
}

export default FinanceModal;
