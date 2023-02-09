import missionsReducer from '../redux/missions/Mission';

const missionData = {
  id: '9D1B7E0',
  name: 'Thaicom',
  description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  joined: false,
};

test('test missions reducer', () => {
  const state = missionsReducer(undefined, { undefined });
  expect(state).toEqual([]);
});

test('test missions reducer', () => {
  const state = missionsReducer([], {
    type: 'GET_MISSION_DATA/fulfilled',
    payload: [
      missionData],
  });
  expect(state).toEqual([missionData]);
});

test('test missions reducer', () => {
  const state = missionsReducer([missionData], { type: 'JOIN_MISSION', payload: missionData.id });
  expect(state).toEqual([{ ...missionData, joined: true }]);
});
