/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// import img from './how-to-measure-shoes.png';

class SizeGuideModal extends React.Component {
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
    const inches = ['Heel-toe measurement', 8.7, 8.9, 9.0, 9.2, 9.4, 9.5, 9.7, 9.8, 10.0, 10.2, 10.4, 10.5, 10.7, 10.9, 11.0, 11.2];
    const usMens = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5];
    const usWomens = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];
    const ukSizes = [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11];
    const euSizes = ['36', '36 2/3', '37 1/3', '38', '38 2/3', '39 1/3', '40', '40 2/3', '41 1/3', '42', '42 2/3', '43 1/3', '44', '44 2/3', '45 1/3', '46'];
    const japaneseSizes = [220, 225, 230, 235, 340, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295];
    return (
      <div>
        <button
          type="button"
          onClick={this.showModal}
          className="modal-button"
        >
          Size guide
        </button>
        <div
          id="myModal"
          onClick={this.closeModal}
          onKeyPress={this.closeModal}
          className="modal"
          style={{ display: show }}
        />
        <div
          className="modal-content size-guide-modal"
          style={{ display: show }}
        >
          <button
            type="button"
            onClick={this.closeModal}
            className="close"
          >
            &times;
          </button>
          <h1> MEN&#39;S AND WOMEN&#39;S ADIDAS FOOTWEAR SIZING </h1>
          <a href="We-don't-know-either" style={{ color: 'black' }}>
            HOW TO MEASURE
          </a>
          <table>
            <tr>
              {inches.map((item) => (
                <th>
                  {item}
                </th>
              ))}
            </tr>
            <tr>
              <th> US - Men&#39;s </th>
              {usMens.map((size) => (
                <td>
                  {size}
                </td>
              ))}
            </tr>
            <tr>
              <th> US - Women&#39;s </th>
              {usWomens.map((size) => (
                <td>
                  {size}
                </td>
              ))}
            </tr>
            <tr>
              <th> UK </th>
              {ukSizes.map((size) => (
                <td>
                  {size}
                </td>
              ))}
            </tr>
            <tr>
              <th> EU </th>
              {euSizes.map((size) => (
                <td>
                  {size}
                </td>
              ))}
            </tr>
            <tr>
              <th> JP </th>
              {japaneseSizes.map((size) => (
                <td>
                  {size}
                </td>
              ))}
            </tr>
          </table>
          <h5> IN BETWEEN SIZES? </h5>
          <p className="break">
            For tight fit, go one size down.
          </p>
          <p>
            For loose fit, go one size up.
          </p>
          <h5> NOT THE RIGHT SIZE OR COLOR? </h5>
          <p>
            No problem, we offer free size exchanges for 30 days and we have free return service.
          </p>
          <h5> HOW TO MEASURE </h5>
          <p>
            Follow these easy steps to get the right size. For the best fit, measure your feet at the end of the day.
          </p>
          <div className="measure-guide">
            <div className="steps">
              <ol>
                <li>
                  Step on a piece of paper with your heel slightly touching a wall behind you.
                </li>
                <li>
                  Mark the end of your longest toe on the paper (you might need a friend to help you) and measure from the wall to the marking.
                </li>
                <li>
                  Do the same for the other foot and compare measurements with our size chart to get the right size.
                </li>
              </ol>
            </div>
            <div>
              <img className="img" alt="Demonstration" width="250px" height="250px" src="./how-to-measure-shoes.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SizeGuideModal;
