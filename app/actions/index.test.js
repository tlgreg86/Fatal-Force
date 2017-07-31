import * as actions from './index';

describe('Actions for loading and searching API data', () => {

  const dataArray = [{
                      _id: "597ed571bc4435bc7ebb60ee",
                      name: "Richard Jones",
                      age: "55",
                      sex: "Male",
                      race: "White",
                      month: "December",
                      day: "6",
                      year: "2016",
                      address: "3500 Ridgewood Dr",
                      city: "Hutchinson",
                      state: "KS",
                      cause: "Gunshot",
                      dept: "Hutchinson Police Department",
                      armed: "Firearm",
                      __v: 0
                    }]

  it('addData should return an array of objects', () => {
    const action = actions.addData(dataArray)

    expect(action.type).toEqual('ADD_DATA')
    expect(action.dataArray).toEqual(dataArray)
  })

  it('addSearchedData should return an array one object', () => {
    const action = actions.addSearchedData(dataArray)

    expect(action.type).toEqual('ADD_SEARCHED_DATA')
    expect(action.dataArray).toEqual(dataArray)
  })
})
