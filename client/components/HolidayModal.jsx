/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

class HolidayModal extends React.Component {
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
    const partOne = 'Check out our ';
    const partTwo = ' for more details';
    const sentence = 'Enjoy free returns or exchanges within 90 days for purchases made between 11/15 and 1/15. Some restrictions apply.';
    return (
      <div>
        <button
          type="button"
          onClick={this.showModal}
          className="modal-button"
        >
          FREE 90 DAY EXTENDED HOLIDAY RETURNS &amp; EXCHANGES
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
          <h1> FREE 90 DAY EXTENDED HOLIDAY RETURNS &amp; EXCHANGES </h1>
          <small>
            {sentence}
          </small>
          <p>
            {partOne}
            <a href="this is a fake link" style={{ color: 'black' }}>Return Policy</a>
            {partTwo}
          </p>
        </div>
      </div>
    );
  }
}

export default HolidayModal;
