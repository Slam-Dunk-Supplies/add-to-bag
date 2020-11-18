/* eslint-disable import/extensions */
import React from 'react';
import Axios from 'axios';
import FinanceModal from './FinanceModal.jsx';
import CreatorsModal from './CreatorsModal.jsx';

class AddToBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        sizes: [],
      },
    };
  }

  componentDidMount() {
    this.getNewItem(Math.ceil(Math.random() * 100));
  }

  getNewItem(id) {
    Axios.get(`/add_to_bag?id=${id}`)
      .then((res) => {
        this.setState({
          item: res.data,
        });
      }).catch((err) => { console.error(err); });
  }

  render() {
    const { item } = this.state;
    return (
      <section>
        <h3>
          {item.category}
        </h3>
        <h2>
          {item.name}
        </h2>
        <h3>
          {item.color}
        </h3>
        <h2>
          {`$${item.price}`}
        </h2>
        <div>
          {item.sizes.map((size) => (
            <button type="button">
              {size}
            </button>
          ))}
        </div>
        <div>
          <button type="button"> ADD TO BAG </button>
          <button type="button"> Heart emoji </button>
        </div>
        <div>
          <FinanceModal />
        </div>
        <div>
          <CreatorsModal />
        </div>
      </section>
    );
  }
}

export default AddToBag;
