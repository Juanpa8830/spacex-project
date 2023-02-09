import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import ProfileRocketItem from '../Components/MyProfileFolder/ProfileRocketItem';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

const testData = {
  name: 'testRocket',
};

describe('Testing page deployment', () => {
  test('ProfileRocketItem component matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <ul>
          <ProfileRocketItem props={testData} />
        </ul>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
