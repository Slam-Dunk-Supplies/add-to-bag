/* eslint-disable */
import React from 'react';
import { mount, shallow, render } from 'enzyme';

import AddToBag from '../client/components/AddToBag.jsx';

// const wrapper = shallow(<AddToBag />);
const sampleItem = {
  "sizes": [
    "xs",
    "s",
    "m"
  ],
  "id": 37,
  "category": "Garden",
  "name": "Handmade Steel Computer",
  "color": "yellow",
  "price": 302,
  "heart": false
}

const newSample = JSON.stringify(sampleItem);

describe('AddToBag', () => {

  it('should render stuff', () => {
    const wrapper = shallow(<AddToBag />);
    expect(wrapper.is('section')).toBe(true);
  })

})
