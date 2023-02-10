import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import MissionItem from '../Components/MyMissions/MissionItem';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

const testData = {
  id: '9D1B7E0',
  name: 'Thaicom',
  description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  joined: false,
};

describe('Testing page deployment', () => {
  test('Mission components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <MissionItem props={testData} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
