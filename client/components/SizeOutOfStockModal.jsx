/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

class SizeOutOfStockModal extends React.Component {
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
    const { sizes } = this.props;
    const placeholder = 'Email *';
    const acknowledgement = 'Yes, I am over 13 years old *';
    const creatorsClub = 'Sign me up to adidas Creators Club, featuring exclusive offers, latest product info, news about upcoming events and more. Please see our Terms & Conditions and Privacy Policy and Creators Club Terms and conditions for more details. I agree to recieve personalised email markketing messages from adidas America, Inc. and runtastic GmbH ("runtastic").';
    const first = 'Select your size and we\'ll email you if it\'s back in stock';
    const privacy = ' Privacy Notice';
    return (
      <div>
        <button
          type="button"
          onClick={this.showModal}
          className="modal-button"
        >
          Size out of stock?
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
          <div className="stock-modal">
            <h1> FIND MY SIZE </h1>
            <text>
              {first}
            </text>
            <h4>
              SIZE &#42;
            </h4>
            <div>
              {sizes.map((size) => (
                <button
                  type="button"
                  className="size-button"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder={placeholder}
            />
          </div>
          <div>
            <label>
              <input
                name="is13"
                type="checkbox"
              />
              {acknowledgement}
            </label>
          </div>
          <div>
            <label>
              <input
                name="creatorsCLub"
                type="checkbox"
                checked="false"
              />
              {creatorsClub}
            </label>
          </div>
          <div>
            <button
              type="button"
              className="sign-up-button"
            >
              SIGN UP &rarr;
            </button>
          </div>
          <div>
            By clicking Sign Up, you have read and agreed to the addidas
            <a href="scam-alert" style={{ color: 'black' }}>
              {privacy}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
SizeOutOfStockModal.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default SizeOutOfStockModal;
