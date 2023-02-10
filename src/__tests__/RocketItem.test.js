import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import RocketItem from '../Components/MyRockets/RocketItem';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

const testData = {
  id: '123456',
  name: 'testRocket',
  description: 'testDescription',
  flickrImage: 'testURL',
  reserved: false,
};

describe('Testing page deployment', () => {
  test('Rocket components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <RocketItem props={testData} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
