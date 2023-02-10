import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import RocketsList from '../Components/MyRockets/RocketsList';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

describe('Testing page deployment', () => {
  test('Rocket components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <RocketsList />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
