import { searchResults } from './searchReducer';

const dataArray = [{
  _id: '597ed571bc4435bc7ebb60ee',
  name: 'Richard Jones',
  age: '55',
  sex: 'Male',
  race: 'White',
  month: 'December',
  day: '6',
  year: '2016',
  address: '3500 Ridgewood Dr',
  city: 'Hutchinson',
  state: 'KS',
  cause: 'Gunshot',
  dept: 'Hutchinson Police Department',
  armed: 'Firearm',
  __v: 0,
}];

describe('search reducer tests', () => {
  it('default case should return an empty array', () => {
    expect(searchResults(undefined, {})).toEqual([]);
  });

  it('should add the searched data', () => {
    const action = {
      type: 'ADD_SEARCHED_DATA',
      dataArray,
    };

    expect(searchResults(undefined, action)).toHaveLength(1);
  });
});
