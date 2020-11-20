/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

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
    const { item } = this.props;
    const price = `$${item.price}`;
    const color = `Color: ${item.color}`;
    const total = `Total Product Cost: $${item.price}`;
    const grandTotal = `Total $${item.price}`;
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
          <div className="product-summary">
            <div className="product">
              <h4>
                {item.name}
              </h4>
              <div>
                {price}
              </div>
              <div>
                {color}
              </div>
              <div>
                Size: unknown
              </div>
              <div>
                Quantity: 1
              </div>
            </div>
            <div className="summary">
              <h4>
                YOUR BAG
              </h4>
              <div>
                1 item
              </div>
              <div>
                {total}
              </div>
              Total Delivery Cost: FREE
              <div>
                {grandTotal}
              </div>
              <div className="addtobag-checkout">
                <button type="button" className="addtobag-modal-button">
                  VIEW BAG &rarr;
                </button>
                <button type="button" className="checkout-button">
                  CHECKOUT &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddToBagModal.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AddToBagModal;
