import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import ProfileMissionItem from '../Components/MyProfileFolder/ProfileMissionItem';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

const testData = {
  name: 'testMission',
};

describe('Testing page deployment', () => {
  test('Mission components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
           <ul>
            <ProfileMissionItem props={testData} />
            </ul>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});