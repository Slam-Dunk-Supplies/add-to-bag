/* eslint-disable import/extensions */
import React from 'react';
import Axios from 'axios';
import FinanceModal from './FinanceModal.jsx';
import CreatorsModal from './CreatorsModal.jsx';
import HolidayModal from './HolidayModal.jsx';
import SizeGuideModal from './SizeGuideModal.jsx';
import SizeOutOfStockModal from './SizeOutOfStockModal.jsx';
import AddToBagModal from './AddToBagModal.jsx';

class AddToBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        sizes: [],
      },
    };
    this.getNewItem = this.getNewItem.bind(this);
  }

  componentDidMount() {
    this.getNewItem(Math.ceil(Math.random() * 100));
  }

  getNewItem(id) {
    Axios.get(`/api/add_to_bag?id=${id}`)
      .then((res) => {
        this.setState({
          item: res.data,
        });
      }).catch((err) => { console.error(err); });
  }

  render() {
    const { item } = this.state;
    const { sizes } = item;
    return (
      <section className="container">
        <div className="description">
          <div className="item-category">
            {item.category}
          </div>
          <h1 className="item-name">
            {item.name}
          </h1>
          <h3 className="item-color">
            {item.color}
          </h3>
          <h4 className="item-price">
            {`$${item.price}`}
          </h4>
          <div>
            {sizes.map((size) => (
              <button
                type="button"
                className="size-button"
                key={size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="mini-container">
          <SizeGuideModal />
          <SizeOutOfStockModal sizes={sizes} />
        </div>
        <div className="mini-container">
          <AddToBagModal item={item} />
          <button
            type="button"
            className="heart"
          >
            &#x2661;
          </button>
        </div>
        <div className="promotions">
          <div className="finance">
            <FinanceModal />
          </div>
          <div className="creators">
            <CreatorsModal />
          </div>
          <div className="holiday">
            <HolidayModal />
          </div>
        </div>
      </section>
    );
  }
}

export default AddToBag;
