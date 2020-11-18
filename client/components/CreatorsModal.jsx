/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

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
    const paragraph = ' for the Creators Club and get free shipping and free returns or exchanges on any order.';
    return (
      <div>
        <button
          type="button"
          onClick={this.showModal}
          className="modal-button"
        >
          JOIN CREATORS CLUB TO GET UNLIMITED FREE SHIPPING, RETURNS, &amp; EXCHANGES
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
          <h1> JOIN CREATORS CLUB TO GET UNLIMITED FREE SHIPPING, RETURNS, &amp; EXCHANGES </h1>
          <p>
            <a href="this is a fake link" style={{ color: 'black' }}>Sign up</a>
            {paragraph}
          </p>
        </div>
      </div>
    );
  }
}

export default FinanceModal;
