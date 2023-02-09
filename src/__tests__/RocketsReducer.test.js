import rocketsReducer from '../redux/rockets/Rocket';

const rocketData = {
  id: '5e9d0d95eda69955f709d1eb',
  name: 'Falcon 1',
  description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  flickrImage: 'https://imgur.com/DaCfMsj.jpg',
  reserved: false,
};

test('test rockets reducer', () => {
  const state = rocketsReducer(undefined, { undefined });
  expect(state).toEqual([]);
});

test('test rockets reducer', () => {
  const state = rocketsReducer([], {
    type: 'GET_DATA/fulfilled',
    payload: [
      rocketData],
  });
  expect(state).toEqual([rocketData]);
});

test('test rockets reducer', () => {
  const state = rocketsReducer([rocketData], { type: 'RESERVE_ROCKET', payload: rocketData.id });
  expect(state).toEqual([{ ...rocketData, reserved: true }]);
});
